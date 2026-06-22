import React from 'react';

const InstaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Instagram({ t }) {
  const images = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80', // canoeing
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80', // cocktail bar
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80', // boutique lobby
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80', // red wine cheers
    'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=400&q=80'  // outdoor deck dining
  ];

  return (
    <section className="instagram-section container">
      <div className="instagram-header">
        <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <InstaIcon size={16} /> {t.instaTag}
        </span>
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginTop: '8px' }}>
          @genx.pks.homestay
        </h2>
      </div>

      <div className="instagram-grid">
        {images.map((imgUrl, index) => (
          <div key={index} className="instagram-item">
            <img src={imgUrl} alt={`Guest experience at GenX PKS Homestay ${index + 1}`} />
            <div className="instagram-overlay">
              <InstaIcon size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
