
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import './Properties.css';

interface PropertiesProps {
  addToWishlist: (id: string) => void;
  wishlistItems: string[];
}

const Properties: React.FC<PropertiesProps> = ({ addToWishlist, wishlistItems }) => {
  const properties = [
    {
      id: '1',
      title: 'Taj Sultan - 3 Bedroom',
      location: 'Taj City, Sultan Phase',
      price: 13000000,
      area: 198,
      bedrooms: 3,
      bathrooms: 3,
      type: 'Villa',
      image: 'https://images.unsplash.com/photo-1564078518343-471b95b48d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Fully Finished',
      phase: 'Taj Sultan',
      floor: '3rd',
      finishing: 'Fully finished'
    },
    {
      id: '2',
      title: 'Park Residence - 1 Bedroom',
      location: 'Taj City, Park Residence',
      price: 6500000,
      area: 85,
      bedrooms: 1,
      bathrooms: 1,
      type: 'Apartment',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Fully Finished',
      phase: 'Park Residence',
      floor: 'RTM',
      finishing: 'Fully finished + AC + KC'
    }
  ];

  return (
    <section className="properties-section" id="properties">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Properties</h2>
          <p>Discover our premium collection of real estate properties</p>
        </motion.div>

        <motion.div 
          className="properties-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isWishlisted={wishlistItems.includes(property.id)}
              addToWishlist={addToWishlist}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;
