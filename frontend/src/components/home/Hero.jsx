import React from 'react';
import Button from '../common/Button';
import { CoffeeIcon, ArrowRightIcon, SparklesIcon } from '../common/Icons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#190f09]">
      {/* Background Image with Dark Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=85"
          alt="Brew & Bake Artisanal Coffee & Pastry counter"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#190f09] via-[#190f09]/80 to-[#190f09]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,150,62,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b2315]/80 border border-[#c8963e]/50 backdrop-blur-md shadow-lg">
            <SparklesIcon className="w-4 h-4 text-[#c8963e]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#dbcaa8]">
              CRAFTED WITH LOVE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#fdfbf7] leading-[1.1]">
            Freshly Brewed.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e7d7c1] via-[#c8963e] to-[#dbcaa8] italic font-serif">
              Freshly Baked.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#e7d7c1]/90 font-light leading-relaxed max-w-2xl mx-auto">
            From rich, aromatic coffee to freshly baked pastries, every moment at Brew &amp; Bake is made to be enjoyed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              to="/menu"
              variant="gold"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Explore Our Menu
            </Button>

            <Button
              to="/menu"
              variant="outlineLight"
              size="lg"
              icon={<CoffeeIcon className="w-5 h-5" />}
              iconPosition="left"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Order Now
            </Button>
          </div>

          {/* Trust Highlights Row */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-[#3b2315]/60 text-center max-w-xl mx-auto">
            <div>
              <p className="font-serif text-2xl font-bold text-[#c8963e]">100%</p>
              <p className="text-xs text-[#dbcaa8]/80 uppercase tracking-wider mt-1">Arabica Beans</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#c8963e]">6:00 AM</p>
              <p className="text-xs text-[#dbcaa8]/80 uppercase tracking-wider mt-1">Baked Daily</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="font-serif text-2xl font-bold text-[#c8963e]">4.9 ★</p>
              <p className="text-xs text-[#dbcaa8]/80 uppercase tracking-wider mt-1">Customer Rating</p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave/Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#faf7f2] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
