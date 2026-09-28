import React from 'react';
import { StarIcon } from '../common/Icons';
import { REVIEWS } from '../../utils/sampleData';

const Reviews = () => {
  return (
    <section className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#945c37] bg-[#f4ece1] px-4 py-1.5 rounded-full border border-[#dbcaa8]">
            Customer Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#190f09] mt-3">
            What Our Customers Say
          </h2>
          <p className="text-base text-[#52321e]/80 mt-3 font-light">
            Real stories from coffee enthusiasts &amp; pastry lovers who visit us daily.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#fdfbf7] p-8 rounded-3xl border border-[#e7d7c1] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Quote Icon Background watermark */}
              <div className="absolute top-6 right-6 text-5xl font-serif text-[#f4ece1] font-bold select-none pointer-events-none group-hover:text-[#e7d7c1] transition-colors">
                “
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex text-[#c8963e] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" filled={true} />
                  ))}
                </div>

                {/* Review Comment */}
                <p className="text-sm sm:text-base text-[#3b2315] italic leading-relaxed mb-6 relative z-10">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#f3ebd9]">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#4a2e1d] to-[#75482b] text-[#fdfbf7] font-bold text-sm flex items-center justify-center shadow-sm">
                  {rev.avatar}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#190f09]">
                    {rev.name}
                  </h3>
                  <p className="text-xs text-[#945c37] font-medium">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
