import React, {useState} from 'react'
import { books } from "../data/booksData"

const Books = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // Get unique book categories
    const categories = ["All", ...new Set(books.map((b) => b.category))]

    // Filter books
    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = 
                category === "All" ? true : book.category === category;

            return matchesSearch && matchesCategory;
    });

  return (
    <div className='min-h-screen bg-zinc-900 text-white py-16 px-6'>

        {/* Title */}
        <h1 className='text-4xl font-semibold text-yellow-100 mb-6'>
            Browse Our Books
        </h1>

        {/* Search + Filter */}
        <div className='flex flex-col md:flex-row items-center gap-4 mb-10'>


            {/* Search */}
            <input 
            type="text" 
            placeholder='Search by title..'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full md:w-1/2 px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none'
            />

            {/* Category Filter */}
            <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className='w-full md:w-1/4 px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none'
            >
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>

        {/* Books Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredBooks.map((book) => (
                <div
                key={book.id}
                className='bg-zinc-800 p-4 rounded-xl shadow-lg hover:bg-zinc-700 transition'
                >
                    <img 
                    src={book.image} 
                    alt={book.title} 
                    className='w-full h-64 object-cover rounded-lg'
                    />
                    <h2 className='text-xl font-semibold mt-4'>{book.title}</h2>
                    <p className='text-zinc-300'>{book.author}</p>
                    <p className='text-yellow-100 font-semibold mt-2'>
                        ${book.price}
                    </p>

                    {/* View Details button */}
                    <button className='w-full mt-4 bg-yellow-100 text-zinc-900 font-semibold py-2 rounded-lg hover:bg-yellow-200 transition'>
                        View Details
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Books;
