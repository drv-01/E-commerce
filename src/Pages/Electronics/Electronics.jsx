import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';

const ElectronicsSection = ({ AddToCart, searchedItem }) => {
  const [electronics, setElectronics] = useState([]);
  const [loading, setLoading] = useState(true);       
  const [error, setError] = useState(null);           

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const [phonesRes, laptopsRes] = await Promise.all([
          axios.get('https://dummyjson.com/products/category/smartphones'),
          axios.get('https://dummyjson.com/products/category/laptops'),
        ]);
        const allElectronics = [...phonesRes.data.products, ...laptopsRes.data.products];
        setElectronics(allElectronics);
        setLoading(false);
      } catch (err) {
        setError('Failed to load electronics.');
        setLoading(false);
      }
    };
    fetchElectronics();
  }, []);

  // 🔍 Filtered electronics by search input
  const filteredElectronics = electronics.filter(item =>
    item.title.toLowerCase().includes(searchedItem.toLowerCase())
  );

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Electronics</h2>

      {loading && <p className="text-center text-gray-600">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && filteredElectronics.length === 0 && (
        <p className="text-center text-gray-500">No electronics found.</p>
      )}

      {!loading && !error && filteredElectronics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredElectronics.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-2xl shadow hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-56 w-full object-contain p-4 bg-gray-100 rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-700 font-bold text-lg">₹{Math.round(item.price * 83)}</span>
                  <span className="text-yellow-500 text-sm">⭐ {item.rating}</span>
                </div>
                <button
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                  onClick={() => AddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElectronicsSection;
