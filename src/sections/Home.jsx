import React, { useEffect, useState } from "react";

const Home = () => {
  const words = ["Cutting Edge IT", "Innovative Tech", "AI-Driven Solutions"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#0A0013] to-[#1A0A2E] text-center text-white px-6 overflow-hidden">
      {/* Content */}
      <div className="flex flex-col items-center justify-center space-y-6 z-10">
        <p className="text-[#03D4D7] text-sm md:text-base tracking-widest uppercase">
          Accelerate Your Digital Transformation
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="block bg-gradient-to-r from-[#2D2A9E] to-[#03D4D7] text-transparent bg-clip-text">
            {text}
            <span className="animate-pulse text-[#F36F21]">|</span>
          </span>
          <span className="block text-[#F36F21] mt-2">Consulting Firm</span>
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl md:max-w-2xl text-base md:text-lg leading-relaxed">
          NexNora builds intelligent, data-driven systems that empower
          organizations to evolve, adapt, and thrive in a digital-first world.
        </p>

        <div className="pt-6">
          <button className="px-10 py-3 rounded-full bg-[#F36F21] hover:bg-[#d65e1b] text-white font-semibold shadow-lg hover:shadow-[#F36F21]/40 transition duration-200">
            Discover More ✨
          </button>
        </div>
      </div>

      {/* Subtle glowing background elements */}
      <div className="absolute w-[600px] h-[600px] bg-[#2D2A9E] opacity-30 blur-[120px] rounded-full -top-40 left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#03D4D7] opacity-20 blur-[100px] bottom-0 right-0"></div>
    </section>
  );
};

export default Home;
