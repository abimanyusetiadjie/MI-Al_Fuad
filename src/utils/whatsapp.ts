import { z } from 'zod';
import { SITE_CONFIG } from '../data/siteConfig';

export const TARGET_UNIT_OPTIONS = [
  'RA Al-Fuad',
  'MI TPI Al-Fuad (Setara SD Islam)',
  'SMP-IT Al-Fuad',
  'SMK-IT Al-Fuad',
  'Pondok Pesantren',
] as const;

export const GENDER_OPTIONS = [
  'Laki-laki (Putra)',
  'Perempuan (Putri)',
] as const;

export const QURAN_READING_LEVEL_OPTIONS = [
  'Belum mengenal huruf Hijaiyah (Dari Nol)',
  'Tahap Iqra / Belajar Membaca',
  "Sudah Lancar Membaca Al-Qur'an",
  'Sudah Memiliki Hafalan Juz 30',
] as const;

const WA_PHONE_REGEX = /^(\+62|62|0)8[1-9][0-9]{6,11}$/;

export const ppdbInquirySchema = z
  .object({
    studentName: z
      .string()
      .trim()
      .min(3, 'Nama lengkap calon siswa minimal 3 karakter')
      .max(80, 'Nama terlalu panjang'),
    targetUnit: z.enum(TARGET_UNIT_OPTIONS, {
      errorMap: () => ({ message: 'Mohon pilih jenjang pendidikan tujuan' }),
    }),
    gender: z.enum(GENDER_OPTIONS).optional(),
    previousSchoolOrAge: z
      .string()
      .trim()
      .max(100, 'Asal sekolah / usia maksimal 100 karakter')
      .optional(),
    parentName: z
      .string()
      .trim()
      .min(3, 'Nama Ayah/Bunda atau Wali minimal 3 karakter')
      .max(80, 'Nama terlalu panjang'),
    domicileArea: z
      .string()
      .trim()
      .min(3, 'Mohon isi kelurahan/perumahan domisili (contoh: Poris Gaga / Poris Indah)')
      .max(100, 'Domisili terlalu panjang'),
    whatsappNumber: z
      .string()
      .trim()
      .transform((val) => val.replace(/[\s-]/g, ''))
      .refine((val) => WA_PHONE_REGEX.test(val), {
        message: 'Nomor WhatsApp tidak valid (contoh: 081234567890)',
      }),
    quranReadingLevel: z.enum(QURAN_READING_LEVEL_OPTIONS).optional(),
    additionalNotes: z
      .string()
      .trim()
      .max(500, 'Pertanyaan tambahan maksimal 500 karakter')
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.targetUnit !== 'RA Al-Fuad' &&
      (!data.previousSchoolOrAge || data.previousSchoolOrAge.trim().length < 2)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['previousSchoolOrAge'],
        message:
          'Mohon isi asal sekolah sebelumnya atau usia anak (opsional khusus jenjang RA)',
      });
    }
  });

export type PpdbInquiryInput = z.infer<typeof ppdbInquirySchema>;

export interface QuickWhatsAppOptions {
  unitName?: string;
  customMessage?: string;
  adminWa?: string;
}

/**
 * Menyusun template pesan WhatsApp formal PPDB yang rapi untuk Sekretariat YPI Al-Fuad.
 */
export function formatWhatsAppPpdbMessage(data: PpdbInquiryInput): string {
  const lines: string[] = [
    "Assalamu'alaikum Warahmatullahi Wabarakatuh,",
    `Panitia PPDB *${SITE_CONFIG.shortName}*,`,
    '',
    'Saya Ayah/Bunda/Wali Murid bermaksud mendaftarkan/mengajukan konsultasi PPDB dengan data berikut:',
    `• *Nama Lengkap Calon Siswa:* ${data.studentName}`,
    `• *Jenjang Tujuan:* ${data.targetUnit}`,
  ];

  if (data.gender) {
    lines.push(`• *Jenis Kelamin:* ${data.gender}`);
  }

  if (data.previousSchoolOrAge && data.previousSchoolOrAge.trim().length > 0) {
    lines.push(`• *Asal Sekolah / Usia:* ${data.previousSchoolOrAge.trim()}`);
  } else if (data.targetUnit === 'RA Al-Fuad') {
    lines.push('• *Asal Sekolah / Usia:* Pendaftar Baru Usia Dini (RA/TK)');
  }

  if (data.quranReadingLevel) {
    lines.push(`• *Kemampuan Mengaji:* ${data.quranReadingLevel}`);
  }

  lines.push(
    `• *Nama Orang Tua/Wali:* ${data.parentName}`,
    `• *Domisili / Kelurahan:* ${data.domicileArea}`,
    `• *No. WhatsApp Aktif:* ${data.whatsappNumber}`,
  );

  if (data.additionalNotes && data.additionalNotes.trim().length > 0) {
    lines.push(`• *Pertanyaan Tambahan:* ${data.additionalNotes.trim()}`);
  }

  lines.push(
    '',
    'Mohon informasi jadwal observasi, rincian biaya daftar ulang, serta kelengkapan berkasnya. Terima kasih.',
    "Wassalamu'alaikum Warahmatullahi Wabarakatuh.",
  );

  return lines.join('\n');
}

/**
 * Membuat tautan WhatsApp Deep Link (URL-encoded) untuk form pendaftaran PPDB.
 */
export function buildWhatsAppPpdbUrl(
  data: PpdbInquiryInput,
  adminWa: string = SITE_CONFIG.contact.whatsappPrimary,
): string {
  const cleanPhone = adminWa.replace(/[^0-9]/g, '');
  const message = formatWhatsAppPpdbMessage(data);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Membuat tautan WhatsApp cepat untuk konsultasi umum atau tombol CTA tiap jenjang.
 */
export function buildQuickWhatsAppUrl(options: QuickWhatsAppOptions = {}): string {
  const {
    unitName,
    customMessage,
    adminWa = SITE_CONFIG.contact.whatsappPrimary,
  } = options;

  const cleanPhone = adminWa.replace(/[^0-9]/g, '');

  if (customMessage && customMessage.trim().length > 0) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage.trim())}`;
  }

  const defaultText = unitName
    ? [
        `Assalamu'alaikum Admin PPDB *${SITE_CONFIG.shortName}*,`,
        '',
        `Saya Ayah/Bunda calon wali murid ingin berkonsultasi mengenai pendaftaran dan rincian biaya untuk jenjang *${unitName}*.`,
        'Mohon informasinya. Terima kasih.',
      ].join('\n')
    : [
        `Assalamu'alaikum Admin PPDB *${SITE_CONFIG.shortName}*,`,
        '',
        'Saya ingin berkonsultasi mengenai pendaftaran peserta didik baru (PPDB) dan jadwal survei lokasi sekolah di Poris Gaga.',
        'Mohon informasinya. Terima kasih.',
      ].join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultText)}`;
}
