import React, { useEffect, useRef, useState } from 'react';
import {
  Download, Github, Linkedin, Mail,
  Code2, Layers, Cpu, Globe, Terminal,
  ExternalLink, CheckCircle2, User,
} from 'lucide-react';
import profileImage from '../../assets/images/profile.jpg';

const PortfolioHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: 'Years Experience', value: '1+', icon: <Layers className="w-5 h-5" /> },
    { label: 'Projects Completed', value: '5+', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Client Satisfaction', value: '100%', icon: <Globe className="w-5 h-5" /> },
  ];

  const skills = [
    { name: 'React', icon: <Code2 size={18} />, level: 'Intermediate', url: 'https://react.dev/' },
    { name: 'JavaScript', icon: <Terminal size={18} />, level: 'Intermediate', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'PHP', icon: <Cpu size={18} />, level: 'Intermediate', url: 'https://www.php.net/' },
    { name: 'WordPress', icon: <Globe size={18} />, level: 'Intermediate', url: 'https://wordpress.org/' },
    { name: 'Node.js', icon: <Terminal size={18} />, level: 'Intermediate', url: 'https://nodejs.org/' },
    { name: 'HTML5', icon: <Layers size={18} />, level: 'Advanced', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', icon: <Layers size={18} />, level: 'Advanced', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Material UI', icon: <Layers size={18} />, level: 'Intermediate', url: 'https://mui.com/' },
    { name: 'GitHub', icon: <Github size={18} />, level: 'Intermediate', url: 'https://github.com/' },
  ];

  // Fade-up stagger helper
  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", minHeight: '100vh' }}>

      {/* Hero Section */}
      <section style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '7rem 1.5rem 5rem',
        position: 'relative',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, var(--accent-subtle) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'pulseGlow 4s ease-in-out infinite',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          
          {/* Greeting */}
          <p style={{
            ...fadeStyle(0.1),
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.75rem',
            fontWeight: 600,
          }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 style={{
            ...fadeStyle(0.2),
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            lineHeight: 1.1,
          }}>
            Roshan Chawal
          </h1>

          {/* Role */}
          <p style={{
            ...fadeStyle(0.3),
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.25rem',
            fontWeight: 400,
          }}>
            Software Engineer
          </p>

          {/* CTA Buttons */}
          <div style={{
            ...fadeStyle(0.4),
            display: 'flex',
            gap: '0.875rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <button
              onClick={() => window.open('images/ROSHAN-CHAWAL-SD-Resume.pdf')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '100px',
                border: '1px solid var(--accent-border)',
                background: 'var(--accent-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Manrope', sans-serif",
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent-subtle)';
                e.currentTarget.style.borderColor = 'var(--accent-border)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
            <a
              href="#about"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '100px',
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <User className="w-4 h-4" />
              About me
            </a>
          </div>

          {/* Profile Image with Social / Scroll indicators */}
          <div style={{ ...fadeStyle(0.5), position: 'relative', display: 'inline-block' }}>

            {/* Social icons - left */}
            <div style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
              zIndex: 20,
            }}>
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', bg: '#0077b5' },
                { icon: <Github className="w-4 h-4" />, href: 'https://github.com', bg: '#24292e' },
                { icon: <Mail className="w-4 h-4" />, href: 'mailto:roshan@gmail.com', bg: 'var(--accent)' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: s.bg,
                    padding: '0.5625rem',
                    borderRadius: '0.625rem',
                    color: '#fff',
                    display: 'flex',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    animationDelay: `${0.6 + i * 0.1}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.12)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Scroll indicator - right */}
            <div style={{
              position: 'absolute',
              right: '-64px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 20,
            }}>
              <span style={{
                fontSize: '9px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                writingMode: 'vertical-lr',
                fontWeight: 600,
              }}>
                Scroll
              </span>
              <div style={{
                width: '1px',
                height: '48px',
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                animation: 'scrollPulse 2s ease-in-out infinite',
              }} />
            </div>

            {/* Profile image */}
            <div style={{
              position: 'relative',
              width: '17rem',
              height: '20rem',
              borderRadius: '1.5rem',
              overflow: 'hidden',
            }}>
              {/* Glow behind */}
              <div style={{
                position: 'absolute',
                inset: '-1rem',
                background: 'radial-gradient(ellipse, var(--accent-border) 0%, transparent 70%)',
                borderRadius: '2rem',
                zIndex: -1,
                animation: 'pulseGlow 3s ease-in-out infinite',
              }} />
              <img
                src={profileImage}
                alt="Roshan"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Bottom fade */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, var(--bg-primary))',
                pointerEvents: 'none',
              }} />
              {/* Ring */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.5rem',
                boxShadow: 'inset 0 0 0 1px var(--accent-border)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
            fontWeight: 600,
          }}>My Intro</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}>About Me</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1.5rem 1.25rem',
                  borderRadius: '1.125rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  width: '148px',
                  transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(168, 85, 247, 0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>{stat.icon}</div>
                <span style={{ fontSize: '1.625rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </span>
                <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '0.25rem', textAlign: 'center', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontSize: '0.9375rem',
              maxWidth: '48ch',
            }}>
              Passionate about creating elegant solutions to complex problems. With over 1 year of experience in full-stack development, I specialize in building scalable web applications that balance performance with user experience.
            </p>
            <p style={{
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              fontSize: '0.9375rem',
              maxWidth: '48ch',
            }}>
              I am constantly learning and adapting to new technologies to deliver the best possible results for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
            fontWeight: 600,
          }}>My Abilities</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}>My Experience</h2>
        </div>

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            borderRadius: '1.25rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            padding: '2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Code2 style={{ width: '1.125rem', height: '1.125rem', color: 'var(--accent)' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Frontend & Backend
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.25rem 2rem',
            }}>
              {skills.map((skill, i) => (
                <a
                  key={i}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.625rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--border)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ color: 'var(--accent)', opacity: 0.7, display: 'flex', flexShrink: 0, transition: 'opacity 0.2s' }}>
                    {skill.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{skill.level}</span>
                  </div>
                  <ExternalLink style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    color: 'var(--text-muted)',
                    opacity: 0,
                    flexShrink: 0,
                    transition: 'opacity 0.2s',
                  }} className="skill-ext" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
            fontWeight: 600,
          }}>Get in touch</p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}>Contact Me</h2>
        </div>

        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Write me your project
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Name', type: 'text', placeholder: 'Insert your name' },
              { label: 'Mail', type: 'email', placeholder: 'Insert your email' },
            ].map(({ label, type, placeholder }) => (
              <div key={label} style={{ position: 'relative' }}>
                <label style={{
                  position: 'absolute',
                  top: '-9px',
                  left: '12px',
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  background: 'var(--card-bg)',
                  padding: '0 4px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  zIndex: 1,
                }}>
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 500,
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = 'var(--accent-border)';
                    e.target.style.boxShadow = '0 0 0 3px var(--accent-subtle)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            ))}

            {/* Textarea */}
            <div style={{ position: 'relative' }}>
              <label style={{
                position: 'absolute',
                top: '-9px',
                left: '12px',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                background: 'var(--card-bg)',
                padding: '0 4px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                zIndex: 1,
              }}>
                Project
              </label>
              <textarea
                placeholder="Write your project"
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  outline: 'none',
                  resize: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'var(--accent-border)';
                  e.target.style.boxShadow = '0 0 0 3px var(--accent-subtle)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Submit button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '100px',
                background: 'var(--accent)',
                border: 'none',
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Mail className="w-4 h-4" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            © 2024 Roshan. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        /* Show ExternalLink on skill row hover */
        a:hover .skill-ext { opacity: 1 !important; }
        a:hover span[style*="opacity: 0.7"] { opacity: 1 !important; }

        /* Responsive */
        @media (max-width: 640px) {
          [style*="left: '-60px'"], [style*="right: '-64px'"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioHero;