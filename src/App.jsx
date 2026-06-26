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
  Music,
  MessageSquare,
  Bot,
  Cpu,
  Share2,
  Search,
  HardDrive,
  FileCode2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ChevronDown
} from 'lucide-react'
import './App.css'

// ===== COUNTER COMPONENT =====
function Counter({ value, duration = 2 }) {
  const [display, setDisplay] = useState("0")
  const ref = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          startCount()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const startCount = () => {
    if (value === "24/7") {
      const startTime = performance.now()
      const animate = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * 24)
        setDisplay(`${current}/7`)
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      return
    }

    const match = value.match(/^(\d+)(.*)$/)
    if (!match) { setDisplay(value); return }

    const target = parseInt(match[1], 10)
    const suffix = match[2]
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setDisplay(`${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }

  return <span ref={ref}>{display}</span>
}

// ===== DATA =====
const stats = [
  { number: "80+", label: "Projects Delivered" },
  { number: "3+", label: "Years of Experience" },
  { number: "5+", label: "Tech Stacks" },
  { number: "24/7", label: "Automation Uptime" },
]

const education = [
  { year: "2014 – 2020", school: "SDN 04 Pontianak Timur", status: "Completed", desc: "Pendidikan dasar di Pontianak Timur." },
  { year: "2020 – 2023", school: "SMPN 26 Pontianak Timur", status: "Completed", desc: "Sekolah menengah pertama, mulai mendalami komputer." },
  { year: "2023 – 2026", school: "SMKN 7 Pontianak Timur", status: "Completed", desc: "SMK — fokus Rekayasa Perangkat Lunak." },
  { year: "2026 – Present", school: "Bina Sarana Informatika", status: "On-Going", desc: "Studi di bidang Teknologi Informasi." },
]

const skills = [
  {
    category: 'Languages',
    icon: <Code2 size={20} />,
    color: 'var(--yellow)',
    items: ['Python', 'JavaScript', 'TypeScript', 'Bash']
  },
  {
    category: 'Frameworks',
    icon: <FileCode2 size={20} />,
    color: 'var(--cyan)',
    items: ['Next.js', 'React', 'Node.js', 'Express', 'FastAPI']
  },
  {
    category: 'Automation',
    icon: <Zap size={20} />,
    color: 'var(--pink)',
    items: ['Selenium', 'Puppeteer', 'Playwright', 'Scrapy']
  },
  {
    category: 'DevOps',
    icon: <HardDrive size={20} />,
    color: 'var(--green)',
    items: ['Git', 'Docker', 'Linux', 'PostgreSQL']
  },
]

const projects = [
  {
    title: "KodingIn",
    description: "Platform media sharing khusus developer untuk berbagi proyek, diskusi Q&A, tutorial, dan meme coding.",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Resend"],
    repo: "https://github.com/seeyaa77/KodingIn",
    live: "https://kodingin.neroism.my.id",
    icon: <Share2 size={22} />,
    featured: true
  },
  {
    title: "Spotify Downloader",
    description: "Automated web tool to download Spotify playlists, albums, and tracks with high-fidelity meta-tagging.",
    tech: ["Node.js", "Vite", "Spotify API", "Tailwind CSS"],
    repo: "https://github.com/Seeyaa77/Spotify-Downloader",
    live: "https://spotydl.net/",
    icon: <Music size={22} />
  },
  {
    title: "Aura AI",
    description: "Premium AI chatbot UI with ChatGPT API, featuring context persistence and interactive message history.",
    tech: ["React", "Express", "OpenAI API", "Framer Motion"],
    repo: "https://github.com/Seeyaa77/Aura-AI",
    live: "https://aura-ai-six-alpha.vercel.app/",
    icon: <MessageSquare size={22} />
  },
  {
    title: "Dracin Bot",
    description: "High-performance Telegram bot for fetching, indexing, and streaming Chinese dramas with custom search.",
    tech: ["Python", "Scrapy", "Telegram API", "MongoDB"],
    repo: null,
    live: null,
    icon: <Bot size={22} />,
    private: true
  },
  {
    title: "Github Searcher (13)",
    description: "Async Python CLI tool with dual-engine: Auto Pilot (browser scraping) & Fast Skip (GitHub API).",
    tech: ["Python", "asyncio", "aiohttp", "GitHub API"],
    repo: "https://github.com/Curzyori/Github-Searcher-13",
    live: null,
    icon: <Search size={22} />,
    collab: true
  },
  {
    title: "Portfolio",
    description: "This personal portfolio showcasing automation engineering and neobrutalism web design.",
    tech: ["React", "Vite", "Framer Motion", "CSS"],
    repo: "https://github.com/Seeyaa77/portofolio",
    live: "#",
    icon: <Cpu size={22} />
  },
]

// ===== FLOATING ELEMENTS =====
const FloatingStar = ({ size = 24, color, top, left, right, bottom, delay = 0 }) => (
  <motion.div
    style={{ position: 'absolute', top, left, right, bottom, zIndex: 0, pointerEvents: 'none' }}
    animate={{ scale: [1, 1.2, 1], rotate: [0, 360], y: [0, -15, 0] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="#000" strokeWidth="2">
      <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" />
    </svg>
  </motion.div>
)

const FloatingShape = ({ type, size, color, top, left, right, bottom, delay = 0, rotate }) => (
  <motion.div
    style={{
      position: 'absolute', top, left, right, bottom,
      width: size, height: type === 'circle' ? size : size * 0.6,
      background: color, border: '3px solid #000', zIndex: 0, pointerEvents: 'none',
      borderRadius: type === 'circle' ? '50%' : type === 'diamond' ? 0 : 0,
      transform: type === 'diamond' ? 'rotate(45deg)' : `rotate(${rotate || 0}deg)`,
    }}
    animate={{ y: [0, -20, 0], rotate: [rotate || 0, (rotate || 0) + 10, rotate || 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 5 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
)

// ===== NAVBAR =====
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="navbar-container">
        <motion.a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          raffli<span>.dev</span>
        </motion.a>

        <div className="navbar-links">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
            <motion.a key={item} href={`#${item.toLowerCase()}`} className="navbar-link"
              onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()) }}
              whileHover={{ y: -3, boxShadow: '5px 5px 0 #000' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}>
              {item}
            </motion.a>
          ))}
        </div>

        <button className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <Terminal size={20} /> : <Terminal size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="navbar-mobile-menu open"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="navbar-mobile-link"
                onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()) }}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ===== HERO =====
function Hero() {
  return (
    <section id="hero" className="hero">
      <FloatingStar size={32} color="#FFE500" top="15%" left="5%" delay={0} />
      <FloatingStar size={24} color="#00D4FF" top="25%" right="8%" delay={0.5} />
      <FloatingStar size={28} color="#FF6B9D" bottom="25%" left="10%" delay={1} />
      <FloatingStar size={20} color="#00E676" top="40%" right="15%" delay={1.5} />
      <FloatingStar size={36} color="#FFE500" bottom="30%" right="5%" delay={2} />

      <FloatingShape type="square" size={60} color="#00D4FF" top="10%" right="20%" delay={0.3} rotate={15} />
      <FloatingShape type="circle" size={40} color="#FF6B9D" bottom="25%" left="15%" delay={0.8} />
      <FloatingShape type="diamond" size={30} color="#FFE500" top="35%" left="20%" delay={1.2} />

      <div className="hero-content">
        <div className="hero-grid">
          <motion.div className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>

            <motion.div className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: -2 }}>
              <Sparkles size={14} /> Available for Projects
            </motion.div>

            <h1 className="hero-title">
              <motion.span className="hero-title-line" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Muhammad</motion.span>
              <motion.span className="hero-title-line" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Raffli</motion.span>
              <motion.span className="hero-title-line hero-title-outline" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>Aldiansyah</motion.span>
            </h1>

            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              Automation-focused developer specializing in web scraping, bot development, and system orchestration. Building robust pipelines that run 24/7.
            </motion.p>

            <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <motion.a href="#contact" className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.05, x: 5, y: 5, boxShadow: '10px 10px 0 #000' }}
                whileTap={{ scale: 0.95 }}>
                <Mail size={16} /> Get in Touch
              </motion.a>
              <motion.a href="#projects" className="btn btn-secondary"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.05, x: 5, y: 5, background: 'var(--yellow)', boxShadow: '10px 10px 0 #000' }}
                whileTap={{ scale: 0.95 }}>
                View Projects <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
            <motion.div className="hero-image-wrapper" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <motion.div className="hero-image-deco hero-image-deco-1" animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="hero-image-deco hero-image-deco-2" animate={{ rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }} />
              <motion.img src="/ryoasuka.jfif" alt="Raffli" className="hero-image" whileHover={{ scale: 1.05, rotate: 2 }} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="scroll-indicator" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={24} />
        </motion.div>
      </div>

      <div className="marquee-banner">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-content">
              <span><Zap size={16} /> Web Scraping</span>
              <span className="divider-dot">•</span>
              <span><Terminal size={16} /> Bot Development</span>
              <span className="divider-dot">•</span>
              <span><Code2 size={16} /> Python & JavaScript</span>
              <span className="divider-dot">•</span>
              <span><Zap size={16} /> Automation 24/7</span>
              <span className="divider-dot">•</span>
              <span><Sparkles size={16} /> API Integration</span>
              <span className="divider-dot">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== ABOUT =====
function About() {
  return (
    <section id="about" className="about section">
      <FloatingShape type="circle" size={80} color="var(--yellow)" top="10%" right="5%" delay={0.5} />
      <FloatingShape type="square" size={50} color="var(--cyan)" bottom="15%" left="3%" delay={1} />

      <div className="container">
        <div className="about-top-grid">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.span className="badge badge-green mb-4" whileHover={{ scale: 1.1, rotate: -2 }}>About</motion.span>
            <h2 className="about-heading">Engineering automation that drives results</h2>
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
                {['Gaming', 'Coding', 'Security'].map((hobby, i) => (
                  <motion.span key={i} className="hobby-tag" whileHover={{ scale: 1.1, y: -5, background: 'var(--black)', color: 'var(--white)', boxShadow: '5px 5px 0 var(--yellow)' }}>
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="stats-grid" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {stats.map((stat, i) => (
              <motion.div key={i} className="stat-card" whileHover={{ y: -8, boxShadow: '10px 10px 0 #000' }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="stat-number"><Counter value={stat.number} /></p>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div className="education-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-header">
            <motion.span className="badge badge-cyan mb-4" whileHover={{ scale: 1.1 }}>Education</motion.span>
            <h2 className="display-md">Academic Journey</h2>
          </div>

          <div className="timeline">
            {education.map((edu, i) => (
              <motion.div key={i} className="timeline-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 10 }}>
                <div className="timeline-left">
                  <motion.div className={`timeline-node ${edu.status === 'On-Going' ? 'node-active' : ''}`}
                    animate={edu.status === 'On-Going' ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}>
                    {edu.status === 'On-Going' ? '⚡' : '✓'}
                  </motion.div>
                  {i < education.length - 1 && <div className="timeline-line" />}
                </div>
                <motion.div className={`timeline-content ${edu.status === 'On-Going' ? 'content-active' : ''}`}
                  whileHover={{ y: -5, boxShadow: '10px 10px 0 #000' }}>
                  <span className="timeline-year">{edu.year}</span>
                  <h3 className="timeline-school">{edu.school}</h3>
                  <p className="timeline-desc">{edu.desc}</p>
                  <span className={`timeline-status ${edu.status === 'On-Going' ? 'status-active' : 'status-done'}`}>
                    {edu.status}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ===== SKILLS =====
function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.span className="badge badge-yellow mb-4" whileHover={{ scale: 1.1, rotate: 3 }}>Skills</motion.span>
          <h1 className="display-lg">Tech Stack</h1>
          <p>Technologies I use to build robust automation systems and web applications.</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div key={skill.category} className="skill-category" style={{ background: skill.color }}
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, boxShadow: '12px 12px 0 #000', rotate: (i % 2 === 0 ? 1 : -1) }}>
              <div className="skill-header">
                <motion.div className="skill-icon" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  {skill.icon}
                </motion.div>
                <span className="skill-title">{skill.category}</span>
              </div>
              <div className="skill-tags">
                {skill.items.map((item, j) => (
                  <motion.span key={j} className="tag" whileHover={{ scale: 1.15, y: -3, background: 'var(--black)', color: 'var(--white)' }}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== PROJECTS =====
function Projects() {
  return (
    <section id="projects" className="projects section">
      <FloatingStar size={28} color="var(--yellow)" top="5%" right="10%" delay={0.5} />
      <FloatingStar size={20} color="var(--cyan)" bottom="10%" left="5%" delay={1.2} />

      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.span className="badge badge-pink mb-4" whileHover={{ scale: 1.1, rotate: -3 }}>Portfolio</motion.span>
          <h1 className="display-lg">Featured Work</h1>
          <p>Production-ready automation solutions and applications directly synced and live on GitHub.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div key={project.title} className="project-card"
              initial={{ opacity: 0, y: 60, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -12, boxShadow: '15px 15px 0 #000', rotate: 1 }}>
              <div className="project-top">
                <div className="project-header">
                  <div className="project-icon-box">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      {project.icon}
                    </motion.div>
                  </div>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-bottom">
                <div className="project-tags">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="project-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-badges">
                  {project.repo ? (
                    <motion.a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-badge-link"
                      whileHover={{ scale: 1.1, background: 'var(--cyan)' }}
                      whileTap={{ scale: 0.9 }}>
                      <Github size={12} /> Code
                    </motion.a>
                  ) : (
                    <div className="project-badge-private">
                      <Lock size={12} /> Private
                    </div>
                  )}

                  {project.live && project.live !== "#" && (
                    <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className="project-badge-link"
                      style={{ background: 'var(--green)' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      <ExternalLink size={12} /> Live
                    </motion.a>
                  )}

                  {project.collab && (
                    <div className="project-badge-collab">
                      <Github size={12} /> Collab
                    </div>
                  )}

                  {project.private && (
                    <div className="project-badge-private">
                      <Lock size={12} /> Private
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== CONTACT =====
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Automation Query', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: 'Automation Query', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact section">
      <FloatingShape type="circle" size={100} color="var(--yellow)" top="10%" left="-3%" delay={0.5} />
      <FloatingStar size={32} color="var(--pink)" bottom="15%" right="8%" delay={1} />

      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.span className="badge badge-cyan mb-4" whileHover={{ scale: 1.1, rotate: 2 }}>Contact</motion.span>
          <h1 className="display-lg">Let's Build Something</h1>
          <p>Ready to automate your workflow? Let's discuss how I can help transform your processes.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.form initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            onSubmit={handleSubmit} className="contact-form" whileHover={{ boxShadow: '15px 15px 0 #000' }}>
            <h2>Send a Message</h2>

            {[{ name: 'name', placeholder: 'John Doe', type: 'text' }, { name: 'email', placeholder: 'john@company.com', type: 'email' }].map((field) => (
              <motion.div key={field.name} className="form-group" whileFocusWithin={{ scale: 1.02 }}>
                <label className="form-label">{field.name === 'name' ? 'Your Name' : 'Email Address'}</label>
                <input type={field.type} className="form-input" placeholder={field.placeholder}
                  value={form[field.name]} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} required />
              </motion.div>
            ))}

            <div className="form-group">
              <label className="form-label">Subject</label>
              <select className="form-select" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                <option>Web Scraping / Automation</option>
                <option>Telegram / Discord Bot</option>
                <option>FullStack Web Application</option>
                <option>General Hello</option>
              </select>
            </div>

            <motion.div className="form-group" whileFocusWithin={{ scale: 1.02 }}>
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell me about your project..."
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </motion.div>

            <motion.button type="submit" className="form-submit" disabled={submitting}
              whileHover={{ scale: 1.02, x: 3, y: 3, boxShadow: '10px 10px 0 var(--yellow)', background: 'var(--white)', color: 'var(--black)' }}
              whileTap={{ scale: 0.98 }}>
              <AnimatePresence mode="wait">
                {submitting ? (
                  <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Sending...</motion.span>
                ) : submitted ? (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ color: 'var(--green)' }}>
                    Message Sent! ✓
                  </motion.span>
                ) : (
                  <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Mail size={16} /> Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          <motion.div className="contact-info" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <motion.div className="contact-card" whileHover={{ y: -5, boxShadow: '10px 10px 0 #000' }}>
              <h3>Connect</h3>
              <div className="contact-links">
                {[
                  { icon: <Github size={18} />, label: 'GitHub Profile', href: 'https://github.com/seeyaa77' },
                  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: <Mail size={18} />, label: 'Email Direct', href: 'mailto:contact@example.com' },
                ].map((link, i) => (
                  <motion.a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, background: 'var(--cyan)', boxShadow: '5px 5px 0 #000' }}
                    whileTap={{ scale: 0.95 }}>
                    {link.icon}
                    {link.label}
                    <ArrowRight size={14} style={{ marginLeft: 'auto' }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="contact-cta" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '12px 12px 0 #000' }}>
              <h3>Quick Response</h3>
              <p>I typically respond within 24 hours.</p>
              <motion.a href="mailto:contact@example.com" className="btn btn-primary" style={{ margin: '0 auto' }}
                whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Mail size={16} /> Email Me
              </motion.a>
            </motion.div>

            <motion.div className="contact-card" style={{ background: 'var(--green)' }}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <motion.div style={{ width: 12, height: 12, background: 'var(--white)', border: '2px solid #000', borderRadius: '50%' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase' }}>Available for Projects</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.7 }}>Open to freelance & collaboration</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div className="footer-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div>
            <motion.div className="footer-logo" whileHover={{ scale: 1.05 }}>raffli.dev</motion.div>
            <div className="footer-text">Automation Developer & Web Engineer</div>
          </div>

          <div className="footer-links">
            {[
              { icon: <Github size={18} />, href: 'https://github.com/seeyaa77' },
              { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <Mail size={18} />, href: 'mailto:contact@example.com' },
            ].map((link, i) => (
              <motion.a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link"
                whileHover={{ y: -5, background: 'var(--yellow)', boxShadow: '3px 3px 0 #fff' }}
                whileTap={{ scale: 0.9 }}>
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="footer-text">© 2026 Muhammad Raffli Aldiansyah</div>
        </motion.div>
      </div>
    </footer>
  )
}

// ===== MAIN APP =====
function App() {
  return (
    <div className="app">
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
