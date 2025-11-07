"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-[#0A0013] to-[#1A0A2E] text-white py-4 px-6 flex items-center justify-between shadow-lg z-50">
      {/* Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => handleScroll("home")}
      >
        <img
          src="/yuvilogo.png"
          alt="YuviCollab Logo"
          className="h-10 w-auto object-contain"
        />
        <div className="flex flex-col leading-none">
          <span className="text-[#F36F21] text-2xl font-bold">YuviCollab</span>
          <span className="text-xs text-gray-400">
            Technology Made With Trust
          </span>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
        <li
          onClick={() => handleScroll("why")}
          className="cursor-pointer text-[#03D4D7] hover:text-[#F36F21] transition duration-200"
        >
          ABOUT US
        </li>

        <li
          onClick={() => handleScroll("services")}
          className="cursor-pointer flex items-center gap-1 text-[#03D4D7] hover:text-[#F36F21] transition duration-200"
        >
          SERVICES
        </li>

        <li
          onClick={() => handleScroll("testimonials")}
          className="cursor-pointer text-[#03D4D7] hover:text-[#F36F21] transition duration-200"
        >
          TESTIMONIALS
        </li>

        <li
          onClick={() => handleScroll("contact")}
          className="cursor-pointer text-[#03D4D7] hover:text-[#F36F21] transition duration-200"
        >
          CONTACT US
        </li>
      </ul>

      {/* Desktop CTA */}
      <button
        onClick={() => handleScroll("contact")}
        className="hidden md:block bg-[#F36F21] hover:bg-[#d45e1b] text-white px-5 py-2 rounded-full font-semibold transition duration-200 shadow-md"
      >
        Get in Touch
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#03D4D7] hover:text-[#F36F21] transition"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={26} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-linear-to-b from-[#0A0013] to-[#1A0A2E] shadow-xl border-l border-[#2D2A9E]/50 transform transition-transform duration-500 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2A9E]/50">
          <span className="text-[#F36F21] font-bold text-lg">YuviCollab</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-[#F36F21] transition"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-8 space-y-6 text-base font-semibold tracking-wide">
          <li
            onClick={() => handleScroll("why")}
            className="text-[#03D4D7] hover:text-[#F36F21] transition cursor-pointer"
          >
            ABOUT US
          </li>
          <li
            onClick={() => handleScroll("services")}
            className="flex items-center gap-1 text-[#03D4D7] hover:text-[#F36F21] transition cursor-pointer"
          >
            SERVICES
          </li>
          <li
            onClick={() => handleScroll("testimonials")}
            className="text-[#03D4D7] hover:text-[#F36F21] transition cursor-pointer"
          >
            TESTIMONIALS
          </li>
          <li
            onClick={() => handleScroll("contact")}
            className="text-[#03D4D7] hover:text-[#F36F21] transition cursor-pointer"
          >
            CONTACT US
          </li>
        </ul>

        <div className="px-6 mt-auto mb-10">
          <button
            onClick={() => handleScroll("contact")}
            className="w-full bg-[#F36F21] hover:bg-[#d45e1b] text-white py-3 rounded-full font-semibold transition duration-200 shadow-md"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
