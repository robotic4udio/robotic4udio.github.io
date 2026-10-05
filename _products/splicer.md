---
title: Splicer
order: 9
kind: Effect
status_label: Coming soon
tagline: A probabilistic cut-and-effects machine for beats and breaks.
description: Splicer slices whatever passes through it in time with your song, then repeats, reverses, re-pitches, tape-stops and reorders the slices and throws effects at them, from patterns you design or a generator working by chance. AU, VST3 and standalone.
image: /assets/images/splicer/splicer.jpg
image_alt: "Splicer's pattern page: the input and output history on top, the sixteen patterns, the selected pattern's editor and the generator below"
manual: /plugins/splicer/manual/

# Set these when Splicer is on sale: the button changes from "Notify me" to "Buy".
buy_url:
price:

stats:
  - BBCut-style cut engine
  - 5 cut procedures on a strict grid
  - 6 effect lanes
  - Repeatable randomness
  - 16 patterns and a song chain
  - Hand-played gestures and MIDI
  - Tempo synced

features:
  - title: Cuts in time
    text: Splicer listens to what passes through and plays it back in slices, always on the song's grid. Repeats, rolls, reverses, pitch jumps, reaches back in time, tape stops and freezes.
  - title: Chance with bounds
    text: The generator writes cuts by chance inside the bounds you set, with five procedures from Break Roller's jungle feel onwards. The same seed always makes the same cuts, so a bounce matches what you heard.
  - title: Design your own
    text: Sixteen patterns of one to four bars, each block with its gesture, its chance and its effects, edited by hand or partly regenerated. Chain the patterns into a song with fills.
  - title: Effects on every slice
    text: Six lanes, filter, crush, drive, gate, delay and reverb throws, each with its own motion and range.
  - title: Play it live
    text: Trigger gestures from buttons or MIDI notes, and switch patterns from MIDI at the next bar line.
  - title: Presets to start from
    text: Jungle Roller, SQ Fill Frenzy, Tape Ghost, Bus Throws, Lo-Fi Stutter, Melodic Smear, Hands On, Total Chaos and a demo song.

# Audio demos: put the files in assets/audio/splicer/ and list them here.
demos: []

specs:
  - name: Type
    value: Beat-slicing effect (effect plugin)
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
Splicer is a beat-cutting machine in the tradition of Nick Collins's BBCut. Put it on a drum loop, a bus or a whole mix and it cuts, repeats and mangles in time with your song, by chance or by design, with effects thrown at the slices.
