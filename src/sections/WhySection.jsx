import React from "react";
import { ShieldCheck, Lock, FileSignature } from "lucide-react";

const WhySection = () => {
  const cards = [
    {
      id: 1,
      icon: <ShieldCheck size={40} className="text-[#03D4D7]" />,
      title: "Associates First",
      description:
        "Your journey with Nexnora is our passion. Our associate-first culture begins with our commitment to your fulfilling experience with us. Becoming a part of the Nexnora family brings meaning to your work with colleagues that are just as obsessed with quality and excellence as you are. Your best work starts here.",
    },
    {
      id: 2,
      icon: <Lock size={40} className="text-[#03D4D7]" />,
      title: "Nexnora Solicitude",
      description:
        "Nexnora Tech supports our customers with the delivery of mission-critical programs and direct contributions to those very missions. Nexnora Cares is our social responsibility arm, organized to deliver continuous positive impact for underserved communities through self-sustaining solutions.",
    },
    {
      id: 3,
      icon: <FileSignature size={40} className="text-[#03D4D7]" />,
      title: "Industry Certified",
      description:
        "We, as a custom mobile and software app development company, process highly robust technological solutions for your business needs. Our partners choose us from a plethora of other app development agencies because of our rich reserve in experience and versatility.",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative p-8 rounded-2xl overflow-hidden transition-all duration-500 
              bg-[#0A0013]/70 border border-[#2D2A9E]/30 backdrop-blur-sm 
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(to_right,rgba(50,150,255,0.05)_2px,transparent_1px),linear-gradient(to_bottom,rgba(50,150,255,0.05)_2px,transparent_1px)]
              before:bg-[length:40px_40px] before:pointer-events-none before:z-0
              hover:border-[#03D4D7]/80 hover:shadow-[0_0_25px_5px_rgba(3,212,215,0.3)] hover:scale-[1.03]`}
          >
            {/* Content above grid */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                {card.icon}
                <span className="text-gray-200 text-3xl font-bold opacity-30">
                  0{card.id}.
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-[#03D4D7]">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
