import React from 'react';
import './ShirtsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import bannerShirts from '../../assets/images/banner_shirts.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import image28 from '../../assets/images/product_28.png';
import image29 from '../../assets/images/product_29.png';

function ShirtsPage() {
    const ShirtProducts = [
        {
          id: 28,
          image: image28,
          name: 'Vestido de Verano Rosa Corte Largo con Cuello Cuadrado',
          price: "250.00",
        },
        {
          id: 29,
          image: image29,
          name: 'Vestido de Verano Peach Casual Estampados Florales',
          price: "299.00",
        },
        {
          id: 30,
          image: 'https://img.kwcdn.com/product/fancy/45642f4f-9ba2-43b8-99e1-796121b4a0d6.jpg?imageView2/2/w/800/q/70',
          name: 'Vestido de Verano Beige Corte Largo con Cuello Cuadrado',
          price: "380,00",
        },
        {
            id: 31,
            image: 'https://i.pinimg.com/736x/8c/0e/51/8c0e51a646c35b07f068adf52ec39232.jpg',
            name: 'Vestido de Verano Light Yellow Largo Estampado Cuadrado',
            price: "329,00",
        },
        {
            id: 32,
            image: 'https://i.pinimg.com/736x/6e/a8/2f/6ea82f8fb8916736188d193144007ea8.jpg',
            name: 'Vestido de Verano Beige Corte Largo Mangas Abombadas',
            price: "350,00",
        },
        {
            id: 33,
            image: 'https://i.pinimg.com/736x/c6/62/11/c6621161c3a5049ae745a239eb1f9966.jpg',
            name: 'Vestido de Verano Light White Corte Largo con Olanes',
            price: "390,00",
        },
        {
            id: 34,
            image: 'https://img.kwcdn.com/product/fancy/6b474a21-536e-4ebb-9070-7e7619bc9dbd.jpg?imageView2/2/w/800/q/70',
            name: 'Vestido de Verano Light Green Corte Largo Estampado Floral',
            price: "395,00",
        },
        {
            id: 35,
            image: 'https://i.pinimg.com/736x/cf/99/08/cf9908374cfde3e2a1ec84e6630e5455.jpg',
            name: 'Vestido de Verano White Corte Largo Corte con Mangas',
            price: "255,00",
        },
        {
            id: 36,
            image: 'https://i.pinimg.com/736x/72/62/c6/7262c62a15e67e2a03ba56ca5cb46ea1.jpg',
            name: 'Vestido de Verano White Corte Largo Estampado Floral Rosa',
            price: "210,00",
        },
        {
            id: 37,
            image: 'https://i.pinimg.com/736x/17/b9/22/17b922328203d7b0f4caac8ba0fa6260.jpg',
            name: 'Vestido de Verano Light Blue Corte Largo Estampado Azul',
            price: "420,00",
        },
        {
            id: 38,
            image: 'https://img.kwcdn.com/product/open/2024-07-01/1719826017100-c56ddaf2ef5240d2be77dec9d3e60e41-goods.jpeg?imageView2/2/w/800/q/70',
            name: 'Vestido de Verano Light Pink Corte Largo Estampado Rosas',
            price: "430,00",
        },
        {
            id: 39,
            image: 'https://i.pinimg.com/736x/6b/92/56/6b9256c1b0ef9c91ce6f2c32193fd147.jpg',
            name: 'Vestido de Verano Light Blue Estampado Floral Sin Mangas',
            price: "480,00",
        },
      ];

  return (
    <>
    <Header />
    <div className='shirts-container'>
        <div className="shirts-section">
            <p className="shirts-title">PLAYERAS</p>
            <p className="shirts-text">Blom & Glow</p>
        </div>
        <h2 className="products-title">Playeras</h2>
        <div className="products-grid">
          {ShirtProducts.map((product) => (
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

export default ShirtsPage;