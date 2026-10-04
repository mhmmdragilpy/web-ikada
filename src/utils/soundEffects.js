// Web Audio API Synthesizer - Complete Audio Engine for IKADA Web Portal
// Zero latency, zero external asset dependencies, works offline and across all modern browsers.

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Mobile Haptic Vibration helper
 */
function triggerHaptic(pattern = [60, 40, 80]) {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Ignore vibration errors
    }
  }
}

/**
 * 1. Standard Button Click (Micro-tactile)
 * Used on regular buttons, filters, nav links, close buttons.
 */
export function playClickSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.02);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
    triggerHaptic(20);
  } catch {
    // Fail silently
  }
}

/**
 * 2. Mechanical Tab / Selector Sound
 * Used when switching division dossier tabs or categories.
 */
export function playTabSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.04);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
    triggerHaptic(30);
  } catch {
    // Fail silently
  }
}

/**
 * 3. Workflow Step Navigation Sound
 * Pitch scales upwards as the user advances through the 9 production steps!
 */
export function playStepSound(stepIndex = 0) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const baseFreq = 400 + Math.min(stepIndex, 9) * 65; // Ascending musical scale per step
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.25, now + 0.05);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
    triggerHaptic([25, 20]);
  } catch {
    // Fail silently
  }
}

/**
 * 4. Copy to Clipboard Chime
 * Rewarding two-tone bell chime.
 */
export function playCopySound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [880, 1320]; // A5 -> E6

    freqs.forEach((freq, idx) => {
      const noteStart = now + idx * 0.07;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteStart);

      gain.gain.setValueAtTime(0.16, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + 0.2);
    });

    triggerHaptic([40, 30, 60]);
  } catch {
    // Fail silently
  }
}

/**
 * 5. Dice Roll / Formula Slot Machine Roulette
 * Rapid mechanical ratchets ending in a triumphant ding!
 */
export function playDiceRollSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const tickDelays = [0, 0.04, 0.09, 0.15, 0.22, 0.31];

    tickDelays.forEach((delay, idx) => {
      const tickTime = now + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600 + idx * 70, tickTime);
      osc.frequency.exponentialRampToValueAtTime(200, tickTime + 0.025);

      gain.gain.setValueAtTime(0.12, tickTime);
      gain.gain.exponentialRampToValueAtTime(0.001, tickTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(tickTime);
      osc.stop(tickTime + 0.03);
    });

    // Final golden resolution ding
    const finalDingTime = now + 0.38;
    const finalOsc = ctx.createOscillator();
    const finalGain = ctx.createGain();

    finalOsc.type = 'sine';
    finalOsc.frequency.setValueAtTime(1046.50, finalDingTime); // C6

    finalGain.gain.setValueAtTime(0.2, finalDingTime);
    finalGain.gain.exponentialRampToValueAtTime(0.001, finalDingTime + 0.3);

    finalOsc.connect(finalGain);
    finalGain.connect(ctx.destination);

    finalOsc.start(finalDingTime);
    finalOsc.stop(finalDingTime + 0.32);

    triggerHaptic([40, 40, 50, 40, 90]);
  } catch {
    // Fail silently
  }
}

/**
 * 6. Smooth Whoosh Up Sound
 * Used when clicking "Kembali ke Atas" (Scroll to top).
 */
export function playWhooshUpSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.22);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
    triggerHaptic(40);
  } catch {
    // Fail silently
  }
}

/**
 * 7. Mechanical Camera Shutter / Switch for Theme Toggle
 */
export function playThemeSound(targetTheme) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(targetTheme === 'dark' ? 1400 : 2000, now);

    if (targetTheme === 'dark') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.08);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.07);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    }

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);

    // Micro mechanical bounce
    const microOsc = ctx.createOscillator();
    const microGain = ctx.createGain();

    microOsc.type = 'sine';
    microOsc.frequency.setValueAtTime(targetTheme === 'dark' ? 950 : 1300, now);
    microOsc.frequency.exponentialRampToValueAtTime(300, now + 0.025);

    microGain.gain.setValueAtTime(0.12, now);
    microGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    microOsc.connect(microGain);
    microGain.connect(ctx.destination);

    microOsc.start(now);
    microOsc.stop(now + 0.03);

    triggerHaptic([40, 20]);
  } catch {
    // Fail silently
  }
}

/**
 * 8. HEBOH / CELEBRATION FANFARE (Special Buttons!)
 * Used for "GASKEUN!", "Saya Siap Berkontribusi!", and major milestones.
 * Multi-voice triumphant arpeggio + fat sub-bass drop + high energy shimmer.
 */
export function playHebohSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // A. Sub-bass kick & impact drop
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(180, now);
    subOsc.frequency.exponentialRampToValueAtTime(38, now + 0.22);

    subGain.gain.setValueAtTime(0.35, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    subOsc.start(now);
    subOsc.stop(now + 0.26);

    // B. Ascending 5-Note Fanfare Arpeggio: C5 -> E5 -> G5 -> C6 -> E6
    const fanfareNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];

    fanfareNotes.forEach((freq, idx) => {
      const noteStart = now + (idx * 0.05);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteStart);

      gain.gain.setValueAtTime(0.22, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.32);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + 0.35);
    });

    // C. Triumphant Final Chord (C6 + G5 + E5 simultaneous resonance)
    const chordTime = now + 0.24;
    [523.25, 659.25, 1046.50].forEach((freq) => {
      const chordOsc = ctx.createOscillator();
      const chordGain = ctx.createGain();

      chordOsc.type = 'sine';
      chordOsc.frequency.setValueAtTime(freq, chordTime);

      chordGain.gain.setValueAtTime(0.12, chordTime);
      chordGain.gain.exponentialRampToValueAtTime(0.001, chordTime + 0.55);

      chordOsc.connect(chordGain);
      chordGain.connect(ctx.destination);

      chordOsc.start(chordTime);
      chordOsc.stop(chordTime + 0.6);
    });

    // Epic multi-burst haptic vibration
    triggerHaptic([70, 40, 90, 40, 160]);
  } catch {
    // Fail silently
  }
}
