import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';
import { playGaskeunSound } from '../utils/soundEffects';

export default function Footer() {
  const { theme } = useTheme();

  const triggerConfetti = () => {
    playGaskeunSound();
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#e2f952', '#ff5722', '#ffffff', '#00e5ff']
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 px-4 md:px-8 border-t border-zinc-200 dark:border-ikada-border bg-white dark:bg-ikada-bg halftone-dots transition-colors">
      <div className="max-w-5xl mx-auto text-center">
        {/* Official Logo Mark */}
        <div className="inline-flex p-2 bg-white dark:bg-black border-2 border-zinc-900 dark:border-ikada-volt shadow-brutal-black dark:shadow-brutal-card mb-6 transition-transform hover:scale-105">
          <img
            src={theme === 'dark' ? '/ikada-dark.png' : '/ikada-light.png'}
            alt="Logo IKADA"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        </div>

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
            className="w-full sm:w-auto bg-ikada-volt hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black font-display font-black text-sm px-6 py-3.5 uppercase tracking-wider transition-all shadow-brutal-black dark:shadow-brutal-white active:scale-95"
          >
            🔥 Saya Siap Berkontribusi!
          </button>
          
          <button
            onClick={scrollToTop}
            className="w-full sm:w-auto bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white px-4 py-3.5 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
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
