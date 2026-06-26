import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <img
          src="/ryoasuka.jfif"
          alt="Muhammad Raffli Aldiansyah"
          className="relative w-36 h-36 md:w-40 md:h-40 object-cover"
          style={{
            border: '4px solid #000',
            boxShadow: '6px 6px 0 #000',
          }}
        />
      </div>
      <h1
        className="text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontWeight: 900,
          color: '#000',
        }}
      >
        Hi, I'm <span style={{ background: '#A6FAFF', padding: '0 8px', border: '3px solid #000', display: 'inline-block' }}>Raffli</span>
      </h1>
      <p
        className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          color: '#333',
          fontWeight: 500,
        }}
      >
        Automation Engineer crafting intelligent systems with Python, JavaScript, React & Next.js.
      </p>
      <div className="mt-4">
        <a
          href="#contact"
          className="hero-connect-btn"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          <span className="hero-connect-btn-content">
            <span>Connect with me</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden"
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        background: '#e0d4c8',
        color: '#000',
      }}
    >
      {/* Decorative neobrutalism shapes */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          width: 80,
          height: 80,
          background: '#FEF08A',
          border: '3px solid #000',
          transform: 'rotate(15deg)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: 60,
          height: 60,
          background: '#FBCFE8',
          border: '3px solid #000',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '12%',
          width: 40,
          height: 40,
          background: '#A6FAFF',
          border: '3px solid #000',
          zIndex: 0,
        }}
      />
      <div className="w-full max-w-2xl flex flex-col items-center" style={{ zIndex: 10 }}>
        <HeroSection />
      </div>
    </div>
  );
};

export default PersonalLanding;
