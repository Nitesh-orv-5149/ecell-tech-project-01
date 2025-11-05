import React from "react";
import { Rocket, FileSignature, Wallet } from "lucide-react";

const PartnerSatisfaction = () => {
  const items = [
    {
      id: 1,
      icon: <Rocket size={48} className="text-cyan-400" />,
      title: "Digital Promotion",
      subtitle: "Boosters",
      color: "text-pink-500",
    },
    {
      id: 2,
      icon: <FileSignature size={48} className="text-cyan-400" />,
      title: "NDA",
      subtitle: "Producted Apps",
      color: "text-pink-500",
    },
    {
      id: 3,
      icon: <Wallet size={48} className="text-cyan-400" />,
      title: "100% Money-Back",
      subtitle: "Guarantee",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="bg-[#020014] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          We Empower Your Digital Brand
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
          Our Way of Ensuring Complete Satisfaction <br /> for Our Partners
        </h2>

        <div className="w-20 h-[3px] bg-cyan-400 mx-auto rounded-full mb-12"></div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300"
            >
              {item.icon}
              <h3 className={`${item.color} font-bold text-lg`}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSatisfaction;
