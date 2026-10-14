---
title: Event Horizon
order: 18
category: effect  # instrument, effect or tool: which group the shop lists it in
kind: Reverb
status_label: Out now
tagline: Twelve reverbs behind one set of controls, with an echo in front and effects inside the tail.
description: Event Horizon is an algorithmic reverb with twelve algorithms, from halls, plates and springs to clouds, shimmer, gated reverb and a real room, a decay landscape to drag, an echo in front that the reverb can feed, effects inside its tail and a modulation matrix. AU, VST3 and standalone.
image: /assets/images/event-horizon/event-horizon.jpg
image_alt: "Event Horizon's window: the algorithm strip on top, the 3D decay landscape with its handles beside the Space controls, and the Late Reverb page below"
manual: /plugins/event-horizon/manual/

# Price and sale come from Moonbase (_data/shop.json, scripts/sync-shop.py): it is on sale once its
# Moonbase product (moonbase_id, else this file's name) is in the storefront with a release;
# on_sale: false keeps it "Coming soon" even then.

stats:
  - 12 algorithms
  - 13 early reflection patterns
  - Three-band decay
  - An echo in front, Clean, Tape or Multi-tap
  - 3 effect slots, before, inside, around or after
  - 2 LFOs, 2 envelope followers, 2 drawn envelopes
  - 8-slot matrix, 4 macros
  - Freeze, ducking, tempo sync

features:
  - title: Twelve algorithms, one set of controls
    text: Hall, Room, Chamber, Plate, Vintage, Cathedral, Cloud, Shimmer, Spring, Nonlin, Physical and Ambience. The controls mean the same in every one, and two Character controls give each its own, such as Vintage's Era and Grit or Spring's Drip.
  - title: See the decay
    text: A 3D landscape draws the reverb you've set, the pre-delay, the build-up and how each band dies away, with the live spectrum along the back. Drag its handles for the pre-delay, decay and the bass and treble.
  - title: Effects inside the tail
    text: Three slots for a frequency shifter, distortion, drive, crusher, filter or pitch shifter, each placed before the reverb, inside its loop, in a feedback loop round it or after it. A shifter climbs with every pass, a filter sweeps the whole tail.
  - title: An echo in front
    text: Clean, Tape or Multi-tap repeats, free or in time with the song, heard by themselves, sent into the reverb, and fed by it in return, so every repeat comes back as a bloom of space. A routing diagram lights each path as it plays.
  - title: A real room
    text: Physical builds a room's reflections from its width, depth and height and from where the sound and the listener stand. Drag them around the room from above.
  - title: Modulation
    text: Two LFOs, two envelope followers (one of them the ducker's, drawn over the input as it plays) and two drawn envelopes, in time with the song or set off by hits in the input, through an eight-slot matrix to almost every control.
  - title: Made for the mix
    text: Ducking that lets the tail bloom in the gaps, low and high cuts, tempo-synced pre-delay and decay, Freeze for endless pads, and Mix Lock for send tracks.
  - title: Inside the other plugins
    text: Event Horizon is also an effect in the racks of Tektonic, CyberPump and the other Robotic Audio plugins, with the same controls in the slot's window.

demos: []

screenshots:
  - file: /assets/images/event-horizon/event-horizon.jpg
    caption: The decay landscape and the Space controls
  - file: /plugins/event-horizon/manual/images/echo.jpg
    caption: The echo, its repeats drawn in the landscape
  - file: /plugins/event-horizon/manual/images/room.jpg
    caption: Physical, a room you can walk around in
thumbnails:
  - { file: /plugins/event-horizon/manual/images/fx.jpg, caption: Effects in the tail }
  - { file: /plugins/event-horizon/manual/images/early.jpg, caption: Early reflections }
  - { file: /plugins/event-horizon/manual/images/mod.jpg, caption: Drawn envelopes }
  - { file: /plugins/event-horizon/manual/images/output.jpg, caption: The ducker at work }

specs:
  - name: Type
    value: Algorithmic reverb, stereo (effect plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a space and Claude sets Event Horizon to make it (macOS and Windows)"
  - name: Status
    value: Released, version 1.0.1
  - name: Price
    value: To be announced
---
Twelve reverb designs behind one set of controls, from the smoothest hall to a gated '84 snare and a cloud that never ends. See the decay before you hear it, put effects inside the tail so it grows, climbs and sweeps as it rings, put an echo in front and let the reverb feed its repeats, and let the reverb bloom only where the music leaves room for it.
