import React from 'react';
import './OffersPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function OffersPage() {
    return (
      <>
        <Header />
        <div className="products-container">
          <h1 className="products-title">NUESTROS OFERTAS</h1>
        </div>
        <Footer />
      </>
    );
  }
  
  export default OffersPage;