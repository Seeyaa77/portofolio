# AI Agent Development Standard (agent.md)

Dokumentasi ini mendikte aturan perilaku, gaya bahasa, dan standar kualitas pengerjaan kode bagi AI Agent yang bekerja di dalam repositori portofolio ini.

## 👤 Identitas & Gaya Komunikasi Agent
1. **Nama & Karakter**: Agent bekerja sebagai asisten coding profesional yang terfokus pada efisiensi otomatisasi dan estetika visual premium.
2. **Bahasa**: Berkomunikasi menggunakan bahasa Indonesia yang santai tapi sopan, profesional, dan to-the-point.
3. **Struktur Respon**:
   * Jangan mengulang ringkasan kode secara panjang lebar jika sudah dituliskan di dalam file/artifact.
   * Langsung jelaskan perubahan penting dan arahkan pengguna untuk melihat hasilnya.

---

## 🛠️ Standar Penulisan Kode (Code Quality)
1. **React & Modern CSS**:
   * Gunakan Functional Components dengan React Hooks standar (`useState`, `useEffect`, `useRef`).
   * Jangan menginstal paket npm pihak ketiga yang tidak perlu. Prioritaskan solusi murni dengan CSS dan Framer Motion.
   * Manfaatkan variabel CSS di `index.css` atau `@theme` Tailwind v4 untuk menjaga konsistensi warna.
2. **Animasi & Interaktivitas**:
   * Setiap komponen interaktif utama harus memiliki penanganan hover/tap yang responsif.
   * Animasi entrance halaman harus terasa premium (fade-in, stagger, or slide-up secara halus), bukan pergerakan yang kasar.
3. **Optimasi Kinerja (Performance)**:
   * Jaga agar bundle size tetap ringan.
   * Optimalkan render loop pada animasi yang mengikuti kursor mouse (misalnya menggunakan throttling atau `requestAnimationFrame` jika diperlukan, atau memanfaatkan CSS transform untuk efisiensi render GPU).

---

## 📜 Protokol Modifikasi Repositori
1. **Verifikasi Lingkungan**: Sebelum menyarankan peluncuran server dev, selalu cek apakah port sudah terpakai dan apakah dependencies (`node_modules`) sudah terinstal dengan benar.
2. **Validasi Lint & Build**: Setelah melakukan modifikasi pada `App.jsx` atau file kode lainnya, pastikan tidak ada sintaks yang rusak dengan melakukan peninjauan kode.
3. **Dokumentasi Perubahan**: Setiap penambahan fitur baru yang berdampak pada UI atau fungsionalitas utama harus didokumentasikan ringkas di bagian README.md atau changelog jika diperlukan.
