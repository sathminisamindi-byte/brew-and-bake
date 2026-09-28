import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/common/Button';
import { CoffeeIcon } from '../../components/common/Icons';

const Register = () => {
  return (
    <MainLayout>
      <div className="pt-28 pb-16 bg-[#faf7f2] min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4 bg-[#fdfbf7] p-8 sm:p-10 rounded-3xl border border-[#e7d7c1] shadow-lg">
          
          <div className="text-center space-y-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8963e] to-[#75482b] flex items-center justify-center text-[#fdfbf7] mx-auto shadow-md">
              <CoffeeIcon className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#190f09]">Join Brew &amp; Bake</h1>
            <p className="text-xs text-[#75482b]">Create your free account to order and earn perks</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4a2e1d] mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Sarah Miller"
                className="w-full px-4 py-3 rounded-xl bg-[#f4ece1] border border-[#dbcaa8] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8963e]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4a2e1d] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="hello@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#f4ece1] border border-[#dbcaa8] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8963e]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4a2e1d] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-[#f4ece1] border border-[#dbcaa8] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8963e]"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Create Account
              </Button>
            </div>
          </form>

          <p className="text-center text-xs text-[#75482b] mt-8 pt-6 border-t border-[#f3ebd9]">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-[#945c37] hover:underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
