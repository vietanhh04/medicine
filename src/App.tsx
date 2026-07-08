import React, { useState } from "react";
import Navbar from "../src/component/Navbar";
import Hero from "../src/component/Hero";
import Products from "../src/component/Products";
import HerbalZones from "../src/component/HerbalZones";
import Capabilities from "../src/component/Capabilities";
import Heritage from "../src/component/Heritage";
import Contact from "../src/component/Contact";
import Footer from "../src/component/Footer";
import ShowreelModal from "../src/component/ShowreelModal";
import ProductDetailModal from "../src/component/ProductDetailModal";
import type { Product } from "./types";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showShowreel, setShowShowreel] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFCF8] text-[#0B1E12] selection:bg-[#E8F5E9] selection:text-[#1B5E20] overflow-x-hidden font-body">
      {/* Dynamic light gradient background elements */}
      <div className="atmospheric-bg pointer-events-none opacity-80" />

      {/* --- 1. NAVBAR --- */}
      <Navbar />

      {/* --- 2. HERO SECTION --- */}
      <Hero onShowShowreel={() => setShowShowreel(true)} />

      {/* --- 3. PRODUCTS GRID --- */}
      <Products onSelectProduct={(product) => setSelectedProduct(product)} />

      {/* --- 4. HERBAL ZONES BẢN ĐỒ --- */}
      <HerbalZones />

      {/* --- 5. CAPABILITIES THẾ MẠNH --- */}
      <Capabilities />

      {/* --- 6. HERITAGE DI SẢN --- */}
      <Heritage />

      {/* --- 7. CONTACT FORM --- */}
      <Contact />

      {/* --- 8. FOOTER --- */}
      <Footer />

      {/* --- SHOWREEL VIDEO POPUP MODAL --- */}
      <ShowreelModal isOpen={showShowreel} onClose={() => setShowShowreel(false)} />

      {/* --- PRODUCT INTERACTIVE DETAIL POPUP MODAL --- */}
      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
