import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-yellow-100">
          Your Cart
        </h1>

        {/* If empty */}
        {cart.length === 0 ? (
          <p className="text-zinc-300 text-lg">
            Your cart is empty. Add some books!
          </p>
        ) : (
          <div className="space-y-6">

            {/* Cart items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-800 p-4 rounded-xl shadow-md flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-28 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-zinc-400">{item.author}</p>
                    <p className="text-yellow-100 font-semibold mt-1">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Cart Total */}
            <div className="text-right mt-6">
              <p className="text-2xl font-semibold text-yellow-100">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
