import React, { useState } from 'react';
import ProductCard from '../product/ProductCard';
import Button from '../common/Button';
import { ArrowRightIcon } from '../common/Icons';
import { FEATURED_PRODUCTS } from '../../utils/sampleData';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = ['All', 'Coffee', 'Pastry', 'Dessert'];

  const filteredProducts = activeTab === 'All'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="py-20 bg-[#f4ece1]/50 border-y border-[#e7d7c1]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#945c37] bg-[#fdfbf7] px-4 py-1.5 rounded-full border border-[#dbcaa8]">
              Handcrafted Daily
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#190f09] mt-3">
              Our Favorites
            </h2>
            <p className="text-base text-[#52321e]/80 mt-2">
              Customer-loved picks from the Brew &amp; Bake counter.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-2 bg-[#fdfbf7] p-1.5 rounded-full border border-[#e7d7c1] self-start md:self-auto shadow-sm overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#4a2e1d] text-[#fdfbf7] shadow-sm'
                    : 'text-[#52321e] hover:text-[#190f09] hover:bg-[#f4ece1]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-14">
          <Button
            to="/menu"
            variant="outline"
            size="lg"
            icon={<ArrowRightIcon className="w-5 h-5" />}
            iconPosition="right"
          >
            Explore Full Cafe Menu
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
