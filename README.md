# Website Resmi & Portal PPDB — Yayasan Pendidikan Islam (YPI) Tahfidz Qur'an Al-Fuad Poris Gaga

Portal informasi resmi dan sistem konversi Penerimaan Peserta Didik Baru (PPDB) **Yayasan Pendidikan Islam Tahfidz Qur'an Al-Fuad**, berlokasi di Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa, Kel. Poris Gaga, Kec. Batuceper, Kota Tangerang, Banten 15122 (Berdiri sejak 1990).

Website ini dibangun menggunakan **Astro 5 (Static Output)**, **Tailwind CSS**, dan **TypeScript (`strict` mode)** untuk performa sangat ringan, ramah seluler (*mobile-first*), mudah dikelola tanpa database eksternal, dan siap dideploy ke Cloudflare Pages atau Vercel.

---

## 1. Daftar Unit Pendidikan & NPSN Resmi

| Jenjang | Nama Unit | Identitas / NPSN |
| :--- | :--- | :--- |
| Anak Usia Dini | RA / TK Islam Al-Fuad | `69887983` |
| Dasar | MI TPI Al-Fuad (Setara SD Islam) | `69727517` |
| Menengah Pertama | SMP-IT Al-Fuad | `20606776` |
| Menengah Kejuruan | SMK-IT Al-Fuad | `20613691` |
| Kepesantrenan | Pondok Pesantren & Majlis Ta'lim YPI Al-Fuad | Terdaftar Kemenag |

---

## 2. Teknologi & Struktur Direktori Utama

- **Framework:** Astro `^5.16.0` (`output: 'static'` di `astro.config.mjs`)
- **Integrasi:** `@astrojs/tailwind`, `@astrojs/sitemap`, `lucide-astro`, `zod`
- **Validasi:** `@astrojs/check` + TypeScript `strict` (`npx tsc --noEmit`)
- **Keamanan & SEO:** `public/_headers` (security headers untuk Cloudflare Pages), `public/robots.txt`, JSON-LD (`EducationalOrganization`, `LocalBusiness`, dan `FAQPage`), serta OpenGraph image `public/images/og-cover-alfuad.jpg` (`1200x630`).

Struktur folder utama:

```text
├── public/
│   ├── _headers                      # HTTP security headers (Cloudflare Pages)
│   ├── robots.txt                    # Izin crawler & URL sitemap
│   ├── favicon.svg
│   ├── brosur/                       # Dokumen PDF unduhan brosur & rincian biaya
│   │   ├── brosur-ppdb-ypi-alfuad-2026.pdf
│   │   └── rincian-biaya-ypi-alfuad.pdf
│   └── images/
│       └── og-cover-alfuad.jpg       # Gambar preview OpenGraph / WhatsApp (1200x630)
├── src/
│   ├── assets/                       # Gambar SVG/optimasi lokal via astro:assets
│   ├── components/
│   │   ├── layout/                   # SEOHead.astro, Navbar.astro, Footer.astro
│   │   ├── sections/                 # 9 section utama landing page
│   │   └── ui/                       # FloatingWhatsApp.astro
│   ├── content/
│   │   ├── config.ts                 # Schema Zod (units, news, testimonials)
│   │   ├── units/*.md                # Detail 5 unit pendidikan
│   │   ├── testimonials/*.json       # Ulasan wali murid & Pengawas Kemenag
│   │   └── news/*.md                 # Kabar kegiatan & pengumuman PPDB
│   ├── data/
│   │   ├── siteConfig.ts             # Identitas yayasan, alamat, kontak & WhatsApp
│   │   ├── ppdbData.ts               # Gelombang, tabel biaya tahunan, kuota & alur PPDB
│   │   ├── faqData.ts                # Daftar pertanyaan umum PPDB
│   │   └── pillarsAndFacilities.ts   # Pilar pendidikan & daftar fasilitas kampus
│   ├── layouts/
│   │   └── BaseLayout.astro          # Kerangka utama (SEOHead, Navbar, Footer, FloatingWA)
│   ├── pages/
│   │   └── index.astro               # Halaman utama (merakit seluruh section)
│   ├── styles/
│   │   └── global.css                # Google Fonts, reset dasar & utility .container-12
│   └── utils/
│       ├── currency.ts               # Helper format Rupiah (formatRupiah)
│       └── whatsapp.ts               # Validasi Zod form PPDB & generator link wa.me
├── astro.config.mjs                  # Site URL (https://mialfuad.sch.id) & static build
├── tailwind.config.mjs               # Design tokens (Emerald, Amber/Gold, Alabaster)
└── package.json
```

---

## 3. Cara Menjalankan, Build, dan Deploy

### A. Prasyarat
Pastikan **Node.js** (disarankan versi 18 LTS atau 20 LTS ke atas) dan **npm** sudah terpasang di komputer Anda.

### B. Instalasi Dependensi
```bash
npm install
```

### C. Menjalankan Server Development Lokal
```bash
npm run dev
```
Buka browser ke `http://localhost:4321` untuk melihat perubahan secara *real-time*.

### D. Pemeriksaan Tipe Data, Linting Astro & Build Produksi
```bash
# 1. Jalankan pemeriksaan Astro & TypeScript dalam komponen .astro
npm run astro check
# (atau: npm run check)

# 2. Pemeriksaan TypeScript penuh (strict mode)
npx tsc --noEmit

# 3. Build statis ke folder dist/ (otomatis menjalankan astro check && astro build)
npm run build

# 4. Preview hasil build produksi secara lokal sebelum deploy
npm run preview
```

### E. Deploy ke Cloudflare Pages atau Vercel
Karena `astro.config.mjs` menggunakan `output: 'static'`:
- **Cloudflare Pages:**
  - *Build command:* `npm run build`
  - *Build output directory:* `dist`
  - File `public/_headers` dan `public/robots.txt` otomatis ikut ter-deploy.
- **Vercel:**
  - Pilih preset framework **Astro** (*Build command:* `npm run build`, *Output directory:* `dist`).
- Jika domain produksi berubah, perbarui properti `site` di `astro.config.mjs`, `SITE_CONFIG.siteUrl` di `src/data/siteConfig.ts`, serta baris `Sitemap:` di `public/robots.txt`.

---

## 4. Cara Mengubah Nomor WhatsApp Admin PPDB

Seluruh tombol konsultasi WhatsApp (`Navbar`, `HeroSection`, `FloatingWhatsApp`, `TuitionTransparencySection`, `FaqSection`, dan *Smart Formulir* di `PpdbRegistrationSection`) membaca nomor utama secara terpusat dari **`src/data/siteConfig.ts`**.

1. Buka file `src/data/siteConfig.ts` dan ubah bagian `SITE_CONFIG.contact`:
   ```ts
   contact: {
     whatsappPrimary: '6287772144633',     // Format internasional tanpa '+' atau spasi (wajib awalan 62)
     whatsappDisplay: '0877-7214-4633',    // Format tampilan yang mudah dibaca orang tua
     phoneOffice1: '(021) 55740372',
     phoneOffice2: '(021) 55775714',
     email: 'smpalfuad123@gmail.com',
     operatingHours: 'Senin - Sabtu: 07.00 - 16.00 WIB',
   },
   ```
   > **Penting:** Pastikan `whatsappPrimary` hanya berisi angka dengan kode negara `62` di depan (misalnya `6281234567890`), karena helper `buildWhatsAppPpdbUrl()` dan `buildQuickWhatsAppUrl()` di `src/utils/whatsapp.ts` langsung memanggil `https://wa.me/${cleanPhone}`.

2. Perbarui pula penyebutan nomor WA berbentuk teks naratif di file berikut agar konsisten di seluruh halaman:
   - `src/data/ppdbData.ts` pada `PPDB_STEPS` langkah ke-2 (`description`).
   - `src/data/faqData.ts` pada jawaban FAQ mengenai alur pendaftaran PPDB.
   - `src/content/news/pembukaan-ppdb-gelombang-1.md`.

3. Jalankan `npm run build` untuk memastikan tidak ada error sebelum memublikasikan ulang situs.

---

## 5. Cara Memperbarui Rincian Biaya Tahunan, Kuota & Brosur PPDB

Seluruh data nominal biaya masuk, SPP bulanan, status kuota, dan jadwal gelombang PPDB disimpan dalam **`src/data/ppdbData.ts`**.

### A. Memperbarui Jadwal & Status Gelombang (`PPDB_WAVES`)
Buka `src/data/ppdbData.ts`, lalu edit array `PPDB_WAVES`:
- `period`: Ubah periode bulan/tahun ajaran (contoh: `'Januari - Maret 2027'`).
- `benefit`: Ubah nominal potongan/keunggulan gelombang.
- `status`: Pilih salah satu dari `'Kuota Tersedia'`, `'Segera Penuh'`, atau `'Ditutup'`.

### B. Memperbarui Nominal Biaya & Kuota per Jenjang (`PPDB_FEES_BY_UNIT`)
Pada array `PPDB_FEES_BY_UNIT` di `src/data/ppdbData.ts`, setiap objek mewakili satu jenjang (`unitId`: `'ra'`, `'mit'`, `'smpit'`, `'smkit'`, `'pesantren'`). Gunakan pemisah garis bawah `_` agar angka Rupiah mudah dibaca (format akan otomatis diubah oleh helper `formatRupiah()` di `src/utils/currency.ts`):

```ts
{
  unitId: 'mit',
  unitName: 'MI TPI Al-Fuad (Setara SD Islam)',
  shortLabel: 'MI TPI',
  npsn: '69727517',
  registrationFormFee: 200_000,   // Biaya Formulir
  entranceFee: 3_500_000,         // DSP / Uang Pangkal
  monthlyTuition: 350_000,        // SPP / Infaq Bulanan
  uniformFee: 950_000,            // Paket Seragam
  activityFee: 850_000,           // Buku, Modul & Kegiatan Tahunan
  totalEstimatedInitial: 5_850_000, // Jumlah total kolom di atas
  quotaTotal: 90,
  quotaFilled: 74,
  quotaRemaining: 16,
  quotaStatus: 'Segera Penuh',    // 'Kuota Tersedia' | 'Segera Penuh' | 'Penuh'
  installmentNote: 'Catatan keringanan / cicilan...',
}
```

> **Catatan:** Pastikan nilai `totalEstimatedInitial` disesuaikan dengan hasil penjumlahan kelima komponen biaya di atas (`registrationFormFee + entranceFee + monthlyTuition + uniformFee + activityFee`), dan `quotaRemaining` sesuai dengan `quotaTotal - quotaFilled`.

### C. Memperbarui File PDF Brosur & Rincian Biaya
Ganti file PDF berikut dengan nama file yang sama persis di folder `public/brosur/` (ukuran file disarankan **< 2 MB** agar cepat diunduh wali murid di jaringan seluler):
- `public/brosur/brosur-ppdb-ypi-alfuad-2026.pdf`
- `public/brosur/rincian-biaya-ypi-alfuad.pdf`

---

## 6. Mengelola Konten Jenjang, Testimoni & FAQ

- **Detail Unit Pendidikan (`src/content/units/*.md`):** Mengubah target hafalan, kurikulum unggulan, jam belajar, ekstrakurikuler, atau syarat masuk masing-masing unit. Setiap perubahan harus mengikuti schema Zod di `src/content/config.ts`.
- **Testimoni Wali Murid (`src/content/testimonials/*.json`):** Menambah atau menyunting ulasan wali murid/tokoh dengan field `authorName`, `authorRole`, `quote`, `unitRelated` (`'RA' | 'MIT' | 'SMP-IT' | 'SMK-IT' | 'Yayasan'`), dan `isVerified`.
- **FAQ PPDB (`src/data/faqData.ts`):** Menambah atau memperbarui daftar pertanyaan pada `PPDB_FAQS` (otomatis terpasang juga ke JSON-LD `FAQPage`).

Setelah melakukan perubahan apa pun, selalu verifikasi dengan:
```bash
npm run astro check && npm run build
```
