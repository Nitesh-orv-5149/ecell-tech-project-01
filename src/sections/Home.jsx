"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import CodingLottie from "../components/codingLottie";

const Home = () => {
  // 🧠 Typing Words
  const words = ["Digital", "Professional", "Beyond"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 🎬 GSAP Refs
  const sectionRef = useRef(null);
  const lottieRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  // ⌨️ Typing Effect Logic
  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200); // pause before erase
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);

  // 🎞️ GSAP Animation on Load
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.1 });
    tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      .fromTo(
        lottieRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
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
      {/* 🔹 Lottie Animation */}
      <div ref={lottieRef} className="">
        <CodingLottie />
      </div>

      {/* 🔹 Main Text */}
      <div
        ref={headingRef}
        className="flex flex-col items-center justify-center z-10"
      >
        <p className="text-[#03D4D7] text-sm md:text-base tracking-widest uppercase">
          Accelerate Your Digital Transformation
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-gray-300">
            Your Partner in Growth
          </span>
          <span className="block bg-linear-to-r from-[#2D2A9E] to-[#03D4D7] text-transparent bg-clip-text mt-1">
            {text}
            <span className="animate-pulse text-[#F36F21]">|</span>
          </span>
        </h1>
      </div>

      {/* 🔹 Paragraph */}
      <p
        ref={paraRef}
        className="text-gray-400 mt-3 max-w-xl md:max-w-2xl text-base md:text-lg leading-relaxed"
      >
        Yuvi Collab builds intelligent digital experiences that empower
        businesses to grow, adapt, and thrive in a connected world.
      </p>

      {/* 🔹 Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#2D2A9E] opacity-30 blur-[120px] rounded-full -top-40 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Home;
