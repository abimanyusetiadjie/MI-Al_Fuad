# Data, Content & SEO Schemas (`schema.md`)
Dokumen ini mendefinisikan struktur data terpusat, skema koleksi konten (*Astro Content Collections*), skema formulir pendaftaran PPDB, serta skema *Structured Data* (`JSON-LD`) untuk SEO lokal YPI Tahfidz Qur'an Al-Fuad Poris Gaga.

---

## 1. Konfigurasi Data Terpusat (`src/data/siteConfig.ts`)

Data identitas yayasan disimpan dalam satu konstanta bertipe kuat (*strongly-typed*) agar mudah diperbarui kapan saja oleh pengembang atau staf sekolah:

~~~typescript
export interface SchoolUnitMeta {
  id: 'ra' | 'mit' | 'smpit' | 'smkit' | 'pesantren';
  name: string;
  fullName: string;
  npsn: string;
  levelLabel: string;
  shortDesc: string;
  tahfidzTarget: string;
}

export const SITE_CONFIG = {
  foundationName: "Yayasan Pendidikan Islam Tahfidz Qur'an Al-Fuad",
  shortName: "YPI Al-Fuad Poris Gaga",
  foundedYear: 1990,
  chairman: "Drs. KH. Jaelani",
  tagline: "Cintai Al-Qur'an, Raih Masa Depan yang Gemilang",
  address: {
    street: "Jl. Perum Poris Indah, Blok Tempe No. 7, Gg. Masjid At-Taqwa, RT 004/RW 005",
    subdistrict: "Poris Gaga",
    district: "Batuceper",
    city: "Kota Tangerang",
    province: "Banten",
    postalCode: "15122",
    coordinates: {
      lat: -6.1742,
      lng: 106.6840,
    },
    googleMapsPlaceId: "ChIJJwAAAFz4aS4RFW21JH9zxGA",
    googleMapsUrl: "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJJwAAAFz4aS4RFW21JH9zxGA",
  },
  contact: {
    whatsappPrimary: "6287772144633",
    whatsappDisplay: "0877-7214-4633",
    phoneOffice1: "(021) 55740372",
    phoneOffice2: "(021) 55775714",
    email: "smpalfuad123@gmail.com",
    operatingHours: "Senin - Sabtu: 07.00 - 16.00 WIB",
  },
  stats: {
    yearsActive: "35+",
    tahfidzTeachers: 52,
    annualTeacherUmrahReward: 2,
    coreTarget: "Juz 30 & Terjemah",
  },
  units: [
    {
      id: "ra",
      name: "RA Al-Fuad",
      fullName: "Raudhatul Athfal Al-Fuad",
      npsn: "69887983",
      levelLabel: "Usia 4 - 6 Tahun (Setara TK)",
      shortDesc: "Penanaman cinta Al-Qur'an sejak usia dini, hafalan surat pendek, doa harian, dan pembiasaan adab Islami.",
      tahfidzTarget: "Surat-surat Pendek Pilihan Juz 30 & Doa Harian",
    },
    {
      id: "mit",
      name: "MIS / MIT Al-Fuad",
      fullName: "Madrasah Ibtidaiyah Islam Terpadu Al-Fuad",
      npsn: "69727517",
      levelLabel: "Kelas 1 - 6 (Setara SDIT)",
      shortDesc: "Pendidikan dasar terpadu yang mewajibkan siswa hafal Juz 30 beserta pemahaman arti ayat dan bimbingan baca tulis Al-Qur'an dari dasar.",
      tahfidzTarget: "Wajib Hafal & Paham Makna Juz 30 (Mulai Kelas 1 - 6)",
    },
    {
      id: "smpit",
      name: "SMP IT Al-Fuad",
      fullName: "SMP Islam Terpadu Al-Fuad",
      npsn: "20606776",
      levelLabel: "Kelas 7 - 9 (Tingkat Pertama)",
      shortDesc: "Penguatan akademik nasional, lanjutan hafalan Al-Qur'an multi-juz, serta pembentukan benteng akhlak remaja di era digital.",
      tahfidzTarget: "Lanjutan Juz 29, Juz 28 & Penguatan Tadabbur Ayat",
    },
    {
      id: "smkit",
      name: "SMK IT Al-Fuad",
      fullName: "SMK Islam Terpadu Al-Fuad",
      npsn: "20613691",
      levelLabel: "Kelas 10 - 12 (Kejuruan)",
      shortDesc: "Mencetak lulusan siap kerja dan wirausaha yang kompeten di bidang kejuruan sekaligus menjaga hafalan Al-Qur'an.",
      tahfidzTarget: "Pemeliharaan Hafalan (Muraja'ah) & Etika Kerja Islami",
    },
  ] satisfies SchoolUnitMeta[],
} as const;
~~~

---

## 2. Skema Astro Content Collections (`src/content/config.ts`)

Menggunakan `zod` bawaan Astro untuk memvalidasi setiap file Markdown/JSON di folder `src/content/`:

~~~typescript
import { defineCollection, z } from 'astro:content';

// 1. Koleksi Detail Jenjang Pendidikan (src/content/units/*.md)
const unitsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      unitId: z.enum(['ra', 'mit', 'smpit', 'smkit', 'pesantren']),
      title: z.string(),
      npsn: z.string(),
      accreditation: z.string().default('Terakreditasi'),
      heroImage: image().optional(),
      studyHours: z.string(), // Contoh: "Senin - Sabtu, 06.30 - 14.00 WIB"
      tahfidzTarget: z.string(),
      curriculumHighlights: z.array(z.string()).min(3),
      facilities: z.array(z.string()),
      extracurriculars: z.array(z.string()),
      admissionRequirements: z.array(z.string()),
      order: z.number().int().positive(),
    }),
});

// 2. Koleksi Kabar Kegiatan & Wisuda Tahfidz (src/content/news/*.md)
const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      excerpt: z.string().max(200),
      publishDate: z.coerce.date(),
      category: z.enum(['Wisuda Tahfidz', 'Prestasi Siswa', 'Kegiatan Sekolah', 'Info PPDB']),
      coverImage: image(),
      coverAlt: z.string(),
      isFeatured: z.boolean().default(false),
    }),
});

// 3. Koleksi Testimoni Wali Murid & Tokoh (src/content/testimonials/*.json)
const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    authorName: z.string(),
    authorRole: z.string(), // Contoh: "Wali Murid MIT Al-Fuad (Domisili Kalideres)"
    quote: z.string(),
    unitRelated: z.enum(['RA', 'MIT', 'SMP-IT', 'SMK-IT', 'Yayasan']),
    isVerified: z.boolean().default(true),
  }),
});

export const collections = {
  units: unitsCollection,
  news: newsCollection,
  testimonials: testimonialsCollection,
};
~~~

---

## 3. Skema Formulir Cepat PPDB & Format WhatsApp (`PpdbFormSchema`)

Skema untuk memvalidasi input calon wali murid sebelum dikirim ke Google Sheets Webhook dan membuka aplikasi WhatsApp:

~~~typescript
import { z } from 'zod';

export const ppdbInquirySchema = z.object({
  studentName: z
    .string()
    .min(3, 'Nama lengkap calon siswa minimal 3 karakter')
    .max(80, 'Nama terlalu panjang'),
  targetUnit: z.enum(['RA Al-Fuad', 'MIT / MIS Al-Fuad', 'SMP-IT Al-Fuad', 'SMK-IT Al-Fuad', 'Pondok Pesantren']),
  parentName: z
    .string()
    .min(3, 'Nama Ayah/Bunda wajib diisi'),
  whatsappNumber: z
    .string()
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,11}$/, 'Nomor WhatsApp tidak valid (contoh: 08123456789)'),
  previousSchoolOrAge: z
    .string()
    .min(2, 'Mohon isi usia anak atau asal sekolah sebelumnya'),
  domicileArea: z
    .string()
    .min(3, 'Mohon isi kelurahan/perumahan tempat tinggal (contoh: Poris Indah)'),
  quranReadingLevel: z.enum([
    'Belum mengenal huruf Hijaiyah (Dari Nol)',
    'Tahap Iqra / Belajar Membaca',
    'Sudah Lancar Membaca Al-Qur\'an',
    'Sudah Memiliki Hafalan Juz 30',
  ]),
});

export type PpdbInquiryInput = z.infer<typeof ppdbInquirySchema>;

/**
 * Fungsi pembuat teks pesan WhatsApp otomatis ke Admin PPDB YPI Al-Fuad
 */
export function buildWhatsAppPpdbUrl(data: PpdbInquiryInput, adminWa = '6287772144633'): string {
  const message = [
    `Assalamu'alaikum Admin PPDB *YPI Al-Fuad Poris Gaga*,`,
    ``,
    `Saya ingin menanyakan informasi pendaftaran peserta didik baru dengan data berikut:`,
    `• *Nama Calon Siswa:* ${data.studentName}`,
    `• *Jenjang Tujuan:* ${data.targetUnit}`,
    `• *Usia / Asal Sekolah:* ${data.previousSchoolOrAge}`,
    `• *Kemampuan Mengaji Saat Ini:* ${data.quranReadingLevel}`,
    `• *Nama Orang Tua/Wali:* ${data.parentName}`,
    `• *Domisili:* ${data.domicileArea}`,
    `• *No. WA Aktif:* ${data.whatsappNumber}`,
    ``,
    `Mohon informasi mengenai rincian biaya, jadwal pendaftaran, dan syarat berkasnya. Terima kasih.`,
  ].join('\n');

  return `https://wa.me/${adminWa}?text=${encodeURIComponent(message)}`;
}
~~~

---

## 4. Skema JSON-LD untuk Local SEO (`EducationalOrganization`)

Disematkan di dalam `<head>` pada `MainLayout.astro` agar Google menampilkan informasi terstruktur YPI Al-Fuad di pencarian lokal Tangerang:

~~~json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://alfuad.sch.id/#organization",
  "name": "Yayasan Pendidikan Islam Tahfidz Qur'an Al-Fuad",
  "alternateName": ["YPI Al-Fuad Poris Gaga", "MIS Al-Fuad", "SMP IT Al-Fuad", "SMK Al-Fuad", "RA Al-Fuad"],
  "foundingDate": "1990",
  "description": "Yayasan Pendidikan Islam Terpadu dan Tahfidz Al-Qur'an di Poris Gaga, Batuceper, Kota Tangerang yang menyelenggarakan jenjang RA, MIT/MIS, SMP-IT, SMK-IT, dan Pondok Pesantren sejak 1990.",
  "url": "https://alfuad.sch.id",
  "telephone": "+62-21-55740372",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa, Kel. Poris Gaga",
    "addressLocality": "Kec. Batuceper, Kota Tangerang",
    "addressRegion": "Banten",
    "postalCode": "15122",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.1742,
    "longitude": 106.6840
  },
  "subOrganization": [
    {
      "@type": "Preschool",
      "name": "RA Al-Fuad Poris Gaga",
      "identifier": "69887983"
    },
    {
      "@type": "ElementarySchool",
      "name": "MIS / MIT Al-Fuad Poris Gaga",
      "identifier": "69727517"
    },
    {
      "@type": "MiddleSchool",
      "name": "SMP IT Al-Fuad Poris Gaga",
      "identifier": "20606776"
    },
    {
      "@type": "HighSchool",
      "name": "SMK IT Al-Fuad Poris Gaga",
      "identifier": "20613691"
    }
  ]
}
~~~