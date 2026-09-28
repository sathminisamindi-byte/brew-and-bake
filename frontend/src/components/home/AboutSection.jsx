import React from 'react';
import Button from '../common/Button';
import { ArrowRightIcon, CoffeeIcon, SparklesIcon, HeartIcon } from '../common/Icons';

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#faf7f2] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side (7 Cols on desktop) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fdfbf7] aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                alt="Brew & Bake cozy cafe interior ambiance"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlay Accent Image Badge */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 z-20 hidden sm:block w-52 bg-[#fdfbf7] p-3 rounded-2xl shadow-xl border border-[#e7d7c1]">
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=500&q=80"
                  alt="Freshly baked croissants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-serif text-sm font-bold text-[#190f09]">Master Bakers</p>
                <p className="text-[11px] text-[#945c37] font-semibold">Artisanal Craft</p>
              </div>
            </div>

            {/* Decorative Golden Accent Shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c8963e]/15 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Text Content Side (5 Cols on desktop) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#945c37] bg-[#f4ece1] px-4 py-1.5 rounded-full border border-[#dbcaa8]">
              Our Heritage &amp; Passion
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#190f09] leading-tight">
              Made for Coffee Moments
            </h2>

            <p className="text-base sm:text-lg text-[#52321e] leading-relaxed font-light">
              Brew &amp; Bake brings together the comfort of freshly brewed coffee and the joy of freshly baked treats. We believe good food and great coffee create memorable moments.
            </p>

            <p className="text-sm text-[#75482b] leading-relaxed">
              Every morning, our team begins before sunrise—grinding single-origin Arabica beans to perfection and hand-rolling butter croissants. Whether you're catching up with friends or finding a quiet corner with a warm cup, Brew &amp; Bake is crafted for you.
            </p>

            {/* Feature Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 bg-[#fdfbf7] rounded-xl border border-[#e7d7c1]">
                <div className="w-8 h-8 rounded-full bg-[#f4ece1] text-[#945c37] flex items-center justify-center shrink-0">
                  <CoffeeIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#26160d]">Ethically Sourced Beans</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#fdfbf7] rounded-xl border border-[#e7d7c1]">
                <div className="w-8 h-8 rounded-full bg-[#f4ece1] text-[#945c37] flex items-center justify-center shrink-0">
                  <HeartIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#26160d]">Made Fresh Everyday</span>
              </div>
            </div>

            {/* Discover Our Story Button */}
            <div className="pt-4">
              <Button
                to="/menu"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Discover Our Story
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
