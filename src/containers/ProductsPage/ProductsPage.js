import React from 'react';
import { Link } from 'react-router-dom';
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
import image1 from '../../assets/images/product_1.png'; //Para Explora por Categorías 
import image3 from '../../assets/images/product_3.png'; //Para Explora por Categorías 

function ProductsPage() {
    const AllProducts = [
        {
          id: 4,
          image: image4,
          name: 'Vestido de Verano Rosa Corte Largo con Cuello Cuadrado',
          price: "250.00",
        },
        {
          id: 5,
          image: image5,
          name: 'Vestido de Verano Peach Casual Estampados Florales',
          price: "299.00",
        },
        {
          id: 6,
          image: image6,
          name: 'Vestido de Verano Beige Corte Largo con Cuello Cuadrado',
          price: "380,00",
        },
        {
            id: 7,
            image: image7,
            name: 'Vestido de Verano Light Yellow Largo Estampado Cuadrado',
            price: "329,00",
        },
        {
            id: 8,
            image: image8,
            name: 'Vestido de Verano Beige Corte Largo Mangas Abombadas',
            price: "350,00",
        },
        {
            id: 9,
            image: image9,
            name: 'Vestido de Verano Light White Corte Largo con Olanes',
            price: "390,00",
        },
        {
            id: 10,
            image: image10,
            name: 'Vestido de Verano Light Green Corte Largo Estampado Floral',
            price: "395,00",
        },
        {
            id: 11,
            image: image11,
            name: 'Vestido de Verano White Corte Largo Corte con Mangas',
            price: "255,00",
        },
        {
            id: 12,
            image: image12,
            name: 'Vestido de Verano White Corte Largo Estampado Floral Rosa',
            price: "210,00",
        },
        {
            id: 13,
            image: image13,
            name: 'Vestido de Verano Light Blue Corte Largo Estampado Azul',
            price: "420,00",
        },
        {
            id: 14,
            image: image14,
            name: 'Vestido de Verano Light Pink Corte Largo Estampado Rosas',
            price: "430,00",
        },
        {
            id: 15,
            image: image15,
            name: 'Vestido de Verano Light Blue Estampado Floral Sin Mangas',
            price: "480,00",
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

        <h2 className="products-title">Vestidos de Verano</h2>
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

        {/* Mostrar las imágenes de las categorías Playeras y Conjuntos */}
        <div className='category-border'>
        <h2 className="products-title">Explora por Categorías</h2>
        <div className="category-section">
        <Link to="/shirts" className="category-card">
              <img src={image1} alt="Playeras" className="category-image" />
              <p className="category-text">PLAYERAS</p>
            </Link>

          {/* Imagen de Conjuntos */}
          <Link to="/sets" className="category-card">
              <img src={image3} alt="Conjuntos" className="category-image" />
              <p className="category-text">CONJUNTOS</p>
            </Link>

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;