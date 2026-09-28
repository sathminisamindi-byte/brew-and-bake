import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ShoppingBagIcon } from '../common/Icons';

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <div className="group bg-[#fdfbf7] rounded-2xl overflow-hidden border border-[#e7d7c1]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      {/* Product Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#f4ece1]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-[#190f09]/80 backdrop-blur-md text-[#fdfbf7] text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
          {product.category}
        </span>

        {/* Optional Badge */}
        {product.badge && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-[#c8963e] text-[#190f09] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex text-[#c8963e]">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-3.5 h-3.5"
                  filled={i < Math.floor(product.rating)}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#3b2315] ml-1">{product.rating}</span>
            <span className="text-xs text-[#75482b]/60">({product.reviewCount})</span>
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-[#945c37] transition-colors">
            <h3 className="font-serif text-xl font-bold text-[#26160d] leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-xs text-[#52321e]/80 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-5 pt-4 border-t border-[#f3ebd9] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#75482b]/60 font-medium block">Price</span>
            <span className="font-serif text-lg font-bold text-[#190f09]">
              Rs. {product.price.toLocaleString()}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              added
                ? 'bg-[#26160d] text-[#c8963e]'
                : 'bg-[#4a2e1d] hover:bg-[#c8963e] text-[#fdfbf7] hover:text-[#190f09] hover:shadow'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBagIcon className="w-4 h-4" />
            <span>{added ? 'Added ✓' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
