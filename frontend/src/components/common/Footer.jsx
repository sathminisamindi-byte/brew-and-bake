import React from 'react';
import { Link } from 'react-router-dom';
import { CoffeeIcon, PhoneIcon, MailIcon, ClockIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-[#190f09] text-[#e7d7c1] border-t border-[#3b2315] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8963e] to-[#75482b] flex items-center justify-center text-[#fdfbf7] shadow-md">
                <CoffeeIcon className="w-5 h-5 text-[#fdfbf7]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#fdfbf7]">
                Brew <span className="text-[#c8963e] font-serif">&</span> Bake
              </span>
            </Link>
            <p className="text-sm text-[#dbcaa8]/80 leading-relaxed italic">
              "Freshly brewed coffee and freshly baked moments."
            </p>
            <p className="text-xs text-[#e7d7c1]/60 leading-relaxed">
              Crafting premium coffee experiences and artisanal bakery delicacies daily with passion and love.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {['Instagram', 'Facebook', 'Twitter', 'Tripadvisor'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  className="w-8 h-8 rounded-full bg-[#3b2315] hover:bg-[#c8963e] text-[#e7d7c1] hover:text-[#190f09] flex items-center justify-center text-xs font-semibold transition-colors duration-300"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#fdfbf7] tracking-wide border-b border-[#3b2315] pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#c8963e] transition-colors flex items-center gap-2">
                  <span className="text-[#c8963e]">•</span> Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#c8963e] transition-colors flex items-center gap-2">
                  <span className="text-[#c8963e]">•</span> Menu & Specials
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c8963e] transition-colors flex items-center gap-2">
                  <span className="text-[#c8963e]">•</span> About Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c8963e] transition-colors flex items-center gap-2">
                  <span className="text-[#c8963e]">•</span> Contact Us
                </a>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#c8963e] transition-colors flex items-center gap-2">
                  <span className="text-[#c8963e]">•</span> View Cart & Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4" id="contact">
            <h3 className="font-serif text-lg font-semibold text-[#fdfbf7] tracking-wide border-b border-[#3b2315] pb-2">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-[#dbcaa8]">
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-[#c8963e] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#e7d7c1]/60">Call Us</p>
                  <a href="tel:+94771234567" className="hover:text-[#c8963e] font-medium transition-colors">
                    +94 77 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-[#c8963e] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#e7d7c1]/60">Email Support</p>
                  <a href="mailto:hello@brewandbake.lk" className="hover:text-[#c8963e] font-medium transition-colors">
                    hello@brewandbake.lk
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#fdfbf7] tracking-wide border-b border-[#3b2315] pb-2">
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm text-[#dbcaa8]">
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-[#c8963e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#fdfbf7]">Monday - Friday</p>
                  <p className="text-xs text-[#e7d7c1]/80">7:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <ClockIcon className="w-5 h-5 text-[#c8963e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#fdfbf7]">Saturday - Sunday</p>
                  <p className="text-xs text-[#e7d7c1]/80">8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-[#3b2315]/80 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#e7d7c1]/60 gap-4">
          <p>© 2026 Brew & Bake. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-[#c8963e] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#c8963e] transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-[#c8963e] transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
