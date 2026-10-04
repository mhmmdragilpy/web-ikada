import React, { useState } from 'react';
import { Layers, Shuffle, Sparkles, Trophy, BookOpen, Smile, Zap, Coffee, HeartHandshake, Music, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRD_DATA } from '../data/prdData';
import { playDiceRollSound, playClickSound } from '../utils/soundEffects';

export default function PillarsSection() {
  const [combo, setCombo] = useState(null);

  const getPillarIcon = (name) => {
    switch (name) {
      case 'Trophy': return Trophy;
      case 'BookOpen': return BookOpen;
      case 'Smile': return Smile;
      case 'Zap': return Zap;
      case 'Coffee': return Coffee;
      case 'HeartHandshake': return HeartHandshake;
      case 'Music': return Music;
      case 'Users': return Users;
      default: return Layers;
    }
  };

  const generateCombo = () => {
    playDiceRollSound();
    const list = PRD_DATA.pillars;
    const p1 = list[Math.floor(Math.random() * list.length)];
    let p2 = list[Math.floor(Math.random() * list.length)];
    while (p2.id === p1.id) {
      p2 = list[Math.floor(Math.random() * list.length)];
    }

    const sampleIdeas = [
      `Format gabungan: Eksperimen seru menggabungkan energi ${p1.name} dengan interaksi ${p2.name}!`,
      `Contoh: Bikin challenge ${p1.name} di lingkungan warga sekitar sambil ngobrol santai ${p2.name}.`,
      `Konsep: Adu skill ${p1.name} dengan bumbu humor kocak ${p2.name}.`
    ];

    setCombo({
      p1: p1.name,
      p2: p2.name,
      desc: sampleIdeas[Math.floor(Math.random() * sampleIdeas.length)]
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#e2f952', '#00e5ff', '#ff5722']
    });
  };

  const formats = [
    { title: "Short Content", desc: "Durasi pendek (30-60s), tempo kilat, hook instan untuk Reels/TikTok/Shorts." },
    { title: "Long Content", desc: "Cerita mendalam, vlog eksplorasi, atau pertandingan utuh untuk YouTube." },
    { title: "Series", desc: "Format tematik berulang yang jadi ciri khas (misal: 'Anak IKADA vs Warga Ep. 01')." },
    { title: "Street Interview", desc: "Tanya jawab santai, opini masyarakat, kuis jalanan berhadiah." },
    { title: "Challenge / Duel", desc: "Adu skill antar anggota atau lawan orang random dengan hukuman konyol." },
    { title: "Behind The Scenes", desc: "Kegagalan take, bloopers, obrolan rehat di warung kopi." }
  ];

  return (
    <section id="pilar" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-200 dark:border-ikada-border">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-900 dark:text-ikada-volt uppercase tracking-widest mb-3">
        <Layers className="w-4 h-4" />
        <span>04 // 8 PILAR &amp; FORMAT KONTEN</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-zinc-900 dark:text-white">
            APA SAJA YANG KITA BUAT?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-2xl">
            8 pilar fondasi konten IKADA. Pilar ini fleksibel: bisa berdiri sendiri atau dikombinasikan 
            untuk melahirkan konten yang segar dan gak membosankan.
          </p>
        </div>

        {/* Combo Generator Button */}
        <button
          onClick={generateCombo}
          className="bg-white dark:bg-ikada-surface border border-zinc-900 dark:border-ikada-volt text-zinc-900 dark:text-ikada-volt hover:bg-black hover:text-white dark:hover:bg-ikada-volt dark:hover:text-black font-mono font-bold text-xs px-4 py-2.5 uppercase tracking-wider transition-all flex items-center gap-2 self-start md:self-end shadow-brutal-black dark:shadow-brutal-card active:translate-x-1 active:translate-y-1"
        >
          <Shuffle className="w-4 h-4" />
          <span>Kocok Formula Kombinasi!</span>
        </button>
      </div>

      {/* Dynamic Combo Alert */}
      {combo && (
        <div className="mb-8 p-4 bg-zinc-100 dark:bg-gradient-to-r dark:from-ikada-panel dark:via-ikada-surface dark:to-ikada-panel border-2 border-zinc-900 dark:border-ikada-volt flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-300 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-zinc-900 text-white dark:bg-ikada-volt dark:text-black font-bold text-xs font-mono">
              FORMULA COMBO
            </span>
            <div>
              <span className="font-display font-black text-lg text-zinc-900 dark:text-white uppercase">
                {combo.p1} + {combo.p2}
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-sans mt-0.5">{combo.desc}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound();
              setCombo(null);
            }}
            className="text-xs text-zinc-500 hover:text-black dark:hover:text-white font-mono self-end sm:self-center p-1"
          >
            [Tutup]
          </button>
        </div>
      )}

      {/* 8 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {PRD_DATA.pillars.map((pillar) => {
          const Icon = getPillarIcon(pillar.icon);
          return (
            <div
              key={pillar.id}
              className="bg-white dark:bg-ikada-surface border border-zinc-200 dark:border-ikada-border p-5 hover:border-black dark:hover:border-zinc-500 transition-all duration-150 relative group shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-zinc-100 dark:bg-ikada-panel text-zinc-900 dark:text-ikada-volt border border-zinc-300 dark:border-zinc-800 group-hover:border-black dark:group-hover:border-ikada-volt transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase font-semibold">Pilar</span>
              </div>
              <h3 className="font-display font-black text-base text-zinc-900 dark:text-white uppercase group-hover:text-black dark:group-hover:text-ikada-volt transition-colors mb-2">
                {pillar.name}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* 6 Formats Subsection */}
      <div className="bg-zinc-50 dark:bg-ikada-surface/50 border border-zinc-200 dark:border-ikada-border p-6 sm:p-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-ikada-amber" />
          <span>Format Tayangan yang Bisa Digunakan</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {formats.map((fmt, idx) => (
            <div key={idx} className="p-3.5 bg-white dark:bg-ikada-panel/70 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <span className="font-mono text-[10px] text-amber-700 dark:text-ikada-amber block mb-1 font-bold">FORMAT 0{idx + 1}</span>
              <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white uppercase mb-1">{fmt.title}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans">{fmt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
