# 🚀 Prompt: Ultimate Portfolio UI Polish & Artistic Academic Tree Overhaul

Copy and paste the entire content of this prompt into **Claude (or ChatGPT/Gemini)**. It contains the exact codebase files, the design standards from `ui.md`, the technology background from `skills.md`, and specific aesthetic critiques to produce production-ready code.

---

```markdown
Role: Senior Frontend Engineer & Creative UI Architect
Context: I am polishing my personal portfolio website to match a highly premium, artistic "Monochromatic Cyberpunk-Lite" theme. The current implementation of some components looks generic ("AI-generated") and needs to be replaced with hand-crafted, high-fidelity visual elements.

---

## 🎨 Design System Guidelines (from ui.md)
1. **Theme**: Monochromatic Cyberpunk-Lite (dark, minimal, high-tech).
2. **Colors**:
   - Primary Background: `#0a0a0a` (Deep Charcoal Black)
   - Alt Background: `rgba(255, 255, 255, 0.02)` / Glassmorphism
   - Accent Glow: White / bright neon cyan-blue highlights (`rgba(255, 255, 255, 0.9)`, `#00f0ff`)
   - Dimmed Text: `rgba(255, 255, 255, 0.5)`
   - Border Color: `rgba(255, 255, 255, 0.1)`
3. **Typography**:
   - Sans-Serif: 'Inter' (clean, premium, readable) for body/headers.
   - Monospace: 'JetBrains Mono' for years, statistics, tech tags, and status logs.
4. **Interactions**:
   - 3D Tilt Cards with spring physics.
   - Backdrop blurs (`backdrop-filter: blur(12px)`) with thin borders.

---

## 🛠️ Tech Stack & Skills Context (from skills.md)
- Core: React.js, Vite, Tailwind CSS (Vanilla CSS in App.css for custom animations).
- Key Libraries: framer-motion, lucide-react.
- Experience: Automation Engineer (Python, Node.js, Web Scraping, Playwright/Puppeteer).

---

## 🎯 Specific Upgrade Requirements

### 1. Hero Connect Button (in `src/components/ui/personal-landing.jsx`)
* **Critique**: The current "Connect with me" button is too small, feels out of proportion, and looks generic.
* **Redesign**:
  - Make it larger and visually striking but clean and transparent-glassmorphic.
  - Implement a wider, taller, and more proportional design with generous padding (e.g. `px-10 py-4`).
  - Add a subtle border glow or hover outline tracing effect.
  - Center it perfectly below the profile bio with a professional layout hierarchy.

### 2. Stats Count-Up Animation (in `src/App.jsx`)
* **Critique**: The stats numbers (80+, 3+, 5+, 24/7) are static.
* **Redesign**:
  - Implement a React `Counter` component that triggers when scrolling into view (using `IntersectionObserver` or a custom Framer Motion utility).
  - The numbers must count up smoothly from `0` to the target number (`80`, `3`, `5`, `24`), retaining their suffixes (`+`, `/7`).

### 3. Artistic Academic Tree (XXXTentacion "Tree of Life" / Poison Tree style)
* **Critique**: The current 3D tree timeline looks overly structured, boxy, and "AI-generated" (like a simple vertical line with random SVG curves).
* **Redesign**:
  - Overhaul the "Academic Journey" timeline to look like an organic, hand-drawn tattoo of a leafless, skeletal dry tree (XXXTentacion style).
  - Use custom, winding, irregular SVG path coordinates that twist and split naturally like branches, tapering as they rise. Avoid mechanical geometry.
  - Place the 4 milestone cards (SDN 04, SMPN 26, SMKN 7, Universitas Bina Sarana Informatika) next to the branch tips.
  - Ensure the cards float in 3D perspective space (`perspective(1000px)`) and tilt smoothly in response to mouse movement with spring-like physics.
  - The final node must display **Bina Sarana Informatika** with an active **On-Going (sedang berlanjut)** status indicator.
  - **Mobile responsiveness**: Since absolute 3D placement is complex on mobile, fall back to a clean, highly aesthetic vertical list on screens smaller than 768px.

---

## 📂 Codebase Context Files

### 1. `src/components/ui/personal-landing.jsx`
```jsx
import React from "react";


const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <span className="absolute inset-0 rounded-full blur-xl profile-lightning-glow" />
        <img
          src="/ryoasuka.jfif"
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
      <div className="mt-4">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/20 px-8 py-3.5 text-base font-medium text-zinc-300 shadow-md hover:bg-zinc-800/40 hover:border-zinc-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 backdrop-blur-sm"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <span>Connect with me</span>
          <span className="text-zinc-500 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
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
```

### 2. `src/App.jsx`
```jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PersonalLanding } from './components/ui/personal-landing'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Terminal, 
  Zap,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Lock,
  ExternalLink,
  Music,
  MessageSquare,
  Bot,
  Cpu
} from 'lucide-react'
import './App.css'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Counter component for animated stats numbers
function Counter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const match = value.match(/^(\d+)(.*)$/)
    if (!match) {
      setCount(value)
      return
    }

    const target = parseInt(match[1], 10)
    const suffix = match[2]

    let start = 0
    const end = target
    const totalMiliseconds = duration * 1000
    const steps = Math.min(end, 60)
    const stepTime = totalMiliseconds / steps
    const increment = Math.ceil(end / steps)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        clearInterval(timer)
        setCount(end + suffix)
      } else {
        setCount(start + suffix)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value, duration, hasStarted])

  return <span ref={ref}>{count || "0"}</span>
}

// 3D Academic Tree (inspired by XXXTentacion's tree)
function AcademicTree3D() {
  const education = [
    { year: "2014 - 2020", school: "SDN 04 Pontianak Timur", status: "Completed", desc: "Pendidikan dasar di Pontianak Timur." },
    { year: "2020 - 2023", school: "SMPN 26 Pontianak Timur", status: "Completed", desc: "Sekolah menengah pertama, mulai mendalami komputer." },
    { year: "2023 - 2026", school: "SMKN 7 Pontianak Timur", status: "Completed", desc: "Sekolah Menengah Kejuruan dengan fokus Rekayasa Perangkat Lunak." },
    { year: "2026 - Present", school: "Bina Sarana Informatika", status: "On-Going", desc: "Studi perguruan tinggi di bidang Teknologi Informasi (sedang berlanjut)." },
  ]

  const containerRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current || isMobile) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    const rX = -(mouseY / height) * 15
    const rY = (mouseX / width) * 15
    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-6 px-4">
        {education.map((edu, index) => (
          <div 
            key={index}
            className={`w-full p-5 rounded-2xl border ${edu.status === 'On-Going' ? 'border-blue-900 bg-blue-950/20' : 'border-zinc-800 bg-zinc-950/60'} shadow-md`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500">{edu.year}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${edu.status === 'On-Going' ? 'border border-blue-900 bg-blue-950/50 text-blue-300' : 'border border-zinc-800 bg-zinc-900 text-zinc-400'}`}>
                {edu.status === 'On-Going' ? '⚡ On-Going' : '✓ Completed'}
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{edu.school}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto py-8 px-4 flex flex-col items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        animate={rotateX === 0 && rotateY === 0 ? {
          rotateY: [0, 3, -3, 0],
          rotateX: [0, 1.5, -1.5, 0]
        } : {}}
        transition={rotateX === 0 && rotateY === 0 ? {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        } : { duration: 0.1 }}
        className="relative w-full h-[650px] flex items-center justify-center border border-zinc-800/60 bg-zinc-950/40 rounded-3xl p-6 shadow-2xl backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />

        {/* Central Dry Tree - XXXTentacion reference */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        >
          <svg 
            viewBox="0 0 400 600" 
            className="w-full h-full max-w-[450px] text-zinc-800 stroke-current fill-none opacity-85" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          >
            <path d="M 200 560 C 190 575, 170 590, 150 595" strokeWidth="4" />
            <path d="M 200 560 C 210 575, 230 590, 250 595" strokeWidth="4" />
            <path d="M 200 560 C 200 585, 205 595, 210 600" strokeWidth="3" />
            
            <path d="M 200 560 L 200 480" strokeWidth="6" />
            <path d="M 200 480 C 195 430, 205 380, 200 320" strokeWidth="5" />
            
            {/* Branch 1 */}
            <path d="M 199 440 C 170 425, 140 435, 110 440 C 90 443, 75 435, 60 450" />
            <path d="M 110 440 C 100 425, 90 420, 85 410" strokeWidth="2.5" />
            
            {/* Branch 2 */}
            <path d="M 201 370 C 230 350, 260 360, 290 355 C 310 352, 325 365, 340 350" />
            <path d="M 290 355 C 300 340, 310 335, 315 320" strokeWidth="2.5" />
            
            {/* Branch 3 */}
            <path d="M 200 280 C 170 255, 140 265, 110 250 C 90 240, 75 250, 60 230" />
            <path d="M 110 250 C 100 235, 90 230, 85 215" strokeWidth="2.5" />
            
            {/* Branch 4 */}
            <path d="M 200 200 C 230 170, 260 180, 290 160 C 310 145, 325 155, 340 135" strokeWidth="4" />
            <path d="M 290 160 C 300 145, 310 140, 315 125" strokeWidth="2.5" />
            
            <path d="M 200 200 C 190 150, 180 120, 160 100 C 150 90, 135 95, 120 80" strokeWidth="3.5" />
            <path d="M 200 130 C 205 100, 210 70, 220 50" strokeWidth="2.5" />
            <path d="M 180 120 C 182 95, 185 80, 175 65" strokeWidth="2" />
          </svg>
        </div>

        {/* Floating cards */}
        <div 
          className="absolute left-[2%] lg:left-[5%] bottom-[18%] w-[230px] lg:w-[260px] p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-xl transition-all duration-300 hover:border-zinc-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] cursor-pointer"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-zinc-500">{education[0].year}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">✓ Completed</span>
          </div>
          <h3 className="text-base font-bold text-white mb-1">{education[0].school}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">{education[0].desc}</p>
        </div>

        <div 
          className="absolute right-[2%] lg:right-[5%] bottom-[32%] w-[230px] lg:w-[260px] p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-xl transition-all duration-300 hover:border-zinc-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] cursor-pointer"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-zinc-500">{education[1].year}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">✓ Completed</span>
          </div>
          <h3 className="text-base font-bold text-white mb-1">{education[1].school}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">{education[1].desc}</p>
        </div>

        <div 
          className="absolute left-[2%] lg:left-[5%] top-[30%] w-[230px] lg:w-[260px] p-5 rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-xl transition-all duration-300 hover:border-zinc-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] cursor-pointer"
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-zinc-500">{education[2].year}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">✓ Completed</span>
          </div>
          <h3 className="text-base font-bold text-white mb-1">{education[2].school}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">{education[2].desc}</p>
        </div>

        <div 
          className="absolute right-[2%] lg:right-[5%] top-[12%] w-[230px] lg:w-[260px] p-5 rounded-2xl border border-zinc-500 bg-zinc-950/90 shadow-2xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] cursor-pointer ring-1 ring-blue-900/30"
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-blue-400 font-semibold">{education[3].year}</span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-blue-900/50 bg-blue-950/50 text-blue-300 animate-pulse">⚡ On-Going</span>
          </div>
          <h3 className="text-base font-bold text-white mb-1">{education[3].school}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">{education[3].desc}</p>
        </div>
      </motion.div>
    </div>
  )
}

// About Section
function About() {
  const stats = [
    { number: "80+", label: "Projects Delivered" },
    { number: "3+", label: "Years of Experience" },
    { number: "5+", label: "Tech Stacks" },
    { number: "24/7", label: "Automation Uptime" },
  ]

  const hobbies = ["Gaming", "Coding", "Security"]

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="about-grid"
        >
          <motion.div variants={fadeInUp} className="about-content">
            <p className="section-label">About</p>
            <h2 className="section-title">Engineering automation that drives results</h2>
            <div className="about-text">
              <p>
                I'm Raffli — a self-taught automation engineer based in <strong>Pontianak Timur, Indonesia</strong>. 
                What started as a hobby quickly evolved into a passion for building 
                scalable systems that eliminate repetitive tasks and optimize workflows.
              </p>
              <p>
                My expertise spans across Python and JavaScript ecosystems, with deep 
                knowledge in Node.js architecture. Having delivered 20+ production-ready 
                automation solutions, I've mastered web scraping at scale, API orchestration, 
                and end-to-end workflow automation.
              </p>
            </div>
            
            <div className="hobbies">
              <p className="hobbies-label">Interests</p>
              <div className="hobbies-tags">
                {hobbies.map((hobby, i) => (
                  <span key={i} className="hobby-tag">{hobby}</span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <p className="stat-number">
                  <Counter value={stat.number} />
                </p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="education-section"
        >
          <motion.div variants={fadeInUp} className="section-header">
            <p className="section-label">Education</p>
            <h2 className="section-title">Academic Journey</h2>
          </motion.div>
          
          <AcademicTree3D />
        </motion.div>
      </div>
    </section>
  )
}
```

### 3. `src/App.css` (Relevant parts)
```css
/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform, background-color, border-color;
}

.navbar-scrolled {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

/* ===== AVATAR GLOW ===== */
.profile-lightning-glow {
  background: radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(0, 102, 255, 0.15) 50%, transparent 70%);
  animation: lightning-flicker 4s infinite;
}

@keyframes lightning-flicker {
  0%, 100% {
    opacity: 0.25;
    filter: blur(12px);
    transform: scale(0.98);
  }
  5% {
    opacity: 0.85;
    filter: blur(10px) brightness(1.2);
    transform: scale(1.02);
  }
  5.5% {
    opacity: 0.4;
    filter: blur(12px);
    transform: scale(0.99);
  }
  6% {
    opacity: 0.95;
    filter: blur(8px) brightness(1.5);
    transform: scale(1.03);
    box-shadow: 0 0 40px rgba(0, 240, 255, 0.4);
  }
  6.5% {
    opacity: 0.3;
    filter: blur(12px);
    transform: scale(0.98);
  }
  40% {
    opacity: 0.3;
    filter: blur(12px);
  }
  40.5% {
    opacity: 0.9;
    filter: blur(8px) brightness(1.3);
    transform: scale(1.01);
  }
  41% {
    opacity: 0.35;
    filter: blur(12px);
  }
}
```

---

## 🚀 Tasks for the AI Agent

Generate complete, production-ready replacement code for the following three files. Double-check your designs to make sure they look premium, high-fidelity, and hand-crafted:

1. **`src/components/ui/personal-landing.jsx`**:
   - Refactor the CTA "Connect with me" button. Give it a significantly larger size, a clean glassmorphic transparent style, premium padding, and custom hover transitions that feel proportional and solid.
2. **`src/App.jsx`**:
   - Re-implement the `Counter` statistics component to run with zero glitches.
   - Completely rewrite the `AcademicTree3D` SVG coordinates and markup. The SVG tree must be organic, resembling a hand-drawn, dry/skeletal, leafless "XXXTentacion Tree of Life / Poison Tree" (uneven winding branches, splits, irregular root curves). Make sure the floating milestone cards are beautifully styled and tilt on mousemove.
3. **`src/App.css`**:
   - Add any styling rules necessary for the new larger transparent button, the 3D perspective wrapper, and the skeletal tree layout. Keep the class naming clean and clean.
```
