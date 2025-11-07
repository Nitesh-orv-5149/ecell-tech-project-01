import React from "react";
import { Phone } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="bg-[#020014] text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-4">
            Call to Action
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            We help big develop into bigger
          </h2>
          <div className="w-20 h-[3px] bg-cyan-400 rounded-full mb-8"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-6xl">
          <p>
            NexNora delivers seamless app development opportunities to startups and enterprises with modern IT operations integrated into the development approach. With flexible architecture, unified coding standards, and optimized development techniques we build products that resonate with the tech-driven requirements of today's and tomorrow's world. As one of the top mobile app development companies, we nurture your ideas to develop them into a fully-featured app that not only competes in the market but stays ahead of it.
          </p>
          
          <p>
            Our team of experts is highly trained to pick out the best engagement model, team & approach established on the requirements, time, size, and budget of your project. We are a premium software development company that delivers truly outstanding solutions to our clients. We provide top-notch web and mobile app development services by using and improving latest technologies that are out there. Anything coming out from SemiDot is of the highest quality and second to none.
          </p>
          
          <p>
            We have a handpicked selection of the finest web & mobile app developers, who always believe any task can be done more smartly, and any existing system can be challenged, and ultimately, improved. Our services have always been client-oriented, we value your happiness and business more than anything else. It has been so, since when we started as a team of 3 enthusiasts, to right up until now, and we hope for it to be the same way for years to come.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-16">
          {/* Make Appointment Button */}
          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
            MAKE APPOINTMENT
          </button>

          {/* Get Free Consultation */}
          <div className="flex items-center gap-4">
            <div className="bg-cyan-400 p-4 rounded-full">
              <Phone size={24} className="text-black" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                GET A FREE CONSULTATION
              </p>
              <p className="text-cyan-400 font-bold text-2xl">
                9704584999
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-pink-400/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-cyan-400/10 rounded-full"></div>
    </section>
  );
};

export default CallToActionSection;