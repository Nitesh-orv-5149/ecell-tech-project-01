"use client";
import React from "react";
import { X, Menu } from "lucide-react";

const MobileNav = ({ isOpen, setIsOpen, handleScroll, navLinks }) => {
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

      {/* Hamburger */}
      <button
        className="lg:hidden text-[#03D4D7] hover:text-[#F36F21] transition"
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

      {/* Drawer */}
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
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-[#03D4D7] hover:text-[#F36F21] transition cursor-pointer"
            >
              {link.label}
            </li>
          ))}
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

export default MobileNav;
