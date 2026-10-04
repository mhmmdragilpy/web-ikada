import React, { useState } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';
import { playHebohSound, playWhooshUpSound, playTabSound } from '../utils/soundEffects';

export default function Footer() {
  const { theme } = useTheme();
  const [showToast, setShowToast] = useState(false);

  const triggerConfetti = () => {
    playHebohSound();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3200);

    // Multi-angle celebration barrage
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.8 },
      colors: ['#e2f952', '#ff5722', '#ffffff', '#00e5ff', '#ff0055']
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 70,
        origin: { x: 0.1, y: 0.85 },
        colors: ['#e2f952', '#ffffff', '#ff5722']
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 70,
        origin: { x: 0.9, y: 0.85 },
        colors: ['#00e5ff', '#ffffff', '#e2f952']
      });
    }, 180);
  };

  const scrollToTop = () => {
    playWhooshUpSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 px-4 md:px-8 border-t border-zinc-200 dark:border-ikada-border bg-white dark:bg-ikada-bg halftone-dots transition-colors relative">
      {/* Hype Toast Popup */}
      {showToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-none w-[90%] sm:w-auto text-center">
          <div className="bg-black text-white dark:bg-ikada-volt dark:text-black border-2 border-ikada-amber dark:border-white px-5 py-3 font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-brutal-black dark:shadow-brutal-card flex items-center justify-center gap-2.5">
            <span className="text-lg animate-bounce">💥</span>
            <span>RESPECT! SOLIDARITAS ANAK IKADA MENYALA!</span>
            <span className="text-lg animate-bounce">🔥</span>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center">
        {/* Official Logo Mark */}
        <button
          onClick={() => playTabSound()}
          title="Klik Emblem Resmi IKADA"
          className="inline-flex p-2 bg-white dark:bg-black border-2 border-zinc-900 dark:border-ikada-volt shadow-brutal-black dark:shadow-brutal-card mb-6 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <img
            src={theme === 'dark' ? '/ikada-dark.png' : '/ikada-light.png'}
            alt="Logo IKADA"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        </button>

        <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
          “Dari tongkrongan, jadi cerita. <br />
          Dari cerita, jadi konten. <br />
          <span className="text-black dark:text-ikada-volt underline decoration-wavy decoration-ikada-amber">Dari konten, jadi karya.”</span>
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-lg mx-auto mb-8 font-sans">
          Kita tidak harus langsung sempurna. Kita mulai dari yang ada, belajar dari proses, 
          dan berkembang bareng-bareng sebagai keluarga besar IKADA.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto bg-ikada-volt hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black font-display font-black text-sm px-6 py-3.5 uppercase tracking-wider transition-all shadow-brutal-black dark:shadow-brutal-white hover:scale-105 active:scale-95"
          >
            🔥 Saya Siap Berkontribusi!
          </button>
          
          <button
            onClick={scrollToTop}
            className="w-full sm:w-auto bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white px-4 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Kembali Ke Atas</span>
          </button>
        </div>

        {/* Metadata Footer */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src={theme === 'dark' ? '/ikada-dark.png' : '/ikada-light.png'}
              alt="Logo IKADA"
              className="w-5 h-5 object-contain border border-zinc-300 dark:border-zinc-700"
            />
            <span className="text-zinc-900 dark:text-ikada-volt font-bold">IKADA</span>
            <span>// Project Information &amp; Internal Guidelines</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Dibangun dengan semangat tongkrongan <Heart className="w-3.5 h-3.5 text-ikada-amber fill-ikada-amber inline" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
