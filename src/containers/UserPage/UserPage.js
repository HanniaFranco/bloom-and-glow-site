import React from 'react';
import './UserPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function UserPage() {
    return (
      <>
        <Header />
        <div className="products-container">
          <h1 className="products-title">CREAR CUENTA</h1>
        </div>
        <Footer />
      </>
    );
  }
  
  export default UserPage;