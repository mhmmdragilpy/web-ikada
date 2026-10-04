import React, { useState } from 'react';
import { GitCommit, ArrowRight, Play, CheckSquare, RefreshCw } from 'lucide-react';
import { PRD_DATA } from '../data/prdData';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const formulaSteps = [
    { title: "HOOK", desc: "3-5 detik pertama. Bikin penonton stop scrolling dan penasaran." },
    { title: "MASALAH / PERTANYAAN", desc: "Kasih tahu apa yang mau kita coba atau buktikan hari ini." },
    { title: "PROSES", desc: "Aksi nyata, kendala lucu di jalan, obrolan spontan, dan usaha tim." },
    { title: "MOMEN UTAMA", desc: "Puncak ketegangan, klimaks aksi, atau kejadian paling mengejutkan." },
    { title: "HASIL / PUNCHLINE", desc: "Jawaban dari tantangan, kesimpulan kocak, atau reaksi warga." },
    { title: "CLOSING", desc: "Call to action santai & tinggalkan kesan manis buat konten berikutnya." }
  ];

  const evalQuestions = [
    { q: "Apa yang harus diulang?", note: "Elemen yang terbukti bikin penonton suka dan efektif." },
    { q: "Apa yang harus diperbaiki?", note: "Audio kurang jernih, pacing terlalu lambat, atau hook kurang nendang." },
    { q: "Apa yang harus dihentikan?", note: "Format yang garing, bikin capek berlebihan, atau memicu resiko buruk." },
    { q: "Apa yang belum pernah kita coba?", note: "Ide liar baru yang layak kita eksplorasi di minggu depan." }
  ];

  return (
    <section id="alur" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-200 dark:border-ikada-border">
      {/* Section Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-900 dark:text-ikada-volt uppercase tracking-widest mb-3">
        <GitCommit className="w-4 h-4" />
        <span>03 // ALUR KERJA &amp; FORMULA KONTEN</span>
      </div>

      <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-zinc-900 dark:text-white mb-4">
        DARI IDE SAMPAI TAYANG
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-2xl mb-12">
        Alur kerja konten adalah siklus yang terus berputar: bukan garis lurus yang selesai di upload, 
        tetapi berlanjut ke evaluasi data untuk melahirkan ide berikutnya yang lebih matang.
      </p>

      {/* 9-Step Interactive Timeline */}
      <div className="bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-ikada-border p-5 sm:p-8 mb-12 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-200 dark:border-ikada-border">
          <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
            Siklus 9 Tahap Produksi IKADA
          </span>
          <span className="text-xs font-mono text-zinc-700 dark:text-ikada-volt font-bold">
            Klik tahap untuk melihat detail:
          </span>
        </div>

        {/* Step buttons bar */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-6 overflow-x-auto pb-1">
          {PRD_DATA.workflow.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 text-center border transition-all duration-150 min-w-[70px] ${
                  isActive
                    ? 'bg-black text-white dark:bg-ikada-volt dark:text-black border-black dark:border-ikada-volt font-bold shadow-sm'
                    : 'bg-zinc-50 dark:bg-ikada-panel text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white hover:border-zinc-400'
                }`}
              >
                <span className="block text-[10px] font-mono opacity-80">{item.step}</span>
                <span className="font-display font-bold text-xs uppercase block truncate">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Box */}
        <div className="p-5 bg-zinc-50 dark:bg-ikada-panel border-l-4 border-zinc-900 dark:border-ikada-volt flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-zinc-800 dark:text-ikada-volt font-bold">
                LANGKAH {PRD_DATA.workflow[activeStep].step}
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">//</span>
              <h4 className="font-display font-black text-lg text-zinc-900 dark:text-white uppercase">
                {PRD_DATA.workflow[activeStep].title}
              </h4>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm">
              {PRD_DATA.workflow[activeStep].desc}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
            <span>Next: {PRD_DATA.workflow[(activeStep + 1) % PRD_DATA.workflow.length].title}</span>
            <ArrowRight className="w-4 h-4 text-zinc-900 dark:text-ikada-volt" />
          </div>
        </div>
      </div>

      {/* Two Column: Content Formula & Evaluation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formula Box */}
        <div className="bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-ikada-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Play className="w-4 h-4 text-ikada-amber" />
            <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white uppercase">
              Formula Dasar Konten IKADA
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
            Formula ini bukan dogma kaku, tapi panduan agar video punya ritme dan penonton tidak bosan:
          </p>

          <div className="space-y-2.5 font-mono text-xs">
            {formulaSteps.map((step, i) => (
              <div key={i} className="p-2.5 bg-zinc-50 dark:bg-ikada-panel border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                <span className="text-zinc-900 dark:text-ikada-volt font-bold shrink-0">{i + 1}.</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white block font-display text-xs">{step.title}</strong>
                  <span className="text-zinc-600 dark:text-zinc-400 font-sans text-xs">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Box */}
        <div className="bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-ikada-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white uppercase">
              4 Pertanyaan Evaluasi Mingguan
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
            Prinsip evaluasi: Bukan mencari siapa yang salah, tapi apa yang harus kita perbaiki bareng-bareng:
          </p>

          <div className="space-y-3">
            {evalQuestions.map((item, i) => (
              <div key={i} className="p-3 bg-zinc-50 dark:bg-ikada-panel border-l-2 border-cyan-600 dark:border-cyan-400">
                <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {item.q}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
            📊 <strong className="text-zinc-900 dark:text-zinc-200">Metrik yang dipantau:</strong> Views, Retention, Likes, Komentar, Share &amp; Follower Growth.
          </div>
        </div>
      </div>
    </section>
  );
}
