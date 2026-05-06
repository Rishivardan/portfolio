export default function Projects({ projects = [], links }) {
  return (
    <section id="projects">
      <h3 style={{ marginTop: 0 }}>Selected Projects</h3>
      <div className="projects">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <a className="btn btn-primary" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
              <a className="btn btn-ghost" href={links.projectsRepo} target="_blank" rel="noreferrer">More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
