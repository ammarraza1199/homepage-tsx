import React from 'react';
import HeroSection from './HeroSection.tsx'; // Remove .jsx extension
import ServicesSection from './ServicesSection.tsx'; // Remove .jsx extension
import ServiceFlowSection from './ServiceFlowSection.tsx'; // Remove .jsx extension

const Home: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: `#FBF5E5` }}>
      <HeroSection />
      <ServicesSection />
      <ServiceFlowSection />
      {/* Add more sections here as needed */}
    </div>
  );
};

export default Home;