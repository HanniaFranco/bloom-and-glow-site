import React from 'react';
import styles from './CartPage.module.css'; 
import SimpleHeader from '../../components/SimpleHeader/SimpleHeader';
import Footer from '../../components/Footer/Footer';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
  
    // Calcula el Total
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  
    return (
      <>
        <SimpleHeader />
        <div className={styles['cart-container']}>
        <div className={styles['products-container']}>
          <h1 className={styles['cart-title-main']}>TU CARRITO</h1>
        </div>
        <div className={styles['cart-content']}>
          <h1 className={styles['cart-title']}>Cesta y Opciones</h1>
          {/* Para Contar Bien los items ahora */}
          <div className={styles['cart-summary']}>
            <p>{cart.reduce((total, item) => total + item.quantity, 0)} Items</p>
          </div>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div className={styles['cart-items']}>
              {cart.map((product) => (
                <div key={`${product.id}-${product.name}-${product.size}`} className={styles['cart-item']}>
                  <div className={styles['cart-item-info']}>
                    <img src={product.image} alt={product.name} className={styles['cart-item-image']} />
                    <div className={styles['cart-item-details']}>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>Talla: {product.size}</p>
                      {/* Aquí para ver cuantos se han ingresado de cada uno */}
                      <p>Cantidad: {product.quantity}</p>
                    </div>
                  </div>
                  <div className={styles['cart-item-price']}>
                    {/* Aquí multiplicamos el precio por la cantidad */}
                    <p>MXN ${(parseFloat(product.price) * product.quantity).toFixed(2)}</p>
                    <div className={styles['cart-item-actions']}>
                      <button onClick={() => removeFromCart(product.id, product.name, product.size)} className={styles['remove-button']}>
                        
                        <i className="fas fa-trash-alt"></i> {/* trash icon */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles['total']}>
                <h2>Total: MXN ${totalPrice.toFixed(2)}</h2>
              </div>
              <div className={styles['checkout']}>
                <button className={styles['checkout-button']}>Pagar</button>
              </div>
            </div>
          )}
        </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default CartPage;