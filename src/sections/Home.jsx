import React, { useEffect, useState } from "react";
import CodingLottie from "../components/codingLottie";

const Home = () => {
  const words = ["Digital", "Professional", "Beyond"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
        setTimeout(() => setIsDeleting(true), 1200); // pause at end of word
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center text-white px-6 overflow-hidden">
      {/* Animation */}
      <div className="sm:mt-0 mt-10">
        <CodingLottie />
      </div>

      {/* Main Text */}
      <div className="flex flex-col items-center justify-center z-10">
        <p className="text-[#03D4D7] text-sm md:text-base tracking-widest uppercase">
          Accelerate Your Digital Transformation
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-gray-300">
            Your Partner in Growth —
          </span>
          <span className="block bg-linear-to-r from-[#2D2A9E] to-[#03D4D7] text-transparent bg-clip-text mt-1">
            {text}
            <span className="animate-pulse text-[#F36F21]">|</span>
          </span>
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl md:max-w-2xl text-base md:text-lg leading-relaxed">
          Yuvi Collab builds intelligent digital experiences that empower
          businesses to grow, adapt, and lead in a connected world.
        </p>
      </div>

      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-[#2D2A9E] opacity-30 blur-[120px] rounded-full -top-40 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Home;
