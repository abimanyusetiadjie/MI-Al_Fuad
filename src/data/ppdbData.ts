import type { UnitId } from './siteConfig';

export type QuotaStatus = 'Kuota Tersedia' | 'Segera Penuh' | 'Penuh';
export type WaveStatus = 'Kuota Tersedia' | 'Segera Penuh' | 'Ditutup';

export interface PpdbWave {
  id: string;
  name: string;
  period: string;
  benefit: string;
  status: WaveStatus;
}

export interface UnitFeeAndQuota {
  unitId: UnitId;
  unitName: string;
  shortLabel: string;
  npsn: string;
  registrationFormFee: number;
  entranceFee: number;
  monthlyTuition: number;
  uniformFee: number;
  activityFee: number;
  totalEstimatedInitial: number;
  quotaTotal: number;
  quotaFilled: number;
  quotaRemaining: number;
  quotaStatus: QuotaStatus;
  installmentNote: string;
}

export interface PpdbStep {
  stepNumber: number;
  title: string;
  description: string;
}

export const PPDB_WAVES: readonly PpdbWave[] = [
  {
    id: 'gelombang-inden',
    name: 'Gelombang Inden / Dini',
    period: 'Oktober - Desember 2026',
    benefit: 'Potongan DSP/Uang Pangkal hingga Rp 500.000 & Prioritas Pemilihan Kelas',
    status: 'Segera Penuh',
  },
  {
    id: 'gelombang-1',
    name: 'Gelombang 1',
    period: 'Januari - Maret 2027',
    benefit: 'Potongan DSP/Uang Pangkal Rp 250.000 & Opsi Angsuran hingga 3x',
    status: 'Kuota Tersedia',
  },
  {
    id: 'gelombang-2',
    name: 'Gelombang 2',
    period: 'April - Juli 2027 (Selama Kuota Ada)',
    benefit: 'Tarif Reguler dengan Program Keringanan Saudara Kandung & Yatim',
    status: 'Kuota Tersedia',
  },
] as const;

export const PPDB_FEES_BY_UNIT: readonly UnitFeeAndQuota[] = [
  {
    unitId: 'ra',
    unitName: 'RA / TK Islam Al-Fuad',
    shortLabel: 'RA',
    npsn: '69887983',
    registrationFormFee: 150_000,
    entranceFee: 1_850_000,
    monthlyTuition: 225_000,
    uniformFee: 650_000,
    activityFee: 550_000,
    totalEstimatedInitial: 3_425_000,
    quotaTotal: 60,
    quotaFilled: 38,
    quotaRemaining: 22,
    quotaStatus: 'Kuota Tersedia',
    installmentNote:
      'DSP/Uang pangkal dapat diangsur 3x; tersedia potongan khusus saudara kandung dan beasiswa yatim.',
  },
  {
    unitId: 'mit',
    unitName: 'MI TPI Al-Fuad (Setara SD Islam)',
    shortLabel: 'MI TPI',
    npsn: '69727517',
    registrationFormFee: 200_000,
    entranceFee: 3_500_000,
    monthlyTuition: 350_000,
    uniformFee: 950_000,
    activityFee: 850_000,
    totalEstimatedInitial: 5_850_000,
    quotaTotal: 90,
    quotaFilled: 74,
    quotaRemaining: 16,
    quotaStatus: 'Segera Penuh',
    installmentNote:
      'Sudah termasuk modul Iqra/Tahfidz Juz 30 & buku terjemah; uang pangkal dapat diangsur hingga 3x dan tersedia beasiswa tahfidz.',
  },
  {
    unitId: 'smpit',
    unitName: 'SMP-IT Al-Fuad',
    shortLabel: 'SMP-IT',
    npsn: '20606776',
    registrationFormFee: 200_000,
    entranceFee: 4_200_000,
    monthlyTuition: 425_000,
    uniformFee: 1_100_000,
    activityFee: 950_000,
    totalEstimatedInitial: 6_875_000,
    quotaTotal: 96,
    quotaFilled: 64,
    quotaRemaining: 32,
    quotaStatus: 'Kuota Tersedia',
    installmentNote:
      'Potongan khusus alumni MIT Al-Fuad, cicilan uang pangkal 3x, serta beasiswa prestasi tahfidz & keluarga kurang mampu.',
  },
  {
    unitId: 'smkit',
    unitName: 'SMK-IT Al-Fuad',
    shortLabel: 'SMK-IT',
    npsn: '20613691',
    registrationFormFee: 200_000,
    entranceFee: 4_500_000,
    monthlyTuition: 450_000,
    uniformFee: 1_200_000,
    activityFee: 1_050_000,
    totalEstimatedInitial: 7_400_000,
    quotaTotal: 108,
    quotaFilled: 62,
    quotaRemaining: 46,
    quotaStatus: 'Kuota Tersedia',
    installmentNote:
      'Termasuk seragam praktik kejuruan & pembekalan PKL; tersedia cicilan DSP dan program beasiswa tahfidz.',
  },
  {
    unitId: 'pesantren',
    unitName: "Pondok Pesantren & Majlis Ta'lim YPI Al-Fuad",
    shortLabel: 'Pesantren',
    npsn: 'Terdaftar Kemenag',
    registrationFormFee: 150_000,
    entranceFee: 2_500_000,
    monthlyTuition: 650_000,
    uniformFee: 600_000,
    activityFee: 650_000,
    totalEstimatedInitial: 4_550_000,
    quotaTotal: 50,
    quotaFilled: 41,
    quotaRemaining: 9,
    quotaStatus: 'Segera Penuh',
    installmentNote:
      'Biaya bulanan santri mukim mencakup asrama, makan harian & bimbingan tahfidz intensif; santri kalong/majlis ta’lim gratis infaq sukarela.',
  },
] as const;

export const PPDB_STEPS: readonly PpdbStep[] = [
  {
    stepNumber: 1,
    title: 'Isi Data Singkat',
    description:
      'Lengkapi formulir pendaftaran PPDB instan di samping dengan data calon siswa, pilihan jenjang, domisili, dan nomor WhatsApp aktif.',
  },
  {
    stepNumber: 2,
    title: 'Konfirmasi via WA Panitia',
    description:
      'Sistem merangkai pesan resmi menuju WhatsApp Admin PPDB (0877-7214-4633) untuk konfirmasi jadwal survei dan ketersediaan kuota kelas.',
  },
  {
    stepNumber: 3,
    title: "Observasi / Tes Baca Qur'an & Wawancara",
    description:
      "Ananda mengikuti pemetaan bacaan Iqra/Al-Qur'an (tidak wajib sudah bisa membaca; dibimbing dari nol) serta silaturahmi orang tua bersama panitia.",
  },
  {
    stepNumber: 4,
    title: 'Daftar Ulang',
    description:
      'Penyerahan berkas persyaratan fisik (KK, Akta, KTP Orang Tua, Pas Foto) dan administrasi daftar ulang yang dapat dicicil di sekretariat.',
  },
] as const;

export const PPDB_GENERAL_REQUIREMENTS: readonly string[] = [
  'Fotokopi Kartu Keluarga (KK) terbaru (2 lembar)',
  'Fotokopi Akta Kelahiran calon peserta didik (2 lembar)',
  'Fotokopi KTP Ayah dan Ibu / Wali Murid (masing-masing 2 lembar)',
  'Pas foto berwarna ukuran 3x4 berlatar belakang merah/biru (4 lembar)',
  'Fotokopi Ijazah / SKL / NISN (khusus pendaftar SMP-IT, SMK-IT, atau siswa pindahan)',
  'Fotokopi KIA / Kartu Indonesia Pintar (KIP/PKH) apabila memiliki',
] as const;
