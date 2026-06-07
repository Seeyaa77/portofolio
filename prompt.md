# Prompt Engineering System

Dokumentasi template prompt instruksi untuk menginstruksikan AI Agent (seperti Gemini/ChatGPT) agar dapat memproduksi kode otomatisasi dan antarmuka (UI) yang sesuai dengan standar kualitas **Muhammad Raffli Aldiansyah**.

## 🛠️ Prompt: Automation Script Generation (Python/Node.js)

Gunakan prompt di bawah ini ketika ingin meminta AI membuat skrip otomatisasi baru:

```markdown
Role: Senior Automation Engineer & Anti-Detection Specialist
Context: Saya ingin membuat skrip otomatisasi untuk [TARGET_WEBSITE_ATAU_APLIKASI].

Spesifikasi & Keharusan Teknis:
1. Bahasa & Runtime: Gunakan [Python AsyncIO / Node.js ES Modules].
2. Driver/Library: Gunakan [Playwright / Puppeteer / Selenium / Scrapy / Requests] dengan pola asynchronous.
3. Anti-Detection:
   - Gunakan trik penyamaran fingerprint browser (stealth mode).
   - Terapkan rotasi user-agent acak (random user-agents) dan konfigurasi proxy pool.
   - Tambahkan waktu jeda acak (random human-like delays) di antara aksi klik/input.
4. Error Handling:
   - Terapkan blok try-except/try-catch di setiap modul krusial.
   - Implementasikan mekanisme auto-retry (maksimal 3 kali) jika terjadi timeout atau kegagalan selektor.
   - Gunakan logging terstruktur (bukan print/console.log biasa) dengan timestamp dan level log [INFO, WARNING, ERROR].
5. Output Data: Simpan hasil akhir dalam format JSON terstruktur yang bersih.

Tugas: Tulis kode bersih, terdokumentasi dengan baik, dan siap dideploy ke server VPS.
```

---

## 🎨 Prompt: Frontend UI / Component Generation

Gunakan prompt ini ketika ingin meminta AI mendesain komponen UI baru untuk web portofolio ini:

```markdown
Role: Creative Frontend Developer
Context: Saya ingin membuat komponen [NAMA_KOMPONEN] baru untuk website portofolio saya yang mengusung tema "Monochromatic Cyberpunk-Lite".

Spesifikasi Desain:
1. Palet Warna: Monokromatik gelap (Background #0a0a0a, teks putih/abu-abu terang, border semi-transparan rgba(255, 255, 255, 0.1)).
2. Tipografi: Gunakan font 'Inter' untuk elemen UI umum dan 'JetBrains Mono' untuk angka, tanggal, atau teks bergaya pemrograman/terminal.
3. Animasi: Terapkan animasi yang smooth menggunakan Framer Motion. Gunakan efek hover interaktif (seperti 3D tilt, scale 1.02, atau neon box-shadow berpendar).
4. Responsif: Pastikan layout bersifat Mobile-First dan dapat menyesuaikan ukuran layar dari HP hingga monitor desktop.
5. Kebersihan Kode: Tulis dalam bentuk komponen React fungsional, menggunakan styling Tailwind CSS v4 atau Vanilla CSS yang diatur rapi di App.css. Jangan gunakan library eksternal yang berat jika bisa diselesaikan dengan CSS murni.

Tugas: Tulis kode komponen lengkap beserta penjelasan transisi dan efek interaktif yang digunakan.
```
