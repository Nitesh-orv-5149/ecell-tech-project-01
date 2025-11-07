import React from "react";
import {
  Smartphone,
  Globe,
  Leaf,
  Gamepad2,
  Target,
  Phone,
  PenTool,
  Monitor,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone size={36} className="text-[#03D4D7]" />,
      title: "Mobile App Development",
      description:
        "Powered by your imagination and chain of ideas, we shape the outcome with our expert team of mobile app developers.",
    },
    {
      icon: <Monitor size={36} className="text-[#03D4D7]" />,
      title: "Website Development",
      description:
        "We build high-performance web apps with tailored UI/UX and robust backend systems that scale effortlessly.",
      highlight: true,
    },
    {
      icon: <PenTool size={36} className="text-[#03D4D7]" />,
      title: "Graphic Designing",
      description:
        "Our creative design team crafts stunning visual identities, ensuring brand consistency across platforms.",
    },
    {
      icon: <Globe size={36} className="text-[#03D4D7]" />,
      title: "Social Marketing",
      description:
        "Drive engagement and growth across all major social media platforms with data-backed marketing strategies.",
    },
    {
      icon: <Leaf size={36} className="text-[#03D4D7]" />,
      title: "SEO / Content Writing",
      description:
        "Our SEO experts and content strategists deliver optimized campaigns that increase organic visibility and conversions.",
    },
    {
      icon: <Gamepad2 size={36} className="text-[#03D4D7]" />,
      title: "Game App Development",
      description:
        "Design, develop, and launch immersive gaming experiences for both Android and iOS platforms.",
    },
    {
      icon: <Leaf size={36} className="text-[#03D4D7]" />,
      title: "Android App Development",
      description:
        "Leverage Android’s full potential with our scalable, modern, and secure mobile app development expertise.",
    },
    {
      icon: <Target size={36} className="text-[#03D4D7]" />,
      title: "Cross-platform Apps",
      description:
        "We develop seamless, high-performance apps that work flawlessly across Android and iOS ecosystems.",
    },
    {
      icon: <Phone size={36} className="text-[#03D4D7]" />,
      title: "iPhone App Development",
      description:
        "Build top-tier iOS applications with superior design, speed, and integration for premium user experiences.",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-16">
          <div>
            <p className="text-[#03D4D7] font-semibold uppercase tracking-wider">
              Latest and Greatest Services
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
              Empowering Solutions for <br /> Emerging Needs
            </h2>
            <div className="w-20 h-[3px] bg-[#F36F21] rounded-full mt-4"></div>
          </div>

          <p className="text-gray-400 md:max-w-md leading-relaxed">
            NexNora is a global web & mobile app development company operating in India, USA, Singapore, and UAE. We blend innovation, design, and technology to build scalable, world-class digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-2xl bg-[#0A0013]/60 border transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] border-[#2D2A9E]/30 hover:border-[#03D4D7]/60"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="font-semibold text-lg text-[#03D4D7] group-hover:text-[#F36F21] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
