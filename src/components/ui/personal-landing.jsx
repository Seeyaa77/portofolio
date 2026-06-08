import React from "react";


const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-8">
      <div className="relative mb-4">
        <span className="absolute -inset-3 rounded-full blur-xl profile-lightning-glow" />
        <img
          src="/ryoasuka.jfif"
          alt="Muhammad Raffli Aldiansyah"
          className="relative size-36 md:size-40 rounded-full border-4 border-zinc-800 shadow-2xl z-10 object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        Hi, I'm <span className="text-white">Raffli</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        Automation Engineer crafting intelligent systems with Python, JavaScript, React & Next.js.
      </p>
      <div className="mt-6">
        <a
          href="#contact"
          className="hero-connect-btn"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <span className="hero-connect-btn-bg" />
          <span className="hero-connect-btn-border" />
          <span className="hero-connect-btn-content">
            <span>Connect with me</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export const PersonalLanding = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-4 pt-20 pb-16 text-zinc-50 relative overflow-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Animated background glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-zinc-700 via-zinc-500 to-zinc-800 opacity-10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-48 -right-48 w-[400px] h-[400px] bg-gradient-to-bl from-zinc-600 via-zinc-800 to-zinc-900 opacity-10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }} />
      <div className="w-full max-w-2xl flex flex-col items-center z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default PersonalLanding;
