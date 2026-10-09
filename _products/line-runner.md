---
title: Line Runner
order: 1
kind: Synth
status_label: Coming soon
tagline: A gnarly wobble-bass synth where you draw the movement.
description: Line Runner is a wobble-bass synth with drawn envelopes, four generators of twelve types (a sampler and seven sound chips among them), mono or up to 16 voices, a drive section, fourteen filters and a full effects rack. AU, VST3 and standalone.
image: /assets/images/line-runner/line-runner.jpg
image_alt: "Line Runner's window: the four generators and the pitch drop on top, the drawn envelopes in the middle, then drive, filter, voice and the effects rack with its macros"
manual: /plugins/line-runner/manual/

# Set these when Line Runner is on sale: buy_url (its Moonbase checkout, https://roboticaudio.moonbase.sh/buy/line-runner)
# turns "Notify me" into "Buy", and trial_url (https://roboticaudio.moonbase.sh/download/line-runner) adds "Try it free".
buy_url:
price:
trial_url:

stats:
  - Mono, or up to 16 voices
  - 4 generators, 12 types
  - Sampler with velocity layers and round robin
  - 7 sound chips
  - 5 drawn envelopes
  - Mod matrix, up to 32 rows
  - 14 filter types
  - 22 effects in 4 slots
  - 8 macros
  - XY performance pad

features:
  - title: Draw the movement
    text: Five drawn envelopes, Volume and Mod 1–4. Draw freehand, lay down lines and curves or press RANDOM, then loop the part you like and lock it to the song's tempo.
  - title: Four generators, twelve types
    text: Wavetable, Waveform, Phase Dist, Shaper, Harmonic, String, Formant, Supersaw, Granular, Sampler, Noise and Chip, each with the same knobs, its own unison and detune. Any generator can layer with another or bend it with FM, Ring or Sync.
  - title: Seven sound chips
    text: Chip plays a channel of the C64's SID, the NES, the Game Boy, the AY, the POKEY, the Amiga's Paula or the Mega Drive's FM chip, with its tracker macros and its own editor, the same chips as Bitstorm, inside a bass synth.
  - title: Draw the sound too
    text: Harmonic adds up 64 partials whose levels you draw, twice, and morphs between the two spectra. The Shaper runs a sine through a curve you draw.
  - title: Strings, voices and grains
    text: String is a plucked string that can ring for ever, Formant sings the vowels A to U, Supersaw stacks seven detuned saws and Granular plays grains of a wavetable or of your own samples.
  - title: A sampler inside
    text: The Sampler type plays your own samples mapped across the keys, with four velocity layers, round robin and choke groups. Drop files on the map, or, with your own ElevenLabs key, describe a sound and it makes the samples for you.
  - title: Clean where it counts
    text: Any generator can take the DIRECT path past the drive and the filter, so a sub or a transient stays clean however nasty the rest gets.
  - title: Aggressor
    text: Three drive stages in a row, each with any of eighteen algorithms. Drag the filter before or after them; filtering first and then distorting gives the classic growl.
  - title: Fourteen filters
    text: Ladder, state-variable morph and notch, diode, MS-20, formant, comb and phaser types, all open to modulation.
  - title: Modulation matrix
    text: Up to 32 rows route the envelopes, MIDI and the macros to almost anything, pitch included. Right-click a knob to modulate it straight away; knobs show what is moving them.
  - title: Mono or polyphonic
    text: One voice with legato and portamento for basses and leads, or up to 16 for chords, each note with its own envelopes and modulation.
  - title: Effects rack
    text: Four slots in series and twenty-two effects, from Overkill, OTT, distortion and a stacked drive to delays, reverbs, a gate, a frequency shifter, a tape stop and the whole of Event Horizon, each with its own editor and live display.
  - title: Macros and XY pad
    text: Eight macro knobs and an XY pad for playing a patch with one hand. Right-click any control to route a macro to it.
  - title: Your look
    text: Six themes to dress it in, Cyberpunk, Modern, Alien, Professional, Retro or Vintage, in any colour, with the background and the text a step brighter if you like.
  - title: Presets with everything in them
    text: Factory presets to start from, and your own saved with every setting and every drawing.

# Audio demos: put the files in assets/audio/line-runner/ and list them here.
#   - title: Wobble
#     text: One note held, the Volume envelope looping at 1/4.
#     file: /assets/audio/line-runner/wobble.mp3
demos: []

# Screenshots: the first is drawn by the plugin repo's tools/EditorShots (LineRunnerShots),
# the rest come from the manual. For your own, put them in assets/images/line-runner/.
screenshots:
  - file: /assets/images/line-runner/line-runner.jpg
    caption: The whole instrument in one window
  - file: /plugins/line-runner/manual/images/gen-chip.jpg
    caption: A generator playing a chip, the NES's pulse
  - file: /plugins/line-runner/manual/images/osc-harmonic.jpg
    caption: The Harmonic oscillator, its partials drawn by hand
  - file: /plugins/line-runner/manual/images/effect-editor.jpg
    caption: An effect's full editor, with its live display
thumbnails:
  - { file: /plugins/line-runner/manual/images/osc-string.jpg, caption: String }
  - { file: /plugins/line-runner/manual/images/osc-formant.jpg, caption: Formant }
  - { file: /plugins/line-runner/manual/images/osc-granular.jpg, caption: Granular }
  - { file: /plugins/line-runner/manual/images/gen-sampler.jpg, caption: Sampler }
  - { file: /plugins/line-runner/manual/images/fx-ott.jpg, caption: OTT }
  - { file: /plugins/line-runner/manual/images/fx-eq.jpg, caption: EQ }
  - { file: /plugins/line-runner/manual/images/fx-compressor.jpg, caption: Compressor }
  - { file: /plugins/line-runner/manual/images/fx-delay.jpg, caption: Delay }
  - { file: /plugins/line-runner/manual/images/fx-reverb.jpg, caption: Reverb }

specs:
  - name: Type
    value: Synthesizer, mono or up to 16 voices (instrument plugin)
  - name: Formats
    value: AU, VST3 and Standalone
  - name: macOS
    value: macOS 11 or later, Apple Silicon and Intel
  - name: Windows and Linux
    value: VST3 and Standalone
  - name: Sound design with Claude
    value: "Optional, with your own Anthropic key: describe a sound and Claude sets Line Runner to make it, and with an ElevenLabs key makes a new sample for it (macOS and Windows)"
  - name: Status
    value: In development, version 0.1
  - name: Price
    value: To be announced
---
Paint how each note's volume, pitch and tone change over time, loop the part you like, and push it through a drive section, fourteen filters and a full effects rack. Twelve generator types, from wavetables and sound chips to plucked strings, vowels and grains, give it plenty to chew on. Line Runner is built for bass, one note at a time or in chords: wobbles, growls, dive-bombs and talking tones.
