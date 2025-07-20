import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';

const AllProducts = ({AddToCart}) => {
  const [data, setData] = useState([]); 
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data.products);
      });
  }, []);

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm mt-1 truncate">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-bold text-lg">₹{Math.round(item.price)*83}</span>
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
    </div>
  );
};

export default AllProducts;
