import React from "react";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full bg-[#020014] text-white py-3 px-6 flex items-center justify-between shadow-md fixed z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <div className="bg-linear-to-r from-blue-500 to-blue-700 text-white text-xl font-bold p-2 rounded-lg">{`</>`}</div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-pink-500 text-2xl font-bold">nexnora</span>
          <span className="text-xs text-white/70">Technology Made With Trust</span>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
        <li className="text-pink-500 hover:text-pink-400 transition">ABOUT US</li>

        <li className="flex items-center gap-1 text-pink-500 hover:text-pink-400 transition cursor-pointer">
          SERVICES
        </li>

        <li className="flex items-center gap-1 text-pink-500 hover:text-pink-400 transition cursor-pointer">
          TESTIMONIALS
        </li>

        <li className="text-pink-500 hover:text-pink-400 transition">CONTACT US</li>
      </ul>
    </nav>
  );
};

export default NavBar;
