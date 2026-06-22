import React, { useState, useEffect } from 'react';

export default function Hero({ onBookClick, t }) {
  const slides = [
    'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1600&q=80'
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="hero">
      {/* Background Slideshow Layers */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === activeSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide}')` }}
        />
      ))}

      <div className="hero-overlay"></div>
      
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">{t.heroTitle}</h1>
        <div className="hero-subtitle">{t.heroSubtitle}</div>
        <p className="hero-desc">{t.heroDesc}</p>
        <button className="btn btn-primary" onClick={onBookClick}>{t.heroCta}</button>
        
        <div className="hero-spinner-container">
          <div className="hero-spinner">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path 
                id="textPath" 
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
                fill="none" 
              />
              <text fill="#C5A880" fontSize="7.8" fontWeight="600" letterSpacing="2">
                <textPath href="#textPath">
                  {t.heroScroll}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
