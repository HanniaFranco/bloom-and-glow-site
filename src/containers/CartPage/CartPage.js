import React from 'react';
import './CartPage.module.css';
import SimpleHeader from '../../components/SimpleHeader/SimpleHeader';
import Footer from '../../components/Footer/Footer';

function CartPage() {
    return (
      <>
        <SimpleHeader />
        <div className="products-container">
          <h1 className="products-title">NUESTROS CARRITO</h1>
        </div>
        <Footer />
      </>
    );
  }
  
  export default CartPage;