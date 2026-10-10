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

# Set these when Splicer is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/splicer)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/splicer) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - BBCut-style cut engine
  - 5 cut procedures on a strict grid
  - Time stretch down to 0.78 %
  - 6 effect lanes, any of the suite's effects, with drawn lines
  - Repeatable randomness
  - 16 editable patterns and a song chain
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
    text: Six lanes, each any of the suite's effects (filter, ring modulator, drive, delay, reverb and crusher to begin with; delays and reverbs as throws), switched on block by block and each following lines you draw across the pattern, in any order you drag them.
  - title: Play it live
    text: Trigger gestures from buttons or MIDI notes, and switch patterns from MIDI at the next bar line.
  - title: Presets to start from
    text: Jungle Roller, SQ Fill Frenzy, Tape Ghost, Bus Throws, Lo-Fi Stutter, Melodic Smear, Hands On, Total Chaos and a demo song, and fifty whole song arrangements in eight banks, from breaks and jungle to dub throws and ambient.

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
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Splicer to make it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Splicer is a beat-cutting machine in the tradition of Nick Collins's BBCut. Put it on a drum loop, a bus or a whole mix and it cuts, repeats and mangles in time with your song, by chance or by design, with effects thrown at the slices.
