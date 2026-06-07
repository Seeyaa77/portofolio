import React from "react";


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

export const PersonalLanding = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-4 pt-16 pb-16 text-zinc-50 relative overflow-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
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
