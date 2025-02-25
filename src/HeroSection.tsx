import React from "react";
import { TypeAnimation } from "react-type-animation";
import homeVideo from "./assets/home_video.mp4"; // Adjust the path if necessary

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen">
      {/* Left Side - Text Content */}
      <div
        className="w-1/2 bg-gradient-to-b from-[rgba(250,148,5,0.8)] to-[rgba(233,72,34,0.9)] text-white flex flex-col justify-center items-start p-16"
      >
        <h1 className="text-5xl font-bold mb-4">
          <TypeAnimation
            sequence={["RGESIndia", 1000, "RGESIndia"]}
            speed={1}
            repeat={Infinity}
            cursor={false}
          />
        </h1>
        <div className="w-75 h-1 bg-white mb-4"></div> {/* Separator Line */}
        <p className="text-xl leading-relaxed static-description">
          RGESIndia is committed to driving innovation and excellence in
          technology and education. Our mission is to empower future leaders
          with the skills and knowledge needed to thrive in a rapidly evolving
          digital world. We focus on fostering creativity, strategic thinking,
          and a passion for continuous learning.
        </p>
      </div>

      {/* Right Side - Video Content */}
      <div className="w-1/2 relative"> {/* Remove debugging border */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src={homeVideo} // Use the imported video file
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;