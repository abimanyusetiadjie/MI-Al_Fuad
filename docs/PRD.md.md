# Product Requirements Document (PRD)
**Nama Proyek:** Website Resmi & Portal Promosi PPDB YPI Tahfidz Qur'an Al-Fuad  
**Lokasi Institusi:** Jl. Perum Poris Indah Blok Tempe RT 004/RW 005, Gg. Masjid At-Taqwa, Kel. Poris Gaga, Kec. Batuceper, Kota Tangerang, Banten 15122  
**Arsitektur Teknis:** Skenario 1 — Astro + Tailwind CSS (Static/Hybrid SSR + Islands Architecture)

---

## 1. Latar Belakang & Hasil Riset Lapangan (Audit Digital)

Berdasarkan penelusuran data publik pada pangkalan data Kemendikdasmen, Kemenag Kota Tangerang, Simpodik Kota Tangerang, dan liputan media lokal, ditemukan fakta-fakta kunci mengenai **Yayasan Pendidikan Islam (YPI) Tahfidz Qur'an Al-Fuad**:

### 1.1 Identitas Satuan Pendidikan di Bawah YPI Al-Fuad
| Unit Pendidikan | Jenjang | NPSN | Status | Fokus Utama |
| :--- | :--- | :--- | :--- | :--- |
| **RA Al-Fuad** | Raudhatul Athfal (TK Islam) | `69887983` | Swasta | Pengenalan huruf hijaiyah, doa harian, motorik & adab dasar |
| **MIS / MIT Al-Fuad** | Madrasah Ibtidaiyah (Setara SDIT) | `69727517` | Swasta | Wajib hafal Juz 30 (Kelas 1–6), terjemah makna ayat, kurikulum Kemenag |
| **SMP IT Al-Fuad** | SMP Islam Terpadu | `20606776` | Swasta | Lanjutan tahfidz Al-Qur'an, akademik nasional, pembinaan karakter remaja |
| **SMKS / SMK IT Al-Fuad** | SMK Islam Terpadu | `20613691` | Swasta | Kompetensi keahlian kejuruan berlandaskan akhlak & hafalan Al-Qur'an |
| **Pondok Pesantren & Majelis Ta'lim Al-Fuad** | Pendidikan Non-Formal / Pesantren | Terdaftar Kemenag | Swasta | Pembinaan santri mukim/kalong dan pengajian masyarakat sekitar |

### 1.2 Masalah Utama Saat Ini (Pain Points)
1. **Belum Memiliki Website Resmi Mandiri:** Pencarian di Google hanya memunculkan halaman mentah `sekolah.data.kemendikdasmen.go.id` dan tautan usang `20613691.siap-sekolah.com` yang sudah tidak merepresentasikan profil yayasan.
2. **Kekuatan Besar Yayasan Belum Terekspos Digital:** YPI Al-Fuad yang dipimpin oleh Drs. KH. Jaelani sudah berdiri sejak **1990 (35+ tahun)**, memiliki **52+ guru berlatar belakang penghafal Al-Qur'an**, memiliki program **hadiah Umroh tahunan bagi 2 guru berprestasi**, serta rutin menggelar **Wisuda Tahfidz Al-Qur'an**. Namun semua keunggulan ini belum terangkum dalam satu *landing page* resmi.
3. **Titik Google Maps Terpecah-pecah:** Terdapat minimal 5 pin berbeda di Google Maps (*YPI Al-Fuad, MI TPI Al-Fuad, SMP IT Al-Fuad, SMK Al-Fuad, Pondok Pesantren YPI Al-Fuad*) dengan nomor kontak yang berbeda-beda sehingga membingungkan calon wali murid baru.

---

## 2. Target Audiens & Persona Pengguna

1. **Persona Utama — Orang Tua / Wali Murid Muda (Usia 25–42 Tahun):**
   * **Domisili:** Sekitar Poris Gaga, Perum Poris Indah, Batuceper, Cipondoh, Benda, hingga perbatasan Kalideres/Daan Mogot (Jakarta Barat).
   * **Perangkat:** $85\%$ mengakses melalui *smartphone* Android (dari grup WhatsApp warga/masjid atau pencarian Google Maps).
   * **Kebutuhan Utama:** Mencari sekolah Islam yang dekat dari rumah, biaya terjangkau, lingkungan aman dari pergaulan negatif/narkoba, dan mampu membimbing anak menghafal serta memahami Al-Qur'an meski anak belum lancar mengaji dari nol.
2. **Persona Sekunder — Siswa Lulusan SD/MI & SMP Sekitar:**
   * Mencari informasi lanjutan ke jenjang SMP-IT atau SMK-IT Al-Fuad beserta kegiatan ekstrakurikuler dan fasilitasnya.

---

## 3. Tujuan Bisnis & Metrik Keberhasilan (KPI)

| Kategori | Indikator Keberhasilan (KPI) | Target Kuantitatif |
| :--- | :--- | :--- |
| **Performa Web** | Skor Google Lighthouse (Mobile & Desktop) | Performance $\ge 95$, SEO $= 100$, Best Practices $= 100$ |
| **Kecepatan Muat** | Largest Contentful Paint (LCP) di jaringan 4G | $\le 1.8\text{ detik}$ |
| **Visibilitas SEO Lokal** | Peringkat Google Search untuk kata kunci lokal | Top 3 untuk *"Sekolah Islam Poris Gaga"*, *"MI Al Fuad Tangerang"*, *"SMP IT Al Fuad Batuceper"* dalam 3 bulan |
| **Konversi PPDB** | Rasio klik tombol WhatsApp PPDB / Unduh Brosur | Conversion Rate $\ge 8\%$ dari total pengunjung unik masa PPDB |
| **Keamanan & Biaya** | Insiden *deface/malware* & biaya sewa server bulanan | $0$ insiden keamanan & Rp $0$ biaya hosting bulanan (Cloudflare Pages Free Tier) |

---

## 4. Spesifikasi Fitur (Functional Requirements)

### Prioritas P0 (Wajib Ada pada Rilis Pertama / MVP)
* **FR-01 — Landing Page 9 Seksi Terpadu:** Menampilkan profil yayasan, sejarah sejak 1990, keunggulan 52+ guru hafidz, 4 jenjang pendidikan, alur PPDB, galeri wisuda tahfidz, testimoni wali murid, dan peta lokasi.
* **FR-02 — Katalog Informasi Jenjang (RA, MIT, SMP-IT, SMK-IT):** Menampilkan nomor NPSN resmi, target hafalan per jenjang, jam belajar, dan syarat pendaftaran.
* **FR-03 — Generator Formulir Cepat PPDB ke WhatsApp:** Komponen interaktif di mana orang tua memilih jenjang dan mengisi nama anak, lalu sistem otomatis merangkai pesan WhatsApp yang rapi ke nomor panitia PPDB YPI Al-Fuad (`0877-7214-4633` / `(021) 55740372`).
* **FR-04 — Pusat Unduhan Brosur & Rincian Persyaratan (PDF):** Tombol unduh cepat brosur resmi PPDB per jenjang tanpa perlu login.
* **FR-05 — Integrasi Peta & Panduan Rute Lokasi:** Menyematkan peta menuju lokasi utama di Jl. Perum Poris Indah Blok Tempe Gg. Masjid At-Taqwa, lengkap dengan tombol *"Buka Petunjuk Arah di Google Maps"*.

### Prioritas P1 (Pengembangan Tahap Kedua)
* **FR-06 — Halaman Artikel & Kabar Kegiatan (Markdown Content Collections):** Halaman dokumentasi kegiatan seperti *Wisuda Tahfidz Periode Berikutnya*, *Peringatan Hari Besar Islam (PHBI)*, dan prestasi lomba siswa.
* **FR-07 — Integrasi Webhook Google Sheets (Tanpa Database Berbayar):** Saat calon wali murid mengisi form minat PPDB di web, data otomatis tercatat ke Google Sheets panitia sekolah (melalui Google Apps Script Webhook) sekaligus mengarahkan pengguna ke WhatsApp.

### Prioritas P2 (Opsional / Masa Depan)
* **FR-08 — Kalkulator Estimasi Biaya Pendidikan:** Simulasi sederhana uang pangkal dan SPP bulanan sesuai jenjang yang dipilih.
* **FR-09 — Halaman Cek Pengumuman Kelulusan / Seleksi PPDB:** Pencarian status penerimaan siswa baru berbasis nomor pendaftaran.