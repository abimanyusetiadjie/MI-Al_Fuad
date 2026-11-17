# System Architecture Document
**Proyek:** Website Profil & Portal PPDB YPI Tahfidz Qur'an Al-Fuad Poris Gaga  
**Pendekatan Arsitektur:** *Static-First Islands Architecture* (Astro + Tailwind CSS)

---

## 1. Gambaran Umum Arsitektur (High-Level Architecture)

Sesuai dengan **Skenario 1**, arsitektur dirancang agar memiliki **performa sangat cepat**, **SEO lokal maksimal**, **bebas biaya pemeliharaan server bulanan**, dan **100% kebal terhadap serangan injeksi *plugin*/database** yang sering menimpa website sekolah berbasis CMS tradisional.

~~~
+-------------------------------------------------------------------------+
|                        PENGGUNA (WALI MURID / SISWA)                    |
|              Browser Smartphone (Android/iOS) & Desktop                 |
+------------------------------------+------------------------------------+
                                     | HTTPS (TLS 1.3 + HTTP/3)
                                     v
+-------------------------------------------------------------------------+
|                    CLOUDFLARE PAGES / VERCEL EDGE CDN                   |
|  - Global Edge Caching (HTML Statis, WebP/AVIF Images, CSS Terkompresi) |
|  - Proteksi DDoS, WAF, & Security Headers (CSP, HSTS, X-Frame-Options)  |
+------------------------------------+------------------------------------+
                                     |
       +-----------------------------+-----------------------------+
       | (Aset Statis & HTML)                                      | (Interaksi PPDB)
       v                                                           v
+--------------------------------------+   +--------------------------------------+
|      ASTRO BUILD ENGINE (SSG/SSR)    |   |    INTEGRASI EKSTERNAL (SERVERLESS)  |
|  - Komponen UI (.astro) -> 0 KB JS   |   |  1. WhatsApp Deep Link API (wa.me)   |
|  - Content Collections (Markdown/MDX)|   |  2. Google Apps Script Webhook       |
|  - Optimasi Gambar (astro:assets)    |   |     -> Rekap Otomatis Google Sheets  |
|  - Sitemap & JSON-LD Schema Otomatis |   |  3. Google Maps Embed API            |
+--------------------------------------+   +--------------------------------------+
~~~

---

## 2. Pemilihan Tech Stack & Alasan Teknis

| Lapisan | Teknologi | Versi Acuan | Peran & Alasan Pemilihan |
| :--- | :--- | :--- | :--- |
| **Core Framework** | **Astro** | `^5.x` | Merender seluruh komponen halaman menjadi HTML murni dengan **0 KB JavaScript secara default**. Sangat ringan di HP spesifikasi rendah. |
| **Styling Engine** | **Tailwind CSS** | `^3.4` / `^4.0` | Mengimplementasikan *12-Column Grid System* dengan ukuran file CSS produksi akhir $< 15\text{ KB}$ (setelah *purging*). |
| **UI Interactivity** | **Alpine.js** atau **Preact/React Islands** | `^3.x` / `^18.x` | Hanya dihidrasi (`client:visible` / `client:idle`) pada komponen interaktif seperti *Tab Jenjang*, *Modal Galeri*, dan *Form Generator WA PPDB*. |
| **Content Management** | **Astro Content Collections** (+ Zod) | Built-in | Menyimpan data jenjang (RA, MIT, SMP-IT, SMK-IT), berita wisuda tahfidz, dan testimoni dalam file Markdown/JSON tervalidasi tipe data (*type-safe*). |
| **Image Optimization** | **Sharp (`astro:assets`)** | Built-in | Mengubah foto kegiatan sekolah beresolusi besar (JPG/PNG) menjadi format `.webp` dan `.avif` berbagai ukuran secara otomatis saat proses *build*. |
| **SEO & Metadata** | `@astrojs/sitemap` + Custom JSON-LD | `^3.x` | Menghasilkan `sitemap-index.xml`, `robots.txt`, OpenGraph WhatsApp Preview, dan *Structured Data* sekolah secara otomatis. |
| **Hosting & CI/CD** | **Cloudflare Pages** (atau Vercel) | Edge Network | *Deployment* otomatis setiap kali ada *git push* ke repositori GitHub, gratis kuota *bandwidth* tak terbatas untuk situs statis. |

---

## 3. Struktur Direktori Proyek (Project Tree)

Struktur folder dirancang modular agar mudah dipelihara dan dapat dikembangkan ke CMS Headless atau backend Laravel di masa depan bila sekolah berkembang:

~~~text
ypi-alfuad-web/
├── public/
│   ├── brosur/
│   │   ├── brosur-ppdb-ypi-alfuad-2026.pdf
│   │   └── rincian-biaya-ypi-alfuad.pdf
│   ├── images/
│   │   └── og-cover-alfuad.jpg        # Gambar thumbnail saat link dibagikan di WhatsApp
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                        # Foto asli sekolah (otomatis dikonversi ke WebP oleh Astro)
│   │   ├── hero-wisuda-tahfidz.jpg
│   │   ├── logo-ypi-alfuad.png
│   │   └── galeri/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.astro           # Info alamat Poris Gaga & telepon
│   │   │   ├── Navbar.astro           # Navigasi responsif + tombol PPDB
│   │   │   ├── Footer.astro           # Peta, NPSN tiap jenjang, hak cipta
│   │   │   └── FloatingWhatsApp.astro # Sticky bar bawah khusus layar HP
│   │   ├── sections/
│   │   │   ├── HeroSection.astro      # Seksi utama 12-kolom (7 kiri + 5 kanan)
│   │   │   ├── TrustStatsBar.astro    # 4 kartu statistik (1990, 52+ Guru, Juz 30, 4 Unit)
│   │   │   ├── TahfidzPillars.astro   # 3 pilar pendidikan Al-Qur'an & Adab
│   │   │   ├── EducationUnits.astro   # Kartu jenjang RA, MIT, SMP-IT, SMK-IT
│   │   │   ├── PpdbSection.astro      # Alur pendaftaran & rincian syarat
│   │   │   ├── GalleryBento.astro     # Dokumentasi kegiatan & wisuda tahfidz
│   │   │   ├── Testimonials.astro     # Testimoni wali murid & pengawas Kemenag
│   │   │   └── LocationMap.astro      # Google Maps & panduan akses Poris Indah
│   │   └── interactive/
│   │       └── PpdbWaForm.tsx         # Island interaktif: Form Pendaftaran -> WA + Google Sheets
│   ├── content/
│   │   ├── config.ts                  # Definisi skema Zod untuk Content Collections
│   │   ├── units/                     # Data per jenjang (ra.md, mit.md, smpit.md, smkit.md)
│   │   ├── news/                      # Artikel kegiatan & wisuda tahfidz (.md)
│   │   └── testimonials/              # Data testimoni wali murid (.json)
│   ├── data/
│   │   └── siteConfig.ts              # Konfigurasi terpusat (Alamat, No WA, NPSN, Sosmed)
│   ├── layouts/
│   │   └── MainLayout.astro           # Kerangka HTML5, Meta SEO, JSON-LD Schema
│   ├── pages/
│   │   ├── index.astro                # Landing page utama
│   │   ├── ppdb.astro                 # Halaman khusus pendaftaran & rincian biaya
│   │   ├── jenjang/
│   │   │   └── [slug].astro           # Halaman detail tiap jenjang (RA, MIT, SMP-IT, SMK-IT)
│   │   └── kabar/
│   │       ├── index.astro            # Daftar berita kegiatan sekolah
│   │       └── [slug].astro           # Detail berita kegiatan
│   └── styles/
│       └── global.css                 # Deklarasi Tailwind CSS & utility container 12-kolom
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
~~~

---

## 4. Alur Data Pendaftaran PPDB (Zero-Cost Lead Capture)

Agar pihak sekolah tetap mendapatkan rekap data pendaftar di Excel/Spreadsheet tanpa harus membayar biaya sewa database bulanan:

1. **Input Wali Murid:** Orang tua mengisi formulir singkat di komponen `PpdbWaForm` (Nama Calon Siswa, Jenjang yang Dituju, Nama Orang Tua, Nomor WA Aktif, Alamat/Domisili).
2. **Validasi Sisi Klien:** Skema Zod memeriksa kelengkapan data di browser.
3. **Dual Action (Paralel):**
   * **Langkah A (Penyimpanan Data):** Mengirim `POST` request asinkron (`fetch`) ke URL *Google Apps Script Web App* milik sekolah yang langsung menambahkan baris baru di **Google Sheets Rekap PPDB YPI Al-Fuad**.
   * **Langkah B (Konversi Instan):** Mengarahkan browser pengguna ke tautan `https://wa.me/6287772144633?text=...` dengan format pesan yang sudah terisi rapi sehingga wali murid langsung terhubung dengan admin PPDB.

---

## 5. Keamanan & Optimasi Performa

* **Imunitas dari Serangan Siber:** Karena tidak menggunakan WordPress, PHP *runtime* yang terekspos, ataupun database MySQL publik, tidak ada celah untuk *SQL Injection*, eksploitasi *plugin Elementor bajakan*, maupun penyisipan halaman judi online (*slot defacement*).
* **HTTP Security Headers (`public/_headers` di Cloudflare Pages):**
  ~~~text
  /*
    X-Frame-Options: DENY
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()
  ~~~