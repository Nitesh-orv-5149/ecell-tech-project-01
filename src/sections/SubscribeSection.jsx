import React from "react";
// FIX: Correct relative path from 'src/sections/' to 'src/assets/'
import backgroundImage from '../assets/image.png'; 

const SubscribeSection = () => {
  return (
    <section 
      className="relative py-16 px-6 md:px-16 overflow-hidden"
      style={{
        // Using the imported variable in the URL
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-4">
            Subscribe Now
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Subscribe To Get Latest<br />
            Update From Us
          </h2>
          <div className="w-20 h-[3px] bg-cyan-400 rounded-full"></div>
        </div>

        {/* Right Content - Subscribe Button */}
        <div className="flex-shrink-0 ml-8">
          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;