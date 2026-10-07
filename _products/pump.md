---
title: Pump
order: 14
kind: Pump & effects
status_label: Coming soon
tagline: A sidechain pump that makes your effects pump along with it.
description: Pump ducks your sound in time with the song, from its own clock, MIDI notes or a kick on the sidechain, and four effect slots after it pump along, every setting its own lane. AU, VST3 and standalone.
image: /assets/images/pump/pump.jpg
manual: /plugins/pump/manual/
image_alt: "Pump's window: the pump's curve beside Motion, four effect slot tabs, the shown effect's live display with a lane under each knob, and Output"

# Set these when Pump is on sale: the button changes from "Notify me" to "Buy".
buy_url:
price:

stats:
  - 21 pump shapes
  - Tempo, MIDI or sidechain
  - 4 effect slots
  - 20 effects
  - Every setting can pump
  - 74 factory presets

features:
  - title: The pump
    text: Pick one of 21 shapes and a rate from 8 bars to 1/64, straight, dotted or triplet, and set how deep it ducks. Color decides what ducks, the whole sound or only the lows or the highs, a filter that closes with it, or the middle while the sides stay wide.
  - title: Driven by the song or a kick
    text: Tempo follows the song's position. Trig and Trig Inv swell or duck while a MIDI note or the Trigger button is held. Sidechain plays one cycle per hit on a second input; Follow ducks by the kick's level.
  - title: Effects that pump along
    text: Four slots after the pump, each any of twenty effects. Every continuous setting has a lane under its knob, so a filter can breathe, a delay's repeats can be cut on the beat and a reverb can bloom in the gaps.
  - title: Each lane its own
    text: A lane has its own depth, either way, a phase against the pump, a shape (the pump's or another), and a speed from an eighth to eight times the pump's, so a filter can sweep once a bar while the volume pumps every beat.
  - title: Click a lane to see it
    text: The big display shows the volume's gain curve or any lane on its setting's own scale, a cutoff in Hz from 20 Hz to 20 kHz. Drag it for the depth, Shift-drag for the phase, scroll for the shape; /2 and X2 halve or double the speed.
  - title: Twenty effects
    text: Filter, Drive (four stacked stages, oversampled), Distortion, Crusher, Ring Mod, Freq Shift, Tape Stop, Pan, Delay, two reverbs, Chorus, Flanger, Phaser, Pitch, Width, EQ, Compressor, OTT and Gate, each with its own live display.
  - title: Drag to reorder
    text: Drag a slot's tab onto another to change the order; its settings and lanes go with it.
  - title: Seventy-four presets
    text: From Four On The Floor and Deep House Pump to Wub Machine, Vinyl Brake Beat, Laser Ping Pong and Breathing Cathedral, in groups for house, EDM, bass, techno, ambient, lo-fi, glitch, guitars and vocals.

# Audio demos: put the files in assets/audio/pump/ and list them here.
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
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Pump to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.2
  - name: Price
    value: To be announced
---
Pump starts where a sidechain compressor stops. The volume ducks in time with the song, and every setting of the four effects after it can duck along: a filter that closes on the kick, echoes that only ring in the gaps, a tape that brakes into every bar line. Each lane has its own depth, phase, shape and speed, and the display shows any of them, clicked straight from the knob.
