---
title: Overkill
order: 5
kind: Multiband
status_label: Coming soon
tagline: Multiband compression taken over the top.
description: Overkill is a three-band upward and downward compressor with the live spectrum under its controls, draggable thresholds and splits, and an oversampled drive. AU, VST3 and standalone.
image: /assets/images/overkill/overkill.jpg
image_alt: "Overkill's window: the three bands side by side over the spectrum, each band's knobs along its bottom, the master controls below and level meters down the sides"
manual: /plugins/overkill/manual/

# Set these when Overkill is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/overkill)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/overkill) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - 3 bands
  - Upward and downward
  - Live spectrum, in and out
  - Drag thresholds and splits
  - 4× oversampled drive
  - 23 factory presets

features:
  - title: Down and up at once
    text: Each of the three bands is pushed down when it's loud and pulled up when it's quiet, so everything comes forward at once, thick, bright, loud and in your face.
  - title: See every move
    text: The spectrum runs from 20 Hz to 20 kHz right under the controls, what goes in faint and what comes out lit in each band's colour. A readout on every band says how far it's being pushed down or pulled up right now.
  - title: Drag it into shape
    text: Each band has a DOWN line and an UP line on the spectrum; drag them up or down. Drag the splits sideways and the bands grow and shrink over the spectrum, so you see which kicks, notes or cymbals land where.
  - title: One knob for how much
    text: Depth scales all of it, down and up, from untouched to total overkill. Downward and Upward set each direction, Time how fast every band reacts.
  - title: Clean splits
    text: Steep, phase-matched Linkwitz-Riley crossovers, so at Depth 0 the bands add back up to the sound that went in. The low band reacts more slowly and the high band more quickly.
  - title: Drive on top
    text: Saturation after the bands are added up, at four times the sample rate so it doesn't alias, to round off and thicken what they push out.
  - title: Presets to start from
    text: Twenty-three factory presets, from Gentle Lift and Vocal Presence to Drum Bus Smash, Fairy Dust and Total Overkill, with folders made for drums, bass, vocals, synths, effects and the mix bus.

# Audio demos: put the files in assets/audio/overkill/ and list them here.
demos: []

specs:
  - name: Type
    value: Three-band upward and downward compressor (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Overkill to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Overkill splits the sound into lows, mids and highs and pushes each one down above one line and up below another, the over-the-top multiband sound of modern synths and drums. The spectrum sits under every control, so you can see exactly what each band is doing to what.
