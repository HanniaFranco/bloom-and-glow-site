import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Hannia del futuro Don't move this please:)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Carrito sí funciona
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => 
        item.id === product.id && 
        item.name === product.name && 
        item.size === product.size
      );
      if (existingProduct) {
        // Si ya está y es exactamente el mismo producto, le sumamos uno:)
        return prevCart.map(item => 
          item.id === product.id && item.name === product.name && item.size === product.size
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
      } else {
        // Si no está o es diferente en alguna propiedad, lo ingresamos como nuevo:)
        return [...prevCart, {...product, quantity: 1}];
      }
    });
  };

  // Se actualizó 
  const removeFromCart = (productId, productName, productSize) => {
    setCart((prevCart) => prevCart.filter((product) => 
      !(product.id === productId && product.name === productName && product.size === productSize)
    ));
  };

  // Hannia del futuro Don't move this please:)
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};