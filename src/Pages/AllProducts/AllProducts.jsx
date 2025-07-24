import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';

const AllProducts = ({ AddToCart, searchedItem }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);       
  const [error, setError] = useState(null);           

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  // 🔍 Filtered products
  const filteredProducts = data.filter(item =>
    item.title.toLowerCase().includes(searchedItem.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-10 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        All Products
      </h1>

      {loading && <p className="text-center text-gray-600">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-48 sm:h-52 md:h-56 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold text-lg">₹{Math.round(item.price * 83)}</span>
                  <span className="text-yellow-500 text-sm">⭐ {item.rating}</span>
                </div>

                <button
                  onClick={() => AddToCart(item)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 w-full"
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

export default AllProducts;
