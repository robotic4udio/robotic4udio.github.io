---
title: Gatekeeper
order: 13
kind: Free
status_label: Coming soon
tagline: Draw a volume shape and it plays in time with your song.
description: Gatekeeper is a free volume shaper. Draw a shape and it plays in time with the song, over and over, for sidechain-style pumping, trance gates, stutters and swells. AU, VST3 and standalone.
image: /assets/images/gatekeeper/gatekeeper.jpg
image_alt: "Gatekeeper's window: the drawn volume shape with its tools on top, starting as four pumps a bar, and Length, Feel, Depth and Smooth below"
manual: /plugins/gatekeeper/manual/

# Free. When Gatekeeper is out, set buy_url to its Moonbase checkout,
# https://roboticaudio.moonbase.sh/buy/gatekeeper: the button changes from "Notify me" to "Get Gatekeeper free".
free: true
buy_url:

stats:
  - Drawn volume shape
  - Locked to the song
  - 8/1 to 1/64, straight, dotted, triplet
  - Ready-made shapes
  - No latency
  - Free

features:
  - title: Pump without a sidechain
    text: It starts as four ducks a bar, like a kick's sidechain. Move them off the beat, deepen them or soften them.
  - title: Draw any rhythm
    text: Draw freehand, lay down lines and curves, press RANDOM for a new rhythm, or pick a waveform, a window or a percussion shape from the menu.
  - title: Locked to the song
    text: The shape follows the host's song position from eight bars down to a 64th, straight, dotted or triplet, so it is always where it should be.
  - title: Smooth or sharp
    text: Depth keeps some of the sound in the dips, Smooth rounds off the edges so hard gates don't click.

# Audio demos: put the files in assets/audio/gatekeeper/ and list them here.
demos: []

specs:
  - name: Type
    value: Tempo-synced volume shaper (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Gatekeeper to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: Free
---
Gatekeeper is the envelope editor from Contour, given away as a plugin of its own: draw a volume shape and it plays in time with your song, from slow swells to machine-gun stutters.
