import React from 'react';
import MainHeader from './components/MainHeader';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import HeatScale from './components/HeatScale';
import FlavorComplexity from './components/FlavorComplexity';
import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-deli-cream text-deli-charcoal font-body">
      <MainHeader />
      
      {/* Added pb-20 to account for the bottom nav on mobile */}
      <main className="pt-16 pb-20 md:pb-0">
        <section className="px-4 py-20 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-deli-red mb-2">Welcome to Green Deli</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl mx-auto">Uganda's Finest Spice Apothecary</h2>
          < HeatScale rating={4} label="Heat Level" />
          < FlavorComplexity rating={3} label="Flavor Complexity" />
          <Button variant="primary" className="mt-8">Shop Now</Button>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;