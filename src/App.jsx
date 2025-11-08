"use client";
import React, { useEffect, useState } from "react";

// Sections & Components
import Home from "./sections/Home";
import NavBar from "./components/Navbar";
import WhySection from "./sections/WhySection";
import PartnerSatisfaction from "./sections/PartnerSatisfaction";
import ServicesSection from "./sections/ServiceSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactUs from "./sections/ContactUs";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      // Optional: add a short delay for a smoother transition
      setTimeout(() => setLoading(false), 2000);
    };

    // If the page is already loaded (like on reload)
    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  // 🔹 Loader Screen
  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <main className="overflow-hidden transition-opacity duration-700">
      <NavBar />
        <section id="home">
    <Home />
  </section>

  <section id="why">
    <WhySection />
  </section>

  <section id="partners">
    <PartnerSatisfaction />
  </section>

  <section id="services">
    <ServicesSection />
  </section>

  <section id="testimonials">
    <TestimonialsSection />
  </section>

  <section id="contact">
    <ContactUs />
  </section>
    </main>
  );
};

export default App;
