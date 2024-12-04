import React, { useState } from 'react'; // Importamos UseState aquí
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/images/product_1.png';
import image2 from '../../assets/images/product_2.png';
import image3 from '../../assets/images/product_3.png';
import ProductPopup from "../../components/ProductPopup/ProductPopup";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log("Producto seleccionado:", product); 
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

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
      name: 'Vestido de Verano Rosa Corte Largo Estampado Liso con Mangas',
      price: "210.00",
    },
    {
      id: 3,
      image: image3,
      name: 'Conjunto de Verano Playera Manga Larga Blanca con Short',
      price: "320.00",
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onClick={() => handleProductClick(product)} 
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={closePopup} />
      )}
      <Footer />
    </>
  );
}

export default Home;
