import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <button className={styles.button}>AGREGAR AL CARRITO</button>
    </div>
  );
};

export default ProductCard;
