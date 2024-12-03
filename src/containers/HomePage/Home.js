import React from 'react';
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/images/product_1.png';
import image2 from '../../assets/images/product_2.png';
import image3 from '../../assets/images/product_3.png';

function Home() {
  const products = [
    {
      id: 1,
      image: image1,
      name: 'Playera de Strawberry con Estampado Ideal para Verano',
      price: "200.00",
    },
    {
      id: 2,
      image: image2,
      name: 'Collar Colagante Casual Cherry con Aretes a Juego',
      price: "210.00",
    },
    {
      id: 3,
      image: image3,
      name: 'Paleta de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
      price: "320,00",
    },
  ];

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="welcome-section">
          <p className="home-title">BLOOM & GLOW</p>
          <p className="home-text">Deja que tu belleza florezca y brille</p>
        </div>
        
        <h2 className="products-title">Productos Destacados</h2>
        <div className="products-section">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
  
        <Footer />
      </div>
    </>
  );
}

export default Home