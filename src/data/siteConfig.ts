export type UnitId = 'ra' | 'mit' | 'smpit' | 'smkit' | 'pesantren';

export interface SchoolUnitMeta {
  id: UnitId;
  slug: string;
  name: string;
  fullName: string;
  npsn: string;
  levelLabel: string;
  shortDesc: string;
  tahfidzTarget: string;
  studyHours: string;
  highlights: readonly string[];
}

export interface FoundationStatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const SITE_CONFIG = {
  foundationName: "Yayasan Pendidikan Islam Tahfidz Qur'an Al-Fuad",
  shortName: 'YPI Al-Fuad Poris Gaga',
  siteUrl: 'https://mialfuad.sch.id',
  foundedYear: 1990,
  chairman: 'Drs. KH. Jaelani',
  tagline: "Cintai Al-Qur'an, Raih Masa Depan yang Gemilang",
  description:
    "Lembaga Pendidikan Islam Terpadu & Tahfidz Al-Qur'an sejak 1990 di Poris Gaga, Batuceper, Kota Tangerang (RA, MIS/MIT, SMP-IT, SMK-IT & Pondok Pesantren).",
  address: {
    street: 'Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa',
    shortStreet: 'Jl. Perum Poris Indah Blok Tempe RT 04/05 No. 7, Gg. Masjid At-Taqwa',
    subdistrict: 'Poris Gaga',
    district: 'Batuceper',
    city: 'Kota Tangerang',
    province: 'Banten',
    postalCode: '15122',
    fullAddress:
      'Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa, Kel. Poris Gaga, Kec. Batuceper, Kota Tangerang, Banten 15122',
    coordinates: {
      lat: -6.1742,
      lng: 106.684,
    },
    googleMapsPlaceId: 'ChIJJwAAAFz4aS4RFW21JH9zxGA',
    googleMapsUrl:
      'https://www.google.com/maps/place//data=!4m2!3m1!19sChIJJwAAAFz4aS4RFW21JH9zxGA',
  },
  contact: {
    whatsappPrimary: '6287772144633',
    whatsappDisplay: '0877-7214-4633',
    phoneOffice1: '(021) 55740372',
    phoneOffice2: '(021) 55775714',
    email: 'smpalfuad123@gmail.com',
    operatingHours: 'Senin - Sabtu: 07.00 - 16.00 WIB',
  },
  stats: {
    yearsActive: '35+',
    tahfidzTeachers: 52,
    annualTeacherUmrahReward: 2,
    coreTarget: 'Juz 30 & Terjemah',
    totalUnits: 5,
  },
  keyStats: [
    {
      id: 'heritage',
      value: 'Sejak 1990',
      label: '35+ Tahun Mengabdi',
      description:
        'Berpengalaman lebih dari tiga dekade mendidik generasi Qurani di Poris Gaga, Batuceper, Kota Tangerang.',
    },
    {
      id: 'teachers',
      value: '52+ Guru',
      label: 'Pembina Hafidz/Hafidzah',
      description:
        'Didampingi Ustadz/Ustadzah penghafal Al-Qur’an dengan program apresiasi Umroh rutin untuk guru berprestasi.',
    },
    {
      id: 'tahfidz-target',
      value: 'Juz 30',
      label: 'Wajib Hafal & Paham Arti',
      description:
        'Membimbing Ananda dari nol hingga lancar mengaji, hafal Juz 30, dan memahami makna terjemahan ayat.',
    },
    {
      id: 'graduation',
      value: 'Wisuda Tahfidz',
      label: 'Wisuda Rutin & 5 Unit Terpadu',
      description:
        'Penyelenggaraan Wisuda Tahfidz berkala bagi lulusan RA, MIT, SMP-IT, SMK-IT & Pondok Pesantren.',
    },
  ] satisfies FoundationStatItem[],
  units: [
    {
      id: 'ra',
      slug: 'ra',
      name: 'RA / TK Islam Al-Fuad',
      fullName: 'Raudhatul Athfal (TK Islam) Al-Fuad',
      npsn: '69887983',
      levelLabel: 'Usia 4 - 6 Tahun (Setara TK)',
      shortDesc:
        "Penanaman cinta Al-Qur'an sejak usia dini, pengenalan huruf hijaiyah, hafalan surat pendek, doa harian, dan pembiasaan adab Islami.",
      tahfidzTarget: 'Surat-surat Pendek Pilihan Juz 30 & Doa Harian',
      studyHours: 'Senin - Jumat, 07.30 - 11.00 WIB',
      highlights: [
        'Pengenalan huruf hijaiyah & Iqra menyenangkan dari nol',
        'Hafalan surat pendek & doa keseharian anak Muslim',
        'Stimulasi motorik, kemandirian & adab kepada orang tua',
      ],
    },
    {
      id: 'mit',
      slug: 'mit',
      name: 'MI TPI Al-Fuad (MIT)',
      fullName: 'Madrasah Ibtidaiyah TPI Al-Fuad (Setara SD Islam)',
      npsn: '69727517',
      levelLabel: 'Kelas 1 - 6 (Setara SD Islam / SDIT)',
      shortDesc:
        "Pendidikan dasar terpadu yang mewajibkan siswa hafal Juz 30 beserta pemahaman arti ayat dan bimbingan baca tulis Al-Qur'an dari dasar.",
      tahfidzTarget: 'Wajib Hafal & Paham Makna Juz 30 (Mulai Kelas 1 - 6)',
      studyHours: 'Senin - Sabtu, 06.45 - 14.00 WIB',
      highlights: [
        'Bimbingan mengaji dari nol tanpa syarat harus sudah lancar baca Qur’an',
        'Program Wajib Hafal & Terjemah Arti Ayat Juz 30',
        'Kurikulum terpadu Kemenag & penguatan numerasi-literasi dasar',
      ],
    },
    {
      id: 'smpit',
      slug: 'smpit',
      name: 'SMP-IT Al-Fuad',
      fullName: 'SMP Islam Terpadu Al-Fuad',
      npsn: '20606776',
      levelLabel: 'Kelas 7 - 9 (Tingkat Pertama)',
      shortDesc:
        "Penguatan akademik nasional, lanjutan hafalan Al-Qur'an multi-juz, serta pembentukan benteng akhlak remaja di era digital.",
      tahfidzTarget: 'Lanjutan Juz 29, Juz 28 & Penguatan Tadabbur Ayat',
      studyHours: 'Senin - Sabtu, 06.45 - 14.30 WIB',
      highlights: [
        'Pembiasaan sholat dhuha, dhuhur berjamaah & dzikir pagi',
        'Target hafalan lanjutan Juz 30, Juz 29 hingga Juz 28',
        'Pembinaan karakter remaja tangguh, pramuka & sains terapan',
      ],
    },
    {
      id: 'smkit',
      slug: 'smkit',
      name: 'SMK-IT Al-Fuad',
      fullName: 'SMK Islam Terpadu Al-Fuad',
      npsn: '20613691',
      levelLabel: 'Kelas 10 - 12 (Kejuruan)',
      shortDesc:
        "Mencetak lulusan siap kerja, kuliah, dan berwirausaha yang kompeten di bidang kejuruan sekaligus menjaga hafalan Al-Qur'an.",
      tahfidzTarget: "Pemeliharaan Hafalan (Muraja'ah) & Etika Kerja Islami",
      studyHours: 'Senin - Sabtu, 06.45 - 15.00 WIB',
      highlights: [
        'Kompetensi kejuruan praktis dengan praktik kerja lapangan (PKL)',
        'Pendampingan muraja’ah Al-Qur’an & akhlakul karimah dunia kerja',
        'Sertifikasi kompetensi & pembekalan kemandirian wirausaha',
      ],
    },
    {
      id: 'pesantren',
      slug: 'pesantren',
      name: "Pondok Pesantren & Majlis Ta'lim YPI Al-Fuad",
      fullName: "Pondok Pesantren Tahfidz & Majlis Ta'lim YPI Al-Fuad",
      npsn: 'Terdaftar Kemenag',
      levelLabel: 'Santri Mukim, Kalong & Pengajian Masyarakat',
      shortDesc:
        "Pusat pembinaan tahfidz Al-Qur'an intensif, kajian kitab kuning dasar, dan majelis ta'lim rutin bagi santri serta masyarakat Poris Gaga.",
      tahfidzTarget: 'Tahfidz Intensif Multi-Juz, Tajwid Bersanad & Kajian Kitab',
      studyHours: 'Pembinaan Harian Subuh - Isya (Santri) & Kajian Rutin',
      highlights: [
        'Program santri mukim & santri kalong terintegrasi dengan SMP-IT / SMK-IT',
        'Setoran hafalan harian (ziyadah) dan muraja’ah bersama Asatidz Hafidz',
        "Majlis Ta'lim rutin warga Poris Gaga & pengajian kitab adab/fiqih",
      ],
    },
  ] satisfies SchoolUnitMeta[],
} as const;
