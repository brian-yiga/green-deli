import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const { cart } = useCart();
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const closeMenu = () => setIsMenuOpen(false);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to shop with search query as a URL parameter
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Spice Shop', path: '/shop' },
    { name: 'Partners', path: '/wholesale' },
    { name: 'Contact', path: '/contact' },
    { name: 'Our Story', path: '/story' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-deli-cream/80 backdrop-blur-md border-b border-deli-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Hamburger Menu (Mobile Only) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -ml-2 text-deli-charcoal"
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link 
            to="/" 
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-32 h-auto"
          >
            <img src="/assets/green-deli-logo.png" alt="Green Deli Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-sans text-xs uppercase tracking-widest text-deli-charcoal hover:text-deli-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-1 md:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-deli-charcoal hover:text-deli-red transition-colors"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </button>

            <Link to="/cart" className="p-2 text-deli-charcoal relative group">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:text-deli-red transition-colors">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              
              {totalItems > 0 && (
                <span className="absolute top-1 right-0.5 bg-deli-red text-white text-[8px] font-bold px-1 rounded-full min-w-[12px] h-3 flex items-center justify-center animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* --- SEARCH OVERLAY --- */}
        <div className={`absolute inset-0 bg-deli-cream z-[60] transition-transform duration-500 flex items-center px-4 md:px-12 ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-4xl mx-auto flex items-center gap-4">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="SEARCH THE APOTHECARY..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 font-display text-2xl md:text-4xl uppercase placeholder:text-deli-charcoal/20 text-deli-charcoal"
            />
            <button 
              type="button" 
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-deli-charcoal/40 hover:text-deli-red"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </form>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-deli-charcoal/20 backdrop-blur-sm md:hidden" onClick={closeMenu}>
          <aside className="w-64 h-full bg-deli-cream p-6 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-display text-lg font-bold uppercase">Menu</span>
              <button onClick={closeMenu}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={closeMenu}
                  className="font-sans text-sm uppercase tracking-[0.2em] text-deli-charcoal border-b border-deli-charcoal/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default MainHeader;