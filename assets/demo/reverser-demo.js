// Reverser's controls on its web demo page: the history display, drawn as the plugin's
// HistoryDisplay draws it, and the two hold buttons. Its engine is ReverserWeb.cpp; the
// player round it is tools/WebDemo/web/robotic-demo.js. Settings: 0 Reverse, 1 Reverse 2x.

RoboticDemo.interfaces.reverser = (stage, demo) =>
{
    const make = RoboticDemo.element;
    const historySeconds = 30;
    const numHeadValues = 6;
    const heads = [ { label: "1x", colour: "255, 176, 0" },    // Colours::amber
                    { label: "2x", colour: "63, 201, 176" } ]; // Colours::verdigris

    const screen = make ("div", "web-demo__screen");
    const canvas = make ("canvas");
    canvas.setAttribute ("role", "img");
    canvas.setAttribute ("aria-label", "The last 30 seconds of audio, with a playhead for each button travelling back through it");
    screen.append (canvas);

    const buttonRow = make ("div", "web-demo__buttons");
    const hint = make ("p", "web-demo__hint", "Hold a button (or the R or T key) to play the last 30 seconds backwards, from this moment");

    let display = null;
    const held = [ false, false ];

    const hold = (index, on) =>
    {
        if (held[index] === on)
            return;
        held[index] = on;
        buttons[index].classList.toggle ("is-held", on);
        buttons[index].setAttribute ("aria-pressed", on ? "true" : "false");
        if (on && ! demo.playing && demo.currentLoop === null)
            stage.closest (".web-demo").querySelector (".web-demo__play").click(); // start the first loop
        demo.set (index, on ? 1 : 0);
    };

    const buttons = [ "Reverse", "Reverse 2x" ].map ((name, index) =>
    {
        const button = make ("button", "web-demo__hold");
        button.type = "button";
        button.setAttribute ("aria-pressed", "false");
        button.append (make ("span", "web-demo__led"), make ("span", "", name));
        button.style.setProperty ("--hold-colour", heads[index].colour);
        button.addEventListener ("pointerdown", (event) => { button.setPointerCapture (event.pointerId); hold (index, true); });
        for (const type of [ "pointerup", "pointercancel", "lostpointercapture" ])
            button.addEventListener (type, () => hold (index, false));
        button.addEventListener ("keydown", (event) => { if (event.key === " " || event.key === "Enter") { event.preventDefault(); hold (index, true); } });
        button.addEventListener ("keyup", (event) => { if (event.key === " " || event.key === "Enter") hold (index, false); });
        button.addEventListener ("contextmenu", (event) => event.preventDefault()); // long presses on phones
        buttonRow.append (button);
        return button;
    });

    // R and T anywhere on the page (not while typing)
    const keyFor = { r: 0, t: 1 };
    const typing = (event) => event.target.closest ("input, textarea, select, [contenteditable]") !== null;
    document.addEventListener ("keydown", (event) =>
    {
        const index = keyFor[event.key.toLowerCase()];
        if (index !== undefined && ! event.repeat && ! event.metaKey && ! event.ctrlKey && ! typing (event))
            hold (index, true);
    });
    document.addEventListener ("keyup", (event) =>
    {
        const index = keyFor[event.key.toLowerCase()];
        if (index !== undefined)
            hold (index, false);
    });
    window.addEventListener ("blur", () => { hold (0, false); hold (1, false); });

    stage.append (screen, buttonRow, hint);

    //==========================================================================
    const style = getComputedStyle (stage);
    const colour = (name, fallback) => (style.getPropertyValue (name) || fallback).trim();

    const draw = () =>
    {
        const ratio = window.devicePixelRatio || 1;
        const width = canvas.clientWidth, height = canvas.clientHeight;
        if (canvas.width !== Math.round (width * ratio) || canvas.height !== Math.round (height * ratio))
        {
            canvas.width = Math.round (width * ratio);
            canvas.height = Math.round (height * ratio);
        }
        const g = canvas.getContext ("2d");
        g.setTransform (ratio, 0, 0, ratio, 0, 0);
        g.clearRect (0, 0, width, height);

        const pad = 10, labels = 14;
        const left = pad, right = width - pad, top = pad, bottom = height - pad;
        const screenWidth = right - left;
        const centre = (top + bottom - labels) / 2;
        const half = (bottom - labels - top) / 2;

        // Time grid every 5 s, labelled in seconds ago
        g.font = "10px " + colour ("--font-body", "Inter, sans-serif");
        g.textAlign = "center";
        g.textBaseline = "middle";
        for (let s = 0; s <= historySeconds; s += 5)
        {
            const x = Math.round (right - (s / historySeconds) * screenWidth) + 0.5;
            g.fillStyle = s === 0 ? "rgba(255, 236, 220, 0.3)" : "rgba(255, 236, 220, 0.1)";
            g.fillRect (x - 0.5, top, 1, bottom - labels - top);
            g.fillStyle = colour ("--muted", "#a99e94");
            const nudge = s === 0 ? -14 : (s === historySeconds ? 14 : 0);
            g.fillText (s === 0 ? "NOW" : "-" + s + " s", x + nudge, bottom - labels / 2 + 2);
        }
        g.fillStyle = "rgba(255, 236, 220, 0.1)";
        g.fillRect (left, Math.round (centre), screenWidth, 1);

        if (display === null)
            return;

        const peaks = display.subarray (numHeadValues);
        const numBins = peaks.length;
        const xForBinsBack = (back) => Math.min (right, Math.max (left, right - (back / numBins) * screenWidth));

        // One mirrored bar per pixel column: the loudest bin under it
        const columnPeaks = new Float32Array (Math.ceil (screenWidth));
        for (let c = 0; c < columnPeaks.length; ++c)
        {
            const from = Math.floor ((c / screenWidth) * numBins), to = Math.max (from + 1, Math.floor (((c + 1) / screenWidth) * numBins));
            let peak = 0;
            for (let b = from; b < to && b < numBins; ++b)
                peak = Math.max (peak, peaks[b]);
            columnPeaks[c] = peak;
        }
        const bars = (fromX, toX) =>
        {
            for (let x = Math.floor (fromX); x < toX; ++x)
            {
                const h = Math.pow (Math.min (1, columnPeaks[x - left] || 0), 0.6) * half;
                if (h > 0.5)
                    g.fillRect (x, centre - h, 1, 2 * h);
            }
        };
        g.fillStyle = "rgba(169, 158, 148, 0.55)";
        bars (left, right);

        // Playheads: the stretch played so far in their colour, and a marker with a flag
        heads.forEach ((head, i) =>
        {
            const back = display[i * 3], startBack = display[i * 3 + 1], level = display[i * 3 + 2];
            if (level <= 0)
                return;
            const xNow = xForBinsBack (back), xStart = xForBinsBack (startBack);
            const alpha = 0.4 + 0.6 * level;
            g.fillStyle = `rgba(${head.colour}, ${0.08 * level})`;
            g.fillRect (Math.min (xNow, xStart), top, Math.abs (xStart - xNow), bottom - labels - top);
            g.fillStyle = `rgba(${head.colour}, ${alpha})`;
            bars (Math.min (xNow, xStart), Math.max (xNow, xStart));
            g.fillStyle = `rgba(${head.colour}, ${0.25 * level})`;
            g.fillRect (xNow - 2.5, top, 5, bottom - labels - top);
            g.fillStyle = `rgba(${head.colour}, ${alpha})`;
            g.fillRect (xNow - 0.75, top, 1.5, bottom - labels - top);
            const flagWidth = 22, flagX = Math.min (right - flagWidth, Math.max (left, xNow - flagWidth / 2));
            g.beginPath();
            g.roundRect (flagX, top, flagWidth, 14, 3);
            g.fill();
            g.fillStyle = "#1a0b03";
            g.font = "bold 10px " + colour ("--font-body", "Inter, sans-serif");
            g.fillText (head.label, flagX + flagWidth / 2, top + 7.5);
        });
    };

    let frame = 0;
    demo.onDisplay = (data) =>
    {
        display = data;
        if (frame === 0)
            frame = requestAnimationFrame (() => { frame = 0; draw(); });
    };
    new ResizeObserver (draw).observe (canvas);
    draw();
};
