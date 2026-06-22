import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    'Breathtaking Mountain Views',
    'Heated Cozy Fireplaces',
    'Local Organic Dining',
    'Premium Wellness Spa',
    'Guided Trekking & Tours',
    'High-Speed Complimentary Wi-Fi'
  ];

  return (
    <section id="about" className="section-padding container">
      <div className="about-grid">
        <div className="about-text">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Enjoy Vacations With GenX PKS Homestay</h2>
          <p className="about-desc">
            Welcome to GenX PKS Homestay, where modern luxury meets the rustic charm of the mountains. Our boutique homestay is designed for travelers who appreciate the serenity of nature without sacrificing the comforts of home. We offer fully equipped cabins and suites, bespoke dining options, and warm hospitality.
          </p>
          <p className="about-desc" style={{ marginBottom: '30px' }}>
            Whether you want to witness the misty sunrise over the valleys, enjoy a cup of fresh locally sourced coffee, or unwind by a bonfire, we provide an unforgettable escape.
          </p>
          
          <div className="about-features">
            {features.map((feature, idx) => (
              <div key={idx} className="about-feature-item">
                <CheckCircle2 size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#rooms" className="btn btn-primary">Choose Your Room</a>
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
