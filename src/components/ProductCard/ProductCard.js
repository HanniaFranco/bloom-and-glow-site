import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className={styles.card}>
      <img 
        src={image} 
        alt={name} 
        className={styles.image} 
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>Mex$ {price}</p>
      <button 
        className={styles.button}
        onClick={() => alert(`Se ha añadido ${name} al carrito`)}
        >
          AGREGAR AL CARRITO
        </button>
    </div>
  );
};

export default ProductCard;