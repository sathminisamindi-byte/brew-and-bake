import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf7f2] text-[#2c1d11]">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
