import React from "react";
import {
  Home,
  Plane,
  GraduationCap,
  Truck,
  Calendar,
  ShoppingBag,
  Gamepad2,
  Heart,
  DollarSign,
  UtensilsCrossed,
  Monitor,
  ShoppingCart,
  Gem,
  Car,
  Dumbbell,
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Home size={48} className="text-cyan-400" />,
      name: "Real Estate",
    },
    {
      icon: <Plane size={48} className="text-cyan-400" />,
      name: "Tours & Travels",
    },
    {
      icon: <GraduationCap size={48} className="text-cyan-400" />,
      name: "Education",
    },
    {
      icon: <Truck size={48} className="text-cyan-400" />,
      name: "Transport",
    },
    {
      icon: <Calendar size={48} className="text-cyan-400" />,
      name: "Events",
    },
    {
      icon: <ShoppingBag size={48} className="text-cyan-400" />,
      name: "eCommerce",
    },
    {
      icon: <Gamepad2 size={48} className="text-cyan-400" />,
      name: "Game",
    },
    {
      icon: <Heart size={48} className="text-cyan-400" />,
      name: "HealthCare",
    },
    {
      icon: <DollarSign size={48} className="text-cyan-400" />,
      name: "Finance",
    },
    {
      icon: <UtensilsCrossed size={48} className="text-cyan-400" />,
      name: "Restaurant",
    },
    {
      icon: <Monitor size={48} className="text-cyan-400" />,
      name: "On Demand",
    },
    {
      icon: <ShoppingCart size={48} className="text-cyan-400" />,
      name: "Grocery",
    },
    {
      icon: <Gem size={48} className="text-cyan-400" />,
      name: "Jewellery",
    },
    {
      icon: <Car size={48} className="text-cyan-400" />,
      name: "Automobile",
    },
    {
      icon: <Dumbbell size={48} className="text-cyan-400" />,
      name: "Fitness Center",
    },
  ];

  return (
    <section className="bg-[#020014] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-4">
            Latest and Greatest Services
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Industries We Work With
          </h2>
          <div className="w-20 h-[3px] bg-cyan-400 rounded-full"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-6 p-4 rounded-2xl border border-cyan-800/30 hover:border-cyan-400/70 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-900/40">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-pink-400 group-hover:text-cyan-400 transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;