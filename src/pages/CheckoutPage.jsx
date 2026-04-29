import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Added Link import
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function CheckoutPage() {
  useDocumentTitle('Checkout | Green Deli');
  const { cart, cartTotal, clearCart } = useCart();
  const [orderStatus, setOrderStatus] = useState('idle');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderStatus('loading');

    const deliveryFee = cartTotal >= 100000 ? 0 : 10000;
    const finalTotal = cartTotal + deliveryFee;
    const itemsList = cart.map(item => `- ${item.quantity}x ${item.name}`).join('%0A');

    const message = `*NEW ORDER - GREEN DELI*%0A%0A` +
      `*Customer:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Address:* ${formData.address}%0A%0A` +
      `*Items Order:*%0A${itemsList}%0A%0A` +
      `*Total Amount:* UGX ${finalTotal.toLocaleString()}%0A%0A` +
      `_I would like to confirm my order and arrange delivery._`;

    const businessNumber = "256700000000"; 

    setTimeout(() => {
      window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
      setOrderStatus('success');
      clearCart();
    }, 1500);
  };

  if (orderStatus === 'success') {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h2 className="font-display text-4xl uppercase mb-4">Order Sent!</h2>
        <p className="font-sans text-sm opacity-60 max-w-xs mb-8">
          Your order has been sent via WhatsApp. We will reply shortly to confirm your delivery slot.
        </p>
        <button onClick={() => window.location.href = '/'} className="text-deli-red font-sans text-[10px] uppercase tracking-widest font-bold border-b border-deli-red pb-1">
          Back to Apothecary
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 py-10 max-w-6xl mx-auto min-h-screen mt-16">
      {/* 2. Back to Cart Link Section */}
      <div className="mb-8">
        <Link 
          to="/cart" 
          className="group inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-deli-charcoal/40 hover:text-deli-red transition-colors"
        >
          <svg 
            width="14" height="14" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="transform group-hover:-translate-x-1 transition-transform"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Cart
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Delivery Form */}
        <div>
          <h1 className="font-display text-4xl uppercase mb-8">Delivery Details</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] uppercase tracking-widest opacity-40">First Name</label>
                <input 
                  required 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  type="text" 
                  className="bg-white border border-deli-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-deli-red transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] uppercase tracking-widest opacity-40">Last Name</label>
                <input 
                  required 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  type="text" 
                  className="bg-white border border-deli-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-deli-red transition-colors" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] uppercase tracking-widest opacity-40">Phone (MTN/Airtel)</label>
              <input 
                required 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel" 
                placeholder="07..." 
                className="bg-white border border-deli-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-deli-red transition-colors" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] uppercase tracking-widest opacity-40">Delivery Address / Area</label>
              <input 
                required 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                type="text" 
                placeholder="e.g. Muyenga, Tank Hill Rd" 
                className="bg-white border border-deli-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-deli-red transition-colors" 
              />
            </div>

            <div className="mt-4">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Payment Method</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-4 p-4 border border-deli-red bg-deli-red/5 rounded-2xl cursor-pointer">
                  <input type="radio" name="payment" checked readOnly className="accent-deli-red" />
                  <span className="font-sans text-xs font-bold text-deli-charcoal">Cash on Delivery / Mobile Money</span>
                </label>
              </div>
            </div>

            <button 
              disabled={orderStatus === 'loading' || cart.length === 0}
              className="mt-6 bg-deli-red text-white py-5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl disabled:opacity-50 transition-transform active:scale-95"
            >
              {orderStatus === 'loading' ? 'Preparing Order...' : `Send Order via WhatsApp — ${formatPrice(cartTotal + (cartTotal >= 100000 ? 0 : 10000))}`}
            </button>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-deli-charcoal/5 p-8 rounded-[3rem] h-fit sticky top-32">
          <h3 className="font-display text-2xl uppercase mb-8">Your Order</h3>
          <div className="flex flex-col gap-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-deli-charcoal/5 pb-4">
                <div className="flex gap-4">
                  <span className="font-sans text-xs font-bold opacity-40">{item.quantity}x</span>
                  <span className="font-sans text-xs font-bold">{item.name}</span>
                </div>
                <span className="font-sans text-xs">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-deli-charcoal/10 pt-6">
            <div className="flex justify-between font-sans text-xs opacity-60">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between font-sans text-xs opacity-60">
              <span>Delivery</span>
              <span>{cartTotal >= 100000 ? 'Free' : '10,000 UGX'}</span>
            </div>
            <div className="flex justify-between font-display text-xl uppercase pt-4 border-t border-deli-charcoal/5">
              <span>Grand Total</span>
              <span className="text-deli-red">{formatPrice(cartTotal + (cartTotal >= 100000 ? 0 : 10000))}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}