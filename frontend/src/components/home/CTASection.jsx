import React from 'react';
import Button from '../common/Button';
import { ArrowRightIcon } from '../common/Icons';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-[#190f09] text-[#fdfbf7] overflow-hidden border-t border-[#3b2315]">
      {/* Background Image with Dark Coffee Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80"
          alt="Coffee pouring background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#190f09] via-[#190f09]/90 to-[#190f09]" />
      </div>

      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c8963e]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c8963e] bg-[#3b2315] px-4 py-1.5 rounded-full border border-[#c8963e]/40 inline-block">
          Visit Brew &amp; Bake Today
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#fdfbf7] max-w-3xl mx-auto leading-tight">
          Your next coffee break starts here.
        </h2>

        <p className="text-base sm:text-lg text-[#dbcaa8] font-light max-w-xl mx-auto leading-relaxed">
          Take a moment. Sip something beautiful. Enjoy something freshly baked.
        </p>

        <div className="pt-6">
          <Button
            to="/menu"
            variant="gold"
            size="lg"
            icon={<ArrowRightIcon className="w-5 h-5" />}
            iconPosition="right"
            className="min-w-[220px]"
          >
            View Our Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
