// File path: src/pages/HomePage.jsx

import React from 'react';
import Features from '../components/Features';
import Hero from "../components/Hero";
import FeaturesMobile from "../components/FeaturesMobile";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import GalleryHomePage from "../components/GalleryHomePage";

const HomePage = () => {
  return (
    <div className="lg:pt-[5.25rem]">
      <Hero />
      <Features />
      <AboutUs />
      <Blog />
      <GalleryHomePage />
      <Contact />
      <FeaturesMobile />
    </div>
  );
}

export default HomePage;
