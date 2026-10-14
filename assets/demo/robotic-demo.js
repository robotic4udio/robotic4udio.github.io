// Robotic Audio web demos: the page's side. Plays one plugin's engine (its .wasm) in an
// AudioWorklet (robotic-demo-worklet.js, beside this file), over looping audio files.
//
//   const demo = new RoboticDemo ({ wasm: "/assets/demo/reverser.wasm" });
//   await demo.start();                 // from a click: browsers only start audio after one
//   await demo.playLoop ("/assets/audio/reverser/beat.mp3");
//   demo.set (0, 1);                    // a control, numbered by the demo (Reverser: 0 = Reverse held)
//   demo.onDisplay = (data) => { ... }; // the engine's display values, about 30 times a second
//
// Plain WebAssembly, no threads: runs on any static host (GitHub Pages included).

const roboticDemoScript = document.currentScript ? document.currentScript.src : location.href; // set only while loading

class RoboticDemo
{
    constructor ({ wasm, worklet })
    {
        this.wasmUrl = wasm;
        this.workletUrl = worklet || new URL ("robotic-demo-worklet.js", roboticDemoScript).href;
        this.context = null;
        this.node = null;
        this.loops = new Map(); // url -> decoded AudioBuffer
        this.currentLoop = null;
        this.playing = false;
        this.onDisplay = null;
    }

    static isSupported()
    {
        return typeof AudioWorkletNode !== "undefined" && typeof WebAssembly !== "undefined";
    }

    /** Creates the audio graph; call it from a click or key press. */
    async start()
    {
        if (this.context !== null)
        {
            await this.context.resume();
            return;
        }

        this.context = new AudioContext ({ latencyHint: "interactive" });
        const [ wasm ] = await Promise.all ([ fetch (this.wasmUrl).then ((r) => r.arrayBuffer()),
                                              this.context.audioWorklet.addModule (this.workletUrl) ]);

        this.node = new AudioWorkletNode (this.context, "robotic-demo",
                                          { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [ 2 ],
                                            processorOptions: { wasm, displayHz: 30 } });
        this.node.port.onmessage = (event) =>
        {
            if (event.data.type === "display" && this.onDisplay)
                this.onDisplay (event.data.data);
        };
        this.node.connect (this.context.destination);
    }

    async decode (url)
    {
        if (! this.loops.has (url))
        {
            const bytes = await fetch (url).then ((r) => r.arrayBuffer());
            this.loops.set (url, await this.context.decodeAudioData (bytes));
        }
        return this.loops.get (url);
    }

    /** Plays an audio file (url or File) in a loop through the engine. */
    async playLoop (source)
    {
        await this.start();
        const audio = source instanceof Blob ? await this.context.decodeAudioData (await source.arrayBuffer())
                                             : await this.decode (source);
        const channels = Array.from ({ length: Math.min (2, audio.numberOfChannels) }, (_, c) => audio.getChannelData (c).slice());
        this.node.port.postMessage ({ type: "loop", channels }, channels.map ((c) => c.buffer));
        this.currentLoop = source;
        this.play (true);
    }

    play (on)
    {
        this.playing = on;
        if (this.node !== null)
            this.node.port.postMessage ({ type: "play", on });
    }

    set (id, value)
    {
        if (this.node !== null)
            this.node.port.postMessage ({ type: "set", id, value });
    }

    note (note, velocity)
    {
        if (this.node !== null)
            this.node.port.postMessage ({ type: "note", note, velocity });
    }

    /** Stops the audio clock entirely (no CPU while paused). */
    async suspend()
    {
        if (this.context !== null)
            await this.context.suspend();
    }
}

window.RoboticDemo = RoboticDemo;

//==============================================================================
// The player every product page shares, built into each <div class="web-demo">:
//
//   <div class="web-demo" data-wasm="reverser.wasm" data-ui="reverser"
//        data-loops='[{ "title": "Chip tune", "text": "Played by Bitstorm", "file": "chip.flac" }]'></div>
//
// It makes a row of loops to choose from (and "Your own audio"), a play button and a stage
// for the plugin's own controls, which its <ui>-demo.js (plugins/<Name>/Web/) registers as
// RoboticDemo.interfaces[ui] = (stage, demo) => { ... } (called once, before audio starts).

RoboticDemo.interfaces = {};

RoboticDemo.element = (tag, className, text) =>
{
    const element = document.createElement (tag);
    if (className)
        element.className = className;
    if (text !== undefined)
        element.textContent = text;
    return element;
};

RoboticDemo.mount = (root) =>
{
    const make = RoboticDemo.element;
    const loops = JSON.parse (root.dataset.loops || "[]");
    const build = RoboticDemo.interfaces[root.dataset.ui];

    if (! RoboticDemo.isSupported() || build === undefined)
    {
        root.append (make ("p", "web-demo__note", "This demo needs a browser with Web Audio and WebAssembly."));
        return;
    }

    const demo = new RoboticDemo ({ wasm: root.dataset.wasm });
    root.roboticDemo = demo; // for the page's own scripts and for checks
    const bar = make ("div", "web-demo__bar");
    const play = make ("button", "web-demo__play", "Play");
    play.type = "button";
    play.setAttribute ("aria-label", "Play");
    const choices = make ("div", "web-demo__loops");
    choices.setAttribute ("role", "radiogroup");
    choices.setAttribute ("aria-label", "Audio to play through it");
    const status = make ("p", "web-demo__status");
    status.setAttribute ("aria-live", "polite");
    bar.append (play, choices);

    let selected = loops.length > 0 ? loops[0].file : null;
    const buttons = [];

    const setPlaying = (on) =>
    {
        play.classList.toggle ("is-playing", on);
        play.textContent = on ? "Stop" : "Play";
        play.setAttribute ("aria-label", on ? "Stop" : "Play");
    };

    const select = async (source, button) =>
    {
        buttons.forEach ((b) => b.setAttribute ("aria-checked", b === button ? "true" : "false"));
        selected = source;
        status.textContent = "Loading…";
        try
        {
            await demo.playLoop (source);
            status.textContent = "";
            setPlaying (true);
        }
        catch (error)
        {
            status.textContent = "Couldn't play that audio: " + error.message;
        }
    };

    loops.forEach ((loop) =>
    {
        const button = make ("button", "web-demo__loop");
        button.type = "button";
        button.setAttribute ("role", "radio");
        button.setAttribute ("aria-checked", loop.file === selected ? "true" : "false");
        button.append (make ("strong", "", loop.title));
        if (loop.text)
            button.append (make ("span", "", loop.text));
        button.addEventListener ("click", () => select (loop.file, button));
        buttons.push (button);
        choices.append (button);
    });

    // Your own audio: decoded in the browser, never uploaded
    const own = make ("label", "web-demo__loop web-demo__loop--file");
    own.setAttribute ("role", "radio");
    own.setAttribute ("aria-checked", "false");
    own.append (make ("strong", "", "Your own audio"));
    own.append (make ("span", "", "Stays on your computer"));
    const file = make ("input");
    file.type = "file";
    file.accept = "audio/*";
    own.append (file);
    file.addEventListener ("change", () => { if (file.files.length > 0) select (file.files[0], own); });
    buttons.push (own);
    choices.append (own);

    play.addEventListener ("click", async () =>
    {
        if (demo.playing)
        {
            demo.play (false);
            setPlaying (false);
            await demo.suspend();
        }
        else if (demo.currentLoop !== null)
        {
            await demo.start();
            demo.play (true);
            setPlaying (true);
        }
        else if (selected !== null)
        {
            await select (selected, buttons.find ((b) => b.getAttribute ("aria-checked") === "true"));
        }
    });

    const stage = make ("div", "web-demo__stage");
    root.append (bar, stage, status);
    build (stage, demo);

    // Nothing runs while the page is out of sight
    document.addEventListener ("visibilitychange", () =>
    {
        if (document.hidden && demo.playing)
        {
            demo.play (false);
            setPlaying (false);
            demo.suspend();
        }
    });
};

document.addEventListener ("DOMContentLoaded", () => document.querySelectorAll (".web-demo").forEach (RoboticDemo.mount));
