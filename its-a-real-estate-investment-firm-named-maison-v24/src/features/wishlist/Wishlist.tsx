
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Trash2, MapPin, Bed, Bath, Square } from 'lucide-react';
import './Wishlist.css';

interface WishlistProps {
  wishlistItems: string[];
  addToWishlist: (id: string) => void;
}

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlistItems, addToWishlist }) => {
  const properties: Property[] = [
    {
      id: '1',
      title: 'Taj Sultan - 3 Bedroom',
      location: 'Taj City, Sultan Phase',
      price: 13000000,
      area: 198,
      bedrooms: 3,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1564078518343-471b95b48d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Park Residence - 1 Bedroom',
      location: 'Taj City, Park Residence',
      price: 6500000,
      area: 85,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const wishlistedProperties = properties.filter(p => wishlistItems.includes(p.id));

  return (
    <section className="wishlist-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Your Wishlist</h2>
          <p>{wishlistItems.length} properties saved for later</p>
        </motion.div>

        {wishlistedProperties.length > 0 ? (
          <motion.div
            className="wishlist-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {wishlistedProperties.map((property) => (
              <motion.div
                key={property.id}
                className="wishlist-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="wishlist-image">
                  <img src={property.image} alt={property.title} />
                  <button
                    className="remove-btn"
                    onClick={() => addToWishlist(property.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="wishlist-content">
                  <h3>{property.title}</h3>
                  <div className="location">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>
                  <div className="details">
                    <span><Bed size={14} /> {property.bedrooms} Beds</span>
                    <span><Bath size={14} /> {property.bathrooms} Baths</span>
                    <span><Square size={14} /> {property.area} m²</span>
                  </div>
                  <div className="price">EGP {property.price.toLocaleString()}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="empty-wishlist"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart size={64} />
            <h3>Your wishlist is empty</h3>
            <p>Start adding properties to your wishlist by clicking the heart icon on property cards.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
