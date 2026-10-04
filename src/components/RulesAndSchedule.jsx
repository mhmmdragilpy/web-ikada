import React from 'react';
import { Calendar, ShieldAlert, CheckCircle, Clock, Zap } from 'lucide-react';
import { PRD_DATA } from '../data/prdData';

export default function RulesAndSchedule() {
  const weeklyTargets = [
    { div: "CREATIVE", target: "5 Ide baru & min. 1 konsep siap produksi" },
    { div: "PROD — SHOOTING", target: "Min. 1 sesi shooting dengan footage berlimpah & multi-angle" },
    { div: "PROD — PERALATAN", target: "Seluruh gear, mic & batre dicek siap 100% sebelum take" },
    { div: "EDITING", target: "1–2 video final siap tonton sesuai kapasitas" },
    { div: "TALENT", target: "Hadir on-time, jaga mood & siap hajar depan kamera" },
    { div: "PUBLISHING", target: "1–2 posting terjadwal + rekap respon & performa data" }
  ];

  return (
    <section id="jadwal" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-ikada-border">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-ikada-volt uppercase tracking-widest mb-3">
        <Calendar className="w-4 h-4" />
        <span>06 // ATURAN MAIN &amp; RITME MINGGUAN</span>
      </div>

      <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
        CARA KITA BERMAIN BERSAMA
      </h2>
      <p className="text-zinc-400 text-sm max-w-2xl mb-12">
        Agar tongkrongan tetap guyub, asyik, dan karya tetap lahir tanpa bikin kawan burnout atau tersinggung.
      </p>

      {/* Grid: 6 Golden Rules & Content Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Rules */}
        <div className="lg:col-span-7 bg-ikada-surface border border-ikada-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-ikada-volt" />
            <h3 className="font-display font-bold text-lg text-white uppercase">
              6 Prinsip Kerja di Tongkrongan
            </h3>
          </div>

          <div className="space-y-4">
            {PRD_DATA.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-ikada-panel border-l-2 border-ikada-volt">
                <span className="font-mono text-xs text-ikada-volt font-bold shrink-0">
                  #{idx + 1}
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-zinc-200 uppercase">
                    {rule.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Boundaries / Red Lines */}
        <div className="lg:col-span-5 bg-ikada-surface border border-ikada-border p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-ikada-amber">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg uppercase text-white">
                Garis Merah Konten
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Guyonan boleh liar dan pecah, tapi harga diri orang lain dan nama baik IKADA tetap nomor satu. 
              <strong className="text-zinc-200"> Mutlak hindari:</strong>
            </p>

            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="p-2 bg-red-950/20 border border-red-900/40 text-red-300 flex items-center gap-2">
                <span>🚫</span> Bullying jahat &amp; permalukan berlebihan
              </li>
              <li className="p-2 bg-red-950/20 border border-red-900/40 text-red-300 flex items-center gap-2">
                <span>🚫</span> SARA, ujaran kebencian &amp; adu domba
              </li>
              <li className="p-2 bg-red-950/20 border border-red-900/40 text-red-300 flex items-center gap-2">
                <span>🚫</span> Buka aib atau data pribadi tanpa izin (Doxxing)
              </li>
              <li className="p-2 bg-red-950/20 border border-red-900/40 text-red-300 flex items-center gap-2">
                <span>🚫</span> Challenge membahayakan fisik / nyawa kawan
              </li>
            </ul>
          </div>

          <div className="mt-6 p-3 bg-zinc-900 border border-zinc-800 text-xs font-mono text-center">
            <span className="text-ikada-volt font-bold">GOLDEN RULE:</span> Kalau ragu, review dulu bareng-bareng sebelum upload!
          </div>
        </div>
      </div>

      {/* Weekly Schedule Timeline */}
      <div className="bg-ikada-surface border border-ikada-border p-6 sm:p-8 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-ikada-border">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-ikada-volt" />
            <h3 className="font-display font-bold text-lg text-white uppercase">
              Ritme Rutin Mingguan
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Target Awal: 1–2 Konten Utama / Minggu
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRD_DATA.schedule.map((item, idx) => (
            <div key={idx} className="bg-ikada-panel p-4 border border-zinc-800 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-black text-sm text-ikada-volt uppercase">
                  {item.day}
                </span>
                <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 border border-zinc-700">
                  {item.badge}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-white uppercase mb-2">
                {item.agenda}
              </h4>
              <div className="text-[11px] font-mono text-zinc-400">
                PIC: <span className="text-zinc-200">{item.pic}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Mingguan Tiap Divisi */}
      <div className="bg-gradient-to-r from-ikada-panel via-ikada-surface to-ikada-panel border border-zinc-800 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-ikada-volt" />
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            Target Mingguan Setiap Divisi
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {weeklyTargets.map((item, i) => (
            <div key={i} className="p-3 bg-ikada-bg/80 border border-zinc-800 text-xs">
              <span className="font-mono text-ikada-volt font-bold block mb-1">{item.div}</span>
              <p className="text-zinc-300 font-sans">{item.target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
