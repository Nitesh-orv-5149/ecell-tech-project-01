import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import CodingLottie from "../components/codingLottie";

const Home = () => {
  const words = ["Cutting Edge IT", "Innovative Tech", "AI-Driven Solutions"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const sectionRef = useRef(null);
  const lottieRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  // ⌨️ Typing effect
  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // 🎬 GSAP Animation (Reveal after 1.1s)
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.1 }); // start after 1.1s

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power1.out" }
    )
      .fromTo(
        lottieRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        headingRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-center text-white px-6 overflow-hidden"
    >
      {/* Lottie animation */}
      <div ref={lottieRef} className="sm:mt-0 mt-10">
        <CodingLottie />
      </div>

      {/* Main text content */}
      <div
        ref={headingRef}
        className="flex flex-col items-center justify-center z-10"
      >
        <p className="text-[#03D4D7] text-sm md:text-base tracking-widest uppercase">
          Accelerate Your Digital Transformation
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="block bg-linear-to-r from-[#2D2A9E] to-[#03D4D7] text-transparent bg-clip-text">
            {text}
            <span className="animate-pulse text-[#F36F21]">|</span>
          </span>
          <span className="block text-[#F36F21] mt-2">Software Company</span>
        </h1>
      </div>

      <p
        ref={paraRef}
        className="text-gray-400 mt-3 max-w-xl md:max-w-2xl text-base md:text-lg leading-relaxed"
      >
        NexNora builds intelligent, data-driven systems that empower
        organizations to evolve, adapt, and thrive in a digital-first world.
      </p>

      {/* Subtle background glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#2D2A9E] opacity-30 blur-[120px] rounded-full -top-40 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Home;
