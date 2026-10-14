// Robotic Audio web demos: the audio thread. Runs one plugin's engine (its .wasm, built by
// tools/WebDemo/build.sh) over a looping audio file or the node's input, in blocks of 128.
// The page talks to it through robotic-demo.js; nothing here is plugin-specific.

class RoboticDemoProcessor extends AudioWorkletProcessor
{
    constructor (options)
    {
        super();
        const { wasm, displayHz } = options.processorOptions;
        const instance = new WebAssembly.Instance (new WebAssembly.Module (wasm),
                                                   { env: { emscripten_notify_memory_growth () {} } });
        this.engine = instance.exports;
        this.engine._initialize();
        this.channels = this.engine.demo_prepare (sampleRate, 128);
        this.pointers = Array.from ({ length: this.channels }, (_, c) => this.engine.demo_buffer (c));
        this.loop = null;      // one Float32Array per channel
        this.position = 0;
        this.playing = false;
        this.blocksPerDisplay = Math.max (1, Math.round (sampleRate / 128 / (displayHz || 30)));
        this.blocksToDisplay = 0;
        this.port.onmessage = (event) => this.receive (event.data);
    }

    receive (message)
    {
        switch (message.type)
        {
            case "loop":  this.loop = message.channels; this.position = 0; break;
            case "play":  this.playing = message.on; if (message.restart) this.position = 0; break;
            case "set":   this.engine.demo_set (message.id, message.value); break;
            case "note":  this.engine.demo_note (message.note, message.velocity); break;
        }
    }

    views (numSamples)
    {
        // Taken again every block: the engine's memory can grow, which replaces its buffer
        const memory = this.engine.memory.buffer;
        return this.pointers.map ((pointer) => new Float32Array (memory, pointer, numSamples));
    }

    process (inputs, outputs)
    {
        const output = outputs[0];
        const numSamples = output[0].length;
        const input = inputs[0];
        let buffers = this.views (numSamples);

        if (this.playing && this.loop !== null)
        {
            const length = this.loop[0].length;
            buffers.forEach ((buffer, c) =>
            {
                const source = this.loop[c % this.loop.length];
                for (let i = 0, p = this.position; i < numSamples; ++i, p = p + 1 === length ? 0 : p + 1)
                    buffer[i] = source[p];
            });
            this.position = (this.position + numSamples) % length;
        }
        else if (input !== undefined && input.length > 0)
        {
            buffers.forEach ((buffer, c) => buffer.set (input[c % input.length]));
        }
        else
        {
            buffers.forEach ((buffer) => buffer.fill (0));
        }

        this.engine.demo_process (numSamples);

        buffers = this.views (numSamples);
        output.forEach ((channel, c) => channel.set (buffers[c % buffers.length]));

        if (--this.blocksToDisplay <= 0)
        {
            this.blocksToDisplay = this.blocksPerDisplay;
            const size = this.engine.demo_display_size();
            if (size > 0)
            {
                const display = new Float32Array (this.engine.memory.buffer, this.engine.demo_display(), size).slice();
                this.port.postMessage ({ type: "display", data: display }, [ display.buffer ]);
            }
        }

        return true;
    }
}

registerProcessor ("robotic-demo", RoboticDemoProcessor);
