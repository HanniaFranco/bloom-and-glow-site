import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import image4 from '../../assets/images/product_4.jpg';
import image5 from '../../assets/images/product_5.jpg';
import image6 from '../../assets/images/product_6.jpg';
import image7 from '../../assets/images/product_7.jpg';
import image8 from '../../assets/images/product_8.jpg';
import image9 from '../../assets/images/product_9.jpg';
import image10 from '../../assets/images/product_10.jpg';
import image11 from '../../assets/images/product_11.jpg';
import image12 from '../../assets/images/product_12.jpg';
import image13 from '../../assets/images/product_13.jpg';
import image14 from '../../assets/images/product_14.png';
import image15 from '../../assets/images/product_15.png';

function ProductsPage() {
    const AllProducts = [
        {
          id: 4,
          image: image4,
          name: 'Vestido de Verano Rosa Corte Largo con Cuello Cuadrado',
          price: "200.00",
        },
        {
          id: 5,
          image: image5,
          name: 'Vestido Colagante Casual Cherry con Aretes a Juego',
          price: "210.00",
        },
        {
          id: 6,
          image: image6,
          name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
          price: "320,00",
        },
        {
            id: 7,
            image: image7,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 8,
            image: image8,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 9,
            image: image9,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 10,
            image: image10,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 11,
            image: image11,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 12,
            image: image12,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 13,
            image: image13,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 14,
            image: image14,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
        {
            id: 15,
            image: image15,
            name: 'Vestido de Maquillaje Browny Eyes Seis Tonos acabado Glowy',
            price: "320,00",
        },
      ];


  return (
    <>
      <Header />
      <div className="products-container">
        <div className="welcome-section">
          <p className="home-title">NUESTROS PRODUCTOS</p>
          <p className="home-text">Todas las Categorías</p>
        </div>

        <div className="products-grid">
          {AllProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;