import React from "react";
import { Code2, Layers, GraduationCap } from "lucide-react";;

const WhySection = () => {
  const cards = [
  {
    id: 1,
    icon: <Code2 size={40} className="text-[#03D4D7]" />,
    title: "Innovative Digital Solutions",
    description:
      "At Yuvi Collab, we are a dynamic software solutions company empowering businesses through innovation and creativity. From small-scale websites to large e-commerce platforms, we deliver end-to-end digital solutions that strengthen brand presence and performance.",
  },
  {
    id: 2,
    icon: <Layers size={40} className="text-[#03D4D7]" />,
    title: "Creative & Scalable Technology",
    description:
      "Our expertise spans mobile app development, custom software design, social media growth, and game development, all tailored to diverse business needs. We blend technical excellence with creative vision — building not just digital products, but engaging experiences that drive growth.",
  },
  {
    id: 3,
    icon: <GraduationCap size={40} className="text-[#03D4D7]" />,
    title: "Empowering Future Talent",
    description:
      "Beyond our industry work, we also lead an educational initiative connecting students and institutions with internship opportunities and expert mentorship. This reflects our mission to nurture young talent and bridge the gap between education and the professional world.",
  },
];

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
              About Us
            </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
  key={card.id}
  className="relative p-8 rounded-2xl bg-[#0A0013]/70 border border-[#2D2A9E]/30 
  backdrop-blur-sm overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
>
  {/* 🔹 Animated perimeter border */}
  <span
    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    style={{
      background:
        "linear-gradient(90deg, #03D4D7, transparent 50%, transparent 100%)",
      backgroundSize: "200% 200%",
      animation: "borderMove 2s linear infinite",
      mask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      padding: "2px",
    }}
  ></span>

  {/* 🔹 Content */}
  <div className="relative z-10">
    <div className="flex items-center justify-between mb-6">{card.icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-[#03D4D7]">{card.title}</h3>
    <p className="text-gray-300 leading-relaxed text-sm">{card.description}</p>
  </div>

  {/* 🔹 Inline keyframes for animation */}
  <style>{`
    @keyframes borderMove {
      0% { background-position: 0% 0%; }
      100% { background-position: 200% 0%; }
    }
  `}</style>
</div>

        ))}
      </div>
    </section>
  );
};

export default WhySection;
