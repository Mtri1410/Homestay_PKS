import React from 'react';

export default function Wellness() {
  return (
    <section id="wellness" className="section-padding bg-light">
      <div className="container wellness-grid">
        <div className="wellness-text">
          <span className="section-tag">Wellness & Spa</span>
          <h2 className="section-title">Mission: Revival</h2>
          <p className="wellness-desc">
            Restore harmony to your body, mind, and spirit at our boutique spa. We offer a curated menu of treatments using natural local herbs, hot volcanic stones, and pure essential oils. Let our professional therapists guide you into a state of absolute relaxation.
          </p>
          <p className="wellness-desc">
            From cleansing herbal baths to revitalizing deep tissue massages, every detail is engineered to relieve stress and re-energize your spirit during your mountain escape.
          </p>
          <a href="#about" className="btn btn-outline" style={{ marginTop: '10px' }}>
            Learn More
          </a>
        </div>

        <div className="wellness-images">
          <div className="wellness-img-tall">
            <img 
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80" 
              alt="Spa incense and candles" 
            />
          </div>
          <div className="wellness-img-short">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" 
              alt="Massage therapy session" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
