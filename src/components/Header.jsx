import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-info">
            <span>
              <Phone size={14} /> +84 987 654 321
            </span>
            <span>
              <Mail size={14} /> contact@genxpks.com
            </span>
          </div>
          <div className="top-bar-info">
            <span>
              <MapPin size={14} /> Da Lat, Lam Dong, Vietnam
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <a href="#" className="logo">
            GenX <span>PKS</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <span className="nav-link" onClick={() => handleLinkClick('hero')}>Home</span>
            <span className="nav-link" onClick={() => handleLinkClick('about')}>About</span>
            <span className="nav-link" onClick={() => handleLinkClick('rooms')}>Rooms</span>
            <span className="nav-link" onClick={() => handleLinkClick('dining')}>Dining</span>
            <span className="nav-link" onClick={() => handleLinkClick('wellness')}>Wellness</span>
            <span className="nav-link" onClick={() => handleLinkClick('blog')}>Blog</span>
            <button className="btn btn-primary" onClick={onBookClick}>Book Now</button>
          </div>

          {/* Hamburger Menu Icon */}
          <button className="hamburger-btn" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="mobile-sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
      )}
      <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="mobile-sidebar-close" onClick={() => setIsSidebarOpen(false)}>
          <X size={28} />
        </button>
        <div className="mobile-nav-links">
          <span className="mobile-nav-link" onClick={() => handleLinkClick('hero')}>Home</span>
          <span className="mobile-nav-link" onClick={() => handleLinkClick('about')}>About</span>
          <span className="mobile-nav-link" onClick={() => handleLinkClick('rooms')}>Rooms</span>
          <span className="mobile-nav-link" onClick={() => handleLinkClick('dining')}>Dining</span>
          <span className="mobile-nav-link" onClick={() => handleLinkClick('wellness')}>Wellness</span>
          <span className="mobile-nav-link" onClick={() => handleLinkClick('blog')}>Blog</span>
          <button 
            className="btn btn-primary" 
            style={{ marginTop: '20px', width: '100%' }}
            onClick={() => {
              setIsSidebarOpen(false);
              onBookClick();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
