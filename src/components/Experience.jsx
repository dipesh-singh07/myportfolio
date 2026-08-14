// src/components/Experience.jsx
import { journey } from '../data/experience';
import { useChildReveal } from '../hooks/useScrollReveal';
import '../styles/sections.css';

export default function Experience() {
  const timelineRef = useChildReveal(120);

  return (
    <section id="experience" className="experience section" aria-labelledby="experience-title">
      <div className="container">
        <span className="section-label">My Journey</span>
        <h2 className="section-title" id="experience-title">
          Learning &amp;{' '}
          <span className="gradient-text">Growth Timeline</span>
        </h2>
        <p className="section-subtitle">
          Key milestones in my development journey — from foundational algorithms
          to building production-ready React applications.
        </p>

        <div className="timeline" ref={timelineRef} role="list">
          {journey.map((item) => (
            <div
              key={item.id}
              className="timeline-item reveal"
              role="listitem"
              aria-label={`${item.year}: ${item.title}`}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{ background: item.color }}
                aria-hidden="true"
              />

              {/* Year */}
              <time className="timeline-year" dateTime={item.year}>{item.year}</time>

              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div
                    className="timeline-icon"
                    style={{ borderColor: `${item.color}33` }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div className="timeline-text">
                    <h3>{item.title}</h3>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tags" role="list" aria-label="Tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag" role="listitem"
                      style={{
                        background: `${item.color}15`,
                        borderColor: `${item.color}30`,
                        color: item.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
