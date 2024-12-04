import React, { useContext } from 'react'; // Importar useContext
import styles from './ProductCard.module.css';
import { CartContext } from "../../context/CartContext"; // Importar el contexto

const ProductCard = ({ id, image, name, price, isOfferPage }) => {
  const { addToCart } = useContext(CartContext); // Obtener la función del contexto

  const handleAddToCart = () => {
    const product = { id, image, name, price };
    addToCart(product); // Agregar producto al carrito
  };

  return (
    <div className={styles.card}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        MXN ${price}
        {isOfferPage && <span className={styles.offerText}> 50% OFF</span>}
      </p>
      <button className={styles.button} onClick={handleAddToCart}>
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default ProductCard;
