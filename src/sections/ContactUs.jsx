import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronUp } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-[#020014] text-white px-6 md:px-16 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-6 text-center">
            Contact Us !
            </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left - Form */}
        <div className="bg-[#0e0e10] p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#070510] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-[#070510] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#070510] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Your message (optional)</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#070510] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="border-2 border-cyan-400 text-cyan-400 rounded-full px-8 py-3 font-semibold hover:bg-cyan-400 hover:text-[#020014] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-cyan-400">Our Company</h3>
          <p className="text-gray-300 leading-relaxed max-w-md">
            Nexnora Tech designs and builds intelligent platforms that unlock meaningful experiences,
            enabling authentic interactions between you and your customers.
          </p>

          <div className="space-y-2 text-gray-300">
            <p className="flex items-start gap-2"><MapPin size={18} className="text-cyan-400" /> Level 7, Suite #716, 718,743 South Block Krishe Nilamani Building, Opp. Durgam Cheruvu Metro Station, Madhapur, Hyderabad, Telangana 500081 India</p>
            <p className="flex items-center gap-2"><Mail size={18} className="text-cyan-400" /> info@nexnoratech.com</p>
            <p className="flex items-center gap-2"><Phone size={18} className="text-cyan-400" /> +91 9700000000, 9060000000</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-cyan-900/30 pt-12">
        <div className="grid md:grid-cols-3 gap-12 text-sm">
          {/* Company Info */}
          <div>
            <h4 className="text-cyan-400 font-semibold mb-3">Our Company</h4>
            <p className="text-gray-400 max-w-xs">
              Nexnora Tech designs and builds intelligent platforms that unlock meaningful experiences.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cyan-400 font-semibold mb-3">Contact Detail</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Address: Level 7, Suite #716, Hyderabad, India</li>
              <li>Email: info@nexnoratech.com</li>
              <li>Phone: +91 9700000000</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cyan-400 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Solutions", "Careers", "Contact Us"].map((link, idx) => (
                <li key={idx} className="text-gray-400 hover:text-cyan-400 cursor-pointer border-b border-gray-700/50 w-fit">
                  {link.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-gray-400 text-xs border-t border-gray-800 pt-6">
          <div className="flex items-center gap-4 mb-3 md:mb-0">
            <a href="#" className="hover:text-cyan-400">Support</a> |
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a> |
            <a href="#" className="hover:text-cyan-400">Terms & Condition</a>
          </div>

          <div className="flex gap-3 mb-3 md:mb-0">
            <a href="#" className="hover:text-cyan-400"><Facebook size={18} /></a>
            <a href="#" className="hover:text-cyan-400"><Twitter size={18} /></a>
            <a href="#" className="hover:text-cyan-400"><Instagram size={18} /></a>
            <a href="#" className="hover:text-cyan-400"><Linkedin size={18} /></a>
          </div>

          <p className="text-gray-500">Copyright © 2023 Nexnoratech. All Rights Reserved</p>
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-white text-[#020014] p-3 rounded-full shadow-lg hover:bg-cyan-400 transition"
        >
          <ChevronUp size={20} />
        </button>
      </footer>
    </section>
  );
};

export default ContactUs;
