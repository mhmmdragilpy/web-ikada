import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerGaskeun = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e2f952', '#ff5722', '#ffffff', '#00e5ff']
    });
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
    <nav className="sticky top-0 z-50 bg-ikada-bg/90 backdrop-blur-md border-b border-ikada-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-black text-lg tracking-wider text-white">
          <span className="bg-ikada-volt text-black px-1.5 py-0.5 text-xs font-mono font-bold">IKD</span>
          <span>IKADA</span>
          <span className="text-zinc-500 text-xs font-mono font-normal">// KONTEN</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 font-display font-semibold text-xs tracking-wider uppercase text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ikada-volt transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={triggerGaskeun}
            className="hidden sm:flex items-center gap-1.5 bg-ikada-amber hover:bg-orange-500 text-white font-mono font-bold text-xs px-3.5 py-1.5 uppercase tracking-wider transition-all shadow-brutal-card active:translate-x-1 active:translate-y-1"
            title="Klik buat bakar semangat!"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>GASKEUN!</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ikada-surface border-b border-ikada-border px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-ikada-volt font-display font-semibold text-sm uppercase py-2 border-b border-zinc-800/60"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              triggerGaskeun();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-3 flex items-center justify-center gap-2 bg-ikada-amber text-white font-mono font-bold text-xs py-2.5 uppercase tracking-wider"
          >
            <Flame className="w-4 h-4" />
            <span>GASKEUN TIM IKADA!</span>
          </button>
        </div>
      )}
    </nav>
  );
}
