import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/common/Button';

const Checkout = () => {
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
  };

  return (
    <MainLayout>
      <div className="pt-28 pb-16 bg-[#faf7f2] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#190f09] mb-8 text-center">
            Checkout &amp; Order
          </h1>

          {placed ? (
            <div className="bg-[#fdfbf7] p-10 rounded-3xl border border-[#e7d7c1] shadow-lg text-center space-y-4">
              <div className="w-16 h-16 bg-[#f4ece1] text-[#c8963e] rounded-full flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#190f09]">Order Received!</h2>
              <p className="text-sm text-[#52321e]">
                Thank you for ordering with Brew &amp; Bake. We are crafting your fresh order right now.
              </p>
              <div className="pt-4">
                <Button to="/menu" variant="primary">
                  Back to Menu
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#fdfbf7] p-6 sm:p-10 rounded-3xl border border-[#e7d7c1] shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-[#190f09] pb-3 border-b border-[#f3ebd9]">
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4a2e1d] uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#f4ece1] border border-[#dbcaa8] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8963e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4a2e1d] uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 77 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#f4ece1] border border-[#dbcaa8] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8963e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4a2e1d] uppercase mb-1">Delivery Address</label>
                <textarea
                  required
                  rows="3"
                  placeholder="Street address, apartment, suite..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f4ece1] border border-[#dbcaa8] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8963e]"
                />
              </div>

              <h2 className="font-serif text-xl font-bold text-[#190f09] pt-4 pb-3 border-b border-[#f3ebd9]">
                Payment Method
              </h2>

              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-[#f4ece1] rounded-xl border border-[#dbcaa8] cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="accent-[#4a2e1d]" />
                  <span className="text-sm font-semibold text-[#190f09]">Cash on Delivery / Pickup</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-[#f4ece1] rounded-xl border border-[#dbcaa8] cursor-pointer">
                  <input type="radio" name="payment" className="accent-[#4a2e1d]" />
                  <span className="text-sm font-semibold text-[#190f09]">Card Payment on Delivery</span>
                </label>
              </div>

              <div className="pt-6">
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Place Order • Rs. 2,650
                </Button>
              </div>
            </form>
          )}

        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;
