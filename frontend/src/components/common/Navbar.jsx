import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CoffeeIcon, ShoppingBagIcon, MenuIcon, CloseIcon, UserIcon } from './Icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#190f09]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#3b2315]/60'
          : 'bg-gradient-to-b from-[#190f09]/90 via-[#190f09]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8963e] to-[#75482b] flex items-center justify-center text-[#fdfbf7] shadow-md group-hover:scale-105 transition-transform">
              <CoffeeIcon className="w-5 h-5 text-[#fdfbf7]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#fdfbf7] group-hover:text-[#c8963e] transition-colors">
                Brew <span className="text-[#c8963e] font-serif">&</span> Bake
              </span>
              <span className="text-[10px] tracking-widest text-[#dbcaa8] uppercase -mt-1">
                Cafe & Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.path.startsWith('/#')) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-sm font-medium tracking-wide text-[#e7d7c1] hover:text-[#c8963e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c8963e] hover:after:w-full after:transition-all"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#c8963e] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#c8963e]'
                        : 'text-[#e7d7c1] hover:text-[#c8963e] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c8963e] hover:after:w-full after:transition-all'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-[#e7d7c1] hover:text-[#c8963e] transition-colors rounded-full hover:bg-[#3b2315]/40"
              aria-label="View Shopping Cart"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-[#c8963e] text-[#190f09] text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-[#190f09]">
                2
              </span>
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#fdfbf7] border border-[#c8963e]/60 rounded-full hover:bg-[#c8963e] hover:text-[#190f09] transition-all duration-300 shadow-sm"
            >
              <UserIcon className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              to="/cart"
              className="relative p-2 text-[#e7d7c1] hover:text-[#c8963e]"
              aria-label="Shopping Cart"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#c8963e] text-[#190f09] text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e7d7c1] hover:text-[#c8963e] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#190f09] border-b border-[#3b2315] px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => {
              if (link.path.startsWith('/#')) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="px-3 py-2 text-base font-medium text-[#e7d7c1] hover:bg-[#3b2315] hover:text-[#c8963e] rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#3b2315] text-[#c8963e] font-semibold'
                        : 'text-[#e7d7c1] hover:bg-[#3b2315] hover:text-[#c8963e]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[#3b2315] flex flex-col space-y-2">
            <Link
              to="/login"
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#190f09] bg-[#c8963e] rounded-full hover:bg-[#b5832e] transition-colors"
            >
              Sign In / Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
