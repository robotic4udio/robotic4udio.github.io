---
title: Loudness Pilot
order: 6
kind: Loudness
status_label: Coming soon
tagline: A loudness meter that also does something about it.
description: Loudness Pilot measures podcasts, audiobooks and mixes the way streaming services and broadcasters do, trims them to the target in one click, rides the level of a voice and keeps the true peaks under the ceiling. AU, VST3 and standalone.
image: /assets/images/loudness-pilot/loudness-pilot.jpg
image_alt: "Loudness Pilot's window: six loudness readouts along the top, the last minute of loudness with the leveller's gain and the limiter under it, and the Target, Auto Level and Output cards below"
manual: /plugins/loudness-pilot/manual/

# Set these when Loudness Pilot is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/loudness-pilot)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/loudness-pilot) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - EBU R128 / BS.1770 metering
  - Integrated, short-term, momentary, range, true peak
  - Trim to target in one click
  - Auto leveller for speech
  - True-peak limiter
  - 11 delivery presets

features:
  - title: Measured like the services do it
    text: Integrated, short-term and momentary loudness, loudness range and true peak, as ITU-R BS.1770 and EBU R128 define them. Every reading is coloured by how it sits against your target.
  - title: Trim to target
    text: Play the programme through and press TRIM TO TARGET. The gain is set so the integrated loudness lands on the target, and the measurement starts over to check.
  - title: An engineer on the fader
    text: Auto Level rides the gain so quiet and loud speakers end up at the same loudness. Speed, Range and a Gate that holds still through pauses, breaths and room noise; gaps between words don't pump it.
  - title: Peaks under the ceiling
    text: A true-peak limiter with 2 ms of lookahead keeps peaks, between samples too, under the ceiling the service asks for.
  - title: The last minute at a glance
    text: A graph of momentary and short-term loudness round the target, with the leveller's gain and the limiter's work in a strip underneath.
  - title: Ready for delivery
    text: Presets for Apple Podcasts, mono podcasts, Spotify and YouTube, audiobooks, EBU R128 and ATSC A/85, and the same with the leveller riding. Reset on play measures a bounce from its first second.

# Audio demos: put the files in assets/audio/loudness-pilot/ and list them here.
demos: []

specs:
  - name: Type
    value: Loudness meter, leveller and true-peak limiter (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Loudness Pilot to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Loudness Pilot sits last on your master or voice bus. It tells you how loud the programme is in the units delivery specs use, sets the gain that lands it on the target, levels voices that come and go, and makes sure no peak goes over the ceiling.
