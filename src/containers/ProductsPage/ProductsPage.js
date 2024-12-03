import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function ProductsPage() {
  return (
    <>
      <Header />
      <div className="products-container">
        <h1 className="products-title">NUESTROS PRODUCTOS</h1>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;