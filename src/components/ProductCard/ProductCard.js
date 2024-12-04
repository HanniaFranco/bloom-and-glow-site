import React, { useContext, useState } from 'react';
import styles from './ProductCard.module.css';
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ id, image, name, price, isOfferPage, onClick }) => {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    const product = { id, image, name, price };
    addToCart(product);
    setShowToast(true);

    // Ocultar el toast después de 3 segundos
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className={styles.card}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h3 className={styles.name} onClick={onClick}>{name}</h3>
      <p className={styles.price}>
        MXN ${price}{' '}
        {isOfferPage && <span className={styles.offerText}>50% OFF</span>}
      </p>
      <button className={styles.button} onClick={handleAddToCart}>
        AGREGAR AL CARRITO
      </button>

      {/* Toast de confirmación */}
      {showToast && (
        <div className={styles.toast}>
          <p>SE AÑADIÓ UN PRODUCTO</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
