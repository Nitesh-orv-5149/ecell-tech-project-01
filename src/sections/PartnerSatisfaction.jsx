import React from "react";
import { Rocket, FileSignature, Wallet } from "lucide-react";

const PartnerSatisfaction = () => {
  const items = [
    {
      id: 1,
      icon: <Rocket size={48} className="text-[#03D4D7]" />,
      title: "Digital Promotion",
      subtitle: "Boosters",
      color: "text-[#F36F21]",
    },
    {
      id: 2,
      icon: <FileSignature size={48} className="text-[#03D4D7]" />,
      title: "NDA",
      subtitle: "Protected Apps",
      color: "text-[#F36F21]",
    },
    {
      id: 3,
      icon: <Wallet size={48} className="text-[#03D4D7]" />,
      title: "100% Money-Back",
      subtitle: "Guarantee",
      color: "text-[#F36F21]",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <p className="text-[#03D4D7] font-semibold uppercase tracking-widest">
          We Empower Your Digital Brand
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
          Our Way of Ensuring Complete Satisfaction <br /> for Our Partners
        </h2>

        <div className="w-20 h-[3px] bg-[#F36F21] mx-auto rounded-full mb-12"></div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-[#0A0013]/60 border border-transparent hover:border-[#03D4D7]/50 hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-4 bg-[#1A0A2E]/60 rounded-full border border-[#03D4D7]/30">
                {item.icon}
              </div>
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
