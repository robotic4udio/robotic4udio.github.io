---
title: Drum Forge
order: 16
kind: Drums
status_label: Coming soon
tagline: A drum sampler that can make its own kits.
description: Drum Forge is a sixteen-pad drum sampler with up to four takes per pad, ranges and chance on every hit, three drawn envelopes and a matrix per pad, and effects per pad, on sends and on the master. With your own ElevenLabs key it generates whole kits or single pads from words, and with an Anthropic key Claude designs the kit around them. AU, VST3 and standalone.
image: /assets/images/drum-forge/drum-forge.jpg
image_alt: "Drum Forge with a kit loaded: the sixteen pads on the left; the selected pad on the right, its takes and waveform over its sound; the effects along the bottom"
manual: /plugins/drum-forge/manual/

# Set these when Drum Forge is on sale: the button changes from "Notify me" to "Buy".
buy_url:
price:

screenshots:
  - file: /assets/images/drum-forge/drum-forge.jpg
    caption: A kit loaded, the selected pad on the right
  - file: /plugins/drum-forge/manual/images/terminal.jpg
    caption: The kit's terminal, generating a kit from a style
thumbnails:
  - { file: /plugins/drum-forge/manual/images/envelopes.jpg, caption: Envelopes }
  - { file: /plugins/drum-forge/manual/images/matrix.jpg, caption: Matrix }
  - { file: /plugins/drum-forge/manual/images/ai-panel.jpg, caption: AI keys }

stats:
  - 16 pads, MIDI C1–D#2
  - 4 takes per pad
  - Ranges and Chance per hit
  - 3 drawn envelopes per pad
  - 6-slot matrix per pad
  - 2 effects per pad, 2 sends, 4 master
  - Optional AI generation

features:
  - title: Your hits, played well
    text: Drop up to four takes on a pad and play them in turn, at random or one only. Tune, start, reverse, attack, decay, a filter and drive per pad, One Shot or Gate, and eight choke groups.
  - title: Every hit a little different
    text: Tune, level, pan, filter and more can each pick from a range on every hit, and a pad's Chance decides whether it plays at all. Variation widens all of a pad's ranges at once.
  - title: Draw the movement
    text: Three drawn envelopes per pad, Volume, Mod 1 and Mod 2, free or synced to the song like Contour's. A six-slot matrix per pad routes them, velocity and the mod wheel; right-click any knob to give it a source.
  - title: Mix it like a kit
    text: Level, pan, tune, decay, mute and two sends per pad, all automatable. Two effect slots on every pad, a delay and a reverb on the sends, and four slots on the master.
  - title: Generate a kit
    text: With your own ElevenLabs key, type a style and every unlocked pad gets takes for its role, or prompt one pad at a time. Each take is cleaned up, saved as a WAV in your sample library and loaded. Lock the pads you want to keep.
  - title: Claude designs it
    text: Add an Anthropic key and Claude first designs the kit from your words, each pad's prompt, sound, mix, effects, ranges and chance, then the takes are made from its prompts. Without keys, Drum Forge is a plain drum sampler.

# Audio demos: put the files in assets/audio/drum-forge/ and list them here.
demos: []

specs:
  - name: Type
    value: Drum sampler (instrument plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone (generation on Windows, not Linux)
  - name: Generation
    value: Optional, with your own ElevenLabs key (and an Anthropic key for Claude); your keys stay in your system's keychain
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Drum Forge is a sixteen-pad sampler for your own drums, built so no two hits have to be the same. Load your samples, give each pad a few takes and a range or two, and the kit breathes. Or describe a kit in a few words and let it make the sounds for you, with your own ElevenLabs key, and Claude designing the rest if you add an Anthropic one.
