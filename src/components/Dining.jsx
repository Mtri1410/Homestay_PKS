import React from 'react';

export default function Dining() {
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
          <span className="section-tag">Taste of PKS</span>
          <h2 className="section-title">Restaurant & Bar</h2>
          <p className="dining-desc">
            Savor the rich culinary heritage of the mountain region at our signature restaurant. We focus on farm-to-table cuisine, sourcing organic vegetables from local farmers, premium mountain meats, and crafting bespoke dishes that warm your soul.
          </p>
          <p className="dining-desc">
            At night, gather at the GenX lounge bar to enjoy hand-selected red wines, local herbal teas, or custom cocktails mixed with mountain pine and berries, all while sitting by our open fireplace overlooking the starlit valley.
          </p>
          <a href="#about" className="btn btn-outline" style={{ marginTop: '10px' }}>
            Discover Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
