// src/components/About.jsx
import { useScrollReveal, useChildReveal } from '../hooks/useScrollReveal';
import '../styles/about-skills.css';

const CODE_LINES = [
  { num: 1, content: null, type: 'comment', text: '// about_dipesh.js' },
  { num: 2, content: null },
  { num: 3, type: 'mixed', parts: [
    { cls: 'code-keyword', text: 'const ' },
    { cls: 'code-variable', text: 'developer' },
    { cls: 'code-punctuation', text: ' = {' },
  ]},
  { num: 4, type: 'mixed', indent: 2, parts: [
    { cls: 'code-property', text: 'name' },
    { cls: 'code-punctuation', text: ': ' },
    { cls: 'code-string', text: '"Dipesh Singh"' },
    { cls: 'code-punctuation', text: ',' },
  ]},
  { num: 5, type: 'mixed', indent: 2, parts: [
    { cls: 'code-property', text: 'role' },
    { cls: 'code-punctuation', text: ': ' },
    { cls: 'code-string', text: '"B.Tech CSE Student"' },
    { cls: 'code-punctuation', text: ',' },
  ]},
  { num: 6, type: 'mixed', indent: 2, parts: [
    { cls: 'code-property', text: 'focus' },
    { cls: 'code-punctuation', text: ': ' },
    { cls: 'code-string', text: '"Software Development"' },
    { cls: 'code-punctuation', text: ',' },
  ]},
  { num: 7, type: 'mixed', indent: 2, parts: [
    { cls: 'code-property', text: 'openTo' },
    { cls: 'code-punctuation', text: ': [' },
    { cls: 'code-string', text: '"Internships"' },
    { cls: 'code-punctuation', text: ', ' },
    { cls: 'code-string', text: '"Hackathons"' },
    { cls: 'code-punctuation', text: '],' },
  ]},
  { num: 8, type: 'mixed', indent: 2, parts: [
    { cls: 'code-property', text: 'loves' },
    { cls: 'code-punctuation', text: ': [' },
    { cls: 'code-string', text: '"Problem Solving"' },
    { cls: 'code-punctuation', text: ', ' },
    { cls: 'code-string', text: '"Clean Code"' },
    { cls: 'code-punctuation', text: '],' },
  ]},
  { num: 9, type: 'mixed', indent: 2, parts: [
    { cls: 'code-property', text: 'available' },
    { cls: 'code-punctuation', text: ': ' },
    { cls: 'code-keyword', text: 'true' },
    { cls: 'code-punctuation', text: ',' },
  ]},
  { num: 10, type: 'mixed', parts: [
    { cls: 'code-punctuation', text: '};' },
  ]},
  { num: 11, content: null },
  { num: 12, type: 'mixed', parts: [
    { cls: 'code-variable', text: 'developer' },
    { cls: 'code-punctuation', text: '.' },
    { cls: 'code-property', text: 'init' },
    { cls: 'code-punctuation', text: '(); ' },
    { cls: 'code-comment', text: '// 🚀' },
  ]},
];

const HIGHLIGHTS = [
  { icon: '📚', number: '200+', label: 'Problems Solved' },
  { icon: '⚛️', number: '4+', label: 'React Projects' },
  { icon: '🏆', number: '3+', label: 'Hackathons' },
  { icon: '🎓', number: '2026', label: 'Graduating' },
];

const INTERESTS = [
  'Open Source', 'Web Performance', 'System Design',
  'Competitive Programming', 'UI/UX', 'Tech Community',
];

export default function About() {
  const titleRef = useScrollReveal();
  const cardsRef = useChildReveal(80);

  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          {/* Code window */}
          <div className="about-image-side reveal" ref={titleRef}>
            <div className="about-code-window" role="img" aria-label="Code snippet describing Dipesh Singh">
              <div className="code-window-header">
                <div className="code-dot code-dot-red" />
                <div className="code-dot code-dot-yellow" />
                <div className="code-dot code-dot-green" />
                <span className="code-window-title">about_dipesh.js</span>
              </div>
              <div className="code-body">
                {CODE_LINES.map((line) => (
                  <div key={line.num} className="code-line">
                    <span className="code-line-num">{line.num}</span>
                    <span>
                      {line.type === 'comment' && (
                        <span className="code-comment">{line.text}</span>
                      )}
                      {line.type === 'mixed' && (
                        <span style={{ paddingLeft: `${(line.indent || 0) * 8}px` }}>
                          {line.parts.map((p, i) => (
                            <span key={i} className={p.cls}>{p.text}</span>
                          ))}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about-text-side">
            <div>
              <span className="section-label">About Me</span>
              <h2 className="section-title" id="about-title">
                Crafting Code,{' '}
                <span className="gradient-text">Building Futures</span>
              </h2>
            </div>

            <p className="about-paragraph">
              I&apos;m <strong>Dipesh Singh</strong>, a B.Tech Computer Science Engineering student
              with a deep passion for software development. I believe in writing code that doesn&apos;t
              just work — it <strong>excels in clarity, performance, and maintainability</strong>.
            </p>

            <p className="about-paragraph">
              My journey started with C++ and DSA, which gave me a strong algorithmic foundation.
              I then moved into web development — building projects with React, TypeScript, and REST APIs.
              I actively participate in <strong>hackathons</strong> and love collaborating on{' '}
              <strong>real-world problem-solving</strong>.
            </p>

            {/* Stats */}
            <div className="about-highlights" ref={cardsRef}>
              {HIGHLIGHTS.map(({ icon, number, label }) => (
                <div key={label} className="highlight-card reveal">
                  <div className="highlight-icon">{icon}</div>
                  <span className="highlight-number">{number}</span>
                  <span className="highlight-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <p className="about-paragraph" style={{ marginBottom: '12px' }}>
                <strong>Interests &amp; Focus Areas</strong>
              </p>
              <div className="about-interests">
                {INTERESTS.map((interest) => (
                  <span key={interest} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
