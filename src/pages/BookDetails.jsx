import React from 'react'
import { useParams, Link } from "react-router-dom"
import { books } from "./data/booksData"

const BookDetails = () => {
    const { id } = useParams();

    // Find the book  with this id
    const book = books.find((b) => String(b.id) === String(id));

    // If no book found
    if (!book) {
        return (
        <div className='min-h-screen bg-zinc-900 text-white py-16 px-6'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-3xl font-semibold mb-4 text-yellow-100'>
                    Book not found
                </h1>
                <p className='mb-6 text-zinc-300'>
                    We couldn't find a book with this ID
                </p>
                <Link
                    to="/books"
                    className='inline-block px-6 py-2 rounded-lg bg-yellow-100 text-zinc-900 font-semibold hover:bg-yellow-200 transition'
                >
                    Back to all books
                </Link>
            </div>
        </div>
    );
}



  return (
    <div className='min-h-screen bg-zinc-900 text-white py-16 px-6'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Image */}
            <div>
                <img 
                src={book.image} 
                alt={book.title} 
                className='w-full h-96 object-cover rounded-xl shadow-lg'
                />
            </div>

            {/* Info */}
            <div>
                <h1 className='text-4xl font-semibold text-yellow-100 mb-4'>
                    {book.title}
                </h1>
                <p className="text-lg text-zinc-300 mb-2">by {book.author}</p>

                <p className="text-yellow-100 text-2xl font-semibold mb-4">
                    ${book.price}
                </p>

                {book.category && (
                    <p className="mb-2 text-sm text-zinc-400">
                    Category: <span className="font-medium">{book.category}</span>
                    </p>
                )}

                {book.year && (
                    <p className="mb-4 text-sm text-zinc-400">
                    Published: <span className="font-medium">{book.year}</span>
                    </p>
                )}

                {/* Description */}
                <p className="text-zinc-200 mb-6">
                    {book.description
                    ? book.description
                    : "No description available for this book yet."}
                </p>

                <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2 rounded-lg bg-yellow-100 text-zinc-900 font-semibold hover:bg-yellow-200 transition">
                    Add to Cart
                    </button>

                    <Link
                    to="/books"
                    className="px-6 py-2 rounded-lg border border-zinc-600 text-zinc-200 hover:bg-zinc-800 transition"
                    >
                    Back to all books
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BookDetails;
