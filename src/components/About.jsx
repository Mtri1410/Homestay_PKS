import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About({ t }) {
  const features = [
    t.aboutFeature1,
    t.aboutFeature2,
    t.aboutFeature3,
    t.aboutFeature4,
    t.aboutFeature5,
    t.aboutFeature6
  ];

  return (
    <section id="about" className="section-padding container">
      <div className="about-grid">
        <div className="about-text">
          <span className="section-tag">{t.aboutTag}</span>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="about-desc">{t.aboutDesc1}</p>
          <p className="about-desc" style={{ marginBottom: '30px' }}>{t.aboutDesc2}</p>
          
          <div className="about-features">
            {features.map((feature, idx) => (
              <div key={idx} className="about-feature-item">
                <CheckCircle2 size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#rooms" className="btn btn-primary">{t.aboutRoomCta}</a>
        </div>

        <div className="organic-img-frame">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
            alt="Mountain View from GenX PKS Homestay" 
          />
        </div>
      </div>
    </section>
  );
}
