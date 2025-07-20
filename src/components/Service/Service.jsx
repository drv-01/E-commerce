import React from 'react';
import { FaShippingFast, FaShieldAlt, FaUndoAlt, FaLock } from 'react-icons/fa';

const Service = () => {
  return (    
    <div className='py-20'>
      <h1 class="sm:text-5xl font-sans title-font text-gray-900 mb-12 text-center">What We Offers:</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-gray-800 text-white rounded-md shadow-lg py-6 px-4 text-center hover:scale-105 transition-transform duration-200">
          <FaShippingFast className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Fast Shipping</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 text-white rounded-md shadow-lg py-6 px-4 text-center hover:scale-105 transition-transform duration-200">
          <FaShieldAlt className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Authentic Products</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 text-white rounded-md shadow-lg py-6 px-4 text-center hover:scale-105 transition-transform duration-200">
          <FaUndoAlt className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Easy Return</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 text-white rounded-md shadow-lg py-6 px-4 text-center hover:scale-105 transition-transform duration-200">
          <FaLock className="text-3xl mx-auto mb-3" />
          <p className="font-semibold">Secure Payments</p>
        </div>

      </div>
    </div>
  );
};

export default Service;
