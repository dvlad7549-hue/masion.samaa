
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperCard from './DeveloperCard';
import './Developers.css';

interface DevelopersProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Developers: React.FC<DevelopersProps> = ({ currentView, setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('all');

  const developers = [
    {
      id: '1',
      name: 'Emaar Properties',
      logo: 'https://via.placeholder.com/100x100/1a3a6c/FFFFFF?text=Emaar',
      established: '2000',
      projects: '50+',
      locations: ['New Cairo', 'North Coast', 'New Alamein', 'Mokattam'],
      description: 'Emaar is one of the world\'s largest real estate developers, known for creating iconic communities and mega-projects.',
      phone: '01114693451',
      email: 'info@emaar.eg',
      awards: ['World\'s Best Developer 2023', 'Arabian Business Excellence Award']
    },
    {
      id: '2',
      name: 'Palm Hills Development',
      logo: 'https://via.placeholder.com/100x100/d4af37/FFFFFF?text=PalmHills',
      established: '1998',
      projects: '40+',
      locations: ['New Cairo', 'North Coast', 'October City'],
      description: 'A leading Egyptian real estate developer specializing in premium residential developments.',
      phone: '01030959365',
      email: 'info@palmhills.com',
      awards: ['Best Residential Developer Egypt 2023', 'Luxury Architecture Award']
    }
  ];

  return (
    <section className="developers-section" id="developers">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Premier Developers</h2>
          <p>Partnering with Egypt's most prestigious real estate developers</p>
        </motion.div>

        <motion.div
          className="developers-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {developers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Developers;
