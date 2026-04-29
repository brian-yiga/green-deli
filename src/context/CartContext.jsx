import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // 1. Initialize state by checking localStorage first
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('greenDeliCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Save to localStorage every time the cart updates
  useEffect(() => {
    localStorage.setItem('greenDeliCart', JSON.stringify(cart));
  }, [cart]);

  // ... (keep your existing addToCart, cartTotal, etc.)

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prev) => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  // 3. Add a clearCart function for after the order is placed
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartTotal, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);