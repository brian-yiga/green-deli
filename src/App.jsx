import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Layout Components
import MainHeader from "./components/MainHeader";
import MobileBottomNav from "./components/MobileBottomNav";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WholesalePage from "./pages/WholesalePage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import TermsPrivacyPage from "./pages/TermsPrivacyPage";
import StoryPage from "./pages/StoryPage";
import CartPage from "./pages/CartPage";
import ScrollToTop from "./components/ScrollToTop";
import CareersPage from "./pages/CareersPage";
import FeedbackModal from "./components/FeedbackModal";

function App() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const onOpenFeedback = () => {
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-deli-cream text-deli-charcoal font-body">
          <MainHeader />

          {/* main container with padding for fixed header and mobile nav */}
          <main className="pt-16 pb-20 md:pb-0">
            <Routes>
              {/* The "index" or "/" path will now show your HomePage */}
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/wholesale" element={<WholesalePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/terms" element={<TermsPrivacyPage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </main>

          <Footer onOpenFeedback={onOpenFeedback} />
          <MobileBottomNav />

          <FeedbackModal
            isOpen={isFeedbackModalOpen}
            onClose={closeFeedbackModal}
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
