import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const navLinks = [
    { id: "why", label: "ABOUT US" },
    { id: "services", label: "SERVICES" },
    { id: "testimonials", label: "TESTIMONIALS" },
    { id: "contact", label: "CONTACT US" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return isMobile ? (
    <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} handleScroll={handleScroll} navLinks={navLinks} />
  ) : (
    <DesktopNav handleScroll={handleScroll} navLinks={navLinks} />
  );
};

export default NavBar;
