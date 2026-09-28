import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Hero from '../../components/home/Hero';
import CategoryCard from '../../components/home/CategoryCard';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import AboutSection from '../../components/home/AboutSection';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Reviews from '../../components/home/Reviews';
import CTASection from '../../components/home/CTASection';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <CategoryCard />
      <FeaturedProducts />
      <AboutSection />
      <WhyChooseUs />
      <Reviews />
      <CTASection />
    </MainLayout>
  );
};

export default Home;
