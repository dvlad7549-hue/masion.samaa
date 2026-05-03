
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'Quick Links', links: ['Home', 'Properties', 'Wishlist'] },
    { title: 'Services', links: ['Property Search', 'Investment Advice', 'Legal Support'] },
    { title: 'Contact', links: ['FAQ', 'Terms', 'Privacy Policy'] },
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <h2>Maison Samaa'</h2>
              <span>Real Estate Investment</span>
            </div>
            <p>
              Connecting you with premium real estate opportunities across Egypt's most 
              sought-after locations. Your journey to exceptional property investment starts here.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((group) => (
              <div key={group.title} className="footer-link-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>+20 123 456 7890</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>info@maisonsamaa.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Cairo, Egypt</span>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Maison Samaa'. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
