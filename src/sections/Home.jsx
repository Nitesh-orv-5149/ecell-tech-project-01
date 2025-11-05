import React from "react";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#020014] text-center text-white px-6">
      {/* Content */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-cyan-400 text-sm md:text-base tracking-widest uppercase">
          Accelerate Your Digital Transformation
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="block">Cutting Edge IT</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            Consulting Firm
          </span>
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl md:max-w-2xl text-base md:text-lg leading-relaxed">
          NexNora creates award-winning Products, memorable Campaigns & 
          remarkable Brands — transforming small businesses into agile, 
          future-ready organizations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition">
            Discover More ✨
          </button>

          <button className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-[#020014] transition">
            Hire Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
