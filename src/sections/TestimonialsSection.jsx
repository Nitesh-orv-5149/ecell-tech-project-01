import React from "react";
import { MessageSquareQuote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "UB Printers Team",
      role: "Client",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328a2a99?auto=format&fit=crop&w=600&q=80",
      text: "Yuvi Collab transformed our online presence. Their creativity and attention to detail helped us attract more customers and showcase our work beautifully.",
    },
    {
      name: "Royal Jewellers",
      role: "Client",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80",
      text: "Professional, reliable, and highly skilled — the Yuvi Collab team perfectly understood our brand and built a website that truly represents who we are",
    },
    {
      name: "Student User",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80",
      text: "The Yuvi Collab platform gave me the opportunity to learn from experts and land an internship relevant to my goals. A truly inspiring initiative.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A0013] to-[#1A0A2E] text-white py-24 px-6 md:px-16 overflow-hidden">
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
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[#F36F21] opacity-80">
                <MessageSquareQuote size={28} />
              </div>

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
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#03D4D7]/50"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#F36F21] rounded-full p-2 shadow-md shadow-[#F36F21]/30">
                    <MessageSquareQuote size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient gradient glows */}
      <div className="absolute w-[600px] h-[600px] bg-[#2D2A9E] opacity-20 blur-[150px] -top-40 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#03D4D7] opacity-15 blur-[120px] bottom-0 right-0"></div>
    </section>
  );
};

export default TestimonialsSection;
