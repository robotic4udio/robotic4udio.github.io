---
title: Grainstorm
order: 7
kind: Synth
status_label: Coming soon
tagline: A polyphonic granular synth that turns any sound into a storm of grains.
description: Grainstorm is a polyphonic granular synth. Every note plays a stream of grains from a sample, moved by drawn envelopes and a modulation matrix per voice, through a filter and four effect slots. AU, VST3 and standalone.
image: /assets/images/grainstorm/grainstorm.jpg
image_alt: "Grainstorm's window: the sample with the grains flying over it and the voice on top, the grain controls and their drawn window, the modulation and the filter, and the effects with the macros along the bottom"
manual: /plugins/grainstorm/manual/

# Set these when Grainstorm is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/grainstorm)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/grainstorm) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - Up to 16 voices
  - Up to 64 grains per voice
  - 5 built-in sources, 20 factory samples, or your own samples
  - Drawn grain window
  - 4 drawn envelopes, 8-slot matrix
  - 14 filter types
  - 4 effect slots, 8 macros, XY pad

features:
  - title: Any sound, in grains
    text: Load a WAV, AIFF, FLAC, OGG or MP3, drop one on the waveform, or start from the five built-in sources. The grains fly over the waveform as sparks, brighter while louder.
  - title: Freeze, scan, scatter
    text: Position picks where the grains come from, Scan moves on through the sample at any speed (or backwards, or not at all), and Spray scatters them into a cloud.
  - title: Pitch into shimmer
    text: Pitch Spray sends each grain off by up to two octaves, freely or in semitones, fifths or octaves. Reverse plays any share of the grains backwards, Spread scatters them across the stereo field.
  - title: Draw the grain
    text: The fade of every grain is a window you draw, with ready-made Hann, Gauss, Tukey, Expodec and more.
  - title: Every note moves on its own
    text: Each voice has its own Volume and Mod 1–3 envelopes, its own eight-slot matrix and its own filter, so every note of a chord can drift differently.
  - title: Effects, macros and an XY pad
    text: Four effect slots after the voices, eight macros for mapping anything, and an XY pad for playing the cloud by hand.
  - title: Presets to start from
    text: Glass Cloud, Bell Shimmer, Frozen Breath, Stutter Arp, Drone Scanner, Reverse Rain and XY Explorer.

# Audio demos: put the files in assets/audio/grainstorm/ and list them here.
demos: []

specs:
  - name: Type
    value: Polyphonic granular synth (instrument plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Grainstorm to make it, and with an ElevenLabs key makes a new sample for it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Grainstorm reads tiny grains from a sample, thousands a second, and lets you freeze a moment of it, stretch it, scatter it into a cloud or pitch it into shimmering chords. Drawn envelopes move it all, per voice, so pads breathe and every note of a chord lives its own life.
