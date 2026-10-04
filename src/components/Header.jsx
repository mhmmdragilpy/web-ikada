import React from 'react';
import { Video, Disc, BatteryMedium, Sliders, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative pt-6 pb-16 px-4 md:px-8 border-b border-ikada-border halftone-dots overflow-hidden">
      {/* Camcorder Viewfinder Framing Corners */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-ikada-volt pointer-events-none" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-ikada-volt pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-ikada-volt pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-ikada-volt pointer-events-none" />

      {/* Camcorder Status Bar */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-3 mb-10 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ikada-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-ikada-amber"></span>
          </span>
          <span className="font-bold text-white tracking-widest">● REC</span>
          <span className="text-zinc-600">|</span>
          <span className="text-ikada-volt">00:24:19</span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline">4K // 60FPS</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-300">
          <span className="hidden md:inline">ISO 800</span>
          <span className="hidden md:inline">F/2.8</span>
          <div className="flex items-center gap-1.5 text-ikada-volt bg-ikada-surface px-2.5 py-1 rounded border border-ikada-border">
            <BatteryMedium className="w-4 h-4" />
            <span className="font-bold text-[11px]">88% READY</span>
          </div>
        </div>
      </div>

      {/* Hero Body */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Street Stencil Badge */}
        <div className="inline-flex items-center gap-2 bg-ikada-volt text-black font-mono font-bold text-xs uppercase px-3 py-1 mb-6 rotate-[-1deg] shadow-brutal-white tracking-wider">
          <Disc className="w-3.5 h-3.5 animate-spin" />
          <span>PROJECT INFORMATION // IKADA KONTEN CREW</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.95] mb-6 text-white">
          DARI TONGKRONGAN <br />
          <span className="text-ikada-volt underline decoration-wavy decoration-ikada-amber underline-offset-8">
            JADI CERITA.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
          Bukan website korporat kaku, bukan portal bisnis. Ini adalah panduan lengkap inisiasi 
          <span className="text-white font-semibold"> Project Konten IKADA</span> agar kita satu frekuensi: 
          dari konsep, divisi, shooting, alat, editing, hingga publishing.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#struktur"
            className="bg-ikada-volt text-black font-display font-bold text-sm sm:text-base px-6 py-3.5 uppercase tracking-wider hover:bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 shadow-brutal-white flex items-center gap-2"
          >
            <Video className="w-4 h-4" />
            Cek Divisi & Tim (Baru)
          </a>
          <a
            href="#bank-ide"
            className="bg-ikada-surface border border-ikada-border text-white font-display font-bold text-sm sm:text-base px-6 py-3.5 uppercase tracking-wider hover:border-ikada-volt transition-all duration-150 flex items-center gap-2"
          >
            <Sliders className="w-4 h-4 text-ikada-volt" />
            Eksplorasi Bank Ide
          </a>
        </div>

        {/* Quotes Callout */}
        <div className="mt-12 inline-block bg-ikada-surface/80 border border-ikada-border/80 px-4 py-2.5 rounded-lg text-xs sm:text-sm text-zinc-400 font-mono">
          <span className="text-ikada-amber font-bold">PRD UPDATE:</span> Divisi Production kini resmi dibagi: 
          <span className="text-white font-bold mx-1">Shooting (Paris)</span> &amp; 
          <span className="text-white font-bold mx-1">Peralatan (Teo)</span>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a href="#manifesto" className="text-zinc-500 hover:text-ikada-volt transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
}
