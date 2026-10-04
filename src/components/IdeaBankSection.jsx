import React, { useState } from 'react';
import { Lightbulb, Search, Copy, Check, Dices } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRD_DATA } from '../data/prdData';

export default function IdeaBankSection() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [randomHighlight, setRandomHighlight] = useState(null);

  const tags = ['ALL', 'Challenge', 'Guyonan', 'Review', 'Masyarakat', 'Sport', 'Kebersamaan', 'Pendidikan'];

  const filteredIdeas = PRD_DATA.ideabank.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.category.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'ALL' || item.category.toLowerCase().includes(selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handlePickRandom = () => {
    if (PRD_DATA.ideabank.length === 0) return;
    const randomIndex = Math.floor(Math.random() * PRD_DATA.ideabank.length);
    const chosen = PRD_DATA.ideabank[randomIndex];
    setRandomHighlight(chosen);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e2f952', '#ff5722', '#ffffff']
    });
  };

  return (
    <section id="bank-ide" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-ikada-border">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-ikada-volt uppercase tracking-widest mb-3">
        <Lightbulb className="w-4 h-4" />
        <span>05 // BANK IDE AWAL</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            AMUNISI KONTEN TONGKRONGAN
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Ide-ide awal yang siap dieksplorasi tim Creative. Boleh dicomot, dimodifikasi, 
            atau digabung dengan kejadian nyata di lapangan.
          </p>
        </div>

        {/* Random Idea Trigger Button */}
        <button
          onClick={handlePickRandom}
          className="bg-ikada-amber hover:bg-orange-500 text-white font-mono font-bold text-xs px-4 py-2.5 uppercase tracking-wider transition-all flex items-center gap-2 self-start md:self-end shadow-brutal-card active:translate-x-1 active:translate-y-1"
        >
          <Dices className="w-4 h-4" />
          <span>Kocok Ide Acak Hari Ini!</span>
        </button>
      </div>

      {/* Randomly Picked Spotlight Modal/Card */}
      {randomHighlight && (
        <div className="mb-8 p-5 bg-gradient-to-r from-ikada-surface via-ikada-panel to-ikada-surface border-2 border-ikada-volt relative">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="font-mono text-xs bg-ikada-volt text-black px-2 py-0.5 font-bold uppercase">
              🎯 IDE TERPILIH HARI INI
            </span>
            <button
              onClick={() => setRandomHighlight(null)}
              className="text-xs font-mono text-zinc-500 hover:text-white"
            >
              [Tutup]
            </button>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase mt-2 mb-3">
            "{randomHighlight.title}"
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              Kategori: <strong className="text-zinc-200">{randomHighlight.category}</strong>
            </span>
            <button
              onClick={() => handleCopy(randomHighlight.title, 'spotlight')}
              className="flex items-center gap-1.5 text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 border border-zinc-700"
            >
              {copiedIndex === 'spotlight' ? <Check className="w-3.5 h-3.5 text-ikada-volt" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedIndex === 'spotlight' ? 'Tersalin!' : 'Copy Ide'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                selectedTag === tag
                  ? 'bg-zinc-100 text-black font-bold'
                  : 'bg-ikada-panel text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari ide..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-ikada-panel border border-zinc-800 text-zinc-200 text-xs pl-9 pr-3 py-2 rounded-none focus:outline-none focus:border-ikada-volt font-mono placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredIdeas.map((idea, index) => (
          <div
            key={index}
            className="bg-ikada-surface border border-ikada-border p-4 flex flex-col justify-between hover:border-zinc-500 transition-all duration-150 group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                <span className="text-zinc-500 uppercase">{idea.category}</span>
                <span className="text-[10px] bg-zinc-800 text-ikada-volt px-1.5 py-0.5 border border-zinc-700">
                  {idea.tag}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm text-zinc-200 group-hover:text-white transition-colors leading-snug">
                "{idea.title}"
              </h4>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-600">IKADA CREW DRAFT</span>
              <button
                onClick={() => handleCopy(idea.title, index)}
                className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-ikada-volt transition-colors"
                title="Salin judul ide ke clipboard"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-3 h-3 text-ikada-volt" />
                    <span className="text-ikada-volt">Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
