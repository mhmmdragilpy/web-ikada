import React, { useState } from 'react';
import { Users, Shield, CheckCircle2, ChevronRight, Award, Camera, Wrench, Sparkles, Scissors, UserCheck, Share2 } from 'lucide-react';
import { PRD_DATA } from '../data/prdData';

export default function CrewSection() {
  const [selectedDiv, setSelectedDiv] = useState(PRD_DATA.divisions[1]); // default to prod-shooting

  const getIcon = (id) => {
    switch (id) {
      case 'creative': return Sparkles;
      case 'prod-shooting': return Camera;
      case 'prod-peralatan': return Wrench;
      case 'editing': return Scissors;
      case 'talent': return UserCheck;
      case 'publishing': return Share2;
      default: return Users;
    }
  };

  return (
    <section id="struktur" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-200 dark:border-ikada-border">
      {/* Section Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-900 dark:text-ikada-volt uppercase tracking-widest mb-3">
        <Users className="w-4 h-4" />
        <span>02 // STRUKTUR &amp; PEMBAGIAN TUGAS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-zinc-900 dark:text-white">
            SIAPA MENJALANKAN APA?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-2xl">
            Tanggung jawab dibuat jelas agar eksekusi di lapangan rapi, bukan buat bikin sekat antar kawan. 
            Semua divisi saling menopang satu sama lain.
          </p>
        </div>

        {/* Note on Secretary / Treasury */}
        <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-ikada-surface px-3 py-2 border border-zinc-300 dark:border-ikada-border self-start md:self-end">
          *Sekretaris &amp; Bendahara belum dimasukkan
        </div>
      </div>

      {/* Penasehat Bar */}
      <div className="bg-zinc-100 dark:bg-gradient-to-r dark:from-zinc-900 dark:via-ikada-surface dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700/80 p-5 mb-10 relative shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white dark:bg-ikada-panel border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-ikada-volt">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-zinc-600 dark:text-zinc-400 block tracking-wider">
                Arahan &amp; Pertimbangan Utama
              </span>
              <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white uppercase">
                DEWAN PENASEHAT IKADA
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {PRD_DATA.penasehat.map((advisor, i) => (
              <div
                key={i}
                className="bg-white dark:bg-ikada-panel border border-zinc-300 dark:border-zinc-700 px-3.5 py-1.5 flex items-center gap-2"
              >
                <Award className="w-3.5 h-3.5 text-ikada-amber dark:text-ikada-volt" />
                <span className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-200">{advisor.name}</span>
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5">Penasehat</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Division Selector & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Division List (Scrollable on small mobile) */}
        <div className="lg:col-span-5 space-y-2.5">
          {PRD_DATA.divisions.map((div) => {
            const Icon = getIcon(div.id);
            const isSelected = selectedDiv.id === div.id;

            return (
              <button
                key={div.id}
                onClick={() => setSelectedDiv(div)}
                className={`w-full text-left p-4 border transition-all duration-150 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white dark:bg-ikada-surface border-zinc-900 dark:border-ikada-volt shadow-brutal-black dark:shadow-brutal-card translate-x-1'
                    : 'bg-zinc-50 dark:bg-ikada-panel/40 border-zinc-200 dark:border-ikada-border hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-white dark:hover:bg-ikada-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-none border ${
                      isSelected
                        ? 'bg-black text-white dark:bg-ikada-volt dark:text-black border-black dark:border-ikada-volt'
                        : 'bg-white dark:bg-ikada-panel text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 group-hover:text-black dark:group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-zinc-900 dark:text-white group-hover:text-black dark:group-hover:text-ikada-volt transition-colors">
                      {div.name}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block">
                      Koordinator: <strong className="text-zinc-800 dark:text-zinc-200">{div.coordinator}</strong>
                    </span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-zinc-900 dark:text-ikada-volt translate-x-1' : 'text-zinc-400 dark:text-zinc-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Side: Selected Division Deep Dive */}
        <div className="lg:col-span-7 bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-ikada-border p-6 sm:p-8 relative shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-ikada-border">
            <div>
              <span className={`inline-block font-mono text-[11px] font-bold uppercase px-2.5 py-1 border mb-2 ${selectedDiv.tagColor}`}>
                Koordinator: {selectedDiv.coordinator}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-900 dark:text-white uppercase">
                {selectedDiv.name}
              </h3>
              <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1">
                {selectedDiv.subtitle}
              </p>
            </div>

            {/* Principle badge */}
            <div className="bg-zinc-100 dark:bg-ikada-panel border border-zinc-200 dark:border-zinc-700/80 p-3 sm:text-right">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Prinsip Kerja</span>
              <p className="text-xs font-display font-bold text-zinc-800 dark:text-zinc-200 italic mt-0.5">
                "{selectedDiv.principle}"
              </p>
            </div>
          </div>

          {/* Members */}
          <div className="my-6">
            <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 tracking-wider block mb-2.5">
              Anggota Tim ({selectedDiv.members.length} Orang):
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedDiv.members.map((member, i) => {
                const isKoord = member === selectedDiv.coordinator || selectedDiv.coordinator.startsWith(member);
                const isSementara = selectedDiv.coordinator.includes('Sementara');

                return (
                  <span
                    key={i}
                    className={`px-3 py-1 font-mono text-xs border ${
                      isKoord
                        ? 'bg-zinc-900 text-white dark:bg-zinc-800 dark:text-ikada-volt border-black dark:border-ikada-volt font-bold'
                        : 'bg-zinc-100 text-zinc-700 dark:bg-ikada-panel dark:text-zinc-300 border-zinc-300 dark:border-zinc-700'
                    }`}
                  >
                    {member} {isKoord && (isSementara ? '(Koord Sementara)' : '(Koord)')}
                  </span>
                );
              })}
            </div>
            {selectedDiv.note && (
              <p className="text-[11px] font-mono text-amber-800 dark:text-ikada-amber mt-2.5 bg-amber-50 dark:bg-ikada-amber/10 border border-amber-300 dark:border-ikada-amber/30 p-2">
                ℹ️ {selectedDiv.note}
              </p>
            )}
          </div>

          {/* Responsibilities list */}
          <div className="mb-6">
            <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 tracking-wider block mb-3">
              Tanggung Jawab &amp; Fokus:
            </span>
            <ul className="space-y-2.5">
              {selectedDiv.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-ikada-volt shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Minimal Output Standard */}
          <div className="p-3.5 bg-zinc-50 dark:bg-ikada-panel/80 border-t border-zinc-200 dark:border-ikada-border text-xs font-mono">
            <span className="text-zinc-500 uppercase block mb-1">Standar Output Minimal:</span>
            <span className="text-zinc-900 dark:text-white font-semibold">{selectedDiv.outputMinimal}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
