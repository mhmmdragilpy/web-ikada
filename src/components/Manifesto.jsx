import React from 'react';
import { Target, Sparkles, Compass } from 'lucide-react';

export default function Manifesto() {
  const characters = [
    { name: "Natural", desc: "Nggak kaku, nggak terasa dibuat-buat. Apa adanya tongkrongan kita." },
    { name: "Dekat Masyarakat", desc: "Mengangkat hal-hal nyata di sekitar kita, warung, tetangga, jalanan." },
    { name: "Menghibur", desc: "Punya punchline atau alasan kuat bikin orang betah nonton sampai habis." },
    { name: "Positif", desc: "Tetap seru dan liar tanpa merugikan orang atau bikin malu berlebihan." },
    { name: "Kreatif", desc: "Nggak takut eksperimen angle baru, format gila, dan ide out of the box." },
    { name: "Spontan", desc: "Beri ruang buat momen tak terduga yang justru sering jadi bagian terbaik." },
    { name: "Relatable", desc: "Keseharian yang bikin penonton nyeletuk: 'Wah, ini mah gue banget!'" },
    { name: "Punya Cerita", desc: "Bukan sekadar video aesthetic kosong, tapi ada benang merah cerita." }
  ];

  return (
    <section id="manifesto" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Tag */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-900 dark:text-ikada-volt uppercase tracking-widest mb-3">
        <Compass className="w-4 h-4" />
        <span>01 // FILOSOFI &amp; KARAKTER</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7">
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
            KONTEN BAGUS BUKAN CUMA YANG RAMAI, <br />
            <span className="text-zinc-500">TAPI YANG BIKIN ORANG INGAT IKADA.</span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed mb-4">
            Bagi kita di IKADA, tujuan besarnya adalah <strong className="text-zinc-900 dark:text-white font-bold">menghadirkan hiburan yang bermakna</strong> sekaligus menjadi <strong className="text-zinc-900 dark:text-white font-bold">ruang bertumbuh buat kawan-kawan menemukan potensi terbaiknya</strong>.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Kita percaya setiap anak di tongkrongan punya keunikan dan bakatnya masing-masing. Lewat proses bikin konten bareng—mulai dari ide, teknis kamera, peran di depan lensa, hingga editing—kita belajar, saling dukung, dan membuktikan bahwa karya yang lahir dari rasa kebersamaan selalu punya daya pikat tersendiri.
          </p>
        </div>

        {/* Roadmap Milestones Cards */}
        <div className="lg:col-span-5 bg-white dark:bg-ikada-surface border border-zinc-300 dark:border-ikada-border p-6 rounded-none relative shadow-sm">
          <div className="absolute -top-3 right-4 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-300 px-3 py-0.5 text-xs font-mono uppercase tracking-wider border border-zinc-700">
            Roadmap Tim
          </div>
          <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-ikada-amber dark:text-ikada-volt" />
            Target Perkembangan
          </h3>
          <div className="space-y-4 text-xs font-mono">
            <div className="p-3 bg-zinc-50 dark:bg-ikada-panel border-l-2 border-zinc-900 dark:border-ikada-volt">
              <span className="text-zinc-900 dark:text-ikada-volt font-bold uppercase block mb-1">Bulan 1 // Memulai</span>
              <p className="text-zinc-700 dark:text-zinc-300 font-sans text-xs">Bangun ritme kerja, coba berbagai format, kenali chemistry tim, dan hasilkan 4–8 konten pertama.</p>
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-ikada-panel border-l-2 border-cyan-600 dark:border-cyan-400">
              <span className="text-cyan-700 dark:text-cyan-400 font-bold uppercase block mb-1">Bulan 2-3 // Memperkuat</span>
              <p className="text-zinc-700 dark:text-zinc-300 font-sans text-xs">Kunci series favorit audience, naikkan standar visual &amp; sound, jaga konsistensi jadwal upload.</p>
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-ikada-panel border-l-2 border-ikada-amber">
              <span className="text-ikada-amber font-bold uppercase block mb-1">Jangka Panjang // Berkembang</span>
              <p className="text-zinc-700 dark:text-zinc-300 font-sans text-xs">Tumbuh jadi media komunitas mandiri, partner kolaborasi brand lokal, dan wadah bertumbuhnya kawan-kawan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Karakter Konten Badges */}
      <div className="mt-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-ikada-amber dark:text-ikada-volt" />
          <span>8 DNA Karakter Konten IKADA</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {characters.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-ikada-surface border border-zinc-200 dark:border-ikada-border p-4 hover:border-black dark:hover:border-ikada-volt transition-all duration-150 group shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 font-bold">0{idx + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-ikada-volt transition-colors" />
              </div>
              <h4 className="font-display font-black text-lg text-zinc-900 dark:text-white group-hover:text-black dark:group-hover:text-ikada-volt transition-colors uppercase mb-1">
                {item.name}
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
