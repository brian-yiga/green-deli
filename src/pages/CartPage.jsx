import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h2 className="font-display text-3xl uppercase mb-6">Your cart is empty</h2>
        <p className="font-sans text-sm opacity-60 mb-8 max-w-xs uppercase tracking-widest">
          Time to add some Ugandan spice to your life.
        </p>
        <Link to="/shop" className="bg-deli-red text-white px-8 py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold">
          Explore Apothecary
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 py-16 max-w-5xl mx-auto min-h-screen mt-16">
      <header className="mb-12 border-b border-deli-charcoal/10 pb-8">
        <h1 className="font-display text-4xl md:text-6xl uppercase">Your Selection</h1>
        <span className="font-sans text-[10px] uppercase tracking-widest opacity-40">
          {cart.length} unique items in bag
        </span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* List of Items */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-6 items-center border-b border-deli-charcoal/5 pb-8">
              {/* Product Image */}
              <div className="w-20 h-20 md:w-28 md:h-28 bg-deli-charcoal/5 rounded-2xl overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Product Info & Controls */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-xl uppercase leading-tight">{item.name}</h3>
                  <span className="font-sans text-sm font-bold">{formatPrice(item.price * item.quantity)}</span>
                </div>
                
                <p className="font-sans text-[10px] uppercase tracking-widest opacity-40 mb-6">{item.origin}</p>
                
                <div className="flex justify-between items-center">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-deli-charcoal/10 rounded-full px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 font-bold opacity-40 hover:opacity-100 hover:text-deli-red transition-all"
                    >
                      −
                    </button>
                    <span className="px-4 font-sans text-xs min-w-[30px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 font-bold opacity-40 hover:opacity-100 hover:text-deli-red transition-all"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-[9px] uppercase tracking-[0.2em] text-deli-red/60 hover:text-deli-red font-bold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-deli-charcoal/5 sticky top-32">
            <h3 className="font-display text-2xl uppercase mb-6">Summary</h3>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between font-sans text-sm">
                <span className="opacity-60 uppercase tracking-tighter">Subtotal</span>
                <span className="font-bold">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between font-sans text-sm">
                <span className="opacity-60 uppercase tracking-tighter">Delivery</span>
                <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">
                  {cartTotal >= 100000 ? 'Complimentary' : 'Calculated next'}
                </span>
              </div>
            </div>

            <div className="border-t border-deli-charcoal/10 pt-6 mb-8 flex justify-between items-end">
              <span className="font-display text-xl uppercase">Total</span>
              <span className="font-sans text-xl font-bold text-deli-red">{formatPrice(cartTotal)}</span>
            </div>

            <Link 
              to="/checkout" 
              className="block text-center bg-deli-red text-white py-5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Confirm Order
            </Link>

            <p className="mt-6 text-[8px] uppercase tracking-widest text-center opacity-40 leading-relaxed">
              Standard delivery within 24 hours in Kampala.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}