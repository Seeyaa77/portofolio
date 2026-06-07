import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Github,
  Video,
  Youtube,
} from "lucide-react";


const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-500 via-white to-zinc-400 opacity-30 blur-lg animate-pulse" />
        <img
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=256&h=256"
          alt="Muhammad Raffli Aldiansyah"
          className="relative size-32 rounded-full border-4 border-zinc-800 shadow-xl z-10 object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        Hi, I'm <span className="text-white">Raffli</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 max-w-lg mx-auto font-normal" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        Automation Engineer crafting intelligent systems with Python, JavaScript, React & Next.js.
      </p>
    </section>
  );
};

const socialLinks = [
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: <Youtube size={28} />,
    bg: 'bg-zinc-900',
    text: 'text-white',
  },
  {
    href: 'https://github.com/Seeyaa77',
    label: 'GitHub',
    icon: <Github size={28} />,
    bg: 'bg-zinc-800',
    text: 'text-white',
  },
  {
    href: '#about',
    label: 'Self Intro',
    icon: <Video size={28} />,
    bg: 'bg-zinc-50',
    text: 'text-zinc-900',
  },
];

const SocialsBlock = () => (
  <div className="flex flex-wrap justify-center gap-4 w-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={link.label}
        className={twMerge(
          'flex items-center gap-2 rounded-full border border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 bg-opacity-80',
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
  <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-7 shadow-lg text-center" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
    <p className="text-lg md:text-xl text-zinc-300 font-normal">
      Passionate about building elegant, accessible, and high-performance automation systems &amp; web apps.
      <br />Based in <strong className="text-white">Pontianak, Indonesia</strong>. Always learning, always shipping.
    </p>
  </div>
);

const ConnectSection = () => {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const validateMessage = (msg) => {
    if (!msg.trim()) return "Message cannot be empty.";
    if (msg.trim().length < 3) return "Message must be at least 3 characters.";
    if (msg.length > 200) return "Message cannot exceed 200 characters.";
    return "";
  };

  const handleSend = (e) => {
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

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (error) setError("");
  };

  return (
    <section className="w-full flex flex-col items-center text-center gap-4 mt-8 relative" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-xl shadow-lg font-semibold text-base animate-fade-in">
          Message sent!
        </div>
      )}
      <p className="text-lg text-zinc-500 mb-4 max-w-md mx-auto font-normal">
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
            "flex-1 rounded-full border px-5 py-3 text-base text-zinc-100 placeholder-zinc-600 transition-colors focus:outline-none shadow",
            error ? "border-red-500 focus:border-red-500" : "border-zinc-700 bg-zinc-900 focus:border-zinc-400"
          )}
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          maxLength={201}
        />
        <button
          type="submit"
          className={twMerge(
            "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-zinc-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all",
            message.trim() ? "hover:scale-105 hover:shadow-xl cursor-pointer opacity-100" : "opacity-50 cursor-not-allowed"
          )}
          disabled={!message.trim()}
          aria-disabled={!message.trim()}
        >
          Send
        </button>
      </form>
      {error && (
        <div className="text-red-400 text-sm mt-1 font-medium">{error}</div>
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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-4 py-16 text-zinc-50 relative overflow-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Animated background glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-zinc-700 via-zinc-500 to-zinc-800 opacity-10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-48 -right-48 w-[400px] h-[400px] bg-gradient-to-bl from-zinc-600 via-zinc-800 to-zinc-900 opacity-10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }} />
      <div className="w-full max-w-2xl flex flex-col items-center gap-12 z-10">
        <HeroSection />
        <AboutBlock />
        <SocialsBlock />
        <ConnectSection />
      </div>
    </div>
  );
};

export default PersonalLanding;
