// Web Audio API Synthesizer for Tactile & High-Energy UI Feedback
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
 * Sound effect for Theme Toggle (Terang / Gelap)
 * Emulates a crisp retro mechanical camera shutter / tactile toggle switch.
 */
export function playThemeSound(targetTheme) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Primary click impulse
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(targetTheme === 'dark' ? 1400 : 2000, now);

    if (targetTheme === 'dark') {
      // Deeper mechanical aperture snap (power-down / night mode)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.08);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    } else {
      // Crisper high-pitch shutter click (flash recharge / day mode)
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

    // Secondary micro-transient (mechanical bounce)
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
  } catch (e) {
    // Fail silently if browser audio policy blocks
    console.debug('Audio playback note:', e);
  }
}

/**
 * Sound effect for GASKEUN! (Celebration & Confetti button)
 * Ascending upbeat arcade fanfare + punchy tactile thump.
 */
export function playGaskeunSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Ascending arpeggio (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, idx) => {
      const noteStart = now + idx * 0.055;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle'; // Warm retro 8-bit / arcade synthesizer vibe
      osc.frequency.setValueAtTime(freq, noteStart);

      gain.gain.setValueAtTime(0.18, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + 0.24);
    });

    // Sub-bass punch / kick thump for physical impact
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(160, now);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.16);

    subGain.gain.setValueAtTime(0.28, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    subOsc.start(now);
    subOsc.stop(now + 0.18);
  } catch (e) {
    console.debug('Audio playback note:', e);
  }
}
