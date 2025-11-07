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

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Right - Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#03D4D7]">
            Let’s Build Something Great
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-md">
            NexNora Tech designs and builds intelligent platforms that unlock
            meaningful experiences and enable authentic interactions between you
            and your customers.
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="text-[#F36F21]" /> Level 7, Suite
              #716, South Block Krishe Nilamani Building, Opp. Durgam Cheruvu
              Metro Station, Madhapur, Hyderabad, Telangana 500081 India
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-[#03D4D7]" /> info@nexnoratech.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-[#03D4D7]" /> +91 9700000000,
              9060000000
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-[#2D2A9E]/40 pt-12">
        <div className="flex justify-around gap-12 text-sm">
          {/* Company Info */}
          <div>
            <h4 className="text-[#F36F21] font-semibold mb-3">
              Our Company
            </h4>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              NexNora Tech is a next-gen consulting firm, helping businesses
              accelerate innovation through technology.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F36F21] font-semibold mb-3">
              Contact Details
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <span className="text-[#03D4D7]">Address:</span> Hyderabad, India
              </li>
              <li>
                <span className="text-[#03D4D7]">Email:</span>{" "}
                info@nexnoratech.com
              </li>
              <li>
                <span className="text-[#03D4D7]">Phone:</span> +91 9700000000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex md:flex-row  items-center mt-12 text-gray-500 text-xs border-t border-[#2D2A9E]/40 pt-6">
          <div className="flex gap-3 mb-3 md:mb-0">
            <a href="#" className="hover:text-[#03D4D7]">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-[#03D4D7]">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-[#03D4D7]">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-[#03D4D7]">
              <Linkedin size={18} />
            </a>
          </div>

          <div></div>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
