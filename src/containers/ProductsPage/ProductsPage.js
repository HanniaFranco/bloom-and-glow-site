import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function ProductsPage() {
  return (
    <>
      <Header />
      <div className="products-container">
        <div className="welcome-section">
          <p className="home-title">NUESTROS PRODUCTOS</p>
          <p className="home-text">Todas las Categorías</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;