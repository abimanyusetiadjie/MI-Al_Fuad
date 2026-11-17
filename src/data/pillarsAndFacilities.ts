export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'BookOpen' | 'Sparkles' | 'Award' | 'HeartHandshake' | 'GraduationCap' | 'Building2';
}

export interface FacilityItem {
  id: string;
  name: string;
  category: 'Ibadah & Tahfidz' | 'Akademik & Praktik' | 'Lingkungan & Keamanan';
  description: string;
}

export const SIX_CORE_PILLARS: readonly PillarItem[] = [
  {
    id: 'tahfidz-terjemah',
    number: '01',
    title: 'Wajib Hafal & Paham Arti Juz 30',
    subtitle: 'Tahfidz Disertai Makna Ayat',
    description:
      "Ananda tidak hanya menghafal lafaz, tetapi juga dibimbing memahami arti dan kandungan surat Juz 30 agar Al-Qur'an tertanam sebagai pedoman hidup.",
    iconName: 'BookOpen',
  },
  {
    id: 'bimbingan-dari-nol',
    number: '02',
    title: 'Bimbingan Mengaji Dari Nol',
    subtitle: 'Ramah Bagi Pemula Tanpa Tekanan',
    description:
      'Tidak ada syarat Ananda harus sudah lancar membaca Al-Qur’an saat masuk. Dewan guru membimbing dari pengenalan huruf hijaiyah hingga tartil secara sabar dan bertahap.',
    iconName: 'Sparkles',
  },
  {
    id: 'guru-hafidz',
    number: '03',
    title: '52+ Guru & Pembina Hafidz/Hafidzah',
    subtitle: 'Teladan Pendidik & Apresiasi Umroh',
    description:
      'Dibimbing oleh lebih dari 52 Ustadz/Ustadzah penghafal Al-Qur’an yang berdedikasi, didukung program apresiasi Umroh tahunan bagi 2 guru berprestasi.',
    iconName: 'Award',
  },
  {
    id: 'benteng-adab',
    number: '04',
    title: 'Pembinaan Adab & Ibadah Harian',
    subtitle: 'Benteng Akhlak di Era Digital',
    description:
      'Pembiasaan sholat dhuha, sholat dhuhur berjamaah, dzikir pagi, sopan santun kepada orang tua, serta pengawasan lingkungan belajar yang aman dan Islami.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'wisuda-tahfidz',
    number: '05',
    title: 'Wisuda Tahfidz Rutin Tahunan',
    subtitle: 'Apresiasi Capaian Hafalan Santri',
    description:
      'Setiap capaian hafalan Ananda dimuliakan melalui prosesi Wisuda Tahfidz Al-Qur’an bersama orang tua sebagai motivasi mencintai Al-Qur’an.',
    iconName: 'GraduationCap',
  },
  {
    id: 'satu-kawasan-1990',
    number: '06',
    title: '5 Unit Terpadu Sejak 1990',
    subtitle: 'Kesinambungan Pendidikan Satu Kawasan',
    description:
      'Berdiri lebih dari 35 tahun di Poris Gaga dengan jenjang lengkap (RA, MIT, SMP-IT, SMK-IT & Pesantren) sehingga pendidikan karakter dan hafalan Ananda berkesinambungan.',
    iconName: 'Building2',
  },
] as const;

export const SCHOOL_FACILITIES: readonly FacilityItem[] = [
  {
    id: 'masjid-at-taqwa',
    name: "Masjid & Halaqah Tahfidz Al-Qur'an",
    category: 'Ibadah & Tahfidz',
    description:
      'Pusat sholat berjamaah, sholat dhuha, setoran hafalan harian (ziyadah/muraja’ah), dan pengajian rutin majelis ta’lim.',
  },
  {
    id: 'asrama-pesantren',
    name: 'Asrama Pondok Pesantren YPI Al-Fuad',
    category: 'Ibadah & Tahfidz',
    description:
      'Lingkungan asrama santri putra/putri yang kondusif dengan pendampingan pengasuh dan jadwal tahfidz intensif subuh hingga malam.',
  },
  {
    id: 'ruang-kelas-nyaman',
    name: 'Ruang Kelas Kondusif & Rapi',
    category: 'Akademik & Praktik',
    description:
      'Ruang belajar dengan rasio pendampingan guru yang terjaga, pencahayaan baik, dan ventilasi udara yang nyaman untuk belajar.',
  },
  {
    id: 'lab-komputer',
    name: 'Laboratorium Komputer & Praktik Kejuruan',
    category: 'Akademik & Praktik',
    description:
      'Fasilitas praktikum komputer dan bengkel keahlian bagi siswa SMP-IT dan SMK-IT Al-Fuad untuk menguasai keterampilan teknologi modern.',
  },
  {
    id: 'perpustakaan-islami',
    name: "Perpustakaan & Sudut Baca Qur'ani",
    category: 'Akademik & Praktik',
    description:
      'Koleksi mushaf terjemah, kitab adab, buku pelajaran Kemenag/Kemendikdasmen, dan literatur pengetahuan umum.',
  },
  {
    id: 'lapangan-area-bermain',
    name: 'Lapangan Olahraga, Area Bermain RA & Pos Keamanan',
    category: 'Lingkungan & Keamanan',
    description:
      'Area olahraga bersama (futsal, silat, pramuka), zona bermain ramah anak RA, serta gerbang terpantau untuk menjaga keselamatan Ananda.',
  },
] as const;
