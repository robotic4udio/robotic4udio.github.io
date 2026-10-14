// Bitstorm on its web demo page, a taste that leads to its trial: a menu of songs and sounds, the
// plugin's scope with the newest note's chip registers (in the palette of the preset's chip, as the
// plugin's retro theme shows it), a song's tracker as the plugin draws it with PLAY, an on-screen
// keyboard and any MIDI keyboard for the sounds, and the site's trial link (the include puts it in
// the demo's .web-demo__cta; it glows after a while of playing). No notes from the computer's keys:
// the plugins never play from them. Its engine is BitstormWeb.cpp; the player round it
// tools/WebDemo/web/robotic-demo.js. Settings: 0 the preset (its place in bitstorm-presets.bin),
// 1 all notes off, 2 the song playing (1) or stopped (0).

(() =>
{
const script = document.currentScript ? document.currentScript.src : location.href;

RoboticDemo.interfaces.bitstorm = (stage, demo, root) =>
{
    const make = RoboticDemo.element;
    const presetsUrl = (root.dataset.data || "bitstorm-presets.bin").replace (/\.bin$/, ".json");

    // Its own look and the pixel type the plugin's retro theme uses
    for (const href of [ new URL ("bitstorm-demo.css", script).href, "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" ])
        if (! document.querySelector (`link[href="${href}"]`))
        {
            const link = make ("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.append (link);
        }

    // The palettes of the plugin's retro theme, one per chip (RetroColours::of): border, screen, text, muted
    const palettes = [
        { machine: "COMMODORE 64", border: "#7869c4", screen: "#40318d", text: "#e2ddff", muted: "#a198ea" }, // SID
        { machine: "NES / FAMICOM", border: "#b9b9be", screen: "#2a2a2e", text: "#f2f2f2", muted: "#d9908a" }, // NES
        { machine: "GAME BOY", border: "#8bac0f", screen: "#306230", text: "#e0f0b0", muted: "#9bbc0f" },      // Game Boy
        { machine: "ZX SPECTRUM", border: "#0000d7", screen: "#000000", text: "#ffffff", muted: "#00d7d7" },   // AY
        { machine: "ATARI 8-BIT", border: "#0c1018", screen: "#1d4d8f", text: "#d8ecff", muted: "#8ec2f0" },   // POKEY
        { machine: "AMIGA", border: "#3f7fd0", screen: "#0055aa", text: "#ffffff", muted: "#a6c4ea" },         // Paula
        { machine: "MEGA DRIVE", border: "#22222e", screen: "#0a0a10", text: "#f0f0ff", muted: "#8c8ca8" },    // YM2612
    ];
    const raster = [ [ 238, 68, 54 ], [ 247, 214, 60 ], [ 92, 230, 242 ] ]; // the raster accent: red, yellow, cyan
    const paulaSamples = [ "SAW", "SQUARE", "PULSE 25", "TRIANGLE", "SINE", "ORGAN", "CHIP CHOIR", "HOLLOW", "KICK", "SNARE", "HAT", "FILE" ];

    //==========================================================================
    // Presets
    const bar = make ("div", "bitstorm-demo__presets");
    const previous = make ("button", "bitstorm-demo__step", "‹");
    const next = make ("button", "bitstorm-demo__step", "›");
    previous.type = next.type = "button";
    previous.setAttribute ("aria-label", "Previous preset");
    next.setAttribute ("aria-label", "Next preset");
    const menu = make ("select", "bitstorm-demo__menu");
    menu.setAttribute ("aria-label", "Preset");
    const midiButton = make ("button", "bitstorm-demo__midi", "MIDI keyboard");
    midiButton.type = "button";
    midiButton.title = "Play Bitstorm from a MIDI keyboard connected to this computer";
    bar.append (previous, menu, next, midiButton);

    let presets = [];
    let current = 0;

    const choose = (index) =>
    {
        if (presets.length === 0)
            return;
        current = (index + presets.length) % presets.length;
        menu.value = String (current);
        releaseAll();
        demo.set (0, current);
        setPlaying (false);
        setPalette (presets[current].chip);
        const song = presets[current].song || null;
        songRow.hidden = song === null;
        keyboardRow.hidden = song !== null;
        hint.textContent = song !== null ? "Press PLAY to hear the song, as its tracker plays it"
                                         : "Play the keys (lower on a key plays louder), or connect a MIDI keyboard";
        drawTracker();
    };

    menu.addEventListener ("change", () => choose (Number (menu.value)));
    previous.addEventListener ("click", () => choose (current - 1));
    next.addEventListener ("click", () => choose (current + 1));

    fetch (presetsUrl).then ((r) => r.json()).then ((list) =>
    {
        presets = list.presets;
        let group = null, holder = menu;
        presets.forEach ((preset, i) =>
        {
            if (preset.group !== group)
            {
                group = preset.group;
                holder = make ("optgroup");
                holder.label = group;
                menu.append (holder);
            }
            const option = make ("option", "", preset.name);
            option.value = String (i);
            holder.append (option);
        });
        choose (0);
    }).catch (() => { menu.append (make ("option", "", "Presets couldn't load")); });

    //==========================================================================
    // The scope, as the plugin's: the wave held still in 2 px steps, the registers in hex underneath
    const screen = make ("div", "bitstorm-demo__screen");
    const canvas = make ("canvas");
    canvas.setAttribute ("role", "img");
    canvas.setAttribute ("aria-label", "Bitstorm's scope: the sound as a wave, and the chip's registers");
    screen.append (canvas);
    let palette = palettes[0];
    let display = null;

    const setPalette = (chip) =>
    {
        palette = palettes[Math.max (0, Math.min (palettes.length - 1, chip | 0))];
        screen.style.setProperty ("--bitstorm-border", palette.border);
        screen.style.setProperty ("--bitstorm-screen", palette.screen);
        draw();
    };

    const hex = (v, digits) => "$" + Math.max (0, v | 0).toString (16).toUpperCase().padStart (digits, "0");
    const registersText = (d) =>
    {
        if (d === null || d[0] === 0)
            return "READY.";
        const [ , chip, f, second, volume, wave ] = d;
        const pick = (list, i) => list[Math.max (0, Math.min (list.length - 1, i | 0))];
        switch (chip | 0)
        {
            case 0: return `FREQ ${hex (f, 4)}  PW ${hex (second, 3)}  VOL ${hex (volume, 1)}  ${pick ([ "TRI", "SAW", "PUL", "NOI", "S+T", "P+T", "P+S", "PST" ], wave)}`;
            case 1: return `TIMER ${hex (f, 3)}  DUTY ${second | 0}  VOL ${hex (volume, 1)}  ${pick ([ "PULSE", "TRI", "NOISE" ], wave)}`;
            case 2: return `FREQ ${hex (f, 3)}  DUTY ${second | 0}  VOL ${hex (volume, 1)}  ${pick ([ "PULSE", "WAVE", "NOISE" ], wave)}`;
            case 3: return `TONE ${hex (f, 3)}  ENV ${hex (second, 4)}  VOL ${volume > 15 ? "ENV" : hex (volume, 1)}  ${pick ([ "TONE", "NOISE", "T+N", "NONE" ], wave)}`;
            case 4: return `AUDF ${hex (f, f > 255 ? 4 : 2)}  DIST ${second | 0}  VOL ${hex (volume, 1)}`;
            case 5: return `PERIOD ${hex (f, 4)}  VOL ${hex (volume, 2)}  ${pick (paulaSamples, wave)}`;
            default: return `BLOCK ${(f | 0) >> 11}  FNUM ${hex ((f | 0) & 2047, 3)}  ALG ${(second | 0) + 1}  VOL ${hex (volume, 1)}`;
        }
    };

    const rasterAt = (t) =>
    {
        const x = Math.max (0, Math.min (1, t)) * 2, i = Math.min (1, Math.floor (x)), u = x - i;
        return `rgb(${raster[i].map ((c, k) => Math.round (c + (raster[i + 1][k] - c) * u)).join (",")})`;
    };

    const draw = () =>
    {
        const ratio = window.devicePixelRatio || 1;
        const width = canvas.clientWidth, height = canvas.clientHeight;
        if (width === 0)
            return;
        if (canvas.width !== Math.round (width * ratio) || canvas.height !== Math.round (height * ratio))
        {
            canvas.width = Math.round (width * ratio);
            canvas.height = Math.round (height * ratio);
        }
        const g = canvas.getContext ("2d");
        g.setTransform (ratio, 0, 0, ratio, 0, 0);
        g.fillStyle = palette.screen;
        g.fillRect (0, 0, width, height);

        const pixel = 2, textHeight = 22, pad = 10;
        const top = pad + 14, bottom = height - textHeight - 4;
        const centre = Math.round ((top + bottom) / 2 / pixel) * pixel;
        const half = (bottom - top) / 2 - pixel;

        // The machine's name and how many voices sound, in the plugin's pixel type
        g.font = "8px 'Press Start 2P', monospace";
        g.textBaseline = "top";
        g.fillStyle = palette.muted;
        g.fillText (palette.machine, pad, pad);
        const voices = display === null ? 0 : display[0] | 0;
        const voicesText = voices === 1 ? "1 VOICE" : `${voices} VOICES`;
        g.fillText (voicesText, width - pad - g.measureText (voicesText).width, pad);

        // A dotted centre line, then the wave as 2 px steps joined as a beam would
        g.fillStyle = palette.text;
        g.globalAlpha = 0.18;
        for (let x = pad; x < width - pad; x += 6)
            g.fillRect (x, centre, 2, 2);
        g.globalAlpha = 1;

        if (display !== null && display[7] > 1e-4)
        {
            const scope = display.subarray (11);
            const left = pad, columns = Math.floor ((width - 2 * pad) / pixel);
            const yOf = (v) => Math.round ((centre - Math.max (-1, Math.min (1, v * 1.6)) * half) / pixel) * pixel;
            let previous = -1;
            for (let c = 0; c < columns; ++c)
            {
                const from = Math.floor (c * scope.length / columns), to = Math.max (from + 1, Math.floor ((c + 1) * scope.length / columns));
                let low = 1, high = -1;
                for (let i = from; i < to; ++i)
                {
                    low = Math.min (low, scope[i]);
                    high = Math.max (high, scope[i]);
                }
                let y0 = yOf (high), y1 = yOf (low);
                if (previous >= 0)
                {
                    y0 = Math.min (y0, previous);
                    y1 = Math.max (y1, previous);
                }
                previous = yOf (scope[to - 1]);
                g.fillStyle = rasterAt (c / columns);
                g.fillRect (left + c * pixel, y0, pixel, Math.max (pixel, y1 - y0 + pixel));
            }
        }

        // The registers, as a tracker shows them
        g.fillStyle = palette.muted;
        g.textBaseline = "middle";
        g.fillText (registersText (display), pad, height - textHeight / 2 - 2);
    };

    let frame = 0;
    demo.onDisplay = (data) =>
    {
        display = data;
        if (frame === 0)
            frame = requestAnimationFrame (() => { frame = 0; draw(); drawTracker(); });
    };
    new ResizeObserver (draw).observe (canvas);
    document.fonts && document.fonts.ready.then (() => { draw(); drawTracker(); });

    //==========================================================================
    // The keyboard: two octaves (one on a phone), shifted by octave; a key plays louder the lower
    // it's pressed; slide across keys while holding; several fingers on a touch screen
    const keyboardRow = make ("div", "bitstorm-demo__keyboard-row");
    const down = make ("button", "bitstorm-demo__octave", "−");
    const up = make ("button", "bitstorm-demo__octave", "+");
    down.type = up.type = "button";
    down.setAttribute ("aria-label", "Octave down");
    up.setAttribute ("aria-label", "Octave up");
    const keyboard = make ("div", "bitstorm-demo__keyboard");
    keyboard.setAttribute ("role", "group");
    keyboard.setAttribute ("aria-label", "Keyboard: press the keys to play");
    keyboardRow.append (down, keyboard, up);

    const blackOf = [ false, true, false, true, false, false, true, false, true, false, true, false ];
    const names = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];
    let lowest = 48, octaves = 2;
    const keys = new Map(); // note -> element
    const sounding = new Map(); // note -> how many pointers or MIDI keys hold it

    const layout = () =>
    {
        releaseAll();
        keyboard.textContent = "";
        keys.clear();
        const count = octaves * 12 + 1;
        const whites = [];
        for (let n = lowest; n < lowest + count; ++n)
            if (! blackOf[n % 12])
                whites.push (n);
        const whiteWidth = 100 / whites.length;
        for (let n = lowest; n < lowest + count; ++n)
        {
            const black = blackOf[n % 12];
            const key = make ("div", black ? "bitstorm-demo__key is-black" : "bitstorm-demo__key");
            key.dataset.note = String (n);
            key.setAttribute ("aria-label", names[n % 12] + (Math.floor (n / 12) - 1));
            if (black)
            {
                const whitesBefore = whites.filter ((w) => w < n).length;
                key.style.left = `calc(${whitesBefore * whiteWidth}% - ${whiteWidth * 0.32}%)`;
                key.style.width = `${whiteWidth * 0.64}%`;
            }
            else
            {
                key.style.left = `${whites.indexOf (n) * whiteWidth}%`;
                key.style.width = `${whiteWidth}%`;
                if (n % 12 === 0)
                    key.append (make ("span", "", "C" + (Math.floor (n / 12) - 1)));
            }
            keyboard.append (key);
            keys.set (n, key);
        }
        down.disabled = lowest <= 24;
        up.disabled = lowest + count > 96;
    };

    const fit = () =>
    {
        const wanted = keyboard.clientWidth < 480 ? 1 : 2;
        if (wanted !== octaves)
        {
            octaves = wanted;
            layout();
        }
    };

    const noteOn = (note, velocity) =>
    {
        demo.start();
        noteActivity();
        sounding.set (note, (sounding.get (note) || 0) + 1);
        if (sounding.get (note) === 1)
            demo.note (note, velocity);
        keys.get (note)?.classList.add ("is-down");
    };

    const noteOff = (note) =>
    {
        const count = (sounding.get (note) || 0) - 1;
        if (count > 0)
        {
            sounding.set (note, count);
            return;
        }
        sounding.delete (note);
        demo.note (note, 0);
        keys.get (note)?.classList.remove ("is-down");
    };

    function releaseAll()
    {
        for (const note of [ ...sounding.keys() ])
        {
            sounding.set (note, 1);
            noteOff (note);
        }
        pointers.clear();
        demo.set (1, 1);
    }

    // Each pointer plays the key under it, following it as it slides
    const pointers = new Map(); // pointerId -> note
    const keyAt = (event) =>
    {
        const element = document.elementFromPoint (event.clientX, event.clientY);
        const key = element && element.closest (".bitstorm-demo__key");
        return key && keyboard.contains (key) ? key : null;
    };
    const velocityAt = (key, event) =>
    {
        const box = key.getBoundingClientRect();
        return Math.max (0.35, Math.min (1, 0.35 + 0.65 * (event.clientY - box.top) / box.height));
    };
    const move = (event) =>
    {
        if (! pointers.has (event.pointerId))
            return;
        const key = keyAt (event);
        const note = key ? Number (key.dataset.note) : null;
        const was = pointers.get (event.pointerId);
        if (note === was)
            return;
        if (was !== null)
            noteOff (was);
        pointers.set (event.pointerId, note);
        if (note !== null)
            noteOn (note, velocityAt (key, event));
    };
    keyboard.addEventListener ("pointerdown", (event) =>
    {
        event.preventDefault();
        keyboard.setPointerCapture (event.pointerId);
        pointers.set (event.pointerId, null);
        move (event);
    });
    keyboard.addEventListener ("pointermove", move);
    const lift = (event) =>
    {
        const note = pointers.get (event.pointerId);
        pointers.delete (event.pointerId);
        if (note !== null && note !== undefined)
            noteOff (note);
    };
    for (const type of [ "pointerup", "pointercancel", "lostpointercapture" ])
        keyboard.addEventListener (type, lift);
    keyboard.addEventListener ("contextmenu", (event) => event.preventDefault());

    down.addEventListener ("click", () => { lowest = Math.max (24, lowest - 12); layout(); });
    up.addEventListener ("click", () => { lowest = Math.min (96 - octaves * 12, lowest + 12); layout(); });
    root.addEventListener ("roboticdemo:hidden", () => { releaseAll(); setPlaying (false); });
    window.addEventListener ("blur", () => { if (pointers.size > 0) releaseAll(); });

    //==========================================================================
    // A MIDI keyboard (Web MIDI: Chrome, Edge, Firefox; not Safari), once asked for
    if (! navigator.requestMIDIAccess)
        midiButton.hidden = true;
    midiButton.addEventListener ("click", async () =>
    {
        await demo.start();
        try
        {
            const access = await navigator.requestMIDIAccess();
            const listen = () =>
            {
                const inputs = [ ...access.inputs.values() ];
                inputs.forEach ((input) =>
                {
                    input.onmidimessage = ({ data }) =>
                    {
                        const [ status, note, velocity ] = data;
                        const type = status & 0xf0;
                        if (type === 0x90 && velocity > 0)
                            noteOn (note, velocity / 127);
                        else if (type === 0x80 || (type === 0x90 && velocity === 0))
                            noteOff (note);
                    };
                });
                midiButton.textContent = inputs.length > 0 ? "MIDI: " + inputs.map ((i) => i.name).join (", ") : "MIDI: no keyboard found";
                midiButton.classList.toggle ("is-on", inputs.length > 0);
            };
            access.onstatechange = listen;
            listen();
        }
        catch (error)
        {
            midiButton.textContent = "MIDI not allowed";
        }
    });

    //==========================================================================
    // A song: its tracker as the plugin's SEQ page draws it (hex rows, the note in the accent's
    // cyan, the instrument and effect lighter, the playing row lit), following the song as it plays
    const songRow = make ("div", "bitstorm-demo__song");
    songRow.hidden = true;
    const play = make ("button", "web-demo__play", "Play");
    play.type = "button";
    const tracker = make ("canvas", "bitstorm-demo__tracker");
    tracker.setAttribute ("role", "img");
    tracker.setAttribute ("aria-label", "The song's tracker: its four channels row by row, the playing row lit");
    songRow.append (play, tracker);
    let songPlaying = false;

    function setPlaying (on)
    {
        songPlaying = on;
        demo.set (2, on ? 1 : 0);
        play.classList.toggle ("is-playing", on);
        play.textContent = on ? "Stop" : "Play";
        if (on)
            noteActivity();
    }
    play.addEventListener ("click", async () =>
    {
        await demo.start();
        setPlaying (! songPlaying);
    });

    function drawTracker()
    {
        const song = presets[current] && presets[current].song;
        if (! song || songRow.hidden)
            return;
        const ratio = window.devicePixelRatio || 1;
        const width = tracker.clientWidth, height = tracker.clientHeight;
        if (width === 0)
            return;
        if (tracker.width !== Math.round (width * ratio) || tracker.height !== Math.round (height * ratio))
        {
            tracker.width = Math.round (width * ratio);
            tracker.height = Math.round (height * ratio);
        }
        const g = tracker.getContext ("2d");
        g.setTransform (ratio, 0, 0, ratio, 0, 0);
        g.fillStyle = palette.screen;
        g.fillRect (0, 0, width, height);

        // Which pattern and row: the song's as it plays, else the start of its first pattern
        const playingNow = display !== null && display[10] > 0.5 && display[8] >= 0;
        const patternNumber = playingNow ? display[8] | 0 : song.order[0];
        const playingRow = playingNow ? display[9] | 0 : -1;
        const rows = song.patterns[String (patternNumber)] || [];

        const pad = 10, header = 36, rowHeight = 14, charWidth = 8;
        const visible = Math.max (1, Math.floor ((height - header - pad) / rowHeight));
        const first = playingRow < 0 ? 0 : Math.max (0, Math.min (rows.length - visible, playingRow - Math.floor (visible / 2)));
        const numberWidth = 3 * charWidth + 6;
        const columnWidth = (width - 2 * pad - numberWidth) / 4;
        const compact = columnWidth < 12.5 * charWidth; // note and instrument only

        g.font = "8px 'Press Start 2P', monospace";
        g.textBaseline = "middle";
        const hex2 = (v) => v.toString (16).toUpperCase().padStart (2, "0");
        g.fillStyle = palette.muted;
        g.fillText (`PATTERN ${hex2 (patternNumber)}` + (playingRow >= 0 ? `   ROW ${hex2 (playingRow)}` : ""), pad, pad + 4);
        for (let c = 0; c < 4; ++c)
            g.fillText (`CH${c + 1}`, pad + numberWidth + c * columnWidth, pad + 22);

        for (let i = 0; i < visible && first + i < rows.length; ++i)
        {
            const r = first + i, y = header + pad + i * rowHeight;
            if (r === playingRow)
            {
                g.fillStyle = "rgba(247, 214, 60, 0.55)";
                g.fillRect (pad - 4, y - 2, width - 2 * pad + 8, rowHeight);
            }
            else if (r % (song.rowsPerBeat * 4) === 0)
            {
                g.fillStyle = "rgba(255, 255, 255, 0.07)";
                g.fillRect (pad - 4, y - 2, width - 2 * pad + 8, rowHeight);
            }
            g.fillStyle = r % song.rowsPerBeat === 0 ? palette.text : palette.muted;
            g.fillText (hex2 (r), pad, y + rowHeight / 2 - 1);
            rows[r].slice (0, 4).forEach ((cell, c) => // the four channels these songs use (of the tracker's eight)
            {
                const [ note, instrument, volume, effect ] = (cell || "--- .. . ...").split (" ");
                const fields = [ [ note, note === "---" ? "faint" : note === "OFF" ? palette.muted : "rgb(92, 230, 242)" ],
                                 [ instrument, instrument === ".." ? "faint" : "rgb(250, 230, 150)" ] ];
                if (! compact)
                    fields.push ([ volume, volume === "." ? "faint" : palette.text ],
                                 [ effect, effect === "..." ? "faint" : "rgb(245, 140, 130)" ]);
                let x = pad + numberWidth + c * columnWidth;
                for (const [ text, colour ] of fields)
                {
                    g.globalAlpha = colour === "faint" ? 0.3 : 1;
                    g.fillStyle = colour === "faint" ? palette.text : colour;
                    g.fillText (text, x, y + rowHeight / 2 - 1);
                    x += (text.length + 1) * charWidth;
                }
                g.globalAlpha = 1;
            });
        }
    }
    new ResizeObserver (drawTracker).observe (tracker);

    //==========================================================================
    // The trial: the site's own link (in .web-demo__cta, where the include put it; none while the
    // plugin isn't on sale or the visitor owns it), lit up after a while of playing
    const cta = root.querySelector (".web-demo__cta");
    let activeSeconds = 0, lastActivity = 0;
    function noteActivity()
    {
        const now = performance.now() / 1000;
        if (lastActivity > 0 && now - lastActivity < 5)
            activeSeconds += now - lastActivity;
        lastActivity = now;
        if (cta && activeSeconds > 45)
            cta.classList.add ("is-lit");
    }
    setInterval (() => { if (songPlaying) noteActivity(); }, 1000);

    const hint = make ("p", "web-demo__hint", "Play the keys (lower on a key plays louder), or connect a MIDI keyboard");
    stage.append (bar, screen, songRow, keyboardRow, hint);
    if (cta)
    {
        cta.hidden = false;
        stage.append (cta);
    }
    layout();
    new ResizeObserver (fit).observe (keyboard);
};
}) ();
