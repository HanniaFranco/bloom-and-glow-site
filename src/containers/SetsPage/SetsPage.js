import React from 'react';
import './SetsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import bannerSets from '../../assets/images/banner_sets.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import image16 from '../../assets/images/product_16.png';
import image17 from '../../assets/images/product_17.png';
import image18 from '../../assets/images/product_18.png';

function SetsPage() {
    const SetsProducts = [
        {
          id: 16,
          image: image16,
          name: 'Conjunto White and Blue Casual con Short Blanco',
          price: "600.00",
        },
        {
          id: 17,
          image: image17,
          name: 'Conjunto Pink and Blue Casual con Short Blanco',
          price: "550.00",
        },
        {
          id: 18,
          image: image18,
          name: 'Conjunto Black and White Casual con Short Negro',
          price: "480,00",
        },
        {
            id: 19,
            image: 'https://i.pinimg.com/736x/37/8c/ae/378cae18de4429ed836d857fbeed3da3.jpg',
            name: 'Conjunto Beige Casual Camisa Manga Corta y Short',
            price: "729,00",
        },
        {
            id: 20,
            image: 'https://i.pinimg.com/736x/b8/f6/3a/b8f63a6fe0409b1076437fdbe945b571.jpg',
            name: 'Conjunto Black Deportivo Casual con Top Negro',
            price: "450,00",
        },
        {
            id: 21,
            image: 'https://i.pinimg.com/736x/d1/ea/a8/d1eaa8f5beeb57d29a40022bec20707e.jpg',
            name: 'Conjunto Navy Blue Casual con Playera Manga Corta y Top',
            price: "390,00",
        },
        {
            id: 22,
            image: 'https://i.pinimg.com/736x/4b/a7/db/4ba7dbe08f65db1d3f97e0dce834a78e.jpg',
            name: 'Conjunto White and Gray Casual Ejectivo Sin Mangas',
            price: "395,00",
        },
        {
            id: 23,
            image: 'https://i.pinimg.com/736x/bb/e0/ec/bbe0ec0e60d97fd938d5e2766e07fc92.jpg',
            name: 'Conjunto White and Yellow Casual con Short Sky Blue',
            price: "355,00",
        },
        {
            id: 24,
            image: 'https://i.pinimg.com/736x/b0/52/a1/b052a125b51639b534e7a0eb14456dc7.jpg',
            name: 'Conjunto Yellow con Short Sky Blue Playera Rayas Blancas',
            price: "410,00",
        },
        {
            id: 25,
            image: 'https://i.pinimg.com/736x/ea/17/9a/ea179a74219d538b794936ef48467307.jpg',
            name: 'Conjunto Warm Colors con Shorts y Playera Rayas a Color',
            price: "420,00",
        },
        {
            id: 26,
            image: 'https://i.pinimg.com/736x/d1/fc/fb/d1fcfbb137869ecf8d4a6988a0b4504f.jpg',
            name: 'Conjunto White Formal Ejecutivo con Jeans Largos',
            price: "630,00",
        },
        {
            id: 27,
            image: 'https://i.pinimg.com/736x/ab/4e/b8/ab4eb8213a312d04958d67d803cf805f.jpg',
            name: 'Conjunto Black and Brown Formal con Playera Sin Mangas',
            price: "680,00",
        },
      ];


  return (
    <>
    <Header />
    <div className='sets-container'>
        <div className="sets-section">
          <p className="shirts-title">SETS DE ROPA</p>
          <p className="shirts-text">Blom & Glow</p>
        </div>
        <h2 className="products-title">Playeras</h2>
        <div className="products-grid">
          {SetsProducts.map((product) => (
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

export default SetsPage;