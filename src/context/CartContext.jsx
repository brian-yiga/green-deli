import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // 1. Initialize state from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('greenDeliCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Pop-up states
  const [showToast, setShowToast] = useState(false);
  const [lastAddedName, setLastAddedName] = useState("");

  // 2. Save to localStorage
  useEffect(() => {
    localStorage.setItem('greenDeliCart', JSON.stringify(cart));
  }, [cart]);

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

    // TRIGGER POP-UP
    setLastAddedName(product.name);
    setShowToast(true);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prev) => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const clearCart = () => setCart([]);

  // Client Requirement #2: Empty Cart Function
  const emptyCart = () => {
    if (window.confirm("Are you sure you want to empty your cart?")) {
      setCart([]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartTotal, removeFromCart, updateQuantity, clearCart, emptyCart }}>
      {children}

      {/* 
          POP-UP UI 
          Using standard <a> instead of <Link> to prevent the white screen crash 
      */}
      {showToast && (
        <div className="fixed top-20 right-6 z-[999] animate-in slide-in-from-right duration-300">
          <div className="bg-white border border-deli-charcoal/10 shadow-2xl rounded-2xl p-5 w-72 backdrop-blur-md bg-white/95">
            <div className="flex flex-col gap-1">
              <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-deli-red">
                Added to Cart
              </p>
              <p className="font-display text-base text-deli-charcoal truncate">
                {lastAddedName}
              </p>
              <div className="mt-4 flex gap-6">
                <a 
                  href="/cart" 
                  className="font-sans text-[10px] uppercase tracking-widest font-bold border-b border-deli-charcoal pb-0.5 hover:text-deli-red hover:border-deli-red transition-colors"
                >
                  View Cart
                </a>
                <button 
                  onClick={() => setShowToast(false)}
                  className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);