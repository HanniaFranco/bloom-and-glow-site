import React, { useContext } from 'react'; // Importamos useContext
import styles from './ProductCard.module.css';
import { CartContext } from "../../context/CartContext"; // Importamos el contexto

const ProductCard = ({ id, image, name, price, isOfferPage, onClick }) => {
  const { addToCart } = useContext(CartContext); // Obtenemos la función del contexto

  const handleAddToCart = () => {
    const product = { id, image, name, price };
    addToCart(product); // Agregamos producto al carrito
  };

  return (
    <div className={styles.card}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h3 className={styles.name} onClick={onClick}>{name}</h3> {/* Usamos onClick directamente */}
      <p className={styles.price}>MXN ${price}</p>
      <button className={styles.button} onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
    </div>
  );
};

export default ProductCard;
