---
title: Bitstorm
order: 17
kind: Synth
status_label: Coming soon
tagline: Seven classic sound chips, computed the way the hardware did it.
description: Bitstorm is a chip-tune synth with the sound chips of the C64, the NES, the Game Boy, the Spectrum, the Atari, the Amiga and the Mega Drive, four layers per note or one chip channel by channel, tracker macros, an arpeggiator and a tracker. AU, VST3 and standalone.
image: /assets/images/bitstorm/bitstorm.jpg
image_alt: "Bitstorm's window on its CHIP page: four NES channels as layers across the top, then the SID filter, the scope with the chip's registers and the global settings"
manual: /plugins/bitstorm/manual/

# Set these when Bitstorm is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/bitstorm)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/bitstorm) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - 7 sound chips
  - 4 layers per note, up to 16 voices
  - Chip mode, a channel per layer
  - Tracker macros per layer
  - 3 drawn envelopes, 2 LFOs, 16-slot matrix
  - Arpeggiator and a 64-pattern tracker with 32 instruments
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
    text: Sixty-four patterns with a column per layer, notes, instruments, volumes and effects (arpeggio, slides, volume), chained into a song of up to 256 patterns that plays with your DAW, or a pattern per MIDI note, and an arpeggiator that steps in tempo or in the chip's frames.
  - title: Instruments
    text: Up to 32 sounds a song switches between note by note, each a chip channel with its own macros, so one column plays the bass with the drums between its notes, as the C64's composers fitted a band into three voices.
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
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound or a tune and Claude sets Bitstorm to play it, the song in the tracker and its instruments included (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Seven sound chips from the machines that made game music, each computed from how the hardware worked. Stack four of them on every note for big, modern chip sounds, or play one chip channel by channel as the composers did, with tracker macros shaping every note, an arpeggiator and a tracker to write the tune in.
