---
title: Contour
order: 1
kind: Synth
status_label: Coming soon
tagline: A gnarly wobble-bass synth where you draw the movement.
description: Contour is a monophonic wobble-bass synth with drawn envelopes, nine oscillator types, noise and a sample layer, a drive section, fourteen filters and a full effects rack. AU, VST3 and standalone.
image: /assets/images/contour/contour.jpg
image_alt: "Contour's window: the sound sources and pitch drop on top, the drawn envelopes in the middle, then drive, filter, voice and the effects rack with its macros"
manual: /plugins/contour/manual/

# Set these when Contour is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/contour)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/contour) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - Monophonic bass synth
  - 2 oscillators, 9 types
  - Sub, noise and a sample
  - 5 drawn envelopes
  - 8-slot mod matrix
  - 14 filter types
  - 20 effects in 4 slots
  - 8 macros
  - XY performance pad

features:
  - title: Draw the movement
    text: Five drawn envelopes, Volume and Mod 1–4. Draw freehand, lay down lines and curves or press RANDOM, then loop the part you like and lock it to the song's tempo.
  - title: Two oscillators, nine types
    text: Wavetable, Waveform, Phase Dist, Shaper, Harmonic, String, Formant, Supersaw and Granular, with up to seven unison copies. Osc 2 layers with Osc 1 or bends it with FM, Ring or Sync.
  - title: Draw the sound too
    text: Harmonic adds up 64 partials whose levels you draw, twice, and morphs between the two spectra. The Shaper runs a sine through a curve you draw.
  - title: Strings, voices and grains
    text: String is a plucked string that can ring for ever, Formant sings the vowels A to U, Supersaw stacks seven detuned saws and Granular plays grains of a wavetable or of your own sample.
  - title: Sub, noise and a sample
    text: A sub under the note, four kinds of noise and an audio file played on every note, for a kick or a click on the attack. Each has a direct path that skips the drive and the filter, so the low end and the transient stay clean however nasty the rest gets.
  - title: Aggressor
    text: Three drive stages in a row, Overdrive, Distortion and Fuzz. Drag the filter before or after them; filtering first and then distorting gives the classic growl.
  - title: Fourteen filters
    text: Ladder, state-variable morph and notch, diode, MS-20, formant, comb and phaser types, all open to modulation.
  - title: Modulation matrix
    text: Eight slots route the envelopes, MIDI and the macros to almost anything, pitch included. Knobs show what is moving them.
  - title: Effects rack
    text: Four slots in series and twenty effects, from OTT, distortion and a stacked drive to delay, two reverbs, a gate, a frequency shifter and a tape stop, each with its own editor and live display.
  - title: Macros and XY pad
    text: Eight macro knobs and an XY pad for playing a patch with one hand. Right-click any effect control to map it.
  - title: Presets with everything in them
    text: Factory presets to start from, and your own saved with every setting and every drawing.

# Audio demos: put the files in assets/audio/contour/ and list them here.
#   - title: Wobble
#     text: One note held, the Volume envelope looping at 1/4.
#     file: /assets/audio/contour/wobble.mp3
demos: []

# Screenshots: the first is drawn by the plugin repo's tools/EditorShots (ContourShots),
# the rest come from the manual. For your own, put them in assets/images/contour/.
screenshots:
  - file: /assets/images/contour/contour.jpg
    caption: The whole instrument in one window
  - file: /plugins/contour/manual/images/osc-harmonic.jpg
    caption: The Harmonic oscillator, its partials drawn by hand
  - file: /plugins/contour/manual/images/effect-editor.jpg
    caption: An effect's full editor, with its live display
thumbnails:
  - { file: /plugins/contour/manual/images/osc-string.jpg, caption: String }
  - { file: /plugins/contour/manual/images/osc-formant.jpg, caption: Formant }
  - { file: /plugins/contour/manual/images/osc-granular.jpg, caption: Granular }
  - { file: /plugins/contour/manual/images/fx-ott.jpg, caption: OTT }
  - { file: /plugins/contour/manual/images/fx-eq.jpg, caption: EQ }
  - { file: /plugins/contour/manual/images/fx-compressor.jpg, caption: Compressor }
  - { file: /plugins/contour/manual/images/fx-delay.jpg, caption: Delay }
  - { file: /plugins/contour/manual/images/fx-reverb.jpg, caption: Reverb }
  - { file: /plugins/contour/manual/images/fx-gate.jpg, caption: Gate }

specs:
  - name: Type
    value: Monophonic synthesizer (instrument plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Contour to make it, and with an ElevenLabs key makes a new sample for it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Paint how each note's volume, pitch and tone change over time, loop the part you like, and push it through a drive section, fourteen filters and a full effects rack. Nine oscillator types, from wavetables to plucked strings, vowels and grains, give it plenty to chew on. Contour plays one note at a time and is built for bass: wobbles, growls, dive-bombs and talking tones.
