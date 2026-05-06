import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

const PROFILE = {
  name: 'Rishivardan Vallikanthan',
  role: 'Software Engineering Student | Full Stack Developer',
  tagline:
    'Building scalable web applications with modern technologies and elegant solutions',
  github: 'https://github.com/Rishivardan',
  linkedin: 'https://www.linkedin.com/in/rishivardan-vallikanthan-42b464350/',
  email: 'rishivardan2004@gmail.com',
  location: 'Colombo, Sri Lanka',
  allRepos: 'https://github.com/Rishivardan?tab=repositories',
  cvLink: '/Rishivardan%20Vallikanthan%20CV.pdf'
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
]

const ABOUT_ITEMS = [
  {
    title: 'Education',
    text: 'Currently pursuing a BSc (Hons) in Computer Science at University of Westminster (2025-2028). Focused on web development, OOP (Java), algorithms, and machine learning.'
  },
  {
    title: 'Volunteer Experience',
    text: 'Active volunteer: assisted with event logistics and participant engagement (Dil Se Event, Rotaract Club of IIT) and IEEE Vertex logistics volunteering.'
  },
  {
    title: 'Focus',
    text: 'Building full-stack web apps, learning backend systems (FastAPI, Node.js, Java), and exploring machine learning and data-driven solutions.'
  }
]

const SKILL_GROUPS = [
  {
    name: 'Programming Languages',
    items: [
      {
        label: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
      },
      {
        label: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        label: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      }
    ]
  },
  {
    name: 'Frontend & Runtime',
    items: [
      {
        label: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        label: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'
      },
      {
        label: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'
      },
      {
        label: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      }
    ]
  },
  {
    name: 'AI & ML Tools',
    items: [
      { label: 'LangChain', iconText: 'LC' },
      { label: 'Google Gemini API', iconText: 'GEM' },
      { label: 'Transformer Embeddings', iconText: 'TE' }
    ]
  },
  {
    name: 'Backend Frameworks',
    items: [
      {
        label: 'FastAPI',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
      },
      {
        label: 'Flask',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
      },
      { label: 'REST API Design', iconText: 'API' }
    ]
  },
  {
    name: 'Databases',
    items: [
      {
        label: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        label: 'Firebase (Firestore & Auth)',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
      }
    ]
  },
  {
    name: 'Version Control',
    items: [
      {
        label: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      {
        label: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      },
      { label: 'Branching & Merging', iconText: 'BM' },
      { label: 'Pull Requests', iconText: 'PR' },
      { label: 'Version Control', iconText: 'VC' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    items: [
      {
        label: 'AWS (EC2, S3)',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
      },
      { label: 'CI/CD Pipelines', iconText: 'CI' },
      { label: 'Cloud Deployment (Vercel, Render)', iconText: 'CD' }
    ]
  },
  {
    name: 'Concepts',
    items: [
      { label: 'OOP', iconText: 'OOP' },
      { label: 'REST APIs', iconText: 'REST' },
      { label: 'Data Structures', iconText: 'DS' },
      { label: 'Machine Learning (Fundamentals)', iconText: 'ML' }
    ]
  }
]

const SKILL_FILTERS = ['All', ...SKILL_GROUPS.map((group) => group.name)]

const PROJECTS = [
  {
    title: 'RAG-based AI Chatbot',
    category: 'Full Stack',
    image: '/rag-chatbot.png',
    description:
      'Built a full-stack RAG chatbot with Next.js and TypeScript. Implemented transformer embeddings with LangChain, vector similarity search in DataStax Astra DB, and a data ingestion pipeline for external sources, plus Google Gemini API responses.',
    tags: [
      'Next.js',
      'TypeScript',
      'LangChain',
      'DataStax Astra DB',
      'Google Gemini API'
    ],
    demo: '',
    repo: 'https://github.com/Rishivardan/ragchbot.git'
  },
  {
    title: 'Appointment Booking System (Full-Stack Solo Project)',
    category: 'Full Stack',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Built a full-stack appointment booking application with a React frontend and FastAPI backend, persisting data in MongoDB. Designed RESTful APIs for CRUD operations, built a responsive UI, and performed end-to-end API testing/debugging for reliability and data integrity.',
    tags: ['React', 'FastAPI', 'MongoDB', 'REST API', 'Postman', 'Git'],
    demo: '',
    repo: 'https://github.com/Rishivardan/Appointment-Booking-System'
  },
  {
    title: 'AI Personalized Study Planner (SDGP Group Project)',
    category: 'Web & Mobile',
    image: '/study-planner.png',
    description:
      'Developed a responsive frontend using React modular components (dashboard, study planner, and task management). Integrated with a Flask backend via REST APIs, implemented a rule-based scheduling engine, used Firebase auth/data, and tested/debugged APIs with Postman.',
    tags: ['React', 'Flask', 'Firebase', 'REST API', 'Postman', 'CI/CD'],
    demo: 'https://scheduler.it.com',
    repo: 'https://github.com/SDGP-Schedular/Scheduler.git'
  },
  {
    title: 'Web Development Project Portfolio',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    description:
      'Built a fully responsive website from scratch using semantic HTML5, CSS3, and vanilla JavaScript with clean structure and modern UI behavior.',
    tags: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Responsive Design'],
    demo: '#',
    repo: 'https://github.com/Rishivardan'
  }
]

const PROJECT_FILTERS = [
  'All',
  'Web & Mobile',
  'Full Stack',
  'Web Development'
]

const TIMELINE = [
  {
    title: 'Bachelor of Science (Hons) in Computer Science',
    company: 'University of Westminster',
    period: '2025 - 2028',
    details:
      'Relevant coursework: Web Development (HTML, CSS, React), Object Oriented Programming (Java), Algorithm Theory and Implementation, Machine Learning and Data Mining.'
  },
  {
    title: 'NIBM Web Application Development Course',
    company: 'NIBM',
    period: '2025 - 2026',
    details: 'Completed a comprehensive web application development course covering frontend and backend technologies, database management, and deployment strategies.'
  }
  
]

const CERTIFICATIONS = [
  {
    title: 'Python Essential Training - LinkedIn Learning (2025)',
    url: 'https://www.linkedin.com/learning/certificates/730eaa3a0da0f206c6bd8350765428601d18c4e3a3092881bb2573ac438e940a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqCnLwHi5TRaO%2BgZqsGLjuQ%3D%3D&accountId=76664938&u=76664938&success=true&authUUID=o%2FVuTp47TyOsTs3isnF0wg%3D%3D'
  },
  {
    title: 'Responsive Web Design - freeCodeCamp (2025)',
    url: 'https://www.freecodecamp.org/certification/Rishivardan_29/responsive-web-design'
  },
  {
    title: 'Web Application Development - NIBM Certificate Course (2026)'
  },
  {
    title: 'Introduction to Prompt Engineering for Generative AI - LinkedIn Learning (2025)',
    url: 'https://www.linkedin.com/learning/certificates/ce81e6da9878e61e717a41340bfecd249d6e89907213137f183e1222fe5fdde3?u=76664938'
  },
  {
    title: 'Crash Course: AWS Basics - KodeKloud (2026)',
    url: 'https://learn.kodekloud.com/certificate/7716e016-cf58-4f56-85f2-abbcc1fafa59'
  },
  {
    title: 'Artificial Intelligence Foundations: Machine Learning - LinkedIn Learning (2026)',
    url: 'https://www.linkedin.com/learning/certificates/ebabcb5201c14287f6799a06dfe7543252f9eff342e53e14c48e144ecc43a14b?u=76664938'
  }
]

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.73.5.93 5.3.93 11.6c0 4.7 3.05 8.7 7.28 10.12.53.1.72-.23.72-.5 0-.25-.01-1.08-.02-1.97-2.96.64-3.59-1.34-3.59-1.34-.48-1.2-1.17-1.52-1.17-1.52-.96-.66.07-.65.07-.65 1.06.08 1.62 1.1 1.62 1.1.94 1.6 2.47 1.14 3.07.87.09-.67.37-1.14.67-1.4-2.36-.27-4.84-1.18-4.84-5.25 0-1.16.41-2.11 1.08-2.86-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.9 1.08A10.02 10.02 0 0112 6.8c.89.004 1.8.12 2.64.35 2.02-1.36 2.9-1.08 2.9-1.08.57 1.48.21 2.57.1 2.84.67.75 1.08 1.7 1.08 2.86 0 4.08-2.5 4.98-4.88 5.24.38.33.72.98.72 1.98 0 1.43-.01 2.59-.01 2.95 0 .28.19.6.73.5C19.03 20.3 22.08 16.3 22.08 11.6 22.08 5.3 17.27.5 12 .5z" />
    </svg>
  )
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48 6.08 3.5 4.98 3.5zM3.5 8.98h3v11.52h-3V8.98zM9.5 8.98h2.88v1.58h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.57v6.93h-3V14.7c0-1.18-.02-2.69-1.64-2.69-1.64 0-1.89 1.28-1.89 2.6v5.88h-3V8.98z" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 5h6v6h-2V8.41l-8.29 8.3-1.42-1.42 8.3-8.29H13V5Zm-6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4h-2v4H7V9h4V7H7Z" />
    </svg>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="section-title-wrap fade-up">
      <h2 className="section-title">{children}</h2>
      <span className="title-line" />
    </div>
  )
}

function App() {
  const [formStatus, setFormStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeSkillFilter, setActiveSkillFilter] = useState('All')

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.fade-up'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in-view'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setFormStatus('')
    setIsSending(true)

    const form = event.currentTarget
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus('Email setup is missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.')
      setIsSending(false)
      return
    }

    const formData = new FormData(form)
    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      message: formData.get('message'),
      to_email: PROFILE.email
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey
      })

      form.reset()
      setFormStatus('Message sent successfully. I will reply by email soon.')
    } catch (error) {
      setFormStatus(error?.text || error?.message || 'Could not send message. Please try again or email me directly.')
    } finally {
      setIsSending(false)
    }
  }

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter)

  const filteredSkillGroups =
    activeSkillFilter === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.name === activeSkillFilter)

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jump to top">
          <span className="brand-mark">RV</span>
          <span className="brand-copy">
            <strong>{PROFILE.name}</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-outline header-cta" href={PROFILE.cvLink} target="_blank" rel="noreferrer">
          View CV
        </a>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content fade-up" id="home">
          <h1>{PROFILE.name}</h1>
          <h3>{PROFILE.role}</h3>
          <p>{PROFILE.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-outline" href={PROFILE.cvLink} target="_blank" rel="noreferrer">Open CV</a>
          </div>

          <div className="social-row">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <IconGithub />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <IconLinkedin />
            </a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <SectionTitle>About Me</SectionTitle>

        <div className="about-grid">
          <div className="about-photo fade-up">
            <img src="/profile.jpeg" alt={`${PROFILE.name} profile`} className="profile-photo" />
          </div>

          <div className="about-list">
            {ABOUT_ITEMS.map((item) => (
              <article className="about-item fade-up" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <SectionTitle>Technical Skills</SectionTitle>

        <div className="skill-filters" role="tablist" aria-label="Skill filters">
          {SKILL_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`skill-filter-btn ${activeSkillFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveSkillFilter(filter)}
              role="tab"
              aria-selected={activeSkillFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkillGroups.map((group) => (
            <article key={group.name} className="skill-card fade-up">
              <h3>{group.name}</h3>

              <div className="skill-items">
                {group.items.map((item) => (
                  <div key={item.label} className={`skill-pill ${item.icon ? '' : 'no-icon'}`}>
                    {item.icon ? (
                      <img src={item.icon} alt="" aria-hidden="true" loading="lazy" />
                    ) : item.iconText ? (
                      <span className="skill-icon-text" aria-hidden="true">{item.iconText}</span>
                    ) : null}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <SectionTitle>My Projects</SectionTitle>

        <div className="project-filters" role="tablist" aria-label="Project filters">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`project-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card fade-up" key={project.title}>
              <div className="project-media">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-hover-actions" aria-hidden="true">
                  {project.demo && project.demo !== '#' ? (
                    <a
                      className="project-hover-icon"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <IconExternal />
                    </a>
                  ) : null}
                  <a
                    className="project-hover-icon"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} repository`}
                  >
                    <IconGithub />
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-actions">
                    <a
                      className="btn btn-primary"
                      href={project.demo && project.demo !== '#' ? project.demo : project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.demo && project.demo !== '#' ? 'Live Demo' : 'View Source'}
                    </a>
                  <a className="icon-btn" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}>
                    <IconGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline" id="education">
        <SectionTitle>Education</SectionTitle>

        <div className="timeline-line">
          {TIMELINE.map((item, index) => (
            <article className={`timeline-item fade-up ${index % 2 ? 'right' : 'left'}`} key={item.title}>
              <h3>{item.title}</h3>
              <strong>{item.company}</strong>
              <span>{item.period}</span>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="certifications">
        <SectionTitle>Certification</SectionTitle>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert) => {
            const CardTag = cert.url ? 'a' : 'article'
            return (
              <CardTag
                className={`cert-card fade-up ${cert.url ? 'is-link' : ''}`}
                key={cert.title}
                href={cert.url}
                target={cert.url ? '_blank' : undefined}
                rel={cert.url ? 'noreferrer' : undefined}
              >
                <h3>{cert.title}</h3>
                {cert.url ? (
                  <span className="cert-link">
                    View certificate
                    <IconExternal />
                  </span>
                ) : null}
              </CardTag>
            )
          })}
        </div>
      </section>

      <section className="section contact" id="contact">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="contact-grid">
          <div className="contact-left fade-up">
            <h3>Let's collaborate on your next project</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-info-box">
              <h4>Email</h4>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>

            <div className="contact-info-box">
              <h4>Location</h4>
              <p>{PROFILE.location}</p>
            </div>

            <div className="social-row">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <IconGithub />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <IconLinkedin />
              </a>
            </div>
          </div>

          <form className="contact-form fade-up" onSubmit={handleContactSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="from_name" type="text" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="from_email" type="email" placeholder="your.email@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Tell me about your project..." required />

            <button type="submit" className="btn btn-primary full" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus ? <p className="form-status">{formStatus}</p> : null}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className="footer-title">{PROFILE.name}</p>
            <p className="footer-subtitle">Computer Science undergraduate</p>
            <div className="footer-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <IconGithub />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <IconLinkedin />
              </a>
            </div>
          </div>

          <div>
            <p className="footer-title">Navigation</p>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-title">Contact</p>
            <p className="footer-subtitle">{PROFILE.email}</p>
            <p className="footer-subtitle">{PROFILE.location}</p>
          </div>
        </div>
        <p className="footer-copy">© 2026 {PROFILE.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
