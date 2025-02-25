import React from 'react';

interface Step {
  number: string;
  title: string;
  icon: string;
  description: string;
}

const ServiceFlowSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Strategy',
      icon: 'src/assets/strategy.svg',
      description: 'We begin by thoroughly analyzing your business objectives and understanding end-user requirements. This helps us create a structured plan with low-fidelity wireframes, ensuring a clear roadmap for design and development.',
    },
    {
      number: '02',
      title: 'Design',
      icon: 'src/assets/design.svg',
      description: 'Our team carefully crafts the visual and functional aspects of your product. We focus on creating an intuitive user experience with a well-structured interface, ensuring a seamless blend of aesthetics and usability.',
    },
    {
      number: '03',
      title: 'Develop',
      icon: 'src/assets/develop.svg',
      description: 'Using Agile methodology, we collaborate closely with stakeholders to refine and enhance the product. Continuous iterations allow us to build a robust, user-friendly platform that offers exceptional UI/UX functionality and performance.',
    },
    {
      number: '04',
      title: 'Support',
      icon: 'src/assets/support.svg',
      description: 'We provide ongoing maintenance and technical support to keep your website or application running smoothly. Our team actively monitors performance, resolves bugs, and implements new features to ensure long-term success.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FA9405] to-[#E94822] py-16 w-full overflow-hidden">
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Service Flow</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center relative w-full`}
            >
              <div className="flex items-center relative">
                <div className="text-9xl font-extrabold text-black mr-4">{step.number}</div>
                <h3
                  className={`text-5xl font-bold text-white absolute ${index % 2 === 0 ? '-left-10' : '-right-10'}`}
                  style={{ 
                    transform: 'translateX(25%)', 
                    left: index % 2 === 0 ? '50px' : 'auto', // Move left by -50px for even steps
                    right: index % 2 === 1 ? '175px' : 'auto', // Move right by -50px for odd steps
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <div
                className={`flex w-full max-w-3/4 items-center justify-between bg-white rounded-xl p-6 md:p-10 shadow-lg hover:scale-105 transform transition-transform duration-300 ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <img src={step.icon} alt={step.title} className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#FF6B3D]" />
                <p className="text-gray-600 text-right w-2/3 text-xl font-semibold">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFlowSection;