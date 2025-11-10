import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 overflow-hidden">
      
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center mb-3 sm:mb-4 leading-tight">
        Get in Touch with <span className="text-[#F36F21]">YuviCollab</span>
      </h2>
      
      {/* Subtitle */}
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-2">
        Let's collaborate and create something extraordinary together
      </p>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12 lg:gap-20">
          
          {/* Left Section - Description */}
          <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 w-full">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#03D4D7] leading-tight">
              Let's Build Something Great
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Yuvi Collab stands out for blending technical excellence with creative vision. 
              We craft digital experiences that engage users and drive growth — delivering seamless, 
              scalable solutions for businesses of every size.
            </p>
            
            {/* Social Media Links */}
            <div className="pt-4 sm:pt-5 md:pt-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4">Connect With Us</h4>
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                <a 
                  href="#" 
                  className="bg-[#1a1a3a]/60 hover:bg-[#F36F21] backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
                <a 
                  href="https://x.com/Yuvicollab" 
                  className="bg-[#1a1a3a]/60 hover:bg-[#F36F21] backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                  aria-label="Twitter"
                >
                  <Twitter size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/yuvi_collab?igsh=MTd1ZXozaXVnOGhibg==" 
                  className="bg-[#1a1a3a]/60 hover:bg-[#F36F21] backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-[#1a1a3a]/60 hover:bg-[#F36F21] backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex-1 w-full bg-gradient-to-br from-[#03D4D7]/5 to-[#F36F21]/5 backdrop-blur-xl border border-[#03D4D7]/15 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:border-[#03D4D7]/30 transition-all">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6">Contact Information</h4>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-gradient-to-br from-[#03D4D7]/15 to-[#F36F21]/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg group-hover:from-[#03D4D7]/25 group-hover:to-[#F36F21]/15 transition-all flex-shrink-0">
                  <MapPin size={20} className="text-[#03D4D7] sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Our Location</h5>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed break-words">
                    5th Floor, Spacion Towers, Mind Scape,<br />
                    Hi-tech City Next to Westin Hotel,<br />
                    Hyderabad - 500081. T.S.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-gradient-to-br from-[#03D4D7]/15 to-[#F36F21]/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg group-hover:from-[#03D4D7]/25 group-hover:to-[#F36F21]/15 transition-all flex-shrink-0">
                  <Mail size={20} className="text-[#03D4D7] sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Email Us</h5>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Yuvicollabbp@gmail.com&su=Subject&body=Hello"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-[#F36F21] text-xs sm:text-sm md:text-base transition-colors break-all"
>
  Yuvicollabbp@gmail.com
</a>

                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-gradient-to-br from-[#03D4D7]/15 to-[#F36F21]/10 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg group-hover:from-[#03D4D7]/25 group-hover:to-[#F36F21]/15 transition-all flex-shrink-0">
                  <Phone size={20} className="text-[#03D4D7] sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Call Us</h5>
                  <a 
                    href="tel:+918019184322" 
                    className="text-gray-300 hover:text-[#F36F21] text-xs sm:text-sm md:text-base transition-colors"
                  >
                    +91 80191 84322
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Blended Gradient Elements - Low opacity to blend with other sections */}
      <div className="absolute -top-32 sm:-top-40 md:-top-48 lg:-top-32 right-0 sm:right-5 lg:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-b from-[#03D4D7]/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-40"></div>
      <div className="absolute -bottom-32 sm:-bottom-40 md:-bottom-48 lg:-bottom-32 left-0 sm:left-5 lg:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-t from-[#F36F21]/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-40"></div>
      <div className="hidden sm:block absolute top-1/2 right-1/3 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-gradient-to-b from-[#F36F21]/8 via-transparent to-[#03D4D7]/8 rounded-full blur-3xl pointer-events-none opacity-30"></div>
    </section>
  );
};

export default ContactUs;
