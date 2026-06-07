# UI & Design System Guidelines

Dokumentasi standar desain visual, layout, dan interaksi untuk proyek-proyek **Muhammad Raffli Aldiansyah**.

## 🎨 Design Theme: Monochromatic Cyberpunk-Lite

Estetika visual berfokus pada nuansa gelap, minimalis, dan teknologi tinggi dengan kontras yang bersih. Menghindari warna umum yang membosankan dan menggunakan palet warna terkurasi dengan efek pendar (*neon glow*).

### Color Palette

| Kegunaan | Variabel / Nilai Hex | Visual |
| :--- | :--- | :--- |
| **Primary Background** | `#0a0a0a` (Deep Charcoal Black) | Latar belakang utama |
| **Alt Background** | `rgba(255, 255, 255, 0.02)` | Latar belakang kartu / seksi sekunder |
| **Accent Glow** | `rgba(255, 255, 255, 0.9)` / White | Sorotan teks dan tombol aktif |
| **Dimmed Text** | `rgba(255, 255, 255, 0.5)` | Deskripsi dan subtitle |
| **Border Color** | `rgba(255, 255, 255, 0.1)` | Batas pemisah dan border kartu standar |
| **Grid Lines** | `rgba(255, 255, 255, 0.03)` | Grid background berpola |

---

## 🔤 Typography & Font Hierarchy

* **Sans-Serif Font**: `'Inter'`, system-ui, sans-serif
  * Digunakan untuk teks umum, judul seksi, navigasi, dan tombol.
  * Memberikan kesan bersih, premium, dan mudah dibaca.
* **Monospace Font**: `'JetBrains Mono'`, monospace
  * Digunakan untuk kode, indikator tahun, statistik, dan elemen Terminal CLI.
  * Menonjolkan identitas teknis / pemrograman.

---

## 🖱️ Micro-Animations & Dynamic Interactions

Setiap interaksi harus terasa responsif, "hidup", dan berkelas premium:

### 1. 3D Tilt Card (Motiongraphy)
Setiap kartu proyek menggunakan efek kemiringan 3D yang mengikuti pergerakan kursor mouse pengguna:
* **Mekanisme**: Menghitung koordinat mouse relatif terhadap kartu dan memutar kartu pada sumbu X dan Y (`perspective(1000px) rotateX(...) rotateY(...)`).
* **Visual**: Kartu sedikit membesar (`scale(1.02)`) dengan kilauan (*glare overlay*) opsional yang bergeser sesuai gerakan kursor.
* **Transisi**: Menggunakan spring physics atau CSS transition `cubic-bezier(0.25, 1, 0.5, 1)` agar transisi kembali ke posisi awal terasa mulus saat mouse pergi (*mouseleave*).

### 2. Linux-Style CLI Boot Animation
Sebuah transisi awal berupa terminal CLI sebelum masuk ke dalam web:
* **Tampilan**: Fullscreen, background hitam legam, teks monospaced hijau/putih.
* **Animasi**: Baris-baris proses booting otomatis yang keluar satu per satu secara cepat, diakhiri dengan pembersihan layar (*screen clear*) atau peluncuran sistem.
* **Transisi Keluar**: Animasi slide-up atau fade-out yang mulus untuk menampilkan halaman portofolio utama.

### 3. Glassmorphism & Neon Glow
* Efek latar belakang buram (`backdrop-filter: blur(12px)`) dikombinasikan dengan border tipis semi-transparan.
* Efek bayangan berpendar (*box-shadow neon*) pada tombol utama dan status aktif.

---

## 📱 Responsive Layout Rules
* **Mobile First**: Desain harus berfungsi sempurna pada layar kecil (di bawah 768px), dengan menu navigasi terlipat (hamburger menu).
* **Grid System**: Menggunakan grid responsif (`repeat(auto-fit, minmax(300px, 1fr))`) untuk kartu proyek agar tertata otomatis tanpa merusak tata letak.
