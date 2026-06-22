import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Blog({ t }) {
  const posts = [
    {
      id: 1,
      date: t.guestsCount === 'Khách' ? 'Ngày 20 tháng 6 năm 2026' : 'June 20, 2026',
      title: t.post1Title,
      desc: t.post1Desc,
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      date: t.guestsCount === 'Khách' ? 'Ngày 15 tháng 5 năm 2026' : 'May 15, 2026',
      title: t.post2Title,
      desc: t.post2Desc,
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      date: t.guestsCount === 'Khách' ? 'Ngày 28 tháng 4 năm 2026' : 'April 28, 2026',
      title: t.post3Title,
      desc: t.post3Desc,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="blog" className="section-padding container">
      <div className="blog-header">
        <span className="section-tag">{t.blogTag}</span>
        <h2 className="section-title">{t.blogTitle}</h2>
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
                {t.blogCta} <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
