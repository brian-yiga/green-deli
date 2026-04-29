import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ icon, label, to, active }) => (
  <Link 
    to={to} 
    className={`flex flex-col items-center justify-center gap-1 flex-1 transition-colors ${
      active ? 'text-deli-red' : 'text-deli-charcoal/60 hover:text-deli-red'
    }`}
  >
    {icon}
    <span className="text-[10px] uppercase tracking-widest font-sans font-bold">
      {label}
    </span>
  </Link>
);

export default function MobileBottomNav() {
  const location = useLocation();

  // Helper to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-deli-charcoal/5 px-4 py-3 pb-6 flex items-center justify-around z-50 md:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
      <NavItem 
        label="Home" 
        to="/" 
        active={isActive('/')} 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>} 
      />
      <NavItem 
        label="Shop" 
        to="/shop" 
        active={isActive('/shop')} 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>} 
      />
      <NavItem 
        label="Wholesale" 
        to="/wholesale" 
        active={isActive('/wholesale')} 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} 
      />
      <NavItem 
        label="Story" 
        to="/story" 
        active={isActive('/story')} 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>} 
      />
    </nav>
  );
}