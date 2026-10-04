export const PRD_DATA = {
  meta: {
    title: "Project Konten IKADA",
    status: "Inisiasi / Draft",
    motto: "Dari tongkrongan, jadi cerita. Dari cerita, jadi konten. Dari konten, jadi karya.",
    goal: "Mengenalkan Project Konten IKADA dan bagaimana kita akan menjalankannya bersama."
  },
  penasehat: [
    { name: "Om Pren", role: "Penasehat Proyek" },
    { name: "Aa Bayu", role: "Penasehat Proyek" },
    { name: "Om Anek", role: "Penasehat Proyek" }
  ],
  divisions: [
    {
      id: "creative",
      name: "CREATIVE",
      subtitle: "Konsep, Skrip & Storytelling",
      coordinator: "Atria",
      members: ["Ragil", "Said", "Atria"],
      focus: "Menentukan APA yang akan dibuat",
      principle: "Arah cerita harus jelas sebelum turun ke lapangan.",
      tagColor: "border-amber-600 dark:border-amber-500/60 text-amber-900 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10",
      accent: "#f59e0b",
      responsibilities: [
        "Mencari & mengembangkan ide",
        "Menentukan tema, tujuan & target penonton",
        "Menyusun konsep, alur cerita & skrip",
        "Menentukan hook, ending, talent, lokasi & properti",
        "Memberikan brief produksi yang jelas"
      ],
      outputMinimal: "Judul kerja, tema, alur, hook, ending, talent, lokasi & catatan produksi."
    },
    {
      id: "prod-shooting",
      name: "PRODUCTION — SHOOTING",
      subtitle: "Camera, Framing & Visual Capture",
      coordinator: "Paris",
      members: ["Azzam", "Latief", "Paris"],
      focus: "Mengubah konsep menjadi FOOTAGE berkualitas",
      principle: "Konsep sudah jelas, footage harus cukup.",
      tagColor: "border-zinc-900 dark:border-ikada-volt/60 text-zinc-950 dark:text-ikada-volt bg-zinc-200 dark:bg-ikada-volt/10 font-bold",
      accent: "#e2f952",
      responsibilities: [
        "Persiapan shooting & camera setup",
        "Framing, komposisi & posisi talent",
        "Pengambilan variasi shot (A-roll & B-roll)",
        "Monitoring kejernihan audio saat recording",
        "Cek kelengkapan footage sebelum tinggalin lokasi"
      ],
      outputMinimal: "Raw footage lengkap, multi-angle, audio jernih & sesuai brief."
    },
    {
      id: "prod-peralatan",
      name: "PRODUCTION — PERALATAN",
      subtitle: "Gear, Battery, Audio & Operasional",
      coordinator: "Teo",
      members: ["Danil", "Solay", "Paris"],
      focus: "Memastikan seluruh PERALATAN siap tempur",
      principle: "Sebelum talent siap, alat harus sudah siap.",
      tagColor: "border-cyan-600 dark:border-cyan-400/60 text-cyan-900 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10",
      accent: "#00e5ff",
      responsibilities: [
        "Cek kamera, baterai terisi penuh & memory card",
        "Setup & perawatan tripod, microphone & lighting",
        "Manajemen kabel, charger & aksesoris cadangan",
        "Membawa dan mengembalikan seluruh gear dengan aman",
        "Tanggap lapor jika ada alat bermasalah/rusak"
      ],
      outputMinimal: "Zero downtime teknis saat jadwal shooting tiba."
    },
    {
      id: "editing",
      name: "EDITING",
      subtitle: "Post-Production & Rhythm Crafting",
      coordinator: "Bagor",
      members: ["Asyabi", "Bagor", "Hasan", "Latief"],
      focus: "Mengubah footage mentah jadi video ENAK DITONTON",
      principle: "Editing tidak boleh mengubah makna atau konteks secara menyesatkan.",
      tagColor: "border-purple-600 dark:border-purple-400/60 text-purple-900 dark:text-purple-400 bg-purple-50 dark:bg-purple-400/10",
      accent: "#c084fc",
      responsibilities: [
        "Seleksi footage & rough cut",
        "Menyusun ritme, tempo & buang bagian bertele-tele",
        "Pemberian subtitle dinamis, sound effect & musik pas",
        "Color grading, preview internal & revisi",
        "Final export video sesuai format platform"
      ],
      outputMinimal: "Video final berirama cepat, audio seimbang & hook memikat."
    },
    {
      id: "talent",
      name: "TALENT",
      subtitle: "Karakter, Persona & Eksekusi Depan Kamera",
      coordinator: "Dea",
      members: ["Fathur", "Fahmi", "Ilyas", "Rizal", "Teo", "Andra", "Fawwaz", "Dea"],
      focus: "Membawa karakter & cerita IKADA ke depan kamera",
      principle: "Tampil natural, jaga energi, dan berani berinteraksi.",
      note: "Teo memiliki peran aktif sebagai Talent sekaligus Koordinator Peralatan Production.",
      tagColor: "border-pink-600 dark:border-pink-500/60 text-pink-900 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10",
      accent: "#ec4899",
      responsibilities: [
        "Memahami konsep & alur sebelum take",
        "Disiplin hadir tepat waktu sesuai jadwal",
        "Menjaga mood & energi positif di set",
        "Tampil natural tanpa dibuat-buat",
        "Improvisasi spontan yang memperkaya cerita"
      ],
      outputMinimal: "Ekspresi hidup, interaksi nyata & konsistensi karakter."
    },
    {
      id: "publishing",
      name: "PUBLISHING",
      subtitle: "Distribusi, Analytics & Audience Growth",
      coordinator: "Hasan",
      members: ["Bagor", "Fathur", "Hasan"],
      focus: "Memastikan konten SAMPAI dan TERDENGAR oleh audience",
      principle: "Publishing bukan sekadar upload. Konten → Penonton → Data → Evaluasi → Ide berikutnya.",
      tagColor: "border-emerald-600 dark:border-emerald-400/60 text-emerald-900 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10",
      accent: "#34d399",
      responsibilities: [
        "Quality check terakhir sebelum upload",
        "Menentukan platform, caption persuasif & copywriting",
        "Thumbnail / cover click-worthy yang tidak clickbait jahat",
        "Monitoring respon netizen & interaksi komentar awal",
        "Rekap performa data & feedback ke tim Creative"
      ],
      outputMinimal: "Upload terjadwal, engagement terpantau & laporan mingguan."
    }
  ],
  pillars: [
    { id: "sport", name: "SPORT", desc: "Futsal, basket, badminton, voli, tenis meja, running, skill challenge, 1v1, tanding bareng masyarakat.", icon: "Trophy" },
    { id: "pendidikan", name: "PENDIDIKAN", desc: "Kuis tongkrongan, pengetahuan umum, sejarah lokal, bahasa gaul, literasi & belajar dari orang jalanan.", icon: "BookOpen" },
    { id: "guyonan", name: "GUYONAN", desc: "Cerita tongkrongan, tebak-tebakan, improvisasi, roasting sehat, no laugh challenge, momen kocak spontan.", icon: "Smile" },
    { id: "challenge", name: "CHALLENGE", desc: "Tantangan olahraga, makanan pedas/unik, budget hemat, skill acak, duel anggota vs warga sekitar.", icon: "Zap" },
    { id: "review", name: "REVIEW", desc: "Makanan pinggir jalan, warkop, tempat nongkrong, lapangan, produk UMKM lokal, jajanan legendaris.", icon: "Coffee" },
    { id: "kebersamaan", name: "KEBERSAMAAN", desc: "Nongkrong santai, touring motor, makan bareng, baksos, BTS kegagalan lucu, napak tilas IKADA.", icon: "HeartHandshake" },
    { id: "music", name: "MUSIC", desc: "Jamming akustik, tebak lagu, battle karaoke, cover versi tongkrongan, showcase musisi jalanan lokal.", icon: "Music" },
    { id: "masyarakat", name: "MASYARAKAT", desc: "Street interview, opini publik jujur, cerita profesi unik, tradisi kampung, permainan rakyat.", icon: "Users" }
  ],
  workflow: [
    { step: "01", title: "IDE", desc: "Muncul dari obrolan warkop, uneg-uneg, keresahan sosial, atau momen spontan." },
    { step: "02", title: "SELEKSI", desc: "Disaring: Apakah cocok sama karakter IKADA? Apakah sanggup kita eksekusi?" },
    { step: "03", title: "KONSEP", desc: "Creative matangkan alur cerita, hook pembuka, punchline, dan kebutuhan tim." },
    { step: "04", title: "PRE-PROD", desc: "Peralatan disiapkan Teo, angle dirancang Paris, talent di-brief Dea." },
    { step: "05", title: "SHOOTING", desc: "Turun ke set! Tim shooting ambil footage dengan aman dan cukup." },
    { step: "06", title: "EDITING", desc: "Bagor & tim post-production rakit footage, kasih musik, tempo & subtitle." },
    { step: "07", title: "REVIEW", desc: "Nonton bareng singkat: kalau ada yang membosankan atau sensitif, kita poles." },
    { step: "08", title: "PUBLISHING", desc: "Hasan & tim rilis di waktu prima lengkap dengan cover dan caption cadas." },
    { step: "09", title: "EVALUASI", desc: "Cek respon penonton: apa yang harus diulang, diperbaiki, atau dihentikan?" }
  ],
  ideabank: [
    { title: "Anak IKADA vs Masyarakat", category: "Masyarakat / Sport", tag: "Hot" },
    { title: "Siapa Paling Jago di Antara Kita?", category: "Challenge", tag: "Duel" },
    { title: "Modal 20 Ribu Bisa Kenyang Apa di Sekitar Sini?", category: "Review", tag: "Budget" },
    { title: "Jangan Ketawa Challenge: Versi Roasting Tongkrongan", category: "Guyonan", tag: "Viral" },
    { title: "Sehari Jadi Anak Paling Hemat", category: "Challenge", tag: "Fun" },
    { title: "Tebak-tebakan Berhadiah Sama Orang Random", category: "Pendidikan", tag: "Street" },
    { title: "Battle Skill Futsal 1 vs 1 Antar Anggota", category: "Sport", tag: "Aksi" },
    { title: "Review Jujur Warkop Paling Sepi vs Paling Rame", category: "Review", tag: "Rekomendasi" },
    { title: "Seberapa Kompak Tongkrongan Kita? Tes Kejujuran!", category: "Kebersamaan", tag: "Bonding" },
    { title: "Yang Kalah Harus Traktir Es Teh Sekampung", category: "Challenge", tag: "Taruhan Sehat" },
    { title: "Misi Rahasia di Tongkrongan (Prank Halus)", category: "Guyonan", tag: "Spontan" },
    { title: "Sehari Mengikuti Aktivitas Pedagang Kaki Lima", category: "Masyarakat", tag: "Inspiratif" },
    { title: "Bikin Alat Konten DIY dari Nol", category: "Kebersamaan", tag: "Kreatif" },
    { title: "Ternyata Anak Tongkrongan Tidak Sejago Itu", category: "Guyonan", tag: "Relatable" },
    { title: "Jamming Akustik Tengah Malam di Teras", category: "Music", tag: "Vibes" },
    { title: "Belajar Masak Resep Rahasia dari Warung Sebelah", category: "Masyarakat", tag: "Eksplorasi" }
  ],
  schedule: [
    { day: "SENIN", agenda: "Brainstorming & Seleksi Ide", pic: "Creative & All Crew", badge: "Konsep" },
    { day: "SELASA", agenda: "Pre-Production, Brief & Cek Gear", pic: "Creative, Prod Peralatan, Prod Shooting", badge: "Persiapan" },
    { day: "RABU - KAMIS", agenda: "Eksekusi Shooting / Recording", pic: "Prod Shooting, Peralatan, Talent", badge: "On Set" },
    { day: "KAMIS - JUMAT", agenda: "Editing & Sound Polish", pic: "Editing Crew", badge: "Post-Prod" },
    { day: "SABTU", agenda: "Final Review & Copywriting", pic: "Editing, Creative, Publishing", badge: "Quality Check" },
    { day: "MINGGU", agenda: "Publishing, Monitoring & Evaluasi", pic: "Publishing & All Crew", badge: "Showtime" }
  ],
  rules: [
    { title: "Komunikasi Kalau Ada Kendala", desc: "Lebih baik ngomong dari awal daripada menghilang pas hari H." },
    { title: "Hargai Semua Divisi", desc: "Tidak ada divisi anak emas. Creative, Shooting, Alat, Editing, Talent, Publishing saling butuh." },
    { title: "Kritik Pekerjaan, Bukan Orangnya", desc: "Kita mau kontennya makin bagus, bukan bikin kawan sakit hati." },
    { title: "Jangan Bully Teman yang Belajar", desc: "Semua orang mulai dari nol. Saling support dan bagi ilmu." },
    { title: "Jaga Peralatan Seperti Milik Sendiri", desc: "Kamera, baterai, mic dibeli atau dipinjam dengan usaha, rawat bareng-bareng." },
    { title: "No SARA, Bullying & Bahaya Konyol", desc: "Seru boleh, bodoh jangan. Tetap positif dan bikin bangga lingkungan sekitar." }
  ]
};
