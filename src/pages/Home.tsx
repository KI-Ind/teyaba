import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <MenuSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;