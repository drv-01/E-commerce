import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FashionSection = ({ AddToCart }) => {
  const [fashionItems, setFashionItems] = useState([]);
  const [loading, setLoading] = useState(true); // ⏳ loading state
  const [error, setError] = useState(null);     // ❌ error state

  useEffect(() => {
    const fetchFashion = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axios.get('https://dummyjson.com/products/category/womens-dresses'),
          axios.get('https://dummyjson.com/products/category/mens-shirts'),
          axios.get('https://dummyjson.com/products/category/womens-shoes'),
        ]);
        const allFashion = [
          ...res1.data.products,
          ...res2.data.products,
          ...res3.data.products,
        ];
        setFashionItems(allFashion);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch fashion items. Please try again later.');
        setLoading(false);
      }
    };
    fetchFashion();
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest in Fashion</h2>

      {loading && <p className="text-center text-gray-500">Loading fashion products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fashionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-56 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                    -{item.discountPercentage}%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold text-lg">₹{Math.round(item.price * 83)}</span>
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

export default FashionSection;
