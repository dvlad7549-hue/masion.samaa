
import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Calendar, Award, Users, Phone } from 'lucide-react';
import './DeveloperCard.css';

interface Developer {
  id: string;
  name: string;
  logo: string;
  established: string;
  projects: string;
  locations: string[];
  description: string;
  phone: string;
  email: string;
  awards: string[];
}

interface DeveloperCardProps {
  developer: Developer;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <motion.div 
      className="developer-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="developer-header">
        <div className="developer-logo">
          <img src={developer.logo} alt={developer.name} />
        </div>
        <div className="developer-info">
          <h3>{developer.name}</h3>
          <div className="developer-meta">
            <span className="meta-item">
              <Calendar size={16} />
              Est. {developer.established}
            </span>
            <span className="meta-item">
              <Building size={16} />
              {developer.projects} Projects
            </span>
          </div>
        </div>
      </div>

      <div className="developer-content">
        <p className="developer-description">{developer.description}</p>
        
        <div className="developer-locations">
          <h4>Available Locations:</h4>
          <div className="locations-grid">
            {developer.locations.map((location, index) => (
              <span key={index} className="location-badge">
                <MapPin size={14} />
                {location}
              </span>
            ))}
          </div>
        </div>

        <div className="developer-awards">
          <h4>Awards & Recognition:</h4>
          <ul>
            {developer.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>

        <div className="developer-contact">
          <a href={`tel:${developer.phone}`} className="contact-btn phone-btn">
            <Phone size={18} />
            Call Now
          </a>
          <span className="contact-label">Available 24/7</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperCard;
