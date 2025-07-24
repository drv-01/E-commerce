import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { DiAtom } from "react-icons/di";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ cart, searchedItem, setSearchedItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchedItem(e.target.value);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-bold tracking-wider text-white hover:text-gray-300 transition italic font-mono"
        >
          <DiAtom className="inline-flex mr-2" />
          Bazzarify
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:block relative w-full max-w-sm mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <IoMdSearch className="text-black w-5 h-5" />
          </div>
          {/* <input
            type="text"
            placeholder="Search Item..."
            value={searchedItem}
            onChange={handleSearchChange}
            className="w-full border rounded-full pl-10 pr-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
          /> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/fashion" className="hover:text-gray-300 transition">Fashion</Link>
          <Link to="/electronics" className="hover:text-gray-300 transition">Electronics</Link>
          <Link to="/allProducts" className="hover:text-gray-300 transition">All Products</Link>
          <Link to="/cart" className="inline-flex items-center gap-1 hover:text-gray-300 transition">
            <FaShoppingCart className="text-lg" />
            Cart
            {cart.length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                {cart.length}
              </span>
            )}
          </Link>
          <Link to="/login" className="inline-flex items-center gap-1 hover:text-gray-300 transition">
            <MdOutlineAccountCircle className="text-[25px]" />
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <IoMdSearch className="text-black w-5 h-5" />
            </div>
            {/* <input
              type="text"
              placeholder="Search Item..."
              value={searchedItem}
              onChange={handleSearchChange}
              className="w-full border rounded-full pl-10 pr-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            /> */}
          </div>
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/fashion" className="block hover:text-gray-300">Fashion</Link>
          <Link to="/electronics" className="block hover:text-gray-300">Electronics</Link>
          <Link to="/allProducts" className="block hover:text-gray-300">All Products</Link>
          <Link to="/cart" className="flex items-center gap-2 hover:text-gray-300">
            <FaShoppingCart />
            Cart
            {cart.length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                {cart.length}
              </span>
            )}
          </Link>
          <Link to="/login" className="flex items-center gap-2 hover:text-gray-300">
            <MdOutlineAccountCircle className="text-[25px]" />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
