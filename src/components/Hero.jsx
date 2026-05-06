export default function Hero({ links }) {
  return (
    <section className="hero">
      <div className="hero-info">
        <h2>Hi — I'm Your Name</h2>
        <p>
          I'm a software developer specializing in building fast, accessible web
          apps. I design interfaces and implement full-stack solutions that
          deliver value. This site showcases my CV and selected projects.
        </p>

        <div className="cta">
          <a className="btn btn-primary" href={links.projectsRepo} target="_blank" rel="noreferrer">View Repos</a>
          <a className="btn btn-ghost" href={links.email}>Contact</a>
        </div>
      </div>

      <div className="hero-art" aria-hidden>
        <div className="orb" />
      </div>
    </section>
  )
}
