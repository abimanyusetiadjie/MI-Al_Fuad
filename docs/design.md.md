# Web UI/UX & Design System — YPI Tahfidz Qur'an Al-Fuad Poris Gaga

## 1. Filosofi Desain: *"Modern Qur'anic Heritage"*
Yayasan Pendidikan Islam (YPI) Tahfidz Qur'an Al-Fuad telah berdiri sejak tahun **1990** (lebih dari 35 tahun mengabdi di Poris Gaga, Batuceper, Kota Tangerang) dengan kekuatan utama pada **Program Tahfidz & Terjemah Al-Qur'an** serta pembinaan adab lintas jenjang (RA, MIT/MIS, SMP-IT, SMK-IT, dan Pondok Pesantren).

Desain antarmuka website harus memadukan dua kesan utama:
1. **Kewibawaan & Keberkahan Pesantren/Madrasah:** Tampak tepercaya, sejuk, religius, dan menenangkan hati orang tua.
2. **Kerapian & Kejelasan Informasi Modern:** Struktur tata letak (*layout*) mengadaptasi disiplin **12-Column Grid System** (seperti standar Bootstrap/CMS modern) yang diimplementasikan menggunakan **Tailwind CSS** di atas **Astro**, sehingga mudah dipindai (*scannable*) oleh wali murid melalui layar ponsel.

---

## 2. Sistem Grid & Layout (Adaptasi 12-Kolom Bootstrap ke Tailwind CSS)

Agar pengembangan *frontend* memiliki struktur sejelas Bootstrap (`container` $\rightarrow$ `row` $\rightarrow$ `col-*`), seluruh halaman wajib mengikuti aturan kerangka *grid* berikut:

### 2.1 Spesifikasi Container & Breakpoints
| Breakpoint | Lebar Layar Minimum | Lebar Maksimal Container | Gutter (Jarak Antar Kolom) | Padding Samping Container | Padanan Kelas Tailwind |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile (Default)** | $< 640\text{ px}$ | $100\%$ | $16\text{ px}$ (`gap-4`) | $16\text{ px}$ (`px-4`) | `grid-cols-4` atau `grid-cols-12` |
| **Tablet (`sm` / `md`)** | $\ge 768\text{ px}$ | $768\text{ px}$ | $24\text{ px}$ (`md:gap-6`) | $24\text{ px}$ (`md:px-6`) | `md:grid-cols-12` |
| **Desktop (`lg`)** | $\ge 1024\text{ px}$ | $1024\text{ px}$ | $32\text{ px}$ (`lg:gap-8`) | $32\text{ px}$ (`lg:px-8`) | `lg:grid-cols-12` |
| **Wide (`xl`)** | $\ge 1280\text{ px}$ | $1280\text{ px}$ (`max-w-7xl`) | $32\text{ px}$ (`xl:gap-8`) | $32\text{ px}$ (`xl:px-8`) | `xl:grid-cols-12` |

### 2.2 Rumus Pemetaan Bootstrap ke Tailwind CSS
Setiap seksi dibungkus menggunakan pola standar berikut:
~~~html
<!-- Setara dengan <section><div class="container"><div class="row"> di Bootstrap -->
<section class="py-16 md:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
      <!-- Setara dengan col-12 col-md-6 col-lg-4 -->
      <div class="col-span-12 md:col-span-6 lg:col-span-4">
        ...
      </div>
    </div>
  </div>
</section>
~~~

---

## 3. Palet Warna (Color Tokens)

Palet warna dirancang untuk mencerminkan identitas Al-Qur'an (Hijau Zamrud) dan kemuliaan ilmu/prestasi wisuda tahfidz (Emas Hangat), dengan kontras keterbacaan minimal standar **WCAG AA ($4.5:1$)**.

| Token Peran | Nama Warna | Kode Hex | Kelas Tailwind | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | *Al-Fuad Emerald* | `#065F46` | `emerald-800` | Header, latar *Hero Banner*, tombol utama, aksen judul |
| **Primary Hover** | *Deep Forest* | `#064E3B` | `emerald-900` | *Hover state* tombol utama, *footer background* |
| **Secondary Light** | *Soft Mint Surface* | `#ECFDF5` | `emerald-50` | Latar kartu unggulan, *badge* kategori, seksi selang-seling |
| **Accent / CTA** | *Warm Gold / Amber* | `#D97706` | `amber-600` | Tombol CTA "Daftar PPDB", lencana *Wisuda Tahfidz*, ikon bintang |
| **Surface Primary** | *Pure White* | `#FFFFFF` | `white` | Latar utama halaman dan kartu informasi |
| **Surface Alt** | *Warm Ivory* | `#F8FAFC` | `slate-50` | Latar pembatas antar-seksi agar mata nyaman |
| **Text Heading** | *Charcoal Slate* | `#0F172A` | `slate-900` | Judul utama (`H1`–`H3`) |
| **Text Body** | *Muted Slate* | `#475569` | `slate-600` | Paragraf penjelasan, deskripsi kurikulum |

---

## 4. Tipografi (Typography Scale)

Menggunakan kombinasi tiga jenis huruf dari Google Fonts (di-host lokal melalui `@fontsource` agar pemuatan halaman instan):
1. **Heading Font:** `Plus Jakarta Sans` (Tegas, modern, geometris, dan ramah).
2. **Body Font:** `Inter` (Sangat jelas dibaca pada layar ponsel berukuran kecil).
3. **Arabic / Qur'anic Quote Font:** `Amiri` atau `Scheherazade New` (Khusus untuk kutipan ayat Al-Qur'an dan syiar tahfidz).

| Elemen | Ukuran Mobile | Ukuran Desktop | Ketebalan | Line Height | Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `2.0rem` ($32\text{ px}$) | `3.25rem` ($52\text{ px}$) | `font-extrabold` ($800$) | `1.15` | Judul utama *Hero Section* |
| **Section Title / H2** | `1.5rem` ($24\text{ px}$) | `2.25rem` ($36\text{ px}$) | `font-bold` ($700$) | `1.25` | Judul setiap seksi halaman |
| **Card Title / H3** | `1.25rem` ($20\text{ px}$) | `1.5rem` ($24\text{ px}$) | `font-bold` ($700$) | `1.35` | Nama jenjang (RA, MIT, SMP-IT, SMK-IT) |
| **Body Large** | `1.0rem` ($16\text{ px}$) | `1.125rem` ($18\text{ px}$) | `font-normal` ($400$) | `1.65` | Sub-judul *Hero* & pengantar seksi |
| **Body Regular** | `0.9375rem` ($15\text{ px}$) | `1.0rem` ($16\text{ px}$) | `font-normal` ($400$) | `1.60` | Teks isi kartu, syarat pendaftaran, FAQ |
| **Caption / Badge** | `0.75rem` ($12\text{ px}$) | `0.875rem` ($14\text{ px}$) | `font-semibold` ($600$) | `1.40` | Label NPSN, status akreditasi, tanggal berita |

---

## 5. Arsitektur Layout Per Seksi (Wireframe 12-Kolom)

Halaman utama (*Landing Page*) dirancang dalam **9 Seksi Terstruktur** yang mengalir mengikuti psikologi pengambilan keputusan orang tua:

~~~
+-----------------------------------------------------------------------+
| [1. TOP BAR & STICKY NAVBAR]                                          |
| Logo YPI Al-Fuad (col-3) | Menu Navigasi (col-6) | CTA PPDB (col-3)   |
+-----------------------------------------------------------------------+
| [2. HERO SECTION - 12 KOLOM]                                          |
| Copywriting Visi Tahfidz + 2 Tombol CTA  | Kolase Foto Wisuda Tahfidz |
| + Lencana "Berdiri Sejak 1990" (col-7)   | + Floating Card (col-5)    |
+-----------------------------------------------------------------------+
| [3. TRUST & STATISTIK BAR - 4 x col-3]                                |
| [35+ Thn Mengabdi] | [52+ Guru Hafidz] | [Wajib Juz 30] | [4 Jenjang] |
+-----------------------------------------------------------------------+
| [4. PILAR PROGRAM UNGGULAN AL-QUR'AN & ADAB - 3 x col-4]              |
| [Tahfidz & Terjemah]  | [Bimbingan Dari Nol]  | [Benteng Akhlak Siswa]|
+-----------------------------------------------------------------------+
| [5. JENJANG PENDIDIKAN TERPADU - 4 x col-3]                           |
| [RA Al-Fuad]     | [MIT / MIS Al-Fuad] | [SMP-IT Al-Fuad] | [SMK-IT]  |
+-----------------------------------------------------------------------+
| [6. ALUR PPDB & INFORMASI PENDAFTARAN - col-5 + col-7]                |
| Stepper 4 Langkah Daftar (col-5) | Tab Syarat & Form Cepat WA (col-7) |
+-----------------------------------------------------------------------+
| [7. GALERI KEGIATAN & WISUDA TAHFIDZ - BENTO GRID 12 KOLOM]           |
| Dokumentasi Wisuda Tahfidz (col-6) | Kegiatan Kelas & Ekskul (col-6)  |
+-----------------------------------------------------------------------+
| [8. TESTIMONI WALI MURID & APRESIASI KEMENAG - 2 x col-6]             |
| Kutipan Wali Murid (col-6)         | Kutipan Pengawas Kemenag (col-6) |
+-----------------------------------------------------------------------+
| [9. PETA LOKASI PORIS GAGA & FOOTER - col-6 + col-6]                  |
| Google Maps & Rute Poris Indah (col-6) | Kontak & Form WA (col-6)     |
+-----------------------------------------------------------------------+
~~~

### Rincian Komponen Tiap Seksi:

1. **Top Utility Bar & Sticky Navbar:**
   * **Top Bar (`bg-emerald-950 text-emerald-100 text-xs py-2`):** Menampilkan alamat singkat (*"Jl. Perum Poris Indah Blok Tempe RT 04/05, Poris Gaga, Batuceper, Kota Tangerang"*), jam layanan, dan nomor telepon `(021) 55740372`.
   * **Navbar (`sticky top-0 z-50 bg-white/95 backdrop-blur border-b`):**
     * Kiri (`col-span-6 lg:col-span-3`): Logo YPI Al-Fuad + teks *"YPI Tahfidz Qur'an Al-Fuad"*.
     * Tengah (`hidden lg:col-span-6 lg:flex`): Tautan *Profil*, *Program Tahfidz*, *Jenjang (RA/MIT/SMP-IT/SMK-IT)*, *Alur PPDB*, *Galeri*, *Kontak*.
     * Kanan (`col-span-6 lg:col-span-3`): Tombol `Daftar PPDB` (`bg-amber-600 text-white rounded-lg px-4 py-2.5 font-semibold`).

2. **Hero Section (Fokus Emosional & Konversi):**
   * **Kolom Kiri (`col-span-12 lg:col-span-7`):**
     * *Pill Badge:* `"Berdiri Sejak 1990 • Lebih dari 35 Tahun Mencetak Generasi Hafidz di Tangerang"`
     * *Headline (`H1`):* `"Cintai Al-Qur'an, Raih Masa Depan Gemilang Bersama YPI Al-Fuad"`
     * *Subheadline:* `"Pendidikan Islam Terpadu (RA, MIT, SMP-IT, SMK-IT & Pesantren) di Poris Gaga yang membimbing anak mencintai, menghafal, dan memahami makna Al-Qur'an dari dasar hingga mahir."`
     * *Dual CTA:* Tombol Primer **"Daftar SPMB / PPDB via WhatsApp"** (`bg-amber-600`) & Tombol Sekunder **"Unduh Brosur & Rincian Biaya"** (`border-white/40 text-white`).
   * **Kolom Kanan (`col-span-12 lg:col-span-5`):**
     * Bingkai foto utama dokumentasi *Wisuda Tahfidz Al-Qur'an YPI Al-Fuad* dengan *floating card* di sudut kiri bawah: `"52+ Pendidik Berlatar Belakang Penghafal Al-Qur'an"` dan di sudut kanan atas: `"Target Hafal & Paham Makna Juz 30"`.

3. **Seksi Statistik & Keunggulan Nyata (4 Kartu `col-span-6 lg:col-span-3`):**
   * Kartu 1: **1990** — Tahun Berdiri (35+ Tahun Pengabdian).
   * Kartu 2: **52+ Guru** — Tenaga Pengajar Berlatar Belakang Hafidz/Hafidzah (dengan apresiasi Umroh tahunan bagi guru berprestasi).
   * Kartu 3: **4 Jenjang + Pesantren** — Pendidikan Berkelanjutan 1 Kawasan (RA, MIT, SMP-IT, SMK-IT).
   * Kartu 4: **Juz 30 + Terjemah** — Target Wajib Lulusan Tingkat Dasar beserta pemahaman arti ayat.

4. **Seksi Kartu Jenjang Pendidikan (4 Kartu `col-span-12 sm:col-span-6 lg:col-span-3`):**
   * Setiap kartu menampilkan:
     * Lencana **NPSN Resmi** (contoh: `NPSN: 69727517` untuk MIS/MIT Al-Fuad).
     * Nama Jenjang & Deskripsi Fokus Pembelajaran.
     * Daftar 3 poin keunggulan (Target Hafalan, Kurikulum Kemenag/Kemendikdasmen, Ekstrakurikuler).
     * Tombol `"Lihat Kurikulum & Syarat Daftar"` yang membuka tab/halaman jenjang terkait.

5. **Seksi Interaktif PPDB & Generator Pesan WhatsApp (`col-span-12 lg:col-span-5` + `col-span-12 lg:col-span-7`):**
   * Dirancang agar orang tua tidak perlu bingung mengetik pesan. Wali murid cukup memilih **Jenjang Tujuan**, mengisi **Nama Anak**, **Asal Sekolah/Usia**, dan **Domisili**, lalu menekan tombol **"Kirim ke WhatsApp Panitia PPDB"** atau **"Isi Formulir Lengkap"**.

6. **Floating Action Button (Mobile Sticky Bottom Bar):**
   * Khusus tampilan layar HP ($< 768\text{ px}$), terdapat bilah melayang di bagian bawah layar berisi 2 tombol cepat: **"Chat Admin PPDB (WA)"** dan **"Rute Google Maps"** dengan ukuran tinggi sentuh minimal $48\text{ px}$.