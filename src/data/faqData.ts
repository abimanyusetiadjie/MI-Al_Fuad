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
    question: "Apakah anak saya harus sudah lancar membaca Al-Qur'an untuk mendaftar di YPI Al-Fuad?",
    answer:
      "Tidak harus, Ayah & Bunda. Justru salah satu keunggulan utama YPI Al-Fuad adalah bimbingan mengaji dari nol. Saat awal masuk, Ustadz/Ustadzah memetakan kemampuan Ananda (mulai dari pengenalan huruf hijaiyah/Iqra hingga tajwid) agar dibimbing secara sabar dan bertahap sesuai level masing-masing.",
  },
  {
    id: 'faq-target-juz30',
    category: 'Kurikulum & Mengaji',
    question: 'Bagaimana pelaksanaan program Wajib Hafal & Paham Arti Juz 30 di YPI Al-Fuad?',
    answer:
      "Di MIS/MIT Al-Fuad, setiap siswa dibimbing menghafal Juz 30 secara terstruktur dari Kelas 1 hingga Kelas 6 beserta terjemahan arti per ayat agar memahami pesan Al-Qur'an. Untuk jenjang SMP-IT dan SMK-IT, hafalan dilanjutkan ke Juz 29, Juz 28, serta penguatan muraja'ah harian bersama 52+ guru pembina hafidz/hafidzah.",
  },
  {
    id: 'faq-skema-biaya',
    category: 'Biaya & Beasiswa',
    question: 'Apakah DSP / Uang Pangkal PPDB dapat dicicil dan apakah ada potongan biaya?',
    answer:
      'Ya, DSP / Uang Pangkal dapat diangsur hingga 3 kali pembayaran untuk meringankan orang tua. Pendaftar pada Gelombang Inden/Dini mendapatkan potongan Uang Pangkal hingga Rp 500.000, dan tersedia pula keringanan bagi saudara kandung serta alumni MIT Al-Fuad yang melanjutkan ke SMP-IT.',
  },
  {
    id: 'faq-jam-belajar-pondok',
    category: 'Jam Belajar & Pondok',
    question: 'Bagaimana jam belajar tiap jenjang dan bagaimana sistem program Pondok Pesantren?',
    answer:
      'Jam belajar sekolah formal berlangsung Senin–Jumat pukul 07.30–11.00 WIB untuk RA, serta Senin–Sabtu pukul 06.45–14.00 WIB (MIT), 06.45–14.30 WIB (SMP-IT), dan 06.45–15.00 WIB (SMK-IT). Untuk Pondok Pesantren, tersedia program Santri Mukim (asrama dengan pembinaan tahfidz Subuh–Isya terintegrasi sekolah SMP-IT/SMK-IT) maupun Santri Kalong serta Majlis Ta’lim rutin bagi masyarakat.',
  },
  {
    id: 'faq-beasiswa-prestasi',
    category: 'Biaya & Beasiswa',
    question: 'Apakah tersedia program beasiswa tahfidz atau keringanan bagi siswa yatim?',
    answer:
      'YPI Al-Fuad menyediakan program beasiswa tahfidz bagi Ananda berprestasi dalam hafalan Al-Qur’an serta keringanan biaya pendidikan bagi anak yatim/piatu maupun keluarga yang membutuhkan. Silakan sampaikan saat konfirmasi dengan panitia PPDB dengan melampirkan surat keterangan pendukung.',
  },
  {
    id: 'faq-cara-daftar-berkas',
    category: 'Pendaftaran & Lokasi',
    question: 'Bagaimana cara mendaftar dan berkas apa saja yang perlu disiapkan?',
    answer:
      'Ayah & Bunda cukup mengisi Smart Formulir PPDB di website ini agar langsung terhubung dengan Admin WA (0877-7214-4633). Berkas fisik dibawa saat daftar ulang: fotokopi KK (2 lembar), Akta Kelahiran (2 lembar), KTP orang tua (2 lembar), pas foto berwarna 3x4 (4 lembar), serta SKL/NISN bagi pendaftar SMP-IT, SMK-IT, atau siswa pindahan.',
  },
  {
    id: 'faq-lokasi-akses',
    category: 'Pendaftaran & Lokasi',
    question: 'Di mana lokasi kampus YPI Al-Fuad dan bagaimana akses rutenya?',
    answer:
      'Seluruh 5 unit pendidikan berada terpadu dalam satu kawasan di Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa, Kel. Poris Gaga, Kec. Batuceper, Kota Tangerang. Lokasinya mudah diakses dari Perum Poris Indah, Poris Gaga, Batuceper, Cipondoh, hingga Kalideres / Daan Mogot Jakarta Barat.',
  },
] as const;
