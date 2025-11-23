import React from 'react'

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
    </div>
  );
};

export default BookCard;
