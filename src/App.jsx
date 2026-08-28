import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Zap,
  ExternalLink,
  Lock,
  Gamepad2,
  MessageCircle,
  Music,
  MessageSquare,
  Bot,
  Cpu,
  Share2,
  Search,
  Server,
  FileCode2,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
} from 'lucide-react'
import './App.css'

// ===== COUNTER =====
function Counter({ value, duration = 1.6 }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const animate = (target, suffix) => {
      const start = performance.now()
      const step = (now) => {
        const p = Math.min((now - start) / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(`${Math.round(eased * target)}${suffix}`)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const run = () => {
      if (value === '24/7') { animate(24, '/7'); return }
      const match = value.match(/^(\d+)(.*)$/)
      if (!match) { setDisplay(value); return }
      animate(parseInt(match[1], 10), match[2])
    }

    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (node) observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref}>{display}</span>
}

// ===== DATA =====
const stats = [
  { number: '80+', label: 'Projects Built' },
  { number: '5+', label: 'Years Coding' },
  { number: '6+', label: 'Tech Stacks' },
  { number: '24/7', label: 'Automation Uptime' },
]

const education = [
  { year: '2014 – 2020', school: 'SDN 04 Pontianak Timur', status: 'Completed', desc: 'Pendidikan dasar di Pontianak Timur.' },
  { year: '2020 – 2023', school: 'SMPN 26 Pontianak Timur', status: 'Completed', desc: 'Mulai mendalami komputer & pemrograman.' },
  { year: '2023 – 2026', school: 'SMKN 7 Pontianak Timur', status: 'Completed', desc: 'Jurusan Rekayasa Perangkat Lunak.' },
  { year: '2026 – Present', school: 'Bina Sarana Informatika', status: 'On-Going', desc: 'Studi di bidang Teknologi Informasi.' },
]

const skills = [
  { category: 'Languages', icon: <Code2 size={20} />, items: ['Python', 'JavaScript', 'TypeScript', 'Pawn', 'Bash'] },
  { category: 'Frameworks', icon: <FileCode2 size={20} />, items: ['Next.js', 'React', 'Node.js', 'Express'] },
  { category: 'Automation', icon: <Zap size={20} />, items: ['Puppeteer', 'Selenium', 'Playwright', 'Baileys'] },
  { category: 'Infra', icon: <Server size={20} />, items: ['Git', 'Docker', 'Linux', 'PostgreSQL'] },
]

const projects = [
  {
    title: 'LZRP',
    year: '2021 – 2022',
    description:
      'Gamemode SA-MP roleplay lengkap: sistem UCP via Discord, dynamic actor/door/locker/ATM, phone textdraws, anticheat, speedcam & speedtrap, sampai car stealing. Ditulis dengan Pawn di atas base script dan dikembangkan sendiri.',
    tech: ['Pawn', 'SA-MP', 'C', 'JavaScript'],
    repo: 'https://github.com/Seeyaa77/LZRP',
    live: null,
    icon: <Gamepad2 size={22} />,
    featured: true,
  },
  {
    title: 'Yaemiko Botz',
    year: '2023',
    description:
      'Bot WhatsApp multifungsi berbasis Node.js dengan berbagai fitur otomasi dan command, siap deploy lewat Docker/Heroku (Procfile + Nix).',
    tech: ['Node.js', 'JavaScript', 'Baileys', 'Docker'],
    repo: 'https://github.com/Seeyaa77/Yaemiko-Botz',
    live: null,
    icon: <MessageCircle size={22} />,
  },
  {
    title: 'KodingIn',
    year: '2025',
    description: 'Platform media sharing khusus developer untuk berbagi proyek, diskusi Q&A, tutorial, dan meme coding.',
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    repo: 'https://github.com/seeyaa77/KodingIn',
    live: 'https://kodingin.neroism.my.id',
    icon: <Share2 size={22} />,
  },
  {
    title: 'Spotify Downloader',
    year: '2024',
    description: 'Web tool otomatis untuk mengunduh playlist, album, dan track Spotify dengan meta-tagging hi-fi.',
    tech: ['Node.js', 'Vite', 'Spotify API', 'Tailwind'],
    repo: 'https://github.com/Seeyaa77/Spotify-Downloader',
    live: 'https://spotydl.net/',
    icon: <Music size={22} />,
  },
  {
    title: 'Aura AI',
    year: '2024',
    description: 'UI chatbot AI premium dengan ChatGPT API — context persistence dan riwayat percakapan interaktif.',
    tech: ['React', 'Express', 'OpenAI API', 'Framer Motion'],
    repo: 'https://github.com/Seeyaa77/Aura-AI',
    live: 'https://aura-ai-six-alpha.vercel.app/',
    icon: <MessageSquare size={22} />,
  },
  {
    title: 'Dracin Bot',
    year: '2024',
    description: 'Bot Telegram performa tinggi untuk fetch, index, dan streaming drama China dengan pencarian custom.',
    tech: ['Python', 'Scrapy', 'Telegram API', 'MongoDB'],
    repo: null,
    live: null,
    icon: <Bot size={22} />,
    private: true,
  },
  {
    title: 'Github Searcher 13',
    year: '2025',
    description: 'Tool CLI Python async dual-engine: Auto Pilot (browser scraping) & Fast Skip (GitHub API).',
    tech: ['Python', 'asyncio', 'aiohttp', 'GitHub API'],
    repo: 'https://github.com/Curzyori/Github-Searcher-13',
    live: null,
    icon: <Search size={22} />,
  },
  {
    title: 'This Portfolio',
    year: '2026',
    description: 'Portofolio personal — minimalism berpadu glassmorphism, dibangun dengan React & Framer Motion.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
    repo: 'https://github.com/Seeyaa77/portofolio',
    live: null,
    icon: <Cpu size={22} />,
  },
]

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/seeyaa77', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:contact@example.com', label: 'Email' },
]

const navItems = ['About', 'Skills', 'Projects', 'Contact']

// ===== MOTION PRESETS =====
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// ===== BACKGROUND =====
function Ambient() {
  return (
    <div className="bg-ambient" aria-hidden="true">
      <motion.div className="bg-blob bg-blob-1" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="bg-blob bg-blob-2" animate={{ x: [0, -50, 0], y: [0, 40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="bg-blob bg-blob-3" animate={{ x: [0, 30, 0], y: [0, -30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="bg-grid" />
    </div>
  )
}

// ===== NAVBAR =====
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); go('hero') }}>
          raflialdiansyah<span>.com</span>
        </a>
        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="navbar-link"
              onClick={(e) => { e.preventDefault(); go(item.toLowerCase()) }}>
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="navbar-cta" onClick={(e) => { e.preventDefault(); go('contact') }}>Let&apos;s Talk</a>
        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div className="navbar-mobile"
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            {[...navItems, 'Contact'].filter((v, i, a) => a.indexOf(v) === i).map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); go(item.toLowerCase()) }}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ===== HERO =====
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="hero-status" variants={fadeUp}>
              <span className="hero-status-dot" /> Available for freelance & collaboration
            </motion.div>
            <motion.h1 className="hero-title" variants={fadeUp}>
              Muhammad Raffli<br />
              <span className="grad">Aldiansyah</span>
            </motion.h1>
            <motion.p className="hero-desc" variants={fadeUp}>
              Automation-focused developer dari Pontianak. Bikin bot, web scraper, dan
              full-stack apps — dari gamemode SA-MP sampai pipeline yang jalan 24/7.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeUp}>
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}>
                View Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
                <Mail size={16} /> Get in Touch
              </a>
            </motion.div>
            <motion.div className="hero-social" variants={fadeUp}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div className="hero-card" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <img src="/ryoasuka.jfif" alt="Raffli" className="hero-photo" />
              <div className="hero-card-meta">
                <div>
                  <div className="hero-card-name">Raffli</div>
                  <div className="hero-card-role">Automation Developer</div>
                </div>
                <span className="hero-card-badge">@seeyaa77</span>
              </div>
            </motion.div>
            <motion.div className="hero-float hero-float-1"
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              <Terminal size={14} /> 24/7 uptime
            </motion.div>
            <motion.div className="hero-float hero-float-2"
              animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <Sparkles size={14} /> 80+ projects
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ===== ABOUT =====
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="eyebrow"><span className="eyebrow-dot" /> About</span>
          <h2>Building automation that quietly does the work</h2>
          <p>Self-taught developer yang suka menyederhanakan hal-hal berulang jadi sistem yang jalan sendiri.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-text" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p>
              Halo, saya <strong>Raffli</strong> — developer berbasis di <strong>Pontianak, Indonesia</strong>.
              Perjalanan ngoding saya mulai dari nge-mod server game <strong>SA-MP</strong> tahun 2021,
              nulis gamemode roleplay pakai Pawn, sampai akhirnya jatuh cinta ke otomasi dan web development.
            </p>
            <p>
              Sekarang fokus saya di ekosistem <strong>Python & JavaScript</strong>: bikin bot, web scraper,
              dan aplikasi full-stack. Saya suka arsitektur yang rapi, sistem yang stabil, dan tampilan
              yang bersih tanpa berlebihan.
            </p>
            <div className="about-interests">
              <div className="about-interests-label">Interests</div>
              <div className="chips">
                {['Gaming', 'Automation', 'Web Dev', 'Security', 'Bots'].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="stats-col" initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            {stats.map((s) => (
              <motion.div key={s.label} className="stat-card" variants={fadeUp}>
                <div className="stat-number"><Counter value={s.number} /></div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div style={{ marginTop: 90 }}>
          <motion.div className="section-header center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="eyebrow" style={{ margin: '0 auto' }}><span className="eyebrow-dot" /> Education</span>
            <h2>Academic Journey</h2>
          </motion.div>
          <div className="timeline">
            {education.map((edu, i) => (
              <motion.div key={i} className="timeline-item"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <span className={`timeline-dot ${edu.status === 'On-Going' ? 'active' : ''}`} />
                <div className="timeline-card">
                  <span className="timeline-year">{edu.year}</span>
                  <h3 className="timeline-school">{edu.school}</h3>
                  <p className="timeline-desc">{edu.desc}</p>
                  <span className={`timeline-badge ${edu.status === 'On-Going' ? 'ongoing' : 'done'}`}>{edu.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== SKILLS =====
function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="eyebrow"><span className="eyebrow-dot" /> Skills</span>
          <h2>Tech Stack</h2>
          <p>Alat-alat yang saya pakai untuk membangun sistem otomasi dan aplikasi web.</p>
        </motion.div>

        <motion.div className="skills-grid" initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          {skills.map((skill) => (
            <motion.div key={skill.category} className="skill-card" variants={fadeUp}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-title">{skill.category}</div>
              <div className="skill-items">
                {skill.items.map((item) => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ===== PROJECTS =====
function ProjectCard({ project }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <motion.div className={`project-card ${project.featured ? 'featured' : ''}`} onMouseMove={onMove} variants={fadeUp}>
      <div className="project-head">
        <div className="project-icon">{project.icon}</div>
        <div className="project-meta-badges">
          {project.featured && <span className="tag-pill tag-featured">Featured</span>}
          <span className="tag-pill tag-year">{project.year}</span>
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => <span key={t}>{t}</span>)}
      </div>
      <div className="project-links">
        {project.repo ? (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link primary">
            <Github size={15} /> Code
          </a>
        ) : (
          <span className="project-link muted"><Lock size={15} /> Private</span>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="eyebrow"><span className="eyebrow-dot" /> Projects</span>
          <h2>Selected Work</h2>
          <p>Dari gamemode SA-MP di 2021 sampai aplikasi web modern — beberapa hal yang pernah saya bangun.</p>
        </motion.div>

        <motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </motion.div>
      </div>
    </section>
  )
}

// ===== CONTACT =====
function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div className="contact-wrap" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="contact-inner">
            <span className="eyebrow" style={{ margin: '0 auto' }}><span className="eyebrow-dot" /> Contact</span>
            <h2 className="contact-title">Let&apos;s build something together</h2>
            <p className="contact-desc">
              Punya ide, proyek otomasi, atau butuh bantuan bikin bot? Kirim pesan — biasanya saya balas dalam 24 jam.
            </p>
            <div className="contact-actions">
              <a href="mailto:contact@example.com" className="btn btn-primary">
                <Mail size={16} /> Email Me
              </a>
              <a href="https://github.com/seeyaa77" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Github size={16} /> GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">raflialdiansyah<span>.com</span></div>
            <div className="footer-note">Automation Developer & Web Engineer</div>
          </div>
          <div className="footer-links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
          <div className="footer-note">© 2026 Muhammad Raffli Aldiansyah</div>
        </div>
      </div>
    </footer>
  )
}

// ===== APP =====
function App() {
  return (
    <div className="app">
      <Ambient />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
