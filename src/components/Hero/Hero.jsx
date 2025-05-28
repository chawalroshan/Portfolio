import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';
import profileImage from "../../assets/images/profile.jpg";
import Skills from './Skills';

function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image-container">
            <img
              // src=" "
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
            <div className="status-indicator">
              <div className="status-dot" />
            </div>
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="logo-blue">Roshan</span>
            </h1>
            <h2 className="hero-subtitle">
            Software Engineer
            </h2>
            <p className="hero-description">
              Passionate about creating elegant solutions to complex problems. 
              With over 1 years of experience in full-stack development, 
              I specialize in building scalable web applications.
            </p>

            <div className="cta-container">
              <button 
                className="download-button"
                onClick={() => window.open('images/ROSHAN-CHAWAL-SD-Resume.pdf')}
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
              
              <div className="social-links">
                <a href="https://github.com/" className="social-link">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/roshan-chawal-91270a285/" className="social-link">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:chawalroshan@gmail.com" className="social-link">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

      <Skills />

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;