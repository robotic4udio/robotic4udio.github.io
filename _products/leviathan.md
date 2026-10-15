---
title: Leviathan
order: 19
category: effect  # instrument, effect or tool: which group the shop lists it in
kind: Bass processor
search_kind: bass enhancer plugin  # what the page's title in search results calls it: "<title>: <search_kind> (VST3, AU)"
status_label: Coming soon
tagline: A bass processor that follows the note.
description: "Leviathan hears what your bass plays and builds a low end under it, always in tune: a sub, harmonics, a resonant peak and an EQ band that move with every note. Then it saturates, compresses and limits the result. AU, VST3 and standalone."
image: /assets/images/leviathan/leviathan.jpg
manual: /plugins/leviathan/manual/
image_alt: "Leviathan's window playing the Reese Rumble preset: the seismogram tracing the bass in grey, what Leviathan adds in red and the tracked note as a black line, the tracker showing A1, the Sub, Harmonics, Resonance and Root Boost cards, Fuzz saturation, the compressor, the duck and the output meters"

# Price and sale come from Moonbase (_data/shop.json, scripts/sync-shop.py): it is on sale once its
# Moonbase product (moonbase_id, else this file's name) is in the storefront with a release;
# on_sale: false keeps it "Coming soon" even then.

stats:
  - Real-time pitch tracking, or MIDI
  - 3 sub engines
  - Tracked harmonics, resonance and EQ
  - 8 saturation types
  - 4 compressor modes
  - 14 factory presets

features:
  - title: It follows the note
    text: A pitch tracker hears what the bass plays, one note at a time, and every engine follows it. Lookahead up to 40 ms lets it know each note before it plays; MIDI can set the note instead, and Scale snaps it to a key.
  - title: A sub, three ways
    text: Shift moves the bass itself down and keeps its character, Synth plays a clean, heavy sub in four waveforms, Octaver divides it like an analog pedal. An octave or two down, or any interval, with Gate to hold a steady level or follow the bass's decay.
  - title: Heard on small speakers
    text: Harmonics adds the 2nd, 3rd and 4th harmonics of the low end above a crossover, so the bass still reads on phones and laptops.
  - title: A peak and an EQ band at every note
    text: Resonance is a driven, resonant filter tuned to the note, in parallel with the bass. Root Boost puts an EQ band on each note's fundamental, so every note gets the same lift or cut.
  - title: Push it, glue it
    text: Eight saturation types on the dry bass, on what Leviathan adds or on both, with up to 4x oversampling, then a compressor in Glue, Punch, Sustain or Custom mode.
  - title: Out of the kick's way
    text: The added low end ducks under a kick on the sidechain input, or under MIDI notes, while the bass itself stays put.
  - title: Ready for the mix
    text: Sub, Low and High EQ, a high-pass filter, Mono Below, Mix, a true-peak limiter and AUTO, which sets the output as loud as it came in. A seismogram draws what it hears and adds as it plays.

demos: []

screenshots:
  - file: /assets/images/leviathan/leviathan.jpg
    caption: The seismogram, the engines and the output
  - file: /plugins/leviathan/manual/images/tracker.jpg
    caption: The tracker page

specs:
  - name: Type
    value: Bass processor, stereo, with a sidechain input (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a bass and Claude sets Leviathan to make it (macOS and Windows)"
  - name: Status
    value: Released, version 1.0.0
  - name: Price
    value: To be announced
---
Leviathan builds a low end that is always in tune with the bass above it. It thickens a thin DI, extends an 808, makes a bass heard on a phone, or replaces a bass with its own sub, and then drives, glues and levels the result.
