export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Kurikulum & Mengaji' | 'Biaya & Beasiswa' | 'Jam Belajar & Pondok' | 'Pendaftaran & Lokasi';
}

export const PPDB_FAQS: readonly FaqItem[] = [
  {
    id: 'faq-mengaji-dari-nol',
    category: 'Kurikulum & Mengaji',
    question: 'Apakah anak wajib sudah lancar mengaji saat mendaftar?',
    answer:
      'Tidak wajib, Ayah & Bunda. Setiap pendaftar dipetakan kemampuannya lalu dibimbing sabar mulai dari Iqra/huruf hijaiyah hingga lancar membaca Al-Qur’an.',
  },
  {
    id: 'faq-target-juz30',
    category: 'Kurikulum & Mengaji',
    question: 'Bagaimana program Wajib Hafal & Paham Arti Juz 30 berjalan?',
    answer:
      'Siswa MI TPI Al-Fuad (setara SD Islam) dibimbing menghafal Juz 30 bertahap dari Kelas 1–6 beserta arti ayatnya, lalu berlanjut ke Juz 29–28 di SMP-IT dan muraja’ah di SMK-IT.',
  },
  {
    id: 'faq-skema-biaya',
    category: 'Biaya & Beasiswa',
    question: 'Apakah Uang Pangkal / DSP bisa dicicil?',
    answer:
      'Bisa. DSP/Uang Pangkal dapat diangsur hingga 3 kali. Tersedia potongan hingga Rp 500.000 pada Gelombang Inden, diskon saudara kandung, dan keringanan alumni.',
  },
  {
    id: 'faq-jam-belajar-pondok',
    category: 'Jam Belajar & Pondok',
    question: 'Bagaimana jam belajar sekolah & program Pondok Pesantren?',
    answer:
      'RA belajar Senin–Jumat (07.30–11.00 WIB). MI TPI, SMP-IT & SMK-IT masuk Senin–Sabtu (06.45–14.00/15.00 WIB). Pondok melayani Santri Mukim (asrama), Santri Kalong & Majlis Ta’lim.',
  },
  {
    id: 'faq-beasiswa-prestasi',
    category: 'Biaya & Beasiswa',
    question: 'Apakah tersedia beasiswa tahfidz atau keringanan siswa yatim?',
    answer:
      'Ya. YPI Al-Fuad menyediakan beasiswa prestasi tahfidz serta keringanan biaya pendidikan bagi santri yatim/piatu maupun keluarga kurang mampu dengan melampirkan surat keterangan.',
  },
  {
    id: 'faq-cara-daftar-berkas',
    category: 'Pendaftaran & Lokasi',
    question: 'Bagaimana alur pendaftaran dan syarat berkasnya?',
    answer:
      'Isi Smart Formulir di halaman ini untuk terhubung langsung ke WhatsApp Panitia (0877-7214-4633). Berkas fisik (KK, Akta, KTP ortu, foto 3x4, & SKL/NISN) dibawa saat daftar ulang.',
  },
  {
    id: 'faq-lokasi-akses',
    category: 'Pendaftaran & Lokasi',
    question: 'Di mana alamat lengkap kampus MI TPI / YPI Al-Fuad?',
    answer:
      'Berlokasi terpadu di Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa, Poris Gaga, Batuceper, Kota Tangerang (mudah diakses dari Cipondoh & Kalideres).',
  },
] as const;
