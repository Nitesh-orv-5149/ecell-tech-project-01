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
      icon: <Smartphone size={36} className="text-cyan-400" />,
      title: "Mobile App Development",
      description:
        "Powered by your imagination and chain of ideas, we shape the outcome with our team of mobile app developers.",
    },
    {
      icon: <Monitor size={36} className="text-cyan-400" />,
      title: "Website Development",
      description:
        "We are a top-rated Web Application Development Company. Kickstart your customized and engaging web app with our services.",
      highlight: true,
    },
    {
      icon: <PenTool size={36} className="text-cyan-400" />,
      title: "Graphic Designing",
      description:
        "We are widely known as a leading graphic design company with a team of mobile app developers who deliver robust apps.",
    },
    {
      icon: <Globe size={36} className="text-cyan-400" />,
      title: "Social Marketing",
      description:
        "Leading social media marketing service provider that can drive your social media channels like Facebook, Twitter, LinkedIn, and Instagram.",
    },
    {
      icon: <Leaf size={36} className="text-cyan-400" />,
      title: "SEO/Content Writing",
      description:
        "We provide optimized solutions that can improve organic search ranking and better engagement with faster maximum conversions.",
    },
    {
      icon: <Gamepad2 size={36} className="text-cyan-400" />,
      title: "Game App Development",
      description:
        "Create, launch, and operate your app with us — the leader in mobile game development companies in India, USA, and UAE.",
    },
    {
      icon: <Leaf size={36} className="text-cyan-400" />,
      title: "Android App Development",
      description:
        "Android is the market leader of the OS domain, and we dominate skillfully in it with the latest tools and tech.",
    },
    {
      icon: <Target size={36} className="text-cyan-400" />,
      title: "Cross-platform Mobile App",
      description:
        "Cross-platform app development for both Android and iOS is our forte, complemented with frameworks like React Native and Xamarin.",
    },
    {
      icon: <Phone size={36} className="text-cyan-400" />,
      title: "iPhone App Development",
      description:
        "We know what it takes to develop flawless iPhone apps — crafted for over 100+ clients across the globe.",
    },
  ];

  return (
    <section className="bg-[#020014] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-14">
          <div>
            <p className="text-cyan-400 font-semibold uppercase tracking-wider">
              Latest and Greatest Services
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
              Empowering Solutions for <br /> Emerging Needs
            </h2>
            <div className="w-20 h-[3px] bg-cyan-400 rounded-full mt-4"></div>
          </div>

          <p className="text-gray-300 md:max-w-md leading-relaxed">
            NexNora is a global web & mobile app development company located in
            India, USA, Singapore, and UAE. We are one of the world’s leading
            mobility firms, where innovative thinking, inspiring minds, and
            passion blend to forge extraordinary impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                service.highlight
                  ? "border-cyan-400/80 shadow-lg shadow-cyan-900/40"
                  : "border-cyan-800/30 hover:border-cyan-400/70"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
              <button className="text-cyan-400 text-sm font-semibold mt-4 flex items-center gap-1 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
