import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const resumePath = '/assets/Vaishnavi_Harode_Resume.pdf'

const profileLinks = [
  { label: 'Email', value: 'vaishnaviharode904@gmail.com', href: 'mailto:vaishnaviharode904@gmail.com', icon: '↗' },
  { label: 'GitHub', value: 'vaishnaviharode904-commits', href: 'https://github.com/vaishnaviharode904-commits', icon: '↗' },
  { label: 'LinkedIn', value: 'vaishnavi-harode', href: 'https://linkedin.com/in/vaishnavi-harode', icon: '↗' },
]

const projects = [
  {
    number: '01',
    title: 'Student Information\nManagement System',
    year: '2025',
    stack: 'Python · Tkinter',
    summary: 'A desktop CRUD application for managing student records with a clear, modular structure.',
    details: [
      'Built full CRUD functionality for student data.',
      'Added search by name or roll number for quick retrieval.',
      'Implemented validation and persistent storage for accurate records across sessions.',
    ],
  },
  {
    number: '02',
    title: 'Python Chatbot',
    year: '2025',
    stack: 'Python · Tkinter · API integration',
    summary: 'An approachable GUI chatbot that connects user input to API-powered responses.',
    details: [
      'Developed an interactive, event-driven chatbot interface.',
      'Fetched and processed API responses for user queries.',
      'Used conditional logic to keep the experience friendly and predictable.',
    ],
  },
  {
    number: '03',
    title: 'Digital Calculator',
    year: '2024',
    stack: 'Java · AWT/Swing · Event handling',
    summary: 'A functional desktop calculator built to practice Java GUI development and interaction.',
    details: [
      'Created the interface with Java AWT/Swing components.',
      'Implemented button interactions and arithmetic operations.',
      'Applied object-oriented programming and GUI development concepts.',
    ],
  },
]

const skills = [
  { label: 'Languages', value: 'C · C++ · Java · Advanced Java · Python' },
  { label: 'Java', value: 'Core Java · OOP · AWT · Swing · Event Handling · JDBC · Servlets · JSP · RMI · Socket Programming · JavaBeans · Cookies · Session Management' },
  { label: 'Python', value: 'Tkinter · API Integration · Functions · File Handling · Modules' },
  { label: 'DSA', value: 'Arrays · Searching · Sorting · Linked Lists · Stack · Recursion' },
  { label: 'Concepts', value: 'Object-Oriented Programming · GUI Development · API Integration · Problem Solving' },
]

const certifications = ['Certificate in C++ Programming', 'Certificate in Advanced Java', 'Certificate in Computing - Python']

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Vaishnavi Harode home">
          <span className="monogram">VH</span>
          <span className="wordmark-name">Vaishnavi<br />Harode</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-nav" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>03</span></a>
          <a className="nav-resume" href={resumePath} download onClick={closeMenu}>Resume <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-kicker"><span className="pulse-dot" /> Available for internship / entry-level roles</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software Developer · Python · Java</p>
              <h1 id="hero-title">Building with<br /><em>solid fundamentals.</em></h1>
              <p className="hero-intro">I’m Vaishnavi, a B.Sc. Information Technology graduate from Nagpur who enjoys turning programming concepts into useful desktop applications and clear, maintainable interfaces.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">See selected work <Arrow /></a>
                <a className="text-link" href={resumePath} download>Download resume <Arrow /></a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="signal-mark" aria-hidden="true">
                <div className="signal-top">01 <span>/</span> 03</div>
                <div className="signal-letter">V<span>H</span></div>
                <div className="signal-bars"><i /><i /><i /><i /><i /></div>
              </div>
              <p className="aside-note">Currently sharpening data structures and algorithms in Java, one thoughtful solution at a time.</p>
            </div>
          </div>
          <div className="hero-bottomline"><span>Nagpur, Maharashtra</span><span>↓ Scroll to explore</span><span>© 2025</span></div>
        </section>

        <section id="work" className="work section-wrap" aria-labelledby="work-title">
          <SectionHeading index="01" eyebrow="Selected work" title="A few things I’ve built while learning by doing." copy="Small applications, real interactions, and a growing instinct for thoughtful software." />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-meta"><span>{project.stack}</span><span>{project.year}</span></div>
                  <h3>{project.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
                  <p>{project.summary}</p>
                  <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
                <div className="project-arrow" aria-hidden="true"><Arrow /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about section-wrap" aria-labelledby="about-title">
          <SectionHeading index="02" eyebrow="The foundation" title="Curious, grounded, methodical." copy="I care about understanding how things work, then making them easier to use." />
          <div className="about-grid">
            <div className="about-statement">
              <p className="big-quote">“Strong foundations make better software.”</p>
              <p>My work so far has centered on Python and Java, with a focus on object-oriented programming, GUI development, API integration, and the problem-solving habits behind dependable code.</p>
              <p>Outside projects, I’ve participated in technical workshops and am continuing to practice data structures and algorithms in Java.</p>
            </div>
            <div className="skills-block">
              <p className="eyebrow">Technical skills</p>
              <div className="skill-list">
                {skills.map((skill) => <div className="skill-row" key={skill.label}><span>{skill.label}</span><strong>{skill.value}</strong></div>)}
              </div>
              <div className="language-strip"><span>Languages</span><strong>English · Marathi (Advanced)</strong></div>
            </div>
          </div>
        </section>

        <section className="credentials section-wrap" aria-labelledby="credentials-title">
          <SectionHeading index="03" eyebrow="Credentials" title="The details behind the work." />
          <div className="credentials-grid">
            <div className="credential-column">
              <p className="eyebrow">Education</p>
              <div className="credential-item">
                <div className="credential-year">2025</div>
                <div><h3>Bachelor of Science<br />(Information Technology)</h3><p>Shree Mathurdas Mohota College of Science, Nagpur</p><p className="highlight-line">GPA: 7.98 · 1st rank in Semester 4</p></div>
              </div>
            </div>
            <div className="credential-column">
              <p className="eyebrow">Certifications</p>
              <div className="cert-list">{certifications.map((cert, index) => <div className="cert-item" key={cert}><span>0{index + 1}</span><strong>{cert.replace('Certificate in ', '')}</strong></div>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-wrap" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2 id="contact-title">Have a role, idea,<br /><em>or good question?</em></h2>
            </div>
            <a className="contact-email" href="mailto:vaishnaviharode904@gmail.com">vaishnaviharode904<br /><span>@gmail.com</span> <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <div className="footer-links">
          {profileLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label} <Arrow /></a>)}
        </div>
        <div className="footer-bottom"><span>Designed & built by Vaishnavi Harode</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
