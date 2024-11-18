import React from 'react';
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import image1 from '../../assets/images/product_1.png';
import image2 from '../../assets/images/product_2.png';
import image3 from '../../assets/images/product_3.png';

function Nav() {
  return (
    <nav className="navbar">
      <h2 className="logo">Bloom & Glow</h2>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Tienda</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Bloom & Glow. All Rights Reserved.</p>
    </footer>
  );
}

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
    <div className="home-container">
      <Nav />
      
      <div className="welcome-section">
        <h1 className="home-title">BIENVENID@S A BLOOM & GLOW</h1>
        <p className="home-text">Tu destino de moda y belleza, ¡Deja que tu belleza florezca y brille!</p>
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
  );
}

export default Home;