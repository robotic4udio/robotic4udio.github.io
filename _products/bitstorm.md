---
title: Bitstorm
order: 17
category: instrument  # instrument, effect or tool: which group the shop lists it in
kind: Synth
status_label: Out now
tagline: Seven classic sound chips, computed the way the hardware did it.
hero_headline: Play the sound chips of the eighties
hero_text: The C64, the NES, the Game Boy, the Spectrum, the Atari, the Amiga and the Mega Drive, computed the way the hardware did it, with four layers per note, tracker macros, an arpeggiator and a tracker.
description: Bitstorm is a chip-tune synth with the sound chips of the C64, the NES, the Game Boy, the Spectrum, the Atari, the Amiga and the Mega Drive, four layers per note or one chip channel by channel, tracker macros, an arpeggiator and a tracker. AU, VST3 and standalone.
image: /assets/images/bitstorm/bitstorm.jpg
image_alt: "Bitstorm's window on its CHIP page: four NES channels as layers across the top, then the SID filter, the scope with the chip's registers and the global settings"
manual: /plugins/bitstorm/manual/

# Price and sale come from Moonbase (_data/shop.json, scripts/sync-shop.py): it is on sale once its
# Moonbase product (moonbase_id, else this file's name) is in the storefront with a release;
# on_sale: false keeps it "Coming soon" even then.

stats:
  - 7 sound chips
  - 4 layers per note, up to 16 voices
  - Chip mode, a channel per layer
  - Tracker macros per layer
  - 3 drawn envelopes, 2 LFOs, 16-slot matrix
  - Arpeggiator and a 256-pattern tracker with 32 instruments
  - Imports SID, NSF, VGM, MOD, FamiTracker and more
  - 4 effect slots

features:
  - title: Seven chips
    text: The C64's SID with its two models and filter, the NES, the Game Boy with its drawn wave, the AY of the Spectrum and Atari ST with its buzzer bass, the Atari's POKEY, the Amiga's Paula playing its samples or yours, and the Mega Drive's four-operator FM chip.
  - title: Computed like the hardware
    text: Each chip is worked out from how it behaved, its timers, steps, noise registers and output stages, at twice the sample rate with its edges band-limited, so it sounds like the chip and not like aliasing.
  - title: Stack them, or play the chip
    text: Poly mode stacks four layers, any chips you like, on every note. Chip mode makes them one chip's channels, each playing a note of its own, by round robin or by MIDI channel.
  - title: Tracker macros
    text: Volume, Arp, Pitch and the chip's own choice (wave, duty, mixer, distortion, sample or algorithm) drawn a step per frame, with loop and release points, the way trackers shape every note.
  - title: Modulation
    text: Three drawn envelopes, two LFOs, MIDI and four macro knobs through a 16-slot matrix, into each layer's pitch, level, pan, pulse width and FM brightness and the SID filter.
  - title: A tracker inside
    text: 256 patterns of up to 64 rows with eight columns (the four layers, then four more channels in Chip mode), notes, instruments, volumes and effects (arpeggio, slides, volume), chained into a song of up to 256 patterns that plays with your DAW, or a pattern per MIDI note, and an arpeggiator that steps in tempo or in the chip's frames.
  - title: Instruments
    text: Up to 32 sounds a song switches between note by note, each a chip channel with its own macros, so one column plays the bass with the drums between its notes, as the C64's composers fitted a band into three voices.
  - title: Import the music
    text: Drop in a C64 SID, an NES NSF, a VGM from the Mega Drive or the arcades, an Amiga MOD, a FamiTracker, GoatTracker or ProTracker 3 module, an Atari SAP or a Spectrum .ay, and Bitstorm writes it into its tracker with its instruments, ready to play, change and make your own.
  - title: Dressed for each machine
    text: The window takes the colours of layer 1's machine, the C64's blue, the Game Boy's greens, the NES's grey, the arcade's black.
  - title: Presets from every machine
    text: Over three hundred, in Lead, Bass, Arp, Drums, FX, Game and Tracker folders, from C64 Sync Lead, 6581 Growl Bass and Overworld Square to Paula Choir, Mega Drive Slap Bass, Tracker Demo and NES Band.

demos: []

screenshots:
  - file: /assets/images/bitstorm/bitstorm.jpg
    caption: The CHIP page, four NES channels playing together
  - file: /plugins/bitstorm/manual/images/macros.jpg
    caption: Tracker macros and the Game Boy's wave table
  - file: /plugins/bitstorm/manual/images/seq.jpg
    caption: The tracker, a column per layer, the bass and hats taking turns on one
thumbnails:
  - { file: /plugins/bitstorm/manual/images/instruments.jpg, caption: Instruments }
  - { file: /plugins/bitstorm/manual/images/fm.jpg, caption: FM operators }
  - { file: /plugins/bitstorm/manual/images/mod.jpg, caption: Modulation }

specs:
  - name: Type
    value: Chip-tune synthesizer, up to 16 voices (instrument plugin)
  - name: Chips
    value: SID (6581, 8580), NES 2A03, Game Boy, AY-3-8910 / YM2149, POKEY, Paula, YM2612
  - name: Import
    value: VGM/VGZ, SID, NSF/NSFe, SAP, GBS, ZX .ay, YM, VTX, MOD, FamiTracker (.ftm, .0cc, .dnm, text), GoatTracker .sng, ProTracker 3 .pt3
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound or a tune and Claude sets Bitstorm to play it, the song in the tracker and its instruments included (macOS and Windows)"
  - name: Status
    value: Released, version 1.0
  - name: Price
    value: €129
---
Seven sound chips from the machines that made game music, each computed from how the hardware worked. Stack four of them on every note for big, modern chip sounds, or play one chip channel by channel as the composers did, with tracker macros shaping every note, an arpeggiator and a tracker to write the tune in.
