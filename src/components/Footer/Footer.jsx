import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-white">Bazzarify</h2>
          <p className="text-sm mt-2 text-gray-400">
            Delivering essentials, electronics, fashion and more with quality you can trust.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/fashion" className="hover:text-white transition">Fashion</a></li>
            <li><a href="/electronics" className="hover:text-white transition">Electronics</a></li>
            <li><a href="/allProducts" className="hover:text-white transition">AllProducts</a></li>
            <li><a href="/cart" className="hover:text-white transition">Cart</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
            {/* <a href="#" className="hover:text-white transition"><FaFacebookF /></a> */}
            {/* <a href="#" className="hover:text-white transition"><FaInstagram /></a> */}
            {/* <a href="#" className="hover:text-white transition"><FaTwitter /></a> */}
            <a href="https://www.linkedin.com/in/dhruvkumar2006" className="hover:text-white transition"><FaLinkedinIn /></a>
            <a href="tel:+91870826XXXX" className="flex items-center space-x-2 hover:text-white transition">
            <FaPhone />
            <span>+91 870826XXXX</span>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Bazzarify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
