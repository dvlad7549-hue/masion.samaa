
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Square, MapPin, Calendar, Tag, Phone, Mail } from 'lucide-react';
import './PropertyDetail.css';

interface PropertyDetailProps {
  propertyId: string;
  onClose: () => void;
}

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
  },
  {
    id: '3',
    title: 'Clubside Studio + G',
    location: 'Taj City, Clubside',
    price: 1800000,
    area: 76,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Studio',
    image: 'https://images.unsplash.com/photo-1595927522701-7b96b94e1b9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'Core and Shell',
    phase: 'Clubside',
    floor: 'Ground',
    finishing: 'Core and shell'
  },
  {
    id: '4',
    title: 'Zone T Twinhouse',
    location: 'Taj City, Zone T',
    price: 30000000,
    area: 387,
    bedrooms: 5,
    bathrooms: 4,
    type: 'Twinhouse',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'Fully Finished',
    phase: 'Zone T',
    floor: 'G+1+Roof',
    finishing: 'Fully finished + AC + Furniture + KC'
  },
  {
    id: '5',
    title: 'Oragami Garden Townhouse',
    location: 'Taj City, Oragami Garden',
    price: 9500000,
    area: 175,
    bedrooms: 3,
    bathrooms: 3,
    type: 'Townhouse',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'Core and Shell',
    phase: 'Oragami Garden',
    floor: 'G+1+Roof',
    finishing: 'Core and shell'
  },
  {
    id: '6',
    title: 'Orgami Golf Standalone',
    location: 'Taj City, Orgami Golf',
    price: 7000000,
    area: 175,
    bedrooms: 4,
    bathrooms: 3,
    type: 'Standalone',
    image: 'https://images.unsplash.com/photo-1564078518343-471b95b48d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'Core and Shell',
    phase: 'Orgami Golf',
    floor: 'G+1+Roof',
    finishing: 'Core and shell'
  }
];

const PropertyDetail: React.FC<PropertyDetailProps> = ({ propertyId, onClose }) => {
  const property = properties.find(p => p.id === propertyId);

  if (!property) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="property-detail-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="property-detail-container"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="property-detail-content">
            <div className="property-detail-image">
              <img src={property.image} alt={property.title} />
            </div>

            <div className="property-detail-info">
              <h2 className="property-title">{property.title}</h2>

              <div className="property-location">
                <MapPin size={20} />
                <span>{property.location}</span>
              </div>

              <div className="property-price">
                EGP {property.price.toLocaleString()}
              </div>

              <div className="property-specs">
                <div className="spec-item">
                  <Bed size={20} />
                  <div>
                    <span className="spec-label">Bedrooms</span>
                    <span className="spec-value">{property.bedrooms}</span>
                  </div>
                </div>

                <div className="spec-item">
                  <Bath size={20} />
                  <div>
                    <span className="spec-label">Bathrooms</span>
                    <span className="spec-value">{property.bathrooms}</span>
                  </div>
                </div>

                <div className="spec-item">
                  <Square size={20} />
                  <div>
                    <span className="spec-label">Area</span>
                    <span className="spec-value">{property.area} m²</span>
                  </div>
                </div>
              </div>

              <div className="property-additional-info">
                <div className="info-row">
                  <span className="info-label">Property Type</span>
                  <span className="info-value">{property.type}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Status</span>
                  <span className="info-value">{property.status}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phase</span>
                  <span className="info-value">{property.phase}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Floor</span>
                  <span className="info-value">{property.floor}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Finishing</span>
                  <span className="info-value">{property.finishing}</span>
                </div>
              </div>

              <div className="property-actions">
                <button className="btn-primary">
                  <Phone size={18} />
                  Contact Agent
                </button>
                <button className="btn-secondary">
                  <Mail size={18} />
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropertyDetail;
