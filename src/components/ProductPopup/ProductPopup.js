import React from "react";
import styles from "./ProductPopup.module.css";

const ProductPopup = ({ product, onClose }) => {
  if (!product) return null; // Si no hay producto, no se muestra nada

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.price}>MXN ${product.price}</p>
          <p className={styles.description}>
            {/*  */}
            Tallas: Disponible en S, M, L
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
