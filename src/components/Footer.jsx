export default function Footer({ links }) {
  return (
    <footer className="site-footer">
      <div className="muted">© {new Date().getFullYear()} Your Name — CV / Portfolio</div>

      <div style={{ display: 'flex', gap: 8 }}>
        <a className="social-btn" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .5C5.73.5.93 5.3.93 11.6c0 4.7 3.05 8.7 7.28 10.12.53.1.72-.23.72-.5 0-.25-.01-1.08-.02-1.97-2.96.64-3.59-1.34-3.59-1.34-.48-1.2-1.17-1.52-1.17-1.52-.96-.66.07-.65.07-.65 1.06.08 1.62 1.1 1.62 1.1.94 1.6 2.47 1.14 3.07.87.09-.67.37-1.14.67-1.4-2.36-.27-4.84-1.18-4.84-5.25 0-1.16.41-2.11 1.08-2.86-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.9 1.08A10.02 10.02 0 0112 6.8c.89.004 1.8.12 2.64.35 2.02-1.36 2.9-1.08 2.9-1.08.57 1.48.21 2.57.1 2.84.67.75 1.08 1.7 1.08 2.86 0 4.08-2.5 4.98-4.88 5.24.38.33.72.98.72 1.98 0 1.43-.01 2.59-.01 2.95 0 .28.19.6.73.5C19.03 20.3 22.08 16.3 22.08 11.6 22.08 5.3 17.27.5 12 .5z" fill="currentColor" />
          </svg>
        </a>

        <a className="social-btn" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48 6.08 3.5 4.98 3.5zM3.5 8.98h3v11.52h-3V8.98zM9.5 8.98h2.88v1.58h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.57v6.93h-3V14.7c0-1.18-.02-2.69-1.64-2.69-1.64 0-1.89 1.28-1.89 2.6v5.88h-3V8.98z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
