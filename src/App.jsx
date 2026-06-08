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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

// Navbar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="navbar-container">
        <motion.a href="#" className="navbar-logo" whileHover={{ scale: 1.05 }}>
          raffli<span style={{ opacity: 0.5 }}>.dev</span>
        </motion.a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="navbar-mobile-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="hero-subtitle">
            Automation Engineer
          </motion.p>
          
          <motion.h1 variants={fadeInUp} className="hero-title">
            Muhammad Raffli
            <span className="hero-title-dim">Aldiansyah</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="hero-description">
            Crafting intelligent automation systems that transform complex workflows
            into seamless, efficient processes.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="hero-socials">
            <a href="https://github.com/seeyaa77" target="_blank" rel="noopener noreferrer">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} />
            </a>
            <a href="mailto:contact@example.com">
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hero-scroll"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Counter component — smooth animated count-up using requestAnimationFrame
function Counter({ value, duration = 2 }) {
  const [display, setDisplay] = useState("0")
  const ref = useRef(null)
  const hasStarted = useRef(false)
  const animationFrameId = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          startCount()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  const startCount = () => {
    // Handle special case "24/7"
    if (value === "24/7") {
      const startTime = performance.now()
      const animate = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
        const current = Math.round(eased * 24)
        setDisplay(`${current}/7`)
        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animate)
        }
      }
      animationFrameId.current = requestAnimationFrame(animate)
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
      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate)
      }
    }
    animationFrameId.current = requestAnimationFrame(animate)
  }

  return <span ref={ref}>{display}</span>
}

// Clean & Elegant Academic Timeline Component
function AcademicTimeline() {
  const education = [
    { year: "2014 – 2020", school: "SDN 04 Pontianak Timur", status: "Completed", desc: "Pendidikan dasar di Pontianak Timur." },
    { year: "2020 – 2023", school: "SMPN 26 Pontianak Timur", status: "Completed", desc: "Sekolah menengah pertama, mulai mendalami komputer." },
    { year: "2023 – 2026", school: "SMKN 7 Pontianak Timur", status: "Completed", desc: "SMK — fokus Rekayasa Perangkat Lunak." },
    { year: "2026 – Present", school: "Bina Sarana Informatika", status: "On-Going", desc: "Studi di bidang Teknologi Informasi (sedang berlanjut)." },
  ]

  return (
    <div className="education-timeline">
      {education.map((edu, index) => (
        <motion.div 
          key={index} 
          variants={fadeInUp} 
          className={`timeline-item ${index === education.length - 1 ? 'timeline-item-last' : ''}`}
        >
          <div className="timeline-line">
            <div className={`timeline-node ${edu.status === 'On-Going' ? 'node-ongoing' : 'node-completed'}`}>
              {edu.status === 'On-Going' ? '⚡' : '✓'}
            </div>
          </div>
          <div className={`timeline-content ${edu.status === 'On-Going' ? 'content-ongoing' : ''}`}>
            <span className="timeline-year">{edu.year}</span>
            <h3 className="timeline-school">{edu.school}</h3>
            <p className="timeline-desc">{edu.desc}</p>
            <span className={`timeline-status ${edu.status === 'On-Going' ? 'status-ongoing' : 'status-completed'}`}>
              {edu.status}
            </span>
          </div>
        </motion.div>
      ))}
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
          
          <AcademicTimeline />
        </motion.div>
      </div>
    </section>
  )
}




// Skills Section
function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: <Code2 size={20} />,
      items: ["Python", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
      category: "Frameworks & Runtimes",
      icon: <Terminal size={20} />,
      items: ["Next.js", "React.js", "Node.js", "Express.js", "Flask", "FastAPI"]
    },
    {
      category: "Automation",
      icon: <Zap size={20} />,
      items: ["Selenium", "Puppeteer", "Playwright", "Scrapy"]
    },
  ]

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <p className="section-label">Skills</p>
            <h2 className="section-title">Tech Stack & Tools</h2>
          </motion.div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={scaleIn} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-title">{skill.category}</h3>
                </div>
                <div className="skill-tags">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Linux CLI Boot Screen Component
// Linux CLI Boot Screen Component
function BootScreen({ onComplete }) {
  const [logs, setLogs] = useState([])
  const [currentLine, setCurrentLine] = useState(-1) // Start at -1, meaning typing is in progress
  const [typedCommand, setTypedCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [progress, setProgress] = useState(0)

  const command = "./init_portfolio.sh --verbose --production"
  
  const logSequence = [
    { text: "[   0.000000] Linux version 5.15.0-76-generic (raffli@dev-host)", delay: 50 },
    { text: "[   0.041029] CPU0: Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz", delay: 50 },
    { text: "[   0.124930] Command line options: initrd=initrd.img root=/dev/sda1 ro", delay: 50 },
    { text: "[ INFO ] Initializing portfolio boot sequence...", delay: 100 },
    { text: "[ OK ] Core runtime detected: React v19.2.0, Vite v7.2.5", delay: 80 },
    { text: "[ OK ] Dynamic styling engine initialized: Tailwind CSS v4", delay: 50 },
    { text: "[ OK ] Animation controllers active: Framer Motion v12", delay: 80 },
    { text: "[ INFO ] Connecting to GitHub REST API...", delay: 100 },
    { text: "[ OK ] Syncing repository: 'Spotify-Downloader' (https://github.com/Seeyaa77/Spotify-Downloader)", delay: 80 },
    { text: "[ OK ] Repo target: spotydl.net [Online]", delay: 50 },
    { text: "[ OK ] Syncing repository: 'Aura-AI' (https://github.com/Seeyaa77/Aura-AI)", delay: 80 },
    { text: "[ OK ] Repo target: aura-ai-six-alpha.vercel.app [Online]", delay: 50 },
    { text: "[ OK ] Syncing repository: 'dracin-bot' [Private Access Approved]", delay: 80 },
    { text: "[ OK ] Syncing repository: 'portofolio' (https://github.com/Seeyaa77/portofolio)", delay: 50 },
    { text: "[ INFO ] Allocating resources & compiling responsive stylesheets...", delay: 120 },
    { text: "[ OK ] Custom 3D Tilt motiongraphy drivers loaded.", delay: 80 },
    { text: "[ OK ] Glassmorphism UI tokens successfully mapped.", delay: 50 },
    { text: "[ SUCCESS ] Web-shell terminal execution finished.", delay: 100 },
    { text: "[ READY ] Systems operational. Redirecting to Graphical Interface...", delay: 150 }
  ]

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 450)
    return () => clearInterval(interval)
  }, [])

  // Typing effect - character by character slicing
  useEffect(() => {
    if (typedCommand.length < command.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(command.slice(0, typedCommand.length + 1))
      }, 25) // typing speed
      return () => clearTimeout(timeout)
    } else {
      // Start printing logs after a small delay once typing is finished
      const timeout = setTimeout(() => {
        setCurrentLine(0)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [typedCommand])

  // Sequential log printer
  useEffect(() => {
    if (currentLine === -1 || currentLine >= logSequence.length) return

    const currentLog = logSequence[currentLine]
    const timeout = setTimeout(() => {
      setLogs(prev => [...prev, currentLog.text])
      setProgress(Math.round(((currentLine + 1) / logSequence.length) * 100))
      setCurrentLine(prev => prev + 1)
    }, currentLog.delay)

    return () => clearTimeout(timeout)
  }, [currentLine])

  // Instant trigger to close once completed
  useEffect(() => {
    if (currentLine === logSequence.length) {
      // Delay 100ms so the user sees the progress bar hit 100% and then immediately close
      const timeout = setTimeout(() => {
        onComplete()
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, onComplete])

  // Skip keyboard listener
  useEffect(() => {
    const handleKeyDown = () => {
      onComplete()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onComplete])

  return (
    <div className="boot-screen">
      <div className="boot-terminal">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="terminal-title">guest@raffli-dev: ~</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">guest@raffli-dev:~$</span>{" "}
            <span className="terminal-input">{typedCommand}</span>
            {typedCommand.length < command.length && showCursor && <span className="terminal-cursor">|</span>}
          </div>

          {logs.map((log, index) => {
            let logClass = "text-grey"
            if (log.includes("[ SUCCESS ]") || log.includes("[ READY ]")) {
              logClass = "text-green"
            } else if (log.includes("[ OK ]")) {
              logClass = "text-cyan"
            } else if (log.includes("[ INFO ]")) {
              logClass = "text-white"
            }
            return (
              <div key={index} className={`terminal-log ${logClass}`}>
                {log}
              </div>
            )
          })}

          {currentLine >= logSequence.length && (
            <div className="terminal-line text-green animate-pulse" style={{ marginTop: '10px' }}>
              [ READY ] Boot complete. Redirecting...
            </div>
          )}
        </div>
        
        <div className="terminal-progress-container">
          <div className="terminal-progress-track">
            <div className="terminal-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="terminal-progress-text">{progress}%</span>
        </div>
      </div>
      
      <button className="boot-skip-btn" onClick={onComplete}>
        Skip Intro ➜
      </button>
    </div>
  )
}

// 3D Tilt Card Component
function TiltCard({ children }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const xc = rect.width / 2
    const yc = rect.height / 2
    const px = (x - xc) / xc
    const py = (y - yc) / yc

    const maxTilt = 8 // Subtle but noticeable 3D tilt
    setRotateX(-py * maxTilt)
    setRotateY(px * maxTilt)
    setScale(1.02)
    
    setGlowX((x / rect.width) * 100)
    setGlowY((y / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        height: '100%'
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="project-card-wrapper"
    >
      {children}
      <div 
        className="card-glare" 
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.06) 0%, transparent 60%)`
        }}
      />
    </motion.div>
  )
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "Spotify Downloader",
      description: "Sleek and automated web tool to download Spotify playlists, albums, and tracks with high-fidelity meta-tagging and cover art retrieval.",
      tech: ["Node.js", "Vite", "Spotify API", "Tailwind CSS"],
      repo: "https://github.com/Seeyaa77/Spotify-Downloader",
      live: "https://spotydl.net/",
      icon: <Music size={20} />
    },
    {
      title: "Aura AI",
      description: "Premium monochromatic AI chatbot UI built with ChatGPT API, featuring context persistence, interactive message history, and custom layout.",
      tech: ["React", "Express", "OpenAI API", "Framer Motion"],
      repo: "https://github.com/Seeyaa77/Aura-AI",
      live: "https://aura-ai-six-alpha.vercel.app/",
      icon: <MessageSquare size={20} />
    },
    {
      title: "Dracin Bot",
      description: "High-performance Telegram automated bot for fetching, indexing, and downloading/streaming Chinese dramas (Dracin) with custom search.",
      tech: ["Python", "Scrapy", "Telegram API", "MongoDB"],
      repo: null, // Private repo
      live: null,
      icon: <Bot size={20} />
    },
    {
      title: "Portfolio Site",
      description: "This personal portfolio showcasing automation engineering, custom CLI animations, and premium web design aesthetics.",
      tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
      repo: "https://github.com/Seeyaa77/portofolio",
      live: "#",
      icon: <Cpu size={20} />
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-description">
              Production-ready automation solutions and premium applications that are 
              directly synced and live on GitHub.
            </p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div key={index} variants={scaleIn} style={{ height: '100%' }}>
                <TiltCard>
                  <div className="project-card-bg"></div>
                  <div className="project-card-glow"></div>
                  <div className="project-card">
                    <div>
                      <div className="project-header">
                        <div className="project-title-wrapper">
                          <div className="project-icon-box">{project.icon}</div>
                          <h3 className="project-title">{project.title}</h3>
                        </div>
                        <ArrowUpRight size={18} className="project-arrow" />
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="project-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-badges">
                      {project.repo ? (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-badge-link">
                          <Github size={12} />
                          <span>Code</span>
                        </a>
                      ) : (
                        <div className="project-badge-private">
                          <Lock size={12} />
                          <span>Private</span>
                        </div>
                      )}
                      
                      {project.live && project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-badge-link">
                          <ExternalLink size={12} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-card-tech-brackets">
                    {project.repo ? "[SYS.ONLINE]" : "[SYS.PRIVATE]"}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="contact-content"
        >
          <motion.div variants={fadeInUp}>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's Build Something</h2>
            <p className="section-description">
              Ready to automate your workflow? Let's discuss how I can help 
              transform your manual processes into intelligent, self-running systems.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <a href="mailto:contact@example.com" className="btn-primary btn-large">
              <Mail size={20} />
              Get in Touch
            </a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="contact-socials">
            <a href="https://github.com/seeyaa77" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© 2026 Muhammad Raffli Aldiansyah. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  const [isBooted, setIsBooted] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('portfolio_booted') === 'true'
    }
    return false
  })

  const handleBootComplete = () => {
    setIsBooted(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('portfolio_booted', 'true')
    }
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!isBooted && (
          <motion.div
            key="bootscreen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ position: 'fixed', inset: 0, zIndex: 99999 }}
          >
            <BootScreen onComplete={handleBootComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <PersonalLanding />
      <div className="divider"></div>
      <About />
      <Skills />
      <div className="divider"></div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
