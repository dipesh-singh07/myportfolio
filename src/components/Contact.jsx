// src/components/Contact.jsx
import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/contact-footer.css';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'dipesh05singh@gmail.com',
    href: 'mailto:dipesh05singh@gmail.com',
    iconBg: 'rgba(99, 102, 241, 0.15)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dipeshsingh',
    href: 'https://linkedin.com/in/dipeshsingh',
    iconBg: 'rgba(10, 102, 194, 0.15)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/dipeshsingh',
    href: 'https://github.com/dipeshsingh',
    iconBg: 'rgba(255, 255, 255, 0.08)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const sectionRef = useScrollReveal();

  const validate = useCallback(() => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);
    // Simulate form submission (frontend only — no backend)
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSuccess(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title" ref={sectionRef}>
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title" id="contact-title">
          Let&apos;s{' '}
          <span className="gradient-text">Work Together</span>
        </h2>
        <p className="section-subtitle">
          Whether it&apos;s an internship opportunity, hackathon collaboration,
          or just a hello — my inbox is always open.
        </p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p className="contact-info-text">
              I&apos;m currently open to <strong style={{ color: 'var(--text-primary)' }}>internship opportunities</strong> and
              exciting collaborations. If you have a project in mind or want to connect,
              feel free to reach out through any of the channels below.
            </p>

            <div className="contact-links" role="list">
              {CONTACT_LINKS.map(({ label, value, href, iconBg, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="contact-link-item"
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  role="listitem"
                  aria-label={`${label}: ${value}`}
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: iconBg, color: 'var(--text-primary)' }}
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{label}</span>
                    <span className="contact-link-value">{value}</span>
                  </div>
                  <span className="contact-link-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">I&apos;ll get back to you within 24 hours.</p>

            {success && (
              <div className="form-success" role="alert">
                <span aria-hidden="true">✅</span>
                Message sent! I&apos;ll reply soon. Thank you!
              </div>
            )}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" style={{ color: '#F87171', fontSize: '12px' }} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" style={{ color: '#F87171', fontSize: '12px' }} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hi Dipesh, I'd love to connect about..."
                  value={form.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" style={{ color: '#F87171', fontSize: '12px' }} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? (
                  <>
                    <span style={{ display: 'inline-block', animation: 'rotate 1s linear infinite' }}>⟳</span>
                    Sending…
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
