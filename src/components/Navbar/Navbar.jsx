import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { DiAtom } from "react-icons/di";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md"

const Navbar = ({cart}) => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
  
        <Link to="/" className="text-4xl font-bold tracking-wider text-white hover:text-gray-300 transition italic font-mono font-stretch-extra-expanded">
        <DiAtom className='inline-flex mr-3' />
          Bazzarify
        </Link>


      <div className="relative w-full max-w-sm"> 
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <IoMdSearch className="text-black w-5 h-5" />
        </div>
        <input
        type="text"
        placeholder="Search Item..."
        className="w-full border rounded-full pl-10 pr-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        // onChange={handleSearchItem}
        />
      </div>
  
        <div className="space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link to="/fashion" className="hover:text-gray-300 transition">
            Fashion
          </Link>

          <Link to="/electronics" className="hover:text-gray-300 transition">
            Electronics
          </Link>

          <Link to="/allProducts" className="hover:text-gray-300 transition">
            All Products
          </Link>

          <Link to="/cart" className="inline-flex items-center gap-1 hover:text-gray-300 transition">
            <FaShoppingCart className="text-lg" />
            Cart
            {cart.length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                {cart.length}
              </span>
            )}
          </Link>
          
        </div>

        <Link to="/login" className="inline-flex items-center gap-1 hover:text-gray-300 transition">
        <MdOutlineAccountCircle className="text-[25px] mx-1"/>
            Login
          </Link>

      </div>
    </nav>
  );
};

export default Navbar;
