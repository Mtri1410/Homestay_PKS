import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Facebook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-curve"></div>
      
      <div className="container footer-grid">
        {/* Branding & Socials */}
        <div>
          <div className="footer-logo">
            GenX <span>PKS</span>
          </div>
          <p className="footer-desc">
            A premium mountain homestay operated by the GenX PKS Company. We specialize in creating high-end, cozy retreat experiences nestled deep within natural pine forests and majestic mountain valleys.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li className="footer-link-item">
              <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('hero')}>Home</span>
            </li>
            <li className="footer-link-item">
              <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('about')}>About Us</span>
            </li>
            <li className="footer-link-item">
              <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('rooms')}>Our Cabins</span>
            </li>
            <li className="footer-link-item">
              <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('dining')}>Dining</span>
            </li>
            <li className="footer-link-item">
              <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('wellness')}>Wellness Spa</span>
            </li>
            <li className="footer-link-item">
              <span className="footer-link" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('blog')}>Blog & Guides</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-col-title">Get In Touch</h4>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={20} />
              <div className="contact-item-text">
                <strong>GenX PKS Head Office:</strong><br />
                76 C Aulyah Road, Da Lat City,<br />
                Lam Dong Province, Vietnam
              </div>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <div className="contact-item-text">
                +84 987 654 321
              </div>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <div className="contact-item-text">
                contact@genxpks.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>
          &copy; {currentYear} GenX PKS Company. All rights reserved.
        </div>
        <div>
          Privacy Policy &bull; Terms of Service &bull; Sitemap
        </div>
      </div>
    </footer>
  );
}
