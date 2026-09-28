import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/product/ProductCard';
import { FEATURED_PRODUCTS } from '../../utils/sampleData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Coffee', 'Pastry', 'Dessert'];

  const filteredProducts = selectedCategory === 'All'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <MainLayout>
      {/* Header Banner */}
      <div className="bg-[#190f09] text-[#fdfbf7] pt-32 pb-16 relative overflow-hidden border-b border-[#3b2315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8963e] bg-[#3b2315] px-4 py-1.5 rounded-full border border-[#c8963e]/40">
            Artisanal Selection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Our Cafe &amp; Bakery Menu
          </h1>
          <p className="text-base text-[#dbcaa8] max-w-xl mx-auto font-light">
            Every item is hand-prepared daily with finest Arabica beans and premium ingredients.
          </p>
        </div>
      </div>

      {/* Menu Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex items-center justify-center space-x-3 mb-12 flex-wrap gap-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#4a2e1d] text-[#fdfbf7] shadow-md'
                  : 'bg-[#f4ece1] text-[#52321e] hover:bg-[#e7d7c1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Menu;
