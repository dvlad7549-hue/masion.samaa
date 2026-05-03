
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Properties from './features/properties/Properties';
import Wishlist from './features/wishlist/Wishlist';
import Developers from './features/developers/Developers';
import ProjectsByDeveloper from './features/projects/ProjectsByDeveloper';
import ChatBot from './features/chatbot/ChatBot';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);

  const addToWishlist = (propertyId: string) => {
    setWishlistItems(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="app">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Properties 
              addToWishlist={addToWishlist} 
              wishlistItems={wishlistItems}
            />
            <Developers currentView={currentView} setCurrentView={setCurrentView} />
            <ProjectsByDeveloper currentView={currentView} setCurrentView={setCurrentView} />
          </>
        )}
        {currentView === 'wishlist' && (
          <Wishlist 
            wishlistItems={wishlistItems} 
            addToWishlist={addToWishlist}
          />
        )}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
