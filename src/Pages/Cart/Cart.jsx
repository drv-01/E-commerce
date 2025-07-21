import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, handleDec, handleInc, handleRemove, TotalCost, Applycode, promocode, setPromocode, applied }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row shadow-md my-10 gap-6">

          {/* Cart Section */}
          <div className="lg:w-3/4 bg-white px-6 py-8 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between border-b pb-6">
              <h1 className="font-semibold text-xl sm:text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl sm:text-2xl">{cart.length} Items</h2>
            </div>

            <div className="hidden sm:flex mt-8 mb-5 font-semibold text-gray-600 text-xs uppercase">
              <div className="w-2/5">Product Details</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Total</div>
            </div>

            {/* Cart Items */}
            {cart.map((item) => (
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 hover:bg-gray-100 border-t py-4" key={item.id}>
                <div className="flex w-full sm:w-2/5">
                  <img className="h-24 w-20 object-cover rounded-md" src={item.thumbnail} alt={item.title} />
                  <div className="ml-4 flex flex-col justify-between">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="text-gray-500 text-xs uppercase">{item.category}</span>
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 text-xs mt-1">Remove</button>
                  </div>
                </div>

                <div className="flex justify-center w-full sm:w-1/5">
                  <button onClick={() => handleDec(item.id)} className="border px-2">-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => handleInc(item.id)} className="border px-2">+</button>
                </div>

                <div className="w-full sm:w-1/5 text-center font-semibold text-sm">{Math.round(item.price * 83)} Rs.</div>
                <div className="w-full sm:w-1/5 text-center font-semibold text-sm">{Math.round(item.price * 83 * item.quantity)} Rs.</div>
              </div>
            ))}

            <p onClick={() => navigate('/')} className="mt-6 text-blue-600 font-semibold text-sm flex items-center cursor-pointer">
              <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 448 512"><path d="M134.059 296H436c..."/></svg>
              Continue Shopping
            </p>
          </div>

          {/* Summary Section */}
          <div className="lg:w-1/4 w-full bg-white px-6 py-8 rounded-md">
            <h2 className="font-semibold text-xl border-b pb-4">Order Summary</h2>
            <div className="flex justify-between my-6 text-sm font-medium">
              <span>{cart.length} Items</span>
              <span>{TotalCost()} Rs.</span>
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Shipping</label>
              <select className="p-2 border rounded w-full text-sm text-gray-600">
                <option>Standard shipping - 10 Rs.</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="promo" className="text-sm font-medium block mb-2">Promo Code</label>
              <input
                id="promo"
                type="text"
                placeholder="Enter your code"
                className="p-2 border rounded w-full text-sm"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
              />
              {promocode && promocode !== 'DRV30' ? (
                <span className="text-sm text-gray-600">Use your code here</span>
              ) : (
                <span className="text-sm text-green-500">{applied}</span>
              )}
              <button onClick={Applycode} className="mt-2 bg-red-500 hover:bg-red-600 text-white w-full py-2 text-sm uppercase rounded">
                Apply
              </button>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-sm mb-4">
                <span>Total cost</span>
                <span>{TotalCost() + 10} Rs.</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 w-full text-white py-3 text-sm uppercase rounded">
                Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
