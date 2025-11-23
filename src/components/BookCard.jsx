import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";

const BookCard = ({ book }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='bg-zinc-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition cursor-pointer'>
        <img 
          src={book.image} 
          alt={book.title} 
          className='w-full h-60 object-cover rounded-lg mb-4'
        />

        <h2 className='text-xl font-semibold mt-3'>{book.title}</h2>
        <p className='text-zinc-300 mt-1'>{book.author}</p>
        <p className='text-yellow-200 font-semibold mt-3'>${book.price}</p>

        <button
          onClick={() => addToCart(book)}
          className="w-full mt-3 bg-yellow-100 text-black py-2 rounded-lg"
        >
          Add to Cart
        </button> 

        <Link
          to={`/books/${book.id}`}
          className="w-full mt-2 block text-center border border-yellow-200 text-yellow-200 py-2 rounded-lg"
        >
          View Details
        </Link>
    </div>
  );
};

export default BookCard;
