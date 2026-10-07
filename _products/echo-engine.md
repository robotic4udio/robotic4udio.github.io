---
title: Echo Engine
order: 2
kind: Delay
status_label: Coming soon
tagline: A stereo delay with three characters and repeats that climb in pitch.
description: Echo Engine is a stereo delay with clean, tape and lo-fi characters, four delay styles, pitch-shifted repeats and diffusion. AU, VST3 and standalone.
image: /assets/images/echo-engine/echo-engine.jpg
manual: /plugins/echo-engine/manual/
image_alt: "Echo Engine's window: setup, delay times, repeats, LFO, pitch, diffusion, EQ and output sections side by side"

# Set these when Echo Engine is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/echo-engine)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/echo-engine) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - Stereo delay
  - 4 delay styles
  - Clean, Tape and Lo-Fi
  - Pitch-shifted repeats
  - Tempo sync
  - Diffusion
  - 15 factory presets

features:
  - title: Four styles
    text: Single, Dual, Ratio and Ping-Pong. One time for both sides, a time for each, the right side as a share of the left, or repeats bouncing between them.
  - title: Free or in time
    text: Set each side from 1 ms to 5 seconds, or lock it to the song's tempo in straight, dotted or triplet notes, up to 30 seconds long.
  - title: Three characters
    text: Clean keeps the repeats transparent. Tape saturates, compresses and adds a head bump. Lo-Fi clips hard like an early digital unit.
  - title: Age
    text: On tape, Age brings wow, flutter, hiss and duller highs. In Lo-Fi it lowers the sample rate and the bit depth.
  - title: Repeats that climb
    text: Pitch shifts every repeat once more, up to two octaves either way, so echoes rise or fall in steps. Detune spreads them for shimmer.
  - title: Feedback past 100 %
    text: Feedback goes up to 200 % and builds into saturation instead of running away.
  - title: From echo to wash
    text: Diffusion smears the repeats and Size sets how far, taking a delay towards a reverb. An LFO moves the delay time for chorus and wobble.
  - title: Shape the tail
    text: Low cut and high cut filters, stereo width, a small Spread offset between the sides, and mix.
  - title: Presets to start from
    text: Fifteen factory presets, from Slapback Tape and Dotted Eighth to Shimmer, Fifth Staircase and Ambient Wash.

# Audio demos: put the files in assets/audio/echo-engine/ and list them here.
#   - title: Shimmer
#     text: A guitar chord, each repeat an octave up.
#     file: /assets/audio/echo-engine/shimmer.mp3
demos: []

specs:
  - name: Type
    value: Stereo delay (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Echo Engine to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Echo Engine goes from a clean, tempo-locked delay to worn tape, crunchy early digital and clouds of pitch-shifted repeats. Every repeat can be shifted once more than the last, so a single note becomes a staircase or a shimmer.
