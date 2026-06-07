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

---

## 🚀 Prompt: React Component Integration & Project Setup

Gunakan prompt ini ketika ingin meminta AI mengintegrasikan komponen React luar ke dalam struktur project yang mendukung Shadcn, Tailwind CSS, dan TypeScript, termasuk melakukan instalasi dependensi eksternal.

```markdown
Role: Fullstack Engineer (React, Tailwind, TypeScript & Shadcn Specialist)
Context: Saya ingin mengintegrasikan komponen React luar ke dalam codebase saya.

Persyaratan Proyek & Struktur:
- Mendukung struktur project Shadcn.
- Menggunakan Tailwind CSS untuk styling.
- Menggunakan TypeScript untuk penulisan tipe data yang aman.

Jika project belum memiliki salah satu dari hal di atas, berikan petunjuk langkah demi langkah tentang cara mengatur project menggunakan Shadcn CLI, menginstal Tailwind CSS, atau mengonfigurasi TypeScript secara benar.

Ketentuan Direktori & Integrasi:
1. Tentukan path default untuk komponen UI dan style.
2. Jika path default untuk komponen bukan `/components/ui`, berikan penjelasan mengapa penting untuk membuat folder ini.
3. Salin dan tempel komponen `personal-landing.tsx` berikut ke folder `/components/ui`:

```tsx
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Github,
  Video,
  Youtube,
} from "lucide-react";


const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-orange-400 opacity-60 blur-lg animate-glow" />
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256"
          alt="avatar"
          className="relative size-32 rounded-full border-4 border-zinc-800 shadow-xl z-10 object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-geist drop-shadow-lg">
        Hi, I'm Ankit
      </h1>
      <p className="text-xl md:text-2xl text-zinc-300 max-w-lg mx-auto font-inter font-normal">
        I craft beautiful, performant web experiences with React, TypeScript, and modern UI frameworks.
      </p>
    </section>
  );
};

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: '#',
    label: 'YouTube',
    icon: <Youtube size={28} />,
    bg: 'bg-red-500',
    text: 'text-white',
  },
  {
    href: '#',
    label: 'GitHub',
    icon: <Github size={28} />,
    bg: 'bg-zinc-800',
    text: 'text-white',
  },
  {
    href: '#',
    label: 'Self Intro',
    icon: <Video size={28} />,
    bg: 'bg-zinc-50',
    text: 'text-zinc-900',
  },
];

const SocialsBlock: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-4 w-full font-inter">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        aria-label={link.label}
        className={twMerge(
          'flex items-center gap-2 rounded-full border border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-opacity-80',
          link.bg,
          link.text,
        )}
        style={{ minWidth: 140, minHeight: 56 }}
        tabIndex={0}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

const AboutBlock = () => (
  <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-7 shadow-lg text-center font-inter">
    <p className="text-lg md:text-xl text-zinc-200 font-normal">
      Passionate about building elegant, accessible, and high-performance web apps.<br />Always learning, always sharing.
    </p>
  </div>
);

const ConnectSection: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validateMessage = (msg: string) => {
    if (!msg.trim()) return "Message cannot be empty.";
    if (msg.trim().length < 3) return "Message must be at least 3 characters.";
    if (msg.length > 200) return "Message cannot exceed 200 characters.";
    return "";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateMessage(message);
    if (validationError) {
      setError(validationError);
      return;
    }
    setShowToast(true);
    setMessage("");
    setError("");
    if (inputRef.current) inputRef.current.blur();
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (error) setError("");
  };

  return (
    <section className="w-full flex flex-col items-center text-center gap-4 mt-8 font-inter relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-base animate-fade-in">
          Message sent!
        </div>
      )}
      <p className="text-lg text-zinc-400 mb-4 max-w-md mx-auto font-normal">
        Interested in collaborating, chatting about tech, or just saying hi? Send me a message below!
      </p>
      <form onSubmit={handleSend} className="flex w-full max-w-md gap-2 items-center justify-center">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className={twMerge(
            "flex-1 rounded-full border px-5 py-3 text-base text-zinc-100 placeholder-zinc-500 transition-colors focus:outline-none shadow font-inter",
            error ? "border-red-500 focus:border-red-500" : "border-zinc-700 bg-zinc-900 focus:border-pink-400"
          )}
          maxLength={201}
        />
        <button
          type="submit"
          className={twMerge(
            "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 px-7 py-3 text-base font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all",
            message.trim() ? "hover:scale-105 hover:shadow-xl cursor-pointer opacity-100" : "opacity-50 cursor-not-allowed"
          )}
          disabled={!message.trim()}
          aria-disabled={!message.trim()}
        >
          Send
        </button>
      </form>
      {error && (
        <div className="text-red-500 text-sm mt-1 font-medium">{error}</div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export const PersonalLanding = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-4 py-16 text-zinc-50 font-inter relative overflow-hidden">
    {/* Animated background blob */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-red-500 to-orange-400 opacity-20 rounded-full blur-3xl animate-pulse-slow z-0" />
    <div className="w-full max-w-2xl flex flex-col items-center gap-12 z-10">
      <HeroSection />
      <AboutBlock />
      <SocialsBlock />
      <ConnectSection />
    </div>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
      .font-inter { font-family: 'Inter', 'Geist', system-ui, sans-serif; }
      .font-geist { font-family: 'Geist', 'Inter', system-ui, sans-serif; }
    `}</style>
  </div>
  );
};
```

4. Salin dan tempel kode pembungkus `demo.tsx` ke direktori komponen Anda:

```tsx
import { PersonalLanding } from "@/components/ui/personal-landing";

export default function DemoOne() {
  return <PersonalLanding />;
}
```

Langkah Integrasi:
1. Instal dependensi eksternal yang dibutuhkan (`lucide-react`, `tailwind-merge`).
2. Jalankan instalasi/setup library yang dibutuhkan jika project Anda belum menggunakannya.
3. Ganti gambar avatar/placeholder dengan gambar valid dari Unsplash.
```

---

## ⚡ Prompt: Navbar Scroll Glitch Fix & Realistic Blue Lightning Profile Glow

Gunakan prompt ini untuk menginstruksikan AI memperbaiki glitch garis putih pada navbar saat di-scroll dan mengubah animasi pendaran di belakang foto profil menjadi efek petir elektrik biru yang realistis:

```markdown
Role: Creative Frontend & CSS Performance Specialist
Context: Saya ingin memperbaiki glitch visual berupa garis putih tipis/berkedip pada navbar ketika halaman di-scroll dan mengubah efek animasi glow di belakang foto profil/avatar menjadi efek petir elektrik berwarna biru yang realistis.

Detail Perbaikan & Modifikasi:
1. **Perbaikan Glitch Navbar (Scroll Bug)**:
   - Lokasi: `.navbar-scrolled` di `src/App.css`.
   - Masalah: Terjadi render artifact/garis glitch saat scrolling akibat kombinasi `backdrop-filter: blur(10px)` dengan border-bottom semi-transparan `rgba(255, 255, 255, 0.1)` ketika bertumpuk dengan elemen teranimasi di bawahnya.
   - Solusi:
     * Tambahkan properti akselerasi hardware GPU: `transform: translate3d(0, 0, 0);` dan `-webkit-backface-visibility: hidden;` ke kelas `.navbar`.
     * Haluskan border-bottom dengan bayangan halus (misal: `box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.05);`).
     * Pastikan `will-change: transform, background-color, border-color;` diatur di `.navbar` agar transisi render di layar berjalan lancar tanpa rendering delay.

2. **Efek Petir Elektrik Biru Realistis (Realistic Blue Lightning Glow)**:
   - Lokasi: Elemen avatar/wrapper profil di `src/components/ui/personal-landing.jsx`.
   - Spesifikasi Visual:
     * Ganti span gradien zinc/putih yang redup dengan span baru berwarna biru neon elektrik (`#00f0ff` dan `#0066ff`).
     * Implementasikan animasi kustom `lightning-flicker` dan `electric-pulse` di CSS/Tailwind untuk meniru sambaran petir cepat yang tidak beraturan (flicker berfrekuensi tinggi dengan interval tidak rata, misalnya opacity berubah cepat dari 0.2 -> 0.9 -> 0.4 -> 1.0 -> 0.3).
     * Tambahkan efek bayangan berlapis (drop-shadow/box-shadow biru elektrik) yang intensitas pendarannya ikut meredup/menyala sesuai irama flicker petir tersebut.
     * Kode animasi keyframes petir (sebagai contoh):
       ```css
       @keyframes lightning-flicker {
         0%, 100% { opacity: 0.25; filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.3)) blur(12px); }
         5% { opacity: 0.85; filter: drop-shadow(0 0 30px rgba(0, 240, 255, 0.8)) blur(10px); }
         5.5% { opacity: 0.4; filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.5)) blur(12px); }
         6% { opacity: 0.95; filter: drop-shadow(0 0 40px rgba(0, 102, 255, 0.9)) blur(8px); }
         6.5% { opacity: 0.3; filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.3)) blur(12px); }
         40% { opacity: 0.3; filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.3)) blur(12px); }
         40.5% { opacity: 0.9; filter: drop-shadow(0 0 35px rgba(0, 240, 255, 0.85)) blur(8px); }
         41% { opacity: 0.35; filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.3)) blur(12px); }
       }
       ```

Tugas: Perbaiki berkas CSS terkait dan perbarui elemen background profil pada `personal-landing.jsx` untuk mewujudkan efek visual ini secara mulus.
```


