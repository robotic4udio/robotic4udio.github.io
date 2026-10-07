---
title: Graphic EQ
order: 10
kind: EQ
status_label: Coming soon
tagline: Ten sliders and a curve that really goes through every one of them.
description: Graphic EQ is a ten-band octave equaliser whose curve passes exactly through every slider, drawn over the live spectrum of the output. AU, VST3 and standalone.
image: /assets/images/graphic-eq/graphic-eq.jpg
image_alt: "Graphic EQ on its Smile preset: the curve with a dot per band over the output's spectrum on top, the ten band sliders and the output below"
manual: /plugins/graphic-eq/manual/

# Free. When Graphic EQ is out, set buy_url to its Moonbase checkout,
# https://roboticaudio.moonbase.sh/buy/graphic-eq: the button changes from "Notify me" to "Get Graphic EQ free".
free: true
buy_url:

stats:
  - 10 octave bands
  - ±12 dB per band
  - Curve through every slider
  - Live spectrum
  - No latency
  - 9 factory presets

features:
  - title: What you see is what you hear
    text: In most graphic EQs neighbouring bands overlap and the curve never quite matches the sliders. Graphic EQ works out how far to push each filter so the curve passes through every slider and stays smooth in between.
  - title: Draw the curve
    text: Sweep the mouse across the display and every band you pass follows, or drag a slider or a dot.
  - title: The spectrum behind it
    text: The output's spectrum moves behind the curve, so peaks that need a cut stand out.
  - title: Smooth and light
    text: Gains glide, so sweeps and automation never click. A flat band costs nothing, and the EQ rests while silence comes in.
  - title: Presets to start from
    text: Smile, Warmth, Air, Clear the Mud, Vocal Presence, Bass Boost, Telephone and Lo-Fi Radio.

# Audio demos: put the files in assets/audio/graphic-eq/ and list them here.
demos: []

specs:
  - name: Type
    value: Ten-band graphic EQ (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Graphic EQ to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: Free
---
Graphic EQ has a slider for every octave from 31 Hz to 16 kHz, and a curve that is honest about them: push one and you hear exactly what the display shows, over the live spectrum of what comes out.
