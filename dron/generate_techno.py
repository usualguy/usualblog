import os
from pathlib import Path

# Minimal techno generator skeleton using simple sine/subsynth
# This script generates a simple techno loop and saves as WAV.

try:
    import numpy as np
    from scipy.io.wavfile import write as wavwrite
except Exception:
    raise SystemExit("Please install numpy and scipy to run this script.")

import math

def synth_tone(freq, duration_s, sample_rate=44100, gain=0.2):
    t = np.linspace(0, duration_s, int(sample_rate*duration_s), endpoint=False)
    wave = np.sin(2*np.pi*freq*t) * gain
    return wave

def build_loop(bpm=125, bars=2, sample_rate=44100):
    beat_len = 60.0 / bpm
    beat_samples = int(beat_len * sample_rate)
    loop = []
    # 4/4, kick every beat, simple clap on 2&4
    for i in range(4*bars):
        # kick on every beat
        loop.append(synth_tone(60, beat_len, sample_rate, gain=0.8))
    return np.concatenate(loop)

import numpy as np

def main():
    bpm = 125
    duration_sec = 8  # short test piece
    sample_rate = 44100
    # Build a very simple loop: kick + bass on offbeat
    # This is a placeholder; more sophisticated patterns can be built with real libs.
    t = np.linspace(0, duration_sec, int(sample_rate*duration_sec), endpoint=False)
    mix = np.zeros_like(t)
    # kick: 40 Hz sine burst on every quarter note
    for i in range(int(bpm/15)*8):
        start = int(i * (60.0/bpm) * sample_rate)
        end = min(len(t), start + int(0.2*sample_rate))
        if end>start:
            mix[start:end] += 0.6 * np.sin(2*np.pi*40*(t[:end-start]))
    # simple bass on downbeats
    for i in range(int(bpm/15)*8):
        start = int(i * (60.0/bpm) * sample_rate)
        end = min(len(t), start + int(0.5*sample_rate))
        if end>start:
            mix[start:end] += 0.3 * np.sin(2*np.pi*110*(t[:end-start]))
    # normalize
    maxv = np.max(np.abs(mix))
    if maxv>0:
        mix = mix / maxv * 0.9
    out = (mix * 32767).astype(np.int16)
    out_path = Path("output_techno_test.wav")
    wavwrite(str(out_path), sample_rate, out)
    print(f"Wrote {out_path} ({duration_sec}s at {sample_rate} Hz)")

if __name__ == '__main__':
    main()
