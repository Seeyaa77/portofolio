# Prompt Engineering System

Dokumentasi template prompt instruksi untuk menginstruksikan AI Agent (seperti Gemini/ChatGPT/Claude) agar dapat memproduksi kode otomatisasi dan antarmuka (UI) yang sesuai dengan standar kualitas **Muhammad Raffli Aldiansyah**.

---

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
   - Gunakan logging terstruktur dengan timestamp dan level log [INFO, WARNING, ERROR].
5. Output Data: Simpan hasil akhir dalam format JSON terstruktur yang bersih.

Tugas: Tulis kode bersih, terdokumentasi dengan baik, dan siap dideploy ke server VPS.
```

---

## 🎨 Prompt: Next.js & React.js Frontend Component Generation (Cyberpunk-Lite Edition)

Gunakan prompt ini ketika ingin meminta AI mendesain komponen UI baru atau melakukan upgrade pada komponen portofolio (seperti kartu proyek, widget terminal, atau seksi interaktif lainnya):

```markdown
Role: Creative Frontend Developer (Expert in React & Next.js)
Context: Saya ingin membuat/meng-upgrade komponen [NAMA_KOMKOMEN] untuk website portofolio saya dengan tema "Monochromatic Cyberpunk-Lite" menggunakan Next.js / React.js.

Spesifikasi Desain & Efek Visual Premium:
1. Palet Warna (Monokromatik Cyber):
   - Background utama: `#0a0a0a` (Deep Charcoal Black).
   - Background sekunder/kartu: Glassmorphic `rgba(10, 10, 10, 0.75)` dengan `backdrop-filter: blur(12px)`.
   - Aksen teks & pendar: Putih/abu terang (`#ffffff`, `#f4f4f5`) dan deskripsi redup (`rgba(255, 255, 255, 0.45)`).
   - Border tipis: `rgba(255, 255, 255, 0.05)`.
2. Tipografi:
   - Gunakan font 'Inter' untuk elemen antarmuka umum.
   - Gunakan font 'JetBrains Mono' untuk label teknis, tag, tanggal, dan status terminal.
3. Struktur Desain Kartu & Elemen Upgraded:
   - **Glow & Grid Mesh Background**: Gunakan perpaduan grid mesh halus (misalnya, `radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)`) dan efek *radial-gradient light glow* yang membesar saat di-hover.
   - **Gaya Border 1px Gradient**: Terapkan efek border gradasi 1px yang tajam menggunakan teknik border mask CSS (`-webkit-mask` dengan linear-gradient).
   - **Monospace Tech Brackets**: Tambahkan penanda sistem berpenampilan digital di sudut elemen, seperti tag `[SYS.ONLINE]` atau `[SYS.PRIVATE]` untuk memberikan estetika cyberpunk.
   - **Icon Box Box-Shadow**: Gunakan pembungkus ikon terdedikasi (`project-icon-box`) dengan border halus dan bayangan pendar saat di-hover.
4. Animasi & Interaksi Dinamis:
   - Implementasikan efek 3D Tilt dinamis menggunakan Framer Motion yang melacak kursor mouse (`onMouseMove`, `onMouseLeave`) dengan konfigurasi spring physics (`type: 'spring', stiffness: 200, damping: 15`).
   - Berikan transisi entrance stagger yang mulus saat elemen dimuat di viewport.
5. Kualitas Kode:
   - Tulis dalam bentuk komponen fungsional React/Next.js yang bersih, terstruktur, responsif (Mobile-First), dan dihiasi styling CSS yang rapi (Tailwind CSS v4 atau Vanilla CSS di App.css).

Tugas: Tulis kode komponen lengkap beserta penjelasan transisi, status interaktif, dan efek visual yang digunakan.
```
