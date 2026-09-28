import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/common/Button';
import { FEATURED_PRODUCTS } from '../../utils/sampleData';
import { ShoppingBagIcon, ArrowRightIcon } from '../../components/common/Icons';

const Cart = () => {
  const cartItems = [
    { ...FEATURED_PRODUCTS[0], qty: 2 },
    { ...FEATURED_PRODUCTS[2], qty: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = 250;
  const total = subtotal + deliveryFee;

  return (
    <MainLayout>
      <div className="pt-28 pb-16 bg-[#faf7f2] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#190f09] mb-8">
            Your Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-8 bg-[#fdfbf7] p-6 sm:p-8 rounded-3xl border border-[#e7d7c1] shadow-sm space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 sm:gap-6 pb-6 border-b border-[#f3ebd9] last:border-0 last:pb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-2xl bg-[#f4ece1] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#945c37]">{item.category}</span>
                    <h3 className="font-serif text-lg font-bold text-[#190f09] truncate">{item.name}</h3>
                    <p className="text-xs text-[#75482b]">Rs. {item.price.toLocaleString()} each</p>
                  </div>

                  <div className="text-right">
                    <p className="font-serif text-base font-bold text-[#190f09]">
                      Rs. {(item.price * item.qty).toLocaleString()}
                    </p>
                    <span className="text-xs text-[#75482b]">Qty: {item.qty}</span>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex justify-between items-center">
                <Link to="/menu" className="text-xs font-bold text-[#945c37] hover:text-[#c8963e]">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 bg-[#fdfbf7] p-6 sm:p-8 rounded-3xl border border-[#e7d7c1] shadow-sm space-y-6 h-fit">
              <h2 className="font-serif text-xl font-bold text-[#190f09] pb-3 border-b border-[#f3ebd9]">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm text-[#52321e]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#190f09]">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Delivery</span>
                  <span className="font-semibold text-[#190f09]">Rs. {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#f3ebd9] text-base font-bold text-[#190f09]">
                  <span>Total</span>
                  <span className="text-[#945c37]">Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              <Button
                to="/checkout"
                variant="gold"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
                className="w-full"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
