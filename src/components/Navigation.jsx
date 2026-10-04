import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { playClickSound, playHebohSound } from '../utils/soundEffects';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHypeToast, setShowHypeToast] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const triggerGaskeun = () => {
    playHebohSound();
    setShowHypeToast(true);
    setTimeout(() => setShowHypeToast(false), 3000);

    // Wave 1: Center fountain
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#e2f952', '#ff5722', '#ffffff', '#00e5ff', '#ff0055']
    });

    // Wave 2: Left cannon (150ms delay)
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0.05, y: 0.7 },
        colors: ['#e2f952', '#ff5722', '#ffffff']
      });
    }, 150);

    // Wave 3: Right cannon (300ms delay)
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 0.95, y: 0.7 },
        colors: ['#00e5ff', '#e2f952', '#ff0055']
      });
    }, 300);
  };

  const navLinks = [
    { label: 'Filosofi', href: '#manifesto' },
    { label: 'Struktur & Tim', href: '#struktur' },
    { label: 'Alur Kerja', href: '#alur' },
    { label: '8 Pilar', href: '#pilar' },
    { label: 'Bank Ide', href: '#bank-ide' },
    { label: 'Jadwal & Aturan', href: '#jadwal' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#0c0d12]/95 backdrop-blur-md border-b border-zinc-200 dark:border-ikada-border shadow-sm dark:shadow-none transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 p-0.5 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 shadow-sm flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shrink-0">
            <img
              src={theme === 'dark' ? '/ikada-dark.png' : '/ikada-light.png'}
              alt="Logo IKADA"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-black text-base sm:text-lg tracking-wider text-zinc-900 dark:text-white group-hover:text-ikada-amber dark:group-hover:text-ikada-volt transition-colors">
                IKADA
              </span>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-normal">
                // KONTEN
              </span>
            </div>
            <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider">
              TONGKRONGAN CREW
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 font-display font-semibold text-xs tracking-wider uppercase text-zinc-700 dark:text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => playClickSound()}
              className="hover:text-black dark:hover:text-ikada-volt transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark and Light Mode"
            className="p-2 border rounded-none flex items-center gap-1.5 text-xs font-mono transition-all border-zinc-300 dark:border-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:bg-ikada-panel dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-black dark:hover:border-ikada-volt active:scale-95"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-ikada-volt" />
                <span className="hidden sm:inline font-bold text-[11px]">TERANG</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-zinc-900" />
                <span className="hidden sm:inline font-bold text-[11px]">GELAP</span>
              </>
            )}
          </button>

          {/* Gaskeun Celebration Button */}
          <button
            onClick={triggerGaskeun}
            className="hidden sm:flex items-center gap-1.5 bg-ikada-amber hover:bg-orange-600 text-white font-mono font-bold text-xs px-3.5 py-1.5 uppercase tracking-wider transition-all shadow-sm active:translate-x-0.5 active:translate-y-0.5 hover:scale-105 active:scale-95"
            title="Klik buat bakar semangat tim!"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>GASKEUN!</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* HYPE TOAST NOTIFICATION (Heboh banner) */}
      {showHypeToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-none w-[90%] sm:w-auto text-center">
          <div className="bg-black text-white dark:bg-ikada-volt dark:text-black border-2 border-ikada-amber dark:border-white px-5 py-2.5 font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-brutal-black dark:shadow-brutal-card flex items-center justify-center gap-2.5">
            <span className="text-base sm:text-lg animate-bounce">🔥</span>
            <span>GASKEUN! KONTEN PECAH IKADA MELUNCUR!</span>
            <span className="text-base sm:text-lg animate-bounce">🚀</span>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-ikada-surface border-b border-zinc-200 dark:border-ikada-border px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-ikada-volt font-display font-semibold text-sm uppercase py-2.5 border-b border-zinc-100 dark:border-zinc-800/60"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-ikada-panel text-zinc-800 dark:text-zinc-200 font-mono text-xs font-bold uppercase"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-ikada-volt" /> : <Moon className="w-4 h-4" />}
              <span>Mode {theme === 'dark' ? 'Terang (Siang)' : 'Gelap (Malam)'}</span>
            </button>

            <button
              onClick={() => {
                triggerGaskeun();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-ikada-amber text-white font-mono font-bold text-xs py-3 uppercase tracking-wider shadow-sm active:scale-95"
            >
              <Flame className="w-4 h-4" />
              <span>GASKEUN TIM IKADA!</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
