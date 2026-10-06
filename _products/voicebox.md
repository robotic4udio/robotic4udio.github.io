---
title: Voicebox
order: 15
kind: Voice chain
status_label: Coming soon
tagline: A voice's whole finishing chain, for podcasts and speech.
description: Voicebox cleans a voice up, removes plosives and sibilance, shapes its tone, compresses it gently and rides it onto your loudness target under a true-peak ceiling. AU, VST3 and standalone.
image: /assets/images/voicebox/voicebox.jpg
manual: /plugins/voicebox/manual/
image_alt: "Voicebox's window: loudness readouts along the top, the EQ curve over the spectrum and the waveform before and after, and the cards in signal order: Clean, Pops, De-ess, Tone, Compressor, Loudness and Output"

# Set these when Voicebox is on sale: the button changes from "Notify me" to "Buy".
buy_url:
price:

stats:
  - Clean-up EQ
  - Plosive remover
  - De-esser
  - Gentle compressor
  - EBU R128 metering
  - Auto Level
  - True-peak limiter
  - 18 factory presets

features:
  - title: Clean
    text: A steep low cut for rumble, narrow notches for 50 or 60 Hz hum and three of its harmonics, and a dip for the boxy, muddy middle of a small room.
  - title: Pops
    text: The band under the voice is ducked only while a plosive bursts above it, so a "p" stops thumping while the voice keeps its body.
  - title: De-ess
    text: A split-band de-esser that listens to how much of the voice the esses take, so it works the same on a quiet or a loud take. Listen plays only what it removes.
  - title: Tone
    text: Body, Presence and Air, set where a voice needs them, and drawn on an EQ curve over the live spectrum with handles to drag.
  - title: Compressor
    text: A gentle, soft-knee compressor that evens the voice out without pumping.
  - title: Loudness
    text: Auto Level rides the gain onto a target, from Apple Podcasts' -16 LUFS to broadcast's -23, holding still in pauses so room noise never comes up. A true-peak limiter keeps it under the ceiling.
  - title: Measured properly
    text: Momentary, short-term and integrated loudness, loudness range and true peak, the way the podcast platforms and broadcasters measure them, with a graph of the last minutes.
  - title: Before and after
    text: The waveform before and after Voicebox, one over the other on the same scale, so you see what it did.
  - title: Presets to start from
    text: Eighteen factory presets for voices, rooms and platforms.

# Audio demos: put the files in assets/audio/voicebox/ and list them here.
demos: []

specs:
  - name: Type
    value: Voice processing chain (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Voicebox is everything a spoken voice goes through before it is published, in one window and in the right order. It takes out what the room and the microphone added, keeps plosives and esses in check, gives the voice its tone and evenness, and delivers it at the loudness the platform asks for, measured the way they measure it.
