import React from 'react';
import MainHeader from './components/MainHeader';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import HeatScale from './components/HeatScale';
import FlavorComplexity from './components/FlavorComplexity';
import Button from './components/Button';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-deli-cream text-deli-charcoal font-body">
      <MainHeader />
      
      {/* Added pb-20 to account for the bottom nav on mobile */}
      <main className="pt-16 pb-20 md:pb-0">
        <HomePage />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;