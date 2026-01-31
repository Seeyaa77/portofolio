import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  ArrowUpRight
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

// About Section
function About() {
  const stats = [
    { number: "80+", label: "Projects Delivered" },
    { number: "3+", label: "Years of Experience" },
    { number: "5+", label: "Tech Stacks" },
    { number: "24/7", label: "Automation Uptime" },
  ]

  const education = [
    { year: "2014 - 2020", school: "SDN 04 Pontianak Timur", status: "Completed" },
    { year: "2020 - 2023", school: "SMPN 26 Pontianak Timur", status: "Completed" },
    { year: "2023 - 2026", school: "SMKN 7 Pontianak Timur", status: "Completed" },
    { year: "2026 - ????", school: "University", status: "Soon" },
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
                <p className="stat-number">{stat.number}</p>
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
          
          <div className="education-tree">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                className={`tree-item ${index === education.length - 1 ? 'tree-item-last' : ''}`}
              >
                <div className="tree-line">
                  <div className={`tree-node ${edu.status === 'Soon' ? 'node-soon' : 'node-completed'}`}>
                    {edu.status === 'Soon' ? '?' : '✓'}
                  </div>
                </div>
                <div className={`tree-content ${edu.status === 'Soon' ? 'content-soon' : ''}`}>
                  <span className="tree-year">{edu.year}</span>
                  <h3 className="tree-school">{edu.school}</h3>
                  <span className={`tree-status ${edu.status === 'Soon' ? 'status-soon' : 'status-completed'}`}>
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
      category: "Runtime & Frameworks",
      icon: <Terminal size={20} />,
      items: ["Node.js", "Express.js", "Flask", "FastAPI"]
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

// Projects Section
function Projects() {
  const projects = [
    {
      title: "Zoom Auto Payment",
      description: "Enterprise-grade payment automation system with intelligent retry logic, real-time notifications, and comprehensive transaction logging.",
      tech: ["Python", "Selenium", "REST API"],
    },
    {
      title: "Spotify Auto Register",
      description: "Scalable registration automation engine featuring smart proxy rotation, CAPTCHA solving integration, and rate limit handling.",
      tech: ["Node.js", "Puppeteer", "Proxy Pool"],
    },
    {
      title: "QRIS Payment Gateway",
      description: "Full-stack QRIS payment solution with real-time webhook callbacks, transaction reconciliation, and merchant dashboard.",
      tech: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Edu Domain Validator",
      description: "High-throughput email verification system with concurrent processing, detailed analytics, and export capabilities.",
      tech: ["Python", "AsyncIO", "Threading"],
    },
    {
      title: "Intelligent Web Scraper",
      description: "Production-ready scraping framework with anti-detection measures, distributed architecture, and structured data pipelines.",
      tech: ["Python", "Scrapy", "MongoDB"],
    },
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
              Production-ready automation solutions that have processed thousands of 
              transactions and saved countless hours of manual work.
            </p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div key={index} variants={scaleIn} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <ArrowUpRight size={18} className="project-arrow" />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
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
  return (
    <div className="app">
      <Navbar />
      <Hero />
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
