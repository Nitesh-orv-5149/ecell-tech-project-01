import React from "react";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full bg-[#0A0013] text-white py-3 px-6 flex items-center justify-between shadow-md fixed z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/yuvilogo.png"
          alt="Nexnora Logo"
          className="h-10 w-auto object-contain"
        />
        <div className="flex flex-col leading-none">
          <span className="text-[#F36F21] text-2xl font-bold">YuviCollab</span>
          <span className="text-xs text-gray-400">Technology Made With Trust</span>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
        <li className="text-[#03D4D7] hover:text-[#00C655] transition duration-200">
          ABOUT US
        </li>

        <li className="flex items-center gap-1 text-[#03D4D7] hover:text-[#00C655] transition duration-200 cursor-pointer">
          SERVICES
          <ChevronDown className="w-4 h-4 text-[#F36F21]" />
        </li>

        <li className="flex items-center gap-1 text-[#03D4D7] hover:text-[#00C655] transition duration-200 cursor-pointer">
          TESTIMONIALS
        </li>

        <li className="text-[#03D4D7] hover:text-[#00C655] transition duration-200">
          CONTACT US
        </li>
      </ul>

      {/* Call to Action */}
      <button className="hidden md:block bg-[#F36F21] hover:bg-[#d45e1b] text-white px-5 py-2 rounded-full font-semibold transition duration-200 shadow-md">
        Get in Touch
      </button>
    </nav>
  );
};

export default NavBar;
