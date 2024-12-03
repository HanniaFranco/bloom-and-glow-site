import React from 'react';
import './OffersPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function OffersPage() {
    return (
      <>
        <Header />
        <div className="offers-container">
        <div className="welcome-section">
          <p className="home-title">PURPLE DAY</p>
          <p className="home-text">Hasta 50% de Descuento</p>
        </div>
      </div>
        <Footer />
      </>
    );
  }
  
  export default OffersPage;