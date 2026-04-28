import React from 'react';

const NavItem = ({ icon, label, active = false }) => (
  <button className={`flex flex-col items-center justify-center gap-1 flex-1 ${active ? 'text-deli-red' : 'text-deli-charcoal/60'}`}>
    {icon}
    <span className="text-[10px] uppercase tracking-widest font-sans font-medium">{label}</span>
  </button>
);

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-deli-charcoal/5 px-4 py-3 flex items-center justify-around z-50 md:hidden">
      <NavItem 
        label="Home" 
        active 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>} 
      />
      <NavItem 
        label="Shop" 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>} 
      />
      <NavItem 
        label="Wholesale" 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} 
      />
      <NavItem 
        label="Story" 
        icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>} 
      />
    </nav>
  );
}