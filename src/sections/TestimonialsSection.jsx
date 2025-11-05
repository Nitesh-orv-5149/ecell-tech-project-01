import React from "react";
import { MessageSquareQuote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "William Henry",
      role: "CUSTOMERS, AGENT",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328a2a99?auto=format&fit=crop&w=600&q=80",
      text: "Metus hymenaeos neque aperiam! Etiam excepteur convallis iste, purus, accusantium ab parturient dapibus at integer lectus rhoncus beatae litor.",
    },
    {
      name: "Jenny Watson",
      role: "CUSTOMERS, AGENT",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80",
      text: "Metus hymenaeos neque aperiam! Etiam excepteur convallis iste, purus, accusantium ab parturient dapibus at integer lectus rhoncus beatae litor.",
    },
  ];

  return (
    <section className="bg-[#020014] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div>
            <p className="text-cyan-400 uppercase font-semibold tracking-widest">
              Client's Testimonial
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-3">
              Review's From Our <br /> Happy Clients!
            </h2>
            <div className="w-20 h-[3px] bg-cyan-400 rounded-full"></div>
          </div>

          <div className="max-w-md text-gray-300 leading-relaxed">
            NexnoraTech designs and builds intelligent platforms that unlock
            meaningful experiences, enabling authentic interactions between you
            and your customers.
            <div className="mt-6">
              <button className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-[#020014] transition">
                More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[#090820] p-8 rounded-2xl relative overflow-hidden hover:shadow-lg hover:shadow-cyan-900/40 transition-all duration-300"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {item.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium">
                    {item.role}
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-cyan-400 text-[#020014] rounded-full p-2">
                    <MessageSquareQuote size={16} />
                  </div>
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
