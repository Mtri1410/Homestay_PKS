import React from 'react';

export default function Wellness({ t }) {
  return (
    <section id="wellness" className="section-padding bg-light">
      <div className="container wellness-grid">
        <div className="wellness-text">
          <span className="section-tag">{t.wellnessTag}</span>
          <h2 className="section-title">{t.wellnessTitle}</h2>
          <p className="wellness-desc">{t.wellnessDesc1}</p>
          <p className="wellness-desc">{t.wellnessDesc2}</p>
          <a href="#about" className="btn btn-outline" style={{ marginTop: '10px' }}>
            {t.wellnessCta}
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
