// Bitstorm's song import, off the page's thread: runs bitstorm-import.wasm (BitstormImportWeb.cpp, the
// plugin's own importer) on a file the visitor drops, which never leaves their computer. Playing a SID
// or NSF through its CPU to find the notes can take seconds, so it runs here.
//
//   { type: "init", wasm, presets }                 -> { type: "ready" } or { type: "error", error }
//                                                      (each an ArrayBuffer, or a URL to fetch)
//   { type: "probe", id, name, bytes }              -> { type: "probe", id, info }     (format, title, songs...)
//   { type: "import", id, name, bytes, song }       -> { type: "import", id, info, preset } (preset: an ArrayBuffer
//                                                      for the engine's demo_load; info: title, notes, the song's tracker)

let engine = null;

/** The system calls a standalone wasm may make, answered simply (the clock; the rest no-ops). */
function importsFor (module, memory)
{
    const known = {
        clock_time_get (id, precision, out)
        {
            new DataView (memory().buffer).setBigUint64 (out, BigInt (Math.round (performance.now() * 1e6)), true);
            return 0;
        },
        fd_write (fd, iovs, count, written) { new DataView (memory().buffer).setUint32 (written, 0, true); return 0; },
        proc_exit (code) { throw new Error ("the importer exited (" + code + ")"); },
    };
    const imports = {};
    for (const { module: name, name: field, kind } of WebAssembly.Module.imports (module))
        if (kind === "function")
            (imports[name] = imports[name] || {})[field] = known[field] || (() => 0);
    return imports;
}

/** Copies bytes (or a string, as UTF-8 with its zero) into the module's memory: its pointer. */
function pass (bytes)
{
    const data = typeof bytes === "string" ? new TextEncoder().encode (bytes + "\0") : new Uint8Array (bytes);
    const pointer = engine.import_alloc (data.length);
    new Uint8Array (engine.memory.buffer, pointer, data.length).set (data);
    return pointer;
}

function text (pointer)
{
    const memory = new Uint8Array (engine.memory.buffer);
    let end = pointer;
    while (memory[end] !== 0)
        ++end;
    return JSON.parse (new TextDecoder().decode (memory.subarray (pointer, end)));
}

self.onmessage = async ({ data: message }) =>
{
    try
    {
        if (message.type === "init")
        {
            const bytes = (from) => typeof from === "string" ? fetch (from).then ((r) => r.arrayBuffer()) : from;
            const [ wasm, presets ] = await Promise.all ([ bytes (message.wasm), bytes (message.presets) ]);
            // Compiled at once (allowed off the page's thread, and as the audio worklet does): the
            // asynchronous compile waits on background tasks a busy or headless browser may not run
            const module = new WebAssembly.Module (wasm);
            const instance = new WebAssembly.Instance (module, importsFor (module, () => engine.memory));
            engine = instance.exports;
            engine._initialize();
            if (! engine.import_base (pass (presets), presets.byteLength))
                throw new Error ("the demo's presets have no import base");
            self.postMessage ({ type: "ready" });
        }
        else if (message.type === "probe")
        {
            const info = text (engine.import_probe (pass (message.name), pass (message.bytes), message.bytes.byteLength));
            self.postMessage ({ type: "probe", id: message.id, info });
        }
        else if (message.type === "import")
        {
            const info = text (engine.import_song (pass (message.name), pass (message.bytes), message.bytes.byteLength, message.song));
            let preset = null;
            if (info.ok)
                preset = new Uint8Array (engine.memory.buffer, engine.import_output(), engine.import_output_size()).slice().buffer;
            self.postMessage ({ type: "import", id: message.id, info, preset }, preset ? [ preset ] : []);
        }
    }
    catch (error)
    {
        self.postMessage ({ type: "error", id: message.id, error: String (error && error.message || error) });
    }
};
