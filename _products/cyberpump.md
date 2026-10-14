---
title: CyberPump
order: 14
category: effect  # instrument, effect or tool: which group the shop lists it in
kind: Pump & effects
status_label: Coming soon
tagline: A sidechain pump that makes your effects pump along with it.
description: CyberPump ducks your sound in time with the song, from its own clock, MIDI notes or a kick on the sidechain, with six shapes you draw, and four effect slots after it pump along, every setting its own lane. AU, VST3 and standalone.
image: /assets/images/cyberpump/cyberpump.jpg
manual: /plugins/cyberpump/manual/
image_alt: "CyberPump's window: Shape 1 drawn in the display beside Motion, four effect slot tabs, the shown effect's live display, and Output"

# Price and sale come from Moonbase (_data/shop.json, scripts/sync-shop.py): it is on sale once its
# Moonbase product (moonbase_id, else this file's name) is in the storefront with a release;
# on_sale: false keeps it "Coming soon" even then.

stats:
  - 6 drawn shapes, 21 ready-made to start from
  - Tempo, MIDI or sidechain
  - 4 effect slots
  - 22 effects
  - Every setting can pump

features:
  - title: Six shapes you draw
    text: Draw up to six shapes, or start from 21 ready-made pumps, and pick a rate from 8 bars to 1/64, straight, dotted or triplet. The Volume follows one of them, as deep as its lane says. Color decides what ducks, the whole sound or only the lows or the highs, a filter that closes with it, or the middle while the sides stay wide.
  - title: Driven by the song or a kick
    text: Tempo follows the song's position. Trig and Trig Inv swell or duck while a MIDI note or the Trigger button is held. Sidechain plays one cycle per hit on a second input; Follow ducks by the kick's level.
  - title: Effects that pump along
    text: Four slots after the pump, each any of twenty-two effects. Every continuous setting has a lane under its knob, so a filter can breathe, a delay's repeats can be cut on the beat and a reverb can bloom in the gaps.
  - title: Each lane its own
    text: A lane has its own depth, either way, a phase against the cycle, which of the six shapes it follows, and a speed from an eighth to eight times the pump's, so a filter can sweep once a bar while the volume pumps every beat.
  - title: Click a lane to see it
    text: The big display shows the six shapes to draw, or any lane on its setting's own scale, a cutoff in Hz from 20 Hz to 20 kHz. Drag it for the depth, Shift-drag for the phase, scroll for the shape; /2 and X2 halve or double the speed.
  - title: Twenty-two effects
    text: Filter, Drive (four stacked stages, oversampled), Distortion, Crusher, Ring Mod, Freq Shift, Tape Stop, Pan, Delay, two reverbs, Chorus, Flanger, Phaser, Pitch, Width, EQ, Compressor, Overkill, OTT, Gate and the whole of Event Horizon, each with its own live display.
  - title: Drag to reorder
    text: Drag a slot's tab onto another to change the order; its settings and lanes go with it.

# Audio demos: put the files in assets/audio/cyberpump/ and list them here.
demos: []

specs:
  - name: Type
    value: Sidechain pump with effect slots (effect plugin, with a sidechain input)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets CyberPump to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.2
  - name: Price
    value: To be announced
---
CyberPump starts where a sidechain compressor stops. The volume ducks in time with the song, and every setting of the four effects after it can duck along: a filter that closes on the kick, echoes that only ring in the gaps, a tape that brakes into every bar line. Each lane has its own depth, phase, shape and speed, and the display shows any of them, clicked straight from the knob. A new set of factory presets for the six shapes is on its way.
