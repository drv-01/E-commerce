import React from 'react';
import { FaShippingFast, FaShieldAlt, FaUndoAlt, FaLock } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-center text-gray-900 mb-12">
        What We Offer
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md py-6 px-4 text-center hover:scale-105 transition-transform duration-300">
          <FaShippingFast className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Fast Shipping</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md py-6 px-4 text-center hover:scale-105 transition-transform duration-300">
          <FaShieldAlt className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Authentic Products</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md py-6 px-4 text-center hover:scale-105 transition-transform duration-300">
          <FaUndoAlt className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Easy Return</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md py-6 px-4 text-center hover:scale-105 transition-transform duration-300">
          <FaLock className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Secure Payments</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
