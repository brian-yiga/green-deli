import ProductCard from "./components/products/productCard";
import ProductGrid from "./components/products/productGrid";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="min-h-screen bg-deli-cream">
      <MainHeader />
      <ProductGrid />
    </div>
  );
}

export default App;