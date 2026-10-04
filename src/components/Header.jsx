import React from 'react';
import { Video, Disc, BatteryMedium, Sliders, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative pt-6 pb-16 px-4 md:px-8 border-b border-zinc-200 dark:border-ikada-border halftone-dots overflow-hidden transition-colors">
      {/* Camcorder Viewfinder Framing Corners */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-zinc-800 dark:border-ikada-volt pointer-events-none" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-zinc-800 dark:border-ikada-volt pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-zinc-800 dark:border-ikada-volt pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-zinc-800 dark:border-ikada-volt pointer-events-none" />

      {/* Camcorder Status Bar */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400 gap-3 mb-10 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ikada-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-ikada-amber"></span>
          </span>
          <span className="font-bold text-zinc-900 dark:text-white tracking-widest">● REC</span>
          <span className="text-zinc-400 dark:text-zinc-600">|</span>
          <span className="text-zinc-900 dark:text-ikada-volt font-bold">00:24:19</span>
          <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">|</span>
          <span className="hidden sm:inline">4K // 60FPS</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
          <span className="hidden md:inline">ISO 800</span>
          <span className="hidden md:inline">F/2.8</span>
          <div className="flex items-center gap-1.5 text-zinc-900 dark:text-ikada-volt bg-zinc-100 dark:bg-ikada-surface px-2.5 py-1 rounded-none border border-zinc-300 dark:border-ikada-border">
            <BatteryMedium className="w-4 h-4 text-ikada-amber dark:text-ikada-volt" />
            <span className="font-bold text-[11px]">88% READY</span>
          </div>
        </div>
      </div>

      {/* Hero Body */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Street Stencil Badge */}
        <div className="inline-flex items-center gap-2 bg-ikada-volt text-black font-mono font-bold text-xs uppercase px-3 py-1 mb-6 rotate-[-1deg] shadow-brutal-black dark:shadow-brutal-white tracking-wider">
          <Disc className="w-3.5 h-3.5 animate-spin" />
          <span>PROJECT INFORMATION // IKADA KONTEN CREW</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.95] mb-6 text-zinc-900 dark:text-white">
          DARI TONGKRONGAN <br />
          <span className="text-black dark:text-ikada-volt underline decoration-wavy decoration-ikada-amber underline-offset-8">
            JADI CERITA.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
          Fokus utama kita simpel: <strong className="text-zinc-900 dark:text-white font-semibold">menghibur</strong> dan jadi wadah seru buat anak-anak <span className="text-zinc-900 dark:text-ikada-volt font-bold">IKADA</span> berkembang nemuin potensi dirinya. Jaman sekarang kalau nongkrong gak ngonten rasanya gak afdol—dari obrolan santai, kita bikin karya bareng yang pecah!
        </p>

        {/* Tongkrongan Punchline Pill */}
        <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-ikada-surface border border-zinc-300 dark:border-zinc-700/80 px-4 py-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-8 shadow-sm">
          <span>⚡</span>
          <span className="italic">“Jaman sekarang kalau gak ngonten rasanya gak afdol!”</span>
          <span className="text-zinc-400 dark:text-zinc-600">//</span>
          <span className="text-zinc-900 dark:text-ikada-volt font-bold">#BerkembangBareng</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#struktur"
            className="w-full sm:w-auto justify-center bg-ikada-volt text-black font-display font-bold text-sm sm:text-base px-6 py-3.5 uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 shadow-brutal-black dark:shadow-brutal-white flex items-center gap-2"
          >
            <Video className="w-4 h-4" />
            Cek Divisi & Tim
          </a>
          <a
            href="#bank-ide"
            className="w-full sm:w-auto justify-center bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-ikada-border text-zinc-900 dark:text-white font-display font-bold text-sm sm:text-base px-6 py-3.5 uppercase tracking-wider hover:border-black dark:hover:border-ikada-volt transition-all duration-150 flex items-center gap-2"
          >
            <Sliders className="w-4 h-4 text-zinc-900 dark:text-ikada-volt" />
            Eksplorasi Bank Ide
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <a href="#manifesto" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-ikada-volt transition-colors animate-bounce p-2">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
}
