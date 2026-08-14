// src/components/Projects.jsx
import { projects } from '../data/projects';
import { useChildReveal } from '../hooks/useScrollReveal';
import '../styles/sections.css';

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card reveal${project.featured ? ' featured' : ''}`}
      style={{ '--card-color': project.color }}
      aria-label={`Project: ${project.title}`}
    >
      {project.featured && (
        <span className="project-featured-badge" aria-label="Featured project">
          ⭐ Featured
        </span>
      )}

      <div className="project-card-header">
        <div className="project-icon" aria-hidden="true">
          {project.icon}
        </div>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} GitHub repository`}
              title="View on GitHub"
            >
              <GitHubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} live demo`}
              title="Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech" role="list" aria-label="Technologies used">
        {project.tech.map((t) => (
          <span key={t} className="tag" role="listitem">{t}</span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const gridRef = useChildReveal(100);

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">What I&apos;ve Built</span>
            <h2 className="section-title" id="projects-title">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects I&apos;ve built to learn, experiment,
              and solve real problems.
            </p>
          </div>
          <a
            href="https://github.com/dipeshsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <GitHubIcon />
            <span>All Projects</span>
          </a>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
