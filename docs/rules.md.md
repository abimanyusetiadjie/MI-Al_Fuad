# Engineering, Design & Content Rules (`rules.md`)
Dokumen ini berfungsi sebagai pedoman standar pengembangan (*coding standards*) sekaligus instruksi AI (*Cursor Rules / System Prompt*) selama pembangunan website **YPI Tahfidz Qur'an Al-Fuad Poris Gaga**.

---

## 1. Aturan Arsitektur & Komponen Astro
1. **Default Tanpa JavaScript Klien:** Seluruh komponen tata letak dan informasi statis **wajib** ditulis menggunakan komponen `.astro` murni tanpa direktif `client:*`.
2. **Penggunaan Partial Hydration (Islands) Secara Ketat:**
   * Hanya gunakan komponen interaktif (React/Preact/Alpine) pada bagian yang benar-benar membutuhkan *state* di sisi browser (contoh: `PpdbWaForm`, *Tab Filter Jenjang*, dan *Mobile Navigation Drawer*).
   * Gunakan direktif `client:visible` untuk komponen di bawah lipatan layar (*below the fold*) seperti formulir PPDB, dan `client:idle` untuk komponen navigasi. Dilarang menggunakan `client:load` kecuali sangat krusial.
3. **TypeScript Strict Mode:** Seluruh file `.ts`, `.tsx`, dan *frontmatter* `.astro` wajib memiliki definisi tipe data yang jelas. Dilarang menggunakan tipe `any`.

---

## 2. Disiplin Grid 12-Kolom & Responsivitas (Bootstrap Mental Model)
1. **Standar Pembungkus Seksi:**
   * Setiap seksi halaman utama wajib menggunakan pembungkus:
     `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
   * Di dalamnya wajib menggunakan baris *grid* 12-kolom:
     `grid grid-cols-12 gap-4 md:gap-6 lg:gap-8`
2. **Aturan Kolom Responsif:**
   * Pada layar *mobile* ($< 768\text{ px}$), kartu informasi utama harus mengambil lebar penuh (`col-span-12`) atau maksimal 2 kolom untuk statistik ringkas (`col-span-6`).
   * Pada layar *tablet* ($\ge 768\text{ px}$), gunakan pembagian `md:col-span-6` (2 kartu sebaris) atau `md:col-span-4` (3 kartu sebaris).
   * Pada layar *desktop* ($\ge 1024\text{ px}$), gunakan pembagian `lg:col-span-3` (4 kartu jenjang sebaris), `lg:col-span-4` (3 pilar program), atau `lg:col-span-7` + `lg:col-span-5` (rasio asimetris untuk *Hero* dan *PPDB*).
3. **Ukuran Sentuh Ramah Orang Tua (Touch Targets):**
   * Semua tombol CTA, tautan menu mobile, dan pilihan *tab* jenjang wajib memiliki tinggi minimal $44\text{ px}$ (`min-h-[44px]`) dan jarak antar-tombol minimal $8\text{ px}$ agar mudah ditekan oleh ibu/bapak wali murid di layar ponsel.

---

## 3. Aturan Optimasi Gambar & Aset
1. **Larangan Tag `<img>` Mentah untuk Foto Lokal:**
   * Seluruh foto dokumentasi sekolah, gedung, dan wisuda tahfidz wajib disimpan di `src/assets/` dan dirender menggunakan komponen `<Image />` atau `<Picture />` dari `astro:assets`.
   * Format keluaran wajib diatur ke `webp` atau `avif` dengan atribut `loading="lazy"` dan `decoding="async"` untuk semua gambar di luar *Hero Section*.
2. **Prioritas Gambar Hero (LCP Optimization):**
   * Gambar utama pada *Hero Section* wajib memiliki atribut `loading="eager"` dan `fetchpriority="high"` agar *Largest Contentful Paint* (LCP) selesai dalam waktu $\le 1.8\text{ detik}$.
3. **Batas Ukuran File:**
   * Tidak boleh ada satu pun aset gambar hasil *build* yang berukuran lebih dari $180\text{ KB}$.
   * File PDF brosur di `public/brosur/` wajib dikompresi hingga berukuran $< 2\text{ MB}$ agar hemat kuota internet wali murid.

---

## 4. Pedoman Konten, Bahasa & Etika Sekolah Islam
1. **Akurasi Data Legalitas YPI Al-Fuad:**
   * Jangan pernah mengarang nomor NPSN atau alamat. Gunakan data resmi yang telah terverifikasi:
     * **Yayasan:** Yayasan Pendidikan Islam (YPI) Tahfidz Qur'an Al-Fuad (Berdiri 1990, Ketua Yayasan: Drs. KH. Jaelani).
     * **Alamat:** Jl. Perum Poris Indah Blok Tempe RT 004/RW 005 No. 7, Gg. Masjid At-Taqwa, Kel. Poris Gaga, Kec. Batuceper, Kota Tangerang, Banten 15122.
     * **NPSN Resmi:** RA Al-Fuad (`69887983`), MIS/MIT Al-Fuad (`69727517`), SMP Al-Fuad (`20606776`), SMKS Al-Fuad (`20613691`).
2. **Gaya Bahasa (Tone of Voice):**
   * Gunakan sapaan yang santun, hangat, dan akrab bagi keluarga Muslim Indonesia: sapa orang tua dengan **"Ayah & Bunda"** atau **"Bapak/Ibu Wali Murid"**, peserta didik dengan **"Ananda"** atau **"Santri/Siswa"**, dan pengajar dengan **"Ustadz/Ustadzah & Dewan Guru"**.
   * Hindari klaim berlebihan yang tidak realistis. Tonjolkan bukti nyata: *berdiri lebih dari 35 tahun*, *52+ pengajar berlatar belakang penghafal Al-Qur'an*, *bimbingan mengaji dari nol*, dan *kewajiban hafal serta paham arti Juz 30*.
3. **Aturan Visual:**
   * Hindari penggunaan foto *stock* orang Barat atau ilustrasi yang tidak sesuai dengan adab busana Muslim/Muslimah sekolah Islam di Indonesia.

---

## 5. Aturan SEO Lokal & WhatsApp Share Preview
1. **Optimasi Berbagi Tautan di Grup WhatsApp:**
   * Mayoritas orang tua membagikan tautan sekolah melalui grup WhatsApp keluarga atau pengajian. Setiap halaman wajib menyertakan tag OpenGraph (`og:title`, `og:description`, `og:image` berukuran $1200 \times 630\text{ px}$ dengan ukuran file $< 300\text{ KB}$) agar muncul *preview* gambar dan judul yang meyakinkan saat ditempel di chat WhatsApp.
2. **Kata Kunci SEO Lokal Wajib:**
   * Pastikan elemen `<title>`, `<h1>`, `<h2>`, dan meta deskripsi mengandung variasi kata kunci geografis secara alami: *"Sekolah Islam di Poris Gaga"*, *"Madrasah Ibtidaiyah Tahfidz Batuceper Tangerang"*, *"SMP IT Al-Fuad Poris Indah"*, *"SMK IT Al-Fuad Tangerang"*, dan *"RA/TK Islam Poris Gaga"*.