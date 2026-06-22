import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      date: 'June 20, 2026',
      title: 'Main Guest Opening: Wellness Resort',
      desc: 'We are thrilled to announce the opening of our expanded outdoor thermal pool and herbal bath deck for all guests starting this summer.',
      image: 'https://images.unsplash.com/photo-1551632811-561730d1e4a6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      date: 'May 15, 2026',
      title: 'Top 5 Mountain Trekking Trails in Da Lat',
      desc: 'Discover the best hidden trails, pine forest walks, and misty mountain viewpoints near our homestay, curated by our expert guides.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      date: 'April 28, 2026',
      title: 'Sipping Local Coffee: Sapa Beans Tour',
      desc: 'Explore the fascinating process of growing, harvesting, and roasting mountain coffee beans. Complimentary booking available for our guests.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="blog" className="section-padding container">
      <div className="blog-header">
        <span className="section-tag">Blog & Guide</span>
        <h2 className="section-title">Latest From Our Blog</h2>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-img-container">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta-date">{post.date}</div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-desc">{post.desc}</p>
              <a href="#blog" className="blog-link">
                Read Article <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
