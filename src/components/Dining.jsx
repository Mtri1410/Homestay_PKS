import React from 'react';

export default function Dining({ t }) {
  return (
    <section id="dining" className="section-padding container">
      <div className="dining-grid">
        <div className="dining-img-frame">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
            alt="Mountain View Restaurant & Bar at GenX PKS Homestay" 
          />
        </div>

        <div className="dining-text">
          <span className="section-tag">{t.diningTag}</span>
          <h2 className="section-title">{t.diningTitle}</h2>
          <p className="dining-desc">{t.diningDesc1}</p>
          <p className="dining-desc">{t.diningDesc2}</p>
          <a href="#about" className="btn btn-outline" style={{ marginTop: '10px' }}>
            {t.diningCta}
          </a>
        </div>
      </div>
    </section>
  );
}
