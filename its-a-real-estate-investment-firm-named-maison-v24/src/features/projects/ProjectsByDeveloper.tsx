
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Phone } from 'lucide-react';
import './ProjectsByDeveloper.css';

interface Project {
  id: string;
  developer: string;
  developerPhone: string;
  projectName: string;
  location: string;
  phase: string;
  type: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  status: string;
  deliveryDate: string;
}

const ProjectsByDeveloper: React.FC = () => {
  const [filterLocation, setFilterLocation] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      developer: 'Emaar Properties',
      developerPhone: '01114693451',
      projectName: 'Uptown Cairo - Fountain Side',
      location: 'New Cairo',
      phase: 'Uptown',
      type: 'Apartment',
      price: 21000000,
      area: 65,
      bedrooms: 3,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Fully Finished',
      deliveryDate: 'Delivered'
    },
    {
      id: '2',
      developer: 'Palm Hills Development',
      developerPhone: '01030959365',
      projectName: 'Capital Gardens Standalone',
      location: 'New Cairo',
      phase: 'Capital Gardens',
      type: 'Standalone Villa',
      price: 37500000,
      area: 620,
      bedrooms: 6,
      bathrooms: 7,
      image: 'https://images.unsplash.com/photo-1564078518343-471b95b48d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Core & Shell',
      deliveryDate: '2027'
    }
  ];

  const filteredProjects = projects.filter(p => 
    filterLocation === 'all' || p.location === filterLocation
  );

  return (
    <section className="projects-by-developer-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Projects by Developer</h2>
          <p>Explore premium developments from leading real estate companies</p>
        </motion.div>

        <div className="projects-filters">
          <select onChange={(e) => setFilterLocation(e.target.value)} value={filterLocation}>
            <option value="all">All Locations</option>
            <option value="New Cairo">New Cairo</option>
            <option value="North Coast">North Coast</option>
          </select>
        </div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} className="project-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="project-image">
                <img src={project.image} alt={project.projectName} />
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
              </div>
              <div className="project-content">
                <h3>{project.projectName}</h3>
                <div className="project-location"><MapPin size={16} /><span>{project.location}</span></div>
                <div className="project-details">
                  <span><Bed size={16} /> {project.bedrooms} Beds</span>
                  <span><Bath size={16} /> {project.bathrooms} Baths</span>
                  <span><Square size={16} /> {project.area} m²</span>
                </div>
                <div className="project-price">EGP {project.price.toLocaleString()}</div>
                <a href={`tel:${project.developerPhone}`} className="contact-developer">
                  <Phone size={16} /> Contact {project.developer}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsByDeveloper;
