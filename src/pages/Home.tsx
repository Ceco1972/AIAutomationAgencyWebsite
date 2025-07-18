import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <CaseStudies />
      <Testimonials />
    </>
  );
};

export default Home;