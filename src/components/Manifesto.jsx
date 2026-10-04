import React from 'react';
import { Target, Sparkles, Compass, ShieldCheck } from 'lucide-react';

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
      <div className="flex items-center gap-2 text-xs font-mono text-ikada-volt uppercase tracking-widest mb-3">
        <Compass className="w-4 h-4" />
        <span>01 // FILOSOFI & KARAKTER</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7">
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
            KONTEN BAGUS BUKAN CUMA YANG RAMAI, <br />
            <span className="text-zinc-500">TAPI YANG BIKIN ORANG INGAT IKADA.</span>
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed mb-4">
            IKADA bukan sekadar kumpul-kumpul bikin video tanpa arah. Kita mengubah obrolan, interaksi, dan energi 
            tongkrongan yang sudah ada menjadi karya yang konsisten, berkarakter, dan bermanfaat buat penonton.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Kita nggak harus ikut semua tren TikTok/Reels yang lewat. Tren boleh dipakai kalau pas sama karakter kita. 
            Fokus nomor satu kita adalah: <strong className="text-white">konsisten membangun identitas</strong>.
          </p>
        </div>

        {/* Roadmap Milestones Cards */}
        <div className="lg:col-span-5 bg-ikada-surface border border-ikada-border p-6 rounded-none relative">
          <div className="absolute -top-3 right-4 bg-zinc-800 text-zinc-300 px-3 py-0.5 text-xs font-mono uppercase tracking-wider border border-zinc-700">
            Roadmap Tim
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-ikada-volt" />
            Target Perkembangan
          </h3>
          <div className="space-y-4 text-xs font-mono">
            <div className="p-3 bg-ikada-panel border-l-2 border-ikada-volt">
              <span className="text-ikada-volt font-bold uppercase block mb-1">Bulan 1 // Memulai</span>
              <p className="text-zinc-300 font-sans text-xs">Bangun ritme kerja, coba berbagai format, kenali chemistry tim, dan hasilkan 4–8 konten pertama.</p>
            </div>
            <div className="p-3 bg-ikada-panel border-l-2 border-cyan-400">
              <span className="text-cyan-400 font-bold uppercase block mb-1">Bulan 2-3 // Memperkuat</span>
              <p className="text-zinc-300 font-sans text-xs">Kunci series favorit audience, naikkan standar visual & sound, jaga konsistensi jadwal upload.</p>
            </div>
            <div className="p-3 bg-ikada-panel border-l-2 border-ikada-amber">
              <span className="text-ikada-amber font-bold uppercase block mb-1">Jangka Panjang // Berkembang</span>
              <p className="text-zinc-300 font-sans text-xs">Tumbuh jadi media komunitas mandiri, partner kolaborasi brand lokal, dan wadah bertumbuhnya kawan-kawan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Karakter Konten Badges */}
      <div className="mt-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-ikada-volt" />
          <span>8 DNA Karakter Konten IKADA</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {characters.map((item, idx) => (
            <div
              key={idx}
              className="bg-ikada-surface border border-ikada-border p-4 hover:border-ikada-volt transition-all duration-150 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-zinc-500 font-bold">0{idx + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover:bg-ikada-volt transition-colors" />
              </div>
              <h4 className="font-display font-black text-lg text-white group-hover:text-ikada-volt transition-colors uppercase mb-1">
                {item.name}
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
