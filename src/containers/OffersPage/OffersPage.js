import React from 'react';
import './OffersPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';

function OffersPage() {
    const OffersProducts = [
        {
          id: 40,
          image: 'https://i.pinimg.com/736x/49/c4/85/49c485abd8a1b3f7808663ce1abd51ca.jpg',
          name: 'Conjunto Beige and Brown con Blusa Sin Mangas y Jeans',
          price: "200.99",
        },
        {
          id: 41,
          image: 'https://i.pinimg.com/736x/62/9a/bb/629abbc7ea36d70f59d267842773202e.jpg',
          name: 'Conjunto White and Blue con Blusa Blanca y Jeans',
          price: "190.99",
        },
        {
          id: 42,
          image: 'https://i.pinimg.com/736x/4b/bb/6e/4bbb6ebf0f20f58ab427587715873120.jpg',
          name: 'Conjunto Beige and Black Semiformal con Chaleco',
          price: "192,99",
        },
        {
            id: 43,
            image: 'https://i.pinimg.com/736x/9f/96/78/9f96784441975bd8cb42068a7346ab8d.jpg',
            name: 'Conjunto Brown and Blue Casual con Blusa y Jeans',
            price: "120,99",
        },
        {
            id: 44,
            image: 'https://i.pinimg.com/736x/ba/b1/f3/bab1f36ceed9c9c4448473a349b72c08.jpg',
            name: 'Vestido Estampado Colors Semiformal Colorido',
            price: "150,99",
        },
        {
            id: 45,
            image: 'https://i.pinimg.com/736x/4e/79/c7/4e79c72038dd2c273c6f8183142051de.jpg',
            name: 'Vestido Forest Green Elegante para Verano',
            price: "169,99",
        },
        {
            id: 46,
            image: 'https://i.pinimg.com/736x/4a/03/e9/4a03e9e6e9e3c9757be2010ac8934fd3.jpg',
            name: 'Vestido Pink Flower Corto Casual con Estampado',
            price: "120,99",
        },
        {
            id: 47,
            image: 'https://i.pinimg.com/736x/2b/2a/ff/2b2affc6b5277e085199ee22459b8324.jpg',
            name: 'Vestido Royar Estampado de Flores Semiformal Corto',
            price: "130,99",
        },
      ];

    return (
      <>
        <Header />
        <div className="offers-container">
        <div className="welcome-section">
          <p className="home-title">PURPLE DAY</p>
          <p className="home-text">Hasta 50% de Descuento</p>
        </div>
        <h2 className="products-title">Descuentos PURPLE DAY</h2>
        <div className="products-grid">
            {OffersProducts.map((product) => (
            <ProductCard 
             key={product.id} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
            isOfferPage={true}  
            />
        ))}
        </div>

        
      </div>
        <Footer />
      </>
    );
  }
  
  export default OffersPage;