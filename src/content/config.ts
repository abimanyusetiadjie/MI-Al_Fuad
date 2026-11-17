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
      coverImage: image().optional(),
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
