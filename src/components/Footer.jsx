import React from 'react';
import { Clapperboard, Heart, FileText, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const triggerConfetti = () => {
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
    <footer className="pt-16 pb-12 px-4 md:px-8 border-t border-ikada-border bg-ikada-bg halftone-dots">
      <div className="max-w-5xl mx-auto text-center">
        {/* Clapperboard closing */}
        <div className="inline-flex p-3 bg-ikada-surface border border-ikada-border text-ikada-volt mb-6">
          <Clapperboard className="w-8 h-8" />
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
          “Dari tongkrongan, jadi cerita. <br />
          Dari cerita, jadi konten. <br />
          <span className="text-ikada-volt">Dari konten, jadi karya.”</span>
        </h2>

        <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-8 font-sans">
          Kita tidak harus langsung sempurna. Kita mulai dari yang ada, belajar dari proses, 
          dan berkembang bareng-bareng sebagai keluarga besar IKADA.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={triggerConfetti}
            className="bg-ikada-volt hover:bg-white text-black font-display font-black text-sm px-6 py-3 uppercase tracking-wider transition-all shadow-brutal-white"
          >
            🔥 Saya Siap Berkontribusi!
          </button>
          
          <button
            onClick={scrollToTop}
            className="bg-ikada-surface border border-zinc-700 text-zinc-300 hover:text-white px-4 py-3 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Kembali Ke Atas</span>
          </button>
        </div>

        {/* Metadata Footer */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-ikada-volt font-bold">IKADA</span>
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
