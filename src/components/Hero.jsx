import React from 'react';

export default function Hero({ onBookClick }) {
  return (
    <section 
      id="hero" 
      className="hero" 
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=80')` }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">GenX PKS Homestay</h1>
        <div className="hero-subtitle">More Than A Stay</div>
        <p className="hero-desc">
          Nestled in the breathtaking Sapa-Da Lat mountain range, our premium homestay offers cozy cabins, luxury rooms, warm local fireplaces, and panoramic nature views. Escape the hustle of the city and reconnect with nature in absolute comfort.
        </p>
        <button className="btn btn-primary" onClick={onBookClick}>Discover Your Cabin</button>
        
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
                  • SCROLL DOWN TO EXPLORE • GENX PKS HOMESTAY •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
