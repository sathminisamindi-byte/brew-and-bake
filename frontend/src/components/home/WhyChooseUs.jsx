import React from 'react';
import { CoffeeIcon, BakeryIcon, SparklesIcon, HeartIcon } from '../common/Icons';
import { WHY_CHOOSE_US } from '../../utils/sampleData';

const WhyChooseUs = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'coffee':
        return <CoffeeIcon className="w-7 h-7 text-[#c8963e]" />;
      case 'bakery':
        return <BakeryIcon className="w-7 h-7 text-[#c8963e]" />;
      case 'sparkles':
        return <SparklesIcon className="w-7 h-7 text-[#c8963e]" />;
      case 'heart':
        return <HeartIcon className="w-7 h-7 text-[#c8963e]" />;
      default:
        return <CoffeeIcon className="w-7 h-7 text-[#c8963e]" />;
    }
  };

  return (
    <section className="py-20 bg-[#190f09] text-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8963e] bg-[#3b2315] px-4 py-1.5 rounded-full border border-[#c8963e]/40">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fdfbf7] mt-3">
            Why Brew &amp; Bake?
          </h2>
          <p className="text-base text-[#dbcaa8]/80 mt-3 font-light">
            We take pride in delivering perfection in every sip and every bite.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-[#26160d] rounded-2xl p-8 border border-[#3b2315] hover:border-[#c8963e]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group flex flex-col items-start"
            >
              {/* Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#3b2315] group-hover:bg-[#c8963e]/20 flex items-center justify-center mb-6 transition-colors border border-[#75482b]/40">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-[#fdfbf7] group-hover:text-[#c8963e] transition-colors mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#dbcaa8]/80 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
