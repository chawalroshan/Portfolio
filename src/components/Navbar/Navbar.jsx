import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar({ isDark, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="#" className="logo">
            <span className="logo-blue">Roshan</span>
            {/* <span className="logo-text">Chawal</span> */}
          </a>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button onClick={toggleTheme} className="theme-toggle">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="mobile-menu">
            <button onClick={toggleTheme} className="theme-toggle">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;