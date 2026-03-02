---
title: "I Made a Hardbass Track with Python (and Actually Finished It)"
created: 2026-03-02
tags:
  - music
  - python
  - hardbass
  - idm
  - generative
---

Look, I didn't think this would work.

Everyone talks about AI making music. Nobody talks about writing a Python script that actually *composes* something you'd want to listen to. Not a toy. Not a demo. A real track.

So I tried it. Hardbass meets IDM. 160 BPM. 90 seconds. And honestly? It slaps.

## What Even Is Hardbass × IDM?

**Hardbass** is Russian hard dance. Think: distorted kicks, donk bass, 4-on-the-floor, aggressive as hell. It's music for raving in abandoned factories at 4 AM.

**IDM** (Intelligent Dance Music) is... complicated. Aphex Twin, Autechre, Squarepusher. Breakbeats that shouldn't work but do. Micro-timing. Polyrhythms. Glitch textures. Brain music.

Combining them seemed like a terrible idea. Perfect.

## The Approach

I didn't want to just loop samples. Anyone can do that. I wanted the script to actually *compose* — make musical decisions based on music theory.

Here's what I built:

### 1. Music Theory First

The track uses a real chord progression: **Em → C → G → D**. Classic minor-to-major tension. Nothing fancy, but it works.

Bass lines follow root notes. Arpeggios use chord tones. Everything has a reason to exist.

### 2. Hardbass Elements

- **Donk bass** — That distinctive pitched kick sound. Synthesized from scratch with a sine wave, pitch envelope, and saturation.
- **4-on-the-floor** — Every quarter note. Uncompromising.
- **Distorted kicks** — Soft clipping for that hard dance punch.
- **Off-beat bass** — The classic hardbass bounce.

### 3. IDM Complexity

This is where it gets weird:

- **Breakbeats** — Not just a loop. I'm generating variations with micro-timing jitter (±5ms humanization).
- **Glitch textures** — Random granular stutters, bit reduction, reversed fragments.
- **Polyrhythms** — 3-over-4 hi-hat patterns. Feels wrong until it clicks.
- **Irregular arpeggios** — 16th notes but with probabilistic note skipping. Never quite predictable.

### 4. Structure That Moves

Ten sections. No two the same:

1. **Sparse glitch intro** — Just atmosphere and broken beats
2. **Build with donk bass** — Energy starts climbing
3. **Full drop** — Everything hits at once
4. **Breakbeat chaos** — Maximum complexity
5. **Half-time breakdown** — Catch your breath
6. **Second drop** — Heavier than the first
7. **Glitch outro** — Falls apart gracefully

Each section has different drum patterns, bass intensities, and glitch probabilities. The script knows when to hold back and when to go full chaos.

## The Technical Stack

Pure Python. No DAW. No MIDI controllers. Just code:

- **`pydub`** — Audio manipulation and mixing
- **`numpy`** — Waveform generation (sine, saw, noise)
- **`scipy`** — Filters, delays, reverb
- **FFmpeg** — Final encoding to MP3

Everything synthesizes from scratch. No samples. No loops. The script generates every sound in real-time.

## The Result

90 seconds. 160 BPM. One MP3 file.

You can listen to it right here:

<audio controls style="width: 100%; margin: 20px 0;">
  <source src="/assets/hardbass_idm.mp3" type="audio/mpeg">
  <source src="/assets/hardbass_idm.ogg" type="audio/ogg">
  Your browser doesn't support the audio element. <a href="/assets/hardbass_idm.mp3">Download the track</a> instead.
</audio>

**What you're hearing:**
- Real-time synthesis (no samples)
- Generative composition (not random — music theory guided)
- Hardbass energy × IDM brain damage
- Rendered at 44.1kHz, mono (it's a demo, okay?)

## Why This Matters

I'm not trying to replace producers. I'm proving something different:

**You can encode musical knowledge into code.** Not just "play random notes." Actual theory. Structure. Intention.

The script knows:
- Which notes belong to which chord
- When to build tension and when to release
- How to humanize timing without losing precision
- When chaos works and when it's just noise

That's interesting to me. Not because it makes music "better." But because it makes the *process* visible. Every decision is explicit. Every sound has a reason.

## Want to Try It?

The script is open source. Tweak the BPM. Change the chord progression. Add your own sections. Break it. Fix it. Make it weirder.

**GitHub:** [Link to repo] *(coming soon — cleaning up the code first)*

**What I'd change next:**
- Add proper stereo imaging (this is mono for now)
- More sophisticated reverb/delay sends
- Export stems for manual mixing
- Train a small model on hardbass tracks for better pattern generation

## Final Thought

I spent years in DAWs. Moving clips around. Tweaking EQ. Endless iteration.

This was different. I wrote the *rules* of the music. The script did the performance. And somehow, it *felt* right.

Not perfect. Not polished. But alive.

That's worth exploring.

---

*Track generated on 2026-03-02. Script: `generate_hardbass_idm.py`. Runtime: ~3 seconds. Caffeine: excessive.*
