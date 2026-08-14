// src/components/Education.jsx
import { education } from '../data/experience';
import { useChildReveal } from '../hooks/useScrollReveal';
import '../styles/sections.css';

export default function Education() {
  const gridRef = useChildReveal(100);

  return (
    <section id="education" className="education section" aria-labelledby="education-title">
      <div className="container">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title" id="education-title">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          My formal academic foundation in Computer Science Engineering.
        </p>

        <div className="education-grid" ref={gridRef}>
          {education.map((edu) => (
            <article
              key={edu.id}
              className="edu-card reveal"
              style={{ '--card-color': edu.color }}
              aria-label={`${edu.degree} from ${edu.institution}`}
            >
              <div
                className="edu-icon"
                style={{ borderColor: `${edu.color}33` }}
                aria-hidden="true"
              >
                {edu.icon}
              </div>

              <span className={`edu-status ${edu.status.toLowerCase()}`}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: edu.status === 'Pursuing' ? 'var(--accent-emerald)' : 'var(--accent-primary)',
                    display: 'inline-block',
                  }}
                  aria-hidden="true"
                />
                {edu.status}
              </span>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-field">{edu.field}</p>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-duration">{edu.duration}</p>
              <p className="edu-description">{edu.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
