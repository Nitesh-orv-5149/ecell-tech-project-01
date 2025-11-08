import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DesktopNav = ({ handleScroll, navLinks }) => {
  const navRef = useRef(null);

  // 🟢 Animate on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        scaleX: 0, // start collapsed horizontally
        opacity: 0,
        transformOrigin: "center center", // expand from center
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1, // 1s animation
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-2 mx-auto w-[80vw] 
        rounded-full backdrop-blur-md 
        bg-linear-to-b from-[#0A0014]/50 to-[#1A0A2E]/50 
        text-white py-4 px-6 flex items-center justify-between 
        shadow-lg border border-white/20 z-50"
    >
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

      {/* Nav Links */}
      <ul className="flex items-center space-x-8 text-sm font-semibold tracking-wide">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="cursor-pointer text-[#03D4D7] hover:text-[#F36F21] transition duration-200"
          >
            {link.label}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => handleScroll("contact")}
        className="bg-[#F36F21] hover:bg-[#d45e1b] text-white px-5 py-2 rounded-full font-semibold transition duration-200 shadow-md"
      >
        Get in Touch
      </button>
    </nav>
  );
};

export default DesktopNav;
