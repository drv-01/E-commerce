import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';

const ElectronicsSection = ({AddToCart}) => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const [phonesRes, laptopsRes] = await Promise.all([
          axios.get('https://dummyjson.com/products/category/smartphones'),
          axios.get('https://dummyjson.com/products/category/laptops'),
        ]);

        const allElectronics = [...phonesRes.data.products, ...laptopsRes.data.products];
        setElectronics(allElectronics);
      } catch (error) {
        console.error('Failed to fetch electronics:', error);
      }
    };

    fetchElectronics();
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Electronics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {electronics.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-56 w-full object-contain p-4 bg-gray-100 rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1 truncate">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-700 font-bold text-lg">₹{Math.round(item.price * 83)}</span>
                <span className="text-yellow-500 text-sm">⭐ {item.rating}</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
              onClick={()=>AddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsSection;
