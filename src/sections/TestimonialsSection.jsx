import React from "react";
import { MessageSquareQuote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "UB Printers Team",
      role: "Client",
      text: "Yuvi Collab transformed our online presence. Their creativity and attention to detail helped us attract more customers and showcase our work beautifully.",
    },
    {
      name: "Royal Jewellers",
      role: "Client",
      text: "Professional, reliable, and highly skilled — the Yuvi Collab team perfectly understood our brand and built a website that truly represents who we are",
    },
    {
      name: "Student User",
      role: "Customer",
      text: "The Yuvi Collab platform gave me the opportunity to learn from experts and land an internship relevant to my goals. A truly inspiring initiative.",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div>
            <p className="text-[#03D4D7] uppercase font-semibold tracking-widest">
              Client Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-3">
              Hear What Our Clients <br /> Say About Us
            </h2>
            <div className="w-20 h-[3px] bg-[#F36F21] rounded-full"></div>
          </div>

          <div className="max-w-md text-gray-400 leading-relaxed">
            NexNoraTech builds intelligent platforms that create meaningful,
            measurable impact — connecting businesses and users through
            technology that performs with precision.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative bg-[#0A0013]/70 border border-[#2D2A9E]/40 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#03D4D7]/60 hover:scale-[1.02]"
            >
              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                “{item.text}”
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {item.name}
                  </h3>
                  <p className="text-[#03D4D7] text-sm font-medium uppercase tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
