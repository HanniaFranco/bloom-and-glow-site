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
      image: image1,
      name: 'Playera Strawberry',
      description: 'Camiseta de cuello redondo de manga corta, ideal para verano.',
      price: 200.00,
    },
    {
      image: image2,
      name: 'Paleta de Maquillaje',
      description: 'Paleta de sombras de ojos con brillo mate, 9 sombras.',
      price: 150.0,
    },
    {
      image: image3,
      name: 'Collar Cherry',
      description: 'Set de collar y pendientes de cereza encantador, tres piezas.',
      price: 99.90,
    },
  ];

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="welcome-section">
          <h1 className="home-title">BLOOM & GLOW</h1>
          <p className="home-text">Deja que tu belleza florezca y brille</p>
        </div>
        
        <h2 className="products-title">Productos Destacados</h2>
        <div className="products-section">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
  
        <Footer />
      </div>
    </>
  );
}

export default Home;