import React from "react";
import { ShieldCheck, Lock, FileSignature } from "lucide-react";

const WhySection = () => {
  const cards = [
    {
      id: 1,
      icon: <ShieldCheck size={40} className="text-[#03D4D7]" />,
      
      description:
        "At Yuvi Collab, we are a dynamic software solutions company dedicated to empowering businesses through innovative technology and creative strategy. From developing small-scale websites for individual clients to building large, high-performing e-commerce platforms, we provide end-to-end digital solutions that help brands establish a strong online presence. Our expertise extends to mobile app development, custom software design, social media growth, and game development tailored to diverse business needs. What sets Yuvi Collab apart is our commitment to combining technical excellence with creative vision. We don’t just build digital products — we build experiences that engage users and drive growth. Whether you’re a small business owner seeking visibility or a large enterprise looking for scalable solutions, Yuvi Collab delivers technology that works seamlessly for you.Alongside our industry-focused work, we also run a unique educational initiative that connects students and institutions with internship opportunities and expert mentorship through our dedicated platform. This initiative reflects our mission to nurture young talent and bridge the gap between education and the professional world.",
    },
    
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A0013] to-[#1A0A2E] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-8 rounded-2xl relative transition-all duration-300 bg-[#0A0013]/70 backdrop-blur-sm border border-transparent hover:scale-[1.02] ${
              card.highlight
                ? "border-[#F36F21]/70 shadow-md shadow-[#F36F21]/20"
                : "hover:border-[#03D4D7]/50"
            }`}
          >
            {/* Icon + Index */}
            <div className="flex items-center justify-between mb-6">
              {card.icon}
              <span className="text-gray-700 text-3xl font-bold opacity-30">
                0{card.id}.
              </span>
            </div>

            <h3
              className={`text-xl font-semibold mb-4 ${
                card.highlight ? "text-[#F36F21]" : "text-[#03D4D7]"
              }`}
            >
              {card.title}
            </h3>
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
