import React from "react";
import Lottie from "lottie-react";
import codingLottie from "../assets/animation/codingLottie.json"; // adjust path based on your structure

const CodingLottie = () => {
  return (
    <div className="flex items-center justify-center w-full h-[260px]">
      <Lottie
        animationData={codingLottie}
        loop={true}
        autoplay={true}
        className="w-70 h-70 sm:w-100 sm:h-100"
      />
    </div>
  );
};

export default CodingLottie;
