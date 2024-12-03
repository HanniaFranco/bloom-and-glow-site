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
          name: 'Vestido de Verano Rosa Corte Largo con Cuello Cuadrado',
          price: "250.00",
        },
        {
          id: 17,
          image: image17,
          name: 'Vestido de Verano Peach Casual Estampados Florales',
          price: "299.00",
        },
        {
          id: 18,
          image: image18,
          name: 'Vestido de Verano Beige Corte Largo con Cuello Cuadrado',
          price: "380,00",
        },
        {
            id: 19,
            image: 'https://i.pinimg.com/736x/37/8c/ae/378cae18de4429ed836d857fbeed3da3.jpg',
            name: 'Vestido de Verano Light Yellow Largo Estampado Cuadrado',
            price: "329,00",
        },
        {
            id: 20,
            image: 'https://i.pinimg.com/736x/b8/f6/3a/b8f63a6fe0409b1076437fdbe945b571.jpg',
            name: 'Vestido de Verano Beige Corte Largo Mangas Abombadas',
            price: "350,00",
        },
        {
            id: 21,
            image: 'https://i.pinimg.com/736x/d1/ea/a8/d1eaa8f5beeb57d29a40022bec20707e.jpg',
            name: 'Vestido de Verano Light White Corte Largo con Olanes',
            price: "390,00",
        },
        {
            id: 22,
            image: 'https://i.pinimg.com/736x/4b/a7/db/4ba7dbe08f65db1d3f97e0dce834a78e.jpg',
            name: 'Vestido de Verano Light Green Corte Largo Estampado Floral',
            price: "395,00",
        },
        {
            id: 23,
            image: 'https://i.pinimg.com/736x/bb/e0/ec/bbe0ec0e60d97fd938d5e2766e07fc92.jpg',
            name: 'Vestido de Verano White Corte Largo Corte con Mangas',
            price: "255,00",
        },
        {
            id: 24,
            image: 'https://i.pinimg.com/736x/b0/52/a1/b052a125b51639b534e7a0eb14456dc7.jpg',
            name: 'Vestido de Verano White Corte Largo Estampado Floral Rosa',
            price: "210,00",
        },
        {
            id: 25,
            image: 'https://i.pinimg.com/736x/ea/17/9a/ea179a74219d538b794936ef48467307.jpg',
            name: 'Vestido de Verano Light Blue Corte Largo Estampado Azul',
            price: "420,00",
        },
        {
            id: 26,
            image: 'https://i.pinimg.com/736x/d1/fc/fb/d1fcfbb137869ecf8d4a6988a0b4504f.jpg',
            name: 'Vestido de Verano Light Pink Corte Largo Estampado Rosas',
            price: "430,00",
        },
        {
            id: 27,
            image: 'https://i.pinimg.com/736x/ab/4e/b8/ab4eb8213a312d04958d67d803cf805f.jpg',
            name: 'Vestido de Verano Light Blue Estampado Floral Sin Mangas',
            price: "480,00",
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