import React, { useRef } from 'react';

interface Service {
  title: string;
  description: string;
  image: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Cyber Security',
      description: 'Protecting your business with 24/7 monitoring, threat detection, audits, and encryption.',
      image: 'src/assets/cyber_security.svg', // Replace with your image URL
    },
    {
      title: 'Business Consulting',
      description: 'Expert guidance for strategy, growth, process optimization, and performance improvement.',
      image: 'src/assets/B_D.svg', // Replace with your image URL
    },
    {
      title: 'Governance Risk Management & Compliance',
      description: 'Managing risks, ensuring compliance, and developing policies for business security.',
      image: 'src/assets/GRMC.svg', // Replace with your image URL
    },
    {
      title: 'Skill Development',
      description: 'Empowering teams with training, leadership programs, workshops, and certifications.',
      image: 'src/assets/s_d.svg', // Replace with your image URL
    },
    {
      title: 'Web Development',
      description: 'Building responsive, custom websites with e-commerce, CMS, UI/UX, and optimization.',
      image: 'src/assets/web_development.svg', // Replace with your image URL
    },
    {
      title: 'App Development',
      description: 'Creating high-performance mobile and desktop apps with seamless UI/UX and maintenance.',
      image: 'src/assets/app.svg', // Replace with your image URL
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance for transformation, infrastructure, cloud, and IT optimization.',
      image: 'src/assets/it_c.svg', // Replace with your image URL
    },
    {
      title: 'Technology Trainings',
      description: 'Upskilling teams with hands-on workshops, certifications, and the latest tech updates.',
      image: 'src/assets/tech_t.svg', // Replace with your image URL
    },
    {
      title: 'Academic Projects Support',
      description: 'Expert guidance in planning, implementation, documentation, and quality assurance.',
      image: 'src/assets/APS.svg', // Replace with your image URL
    },
    // Add more services here
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = 450; // Width of each service block
      const scrollAmount = container.scrollLeft - cardWidth;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = 450; // Width of each service block
      const scrollAmount = container.scrollLeft + cardWidth;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 overflow-hidden relative services-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          We have years of experience for helping consulting services and business solutions
        </h2>
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            className="navigation-button left"
            onClick={scrollLeft}
          >
            &larr;
          </button>
          {/* Right Navigation Button */}
          <button
            className="navigation-button right"
            onClick={scrollRight}
          >
            &rarr;
          </button>
          <div ref={containerRef} className="services-container">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-block"
              >
                <div className="whitespace-normal">
                  {/* Circular Image Container */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-black-600 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm font-semibold break-words">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;