import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../common/Icons';
import { CATEGORIES } from '../../utils/sampleData';

const CategoryCard = () => {
  return (
    <section className="py-20 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#945c37] bg-[#f4ece1] px-4 py-1.5 rounded-full border border-[#dbcaa8]">
            Curated Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#190f09] mt-3">
            Something Delicious Awaits
          </h2>
          <p className="text-base text-[#52321e]/80 mt-3 font-normal">
            Explore our freshly prepared favorites.
          </p>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-[#fdfbf7] rounded-3xl overflow-hidden border border-[#e7d7c1] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#3b2315]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190f09]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#190f09]/80 backdrop-blur-md text-[#c8963e] text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#c8963e]/40">
                  {cat.badge}
                </span>
                
                <span className="absolute bottom-3 right-4 text-xs font-semibold text-[#fdfbf7]/90 drop-shadow">
                  {cat.itemCount}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#945c37]">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#190f09] mt-1 group-hover:text-[#945c37] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#52321e]/80 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Action Button */}
                <div className="mt-6 pt-4 border-t border-[#f3ebd9] flex items-center justify-between">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#4a2e1d] group-hover:text-[#c8963e] transition-colors"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryCard;
