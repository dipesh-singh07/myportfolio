// src/components/Skills.jsx
import { useRef, useEffect, useState } from 'react';
import { skillCategories } from '../data/skills';
import { useChildReveal } from '../hooks/useScrollReveal';
import '../styles/about-skills.css';

const ALL_TECH = [
  { name: 'React.js', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'C++', color: '#00599C' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#ffffff' },
  { name: 'REST APIs', color: '#00D09C' },
  { name: 'SQL', color: '#336791' },
  { name: 'MongoDB', color: '#4DB33D' },
  { name: 'DSA', color: '#FF6B35' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Node.js', color: '#339933' },
];

function SkillBar({ name, level, color }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-item-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} skill level`}>
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const gridRef = useChildReveal(100);

  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <span className="section-label">What I Know</span>
        <h2 className="section-title" id="skills-title">
          Skills &amp;{' '}
          <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle">
          A curated set of tools and technologies I&apos;ve worked with,
          backed by real projects and consistent practice.
        </p>

        {/* Category cards */}
        <div className="skills-grid" ref={gridRef}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card reveal">
              <div className="skill-cat-header">
                <span className="skill-cat-icon" aria-hidden="true">{cat.icon}</span>
                <span className="skill-cat-name">{cat.category}</span>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech chip cloud */}
        <div className="skills-chips">
          <p className="skills-chips-title">Full Tech Stack</p>
          <div className="chips-container">
            {ALL_TECH.map(({ name, color }) => (
              <span key={name} className="tech-chip">
                <span
                  className="tech-chip-dot"
                  style={{ background: color }}
                  aria-hidden="true"
                />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
