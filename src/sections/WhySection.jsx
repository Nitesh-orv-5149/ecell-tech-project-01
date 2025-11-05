import React from "react";
import { ShieldCheck, Lock, FileSignature } from "lucide-react";

const WhySection = () => {
  const cards = [
    {
      id: 1,
      icon: <ShieldCheck size={40} className="text-cyan-400" />,
      title: "Associates First",
      description:
        "Your journey with Nexnora is our passion. Our associate-first culture begins with our commitment to your fulfilling experience with us. Becoming a part of the Nexnora family brings meaning to your work with colleagues that are just as obsessed with quality and excellence as you are. Your best work starts here.",
    },
    {
      id: 2,
      icon: <Lock size={40} className="text-cyan-400" />,
      title: "Nexnora Solicitude",
      description:
        "Nexnora Tech supports our customers with the delivery of mission-critical programs and direct contributions to those very missions. Nexnora Cares is our social responsibility arm, organized to deliver continuous positive impact for underserved communities through self-sustaining solutions.",
      highlight: true,
    },
    {
      id: 3,
      icon: <FileSignature size={40} className="text-cyan-400" />,
      title: "Industry Certified",
      description:
        "We, as a custom mobile and software app development company, process highly robust technological solutions for your business needs. Our partners choose us from a plethora of other app development agencies because of our rich reserve in experience and versatility.",
    },
  ];

  return (
    <section className="bg-[#020014] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-8 rounded-2xl relative transition-all duration-300 ${
              card.highlight
                ? "border border-cyan-400/80 shadow-lg shadow-cyan-900/40"
                : "border border-transparent hover:border-cyan-400/50"
            }`}
          >
            {/* Icon + Index */}
            <div className="flex items-center justify-between mb-6">
              {card.icon}
              <span className="text-gray-700 text-3xl font-bold opacity-30">
                0{card.id}.
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
