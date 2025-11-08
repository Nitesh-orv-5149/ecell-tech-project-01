import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative text-white px-6 md:px-16 py-20 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        Get in Touch with <span className="text-[#F36F21]">NexNora</span>
      </h2>

      <div className="w-full flex justify-center">
        {/* Right - Info */}
        <div className="w-full flex md:flex-row flex-col justify-around md:gap-0 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-[#03D4D7]">
              Let’s Build Something Great
            </h3>
            <p className="text-gray-300 md:text-lg text-sm leading-relaxed max-w-md">
              Yuvi Collab stands out for blending technical excellence with creative vision.
              We craft digital experiences that engage users and drive growth — delivering seamless, 
              scalable solutions for businesses of every size.
            </p>
          </div>

          <div className=" text-gray-300 md:text-lg text-sm">
            <p className="flex items-start gap-4">
              <MapPin size={18} className="text-[#03D4D7]" /> 5th Floor, Spacion Towers, Mind Scape, <br />
              Hi-tech City Next to Westin Hotel , <br />
              Hyderabad - 500081. T.S.
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-[#03D4D7]" /> Yuvicollabbp@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-[#03D4D7]" /> +91 80191 84322
            </p>
                <div className="flex md:flex-row  items-center mt-6 text-gray-500 text-xs border-t border-[#2D2A9E]/40 ">
              <div className="flex gap-3 mb-3 md:mb-0">
                <a href="#" className="hover:text-[#03D4D7]">
                  <Facebook size={18} />
                </a>
                <a href="https://x.com/Yuvicollab" className="hover:text-[#03D4D7]">
                  <Twitter size={18} />
                </a>
                <a href="https://www.instagram.com/yuvi_collab?igsh=MTd1ZXozaXVnOGhibg==" className="hover:text-[#03D4D7]">
                  <Instagram size={18} />
                </a>
                <a href="#" className="hover:text-[#03D4D7]">
                  <Linkedin size={18} />
                </a>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
