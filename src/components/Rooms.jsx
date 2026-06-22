import React from 'react';
import { Maximize2, Users, Star, Calendar } from 'lucide-react';

export default function Rooms({ onBookSelect, t }) {
  const rooms = [
    {
      id: 'luxe-family-suite',
      title: t.roomLuxeFamily,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      size: '55 m²',
      guests: `4 ${t.guestsCount}`,
      rating: `5.0 (28 ${t.reviewsCount})`,
      price: t.guestsCount === 'Khách' ? '3.000.000 ₫' : '$120',
      layout: 'large'
    },
    {
      id: 'twin-cozy-suite',
      title: t.roomTwinCozy,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      size: '35 m²',
      guests: `2 ${t.guestsCount}`,
      rating: `4.9 (18 ${t.reviewsCount})`,
      price: t.guestsCount === 'Khách' ? '2.000.000 ₫' : '$80',
      layout: 'small'
    },
    {
      id: 'deluxe-double-room',
      title: t.roomDeluxeDouble,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
      size: '42 m²',
      guests: `2 ${t.guestsCount}`,
      rating: `4.8 (24 ${t.reviewsCount})`,
      price: t.guestsCount === 'Khách' ? '2.400.000 ₫' : '$95',
      layout: 'large'
    },
    {
      id: 'light-single-room',
      title: t.roomLightSingle,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      size: '25 m²',
      guests: `1 ${t.guestsCount}`,
      rating: `4.7 (12 ${t.reviewsCount})`,
      price: t.guestsCount === 'Khách' ? '1.400.000 ₫' : '$55',
      layout: 'small'
    }
  ];

  return (
    <section id="rooms" className="section-padding bg-light">
      <div className="container">
        <div className="rooms-header">
          <div>
            <span className="section-tag">{t.roomsTag}</span>
            <h2 className="section-title">{t.roomsTitle}</h2>
          </div>
          <p className="rooms-header-right">{t.roomsDesc}</p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => {
            const isLarge = room.layout === 'large';
            return (
              <div 
                key={room.id} 
                className={isLarge ? 'room-card-large' : 'room-card-small'}
              >
                <div className="room-img-container">
                  <img src={room.image} alt={room.title} />
                </div>
                
                <div className="room-info">
                  <h3 className="room-title">{room.title}</h3>
                  
                  <div className="room-meta">
                    <div className="room-meta-item">
                      <Maximize2 size={16} />
                      <span>{room.size}</span>
                    </div>
                    <div className="room-meta-item">
                      <Users size={16} />
                      <span>{room.guests}</span>
                    </div>
                    <div className="room-meta-item">
                      <Star size={16} fill="#C5A880" stroke="#C5A880" />
                      <span>{room.rating}</span>
                    </div>
                  </div>

                  <div className="room-price-book">
                    <div className="room-price">
                      {room.price} <span>{t.perNight}</span>
                    </div>
                    <button 
                      className="room-book-link"
                      onClick={() => onBookSelect(room.title)}
                      title={t.bookNow}
                    >
                      <Calendar size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
