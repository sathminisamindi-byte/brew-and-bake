import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { FEATURED_PRODUCTS } from '../../utils/sampleData';
import { StarIcon, ShoppingBagIcon, ArrowRightIcon } from '../../components/common/Icons';
import Button from '../../components/common/Button';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = FEATURED_PRODUCTS.find(p => p.id === parseInt(id)) || FEATURED_PRODUCTS[0];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <MainLayout>
      <div className="pt-28 pb-16 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-[#75482b] mb-8">
            <Link to="/" className="hover:text-[#c8963e]">Home</Link>
            <span>/</span>
            <Link to="/menu" className="hover:text-[#c8963e]">Menu</Link>
            <span>/</span>
            <span className="text-[#190f09] font-bold">{product.name}</span>
          </nav>

          {/* Product View Split */}
          <div className="bg-[#fdfbf7] rounded-3xl border border-[#e7d7c1] overflow-hidden shadow-lg p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f4ece1] shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#190f09]/80 text-[#c8963e] text-xs font-bold uppercase rounded-full">
                {product.category}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-[#c8963e] mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" filled={i < Math.floor(product.rating)} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#190f09]">{product.rating}</span>
                  <span className="text-xs text-[#75482b]">({product.reviewCount} customer reviews)</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#190f09]">
                  {product.name}
                </h1>

                <p className="font-serif text-2xl font-bold text-[#945c37] mt-3">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>

              <p className="text-sm text-[#52321e] leading-relaxed">
                {product.description}
              </p>

              {/* Quantity selector & Add to cart */}
              <div className="pt-4 border-t border-[#f3ebd9] flex items-center gap-4 flex-wrap">
                <div className="flex items-center border border-[#dbcaa8] rounded-full bg-[#f4ece1] px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-lg font-bold text-[#4a2e1d] hover:text-[#c8963e]"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-bold text-[#190f09]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-lg font-bold text-[#4a2e1d] hover:text-[#c8963e]"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="primary"
                  size="lg"
                  icon={<ShoppingBagIcon className="w-5 h-5" />}
                  iconPosition="left"
                  className="flex-1 min-w-[200px]"
                >
                  {added ? 'Added to Cart ✓' : `Add ${quantity} to Cart • Rs. ${(product.price * quantity).toLocaleString()}`}
                </Button>
              </div>

              <div className="pt-4 text-xs text-[#75482b] space-y-1 border-t border-[#f3ebd9]">
                <p>✓ Freshly prepared upon order</p>
                <p>✓ Available for pickup or fast local delivery</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
