import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen px-6 py-10'>
        <div className='max-w-5xl mx-auto text-center'>
            <h1 className='text-4xl font-bold text-yellow-600'>
                Discover Your Next Great Read
            </h1>

            <p className='mt-4 text-lg text-gray-700'>
                Explore a collection of books that spart learning, crativity, and imagination.
            </p>

            <button className='mt-6 [x-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition'>
                Browse Books
            </button>
        </div>
    </div>
  );
};

export default Home;
