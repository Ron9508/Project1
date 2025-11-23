import React from 'react'
import { Link } from "react-router-dom"

const BookCard = ({ book }) => {
  return (
    <div className='bg-zinc-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition cursor-pointer'>
        <img 
        src={book.image} 
        alt={book.title} 
        className='w-full h-60 object-cover rounded-lg mb-4'
        />

        <h2 className='text-xl font-semibold mt-3'>{book.title}</h2>
        <p className='text-zinc-300 mt-1'>{book.author}</p>
        <p className='text-yellow-200 font-semibold mt-3'>
            ${book.price}
        </p>

        <Link
          to={`/books/${book.id}`}
          className="w-full mt-4 block text-center bg-yellow-100 text-zinc-900 font-semibold py-2 rounded-lg hover:bg-yellow-200 transition"
        >
          View Details
        </Link>

        
    </div>
  );
};

export default BookCard;
