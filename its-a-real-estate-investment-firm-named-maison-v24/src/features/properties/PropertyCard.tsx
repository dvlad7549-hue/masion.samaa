
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bed, Bath, Square, MapPin, Calendar, Tag } from 'lucide-react';
import './PropertyCard.css';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    type: string;
    image: string;
    status: string;
    phase: string;
  };
  isWishlisted: boolean;
  addToWishlist: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, isWishlisted, addToWishlist }) => {
  return (
    <motion.div 
      className="property-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className={`status-badge ${property.status.toLowerCase().replace(' ', '-')}`}>
          {property.status}
        </div>
        <motion.button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => addToWishlist(property.id)}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
        </motion.button>
      </div>

      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        
        <div className="property-location">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>

        <div className="property-details">
          <div className="detail-item">
            <Bed size={16} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="detail-item">
            <Bath size={16} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="detail-item">
            <Square size={16} />
            <span>{property.area} m²</span>
          </div>
        </div>

        <div className="property-footer">
          <div className="property-price">
            EGP {property.price.toLocaleString()}
          </div>
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
