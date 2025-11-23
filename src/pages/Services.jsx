import React from 'react'

const Services = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 test-yellow-100 px-6 py-20'>
        <div className='max-w-5xl mx-auto'>
            <h1 className='text-4xl font-semibold mb-6 text-center'>
                Our Services
            </h1>

            <p className='text-lg text-zinc-300 text-center mb-12'>
                We offer a set of features that make discorvering and buying books simple, enjoyable, and reliable.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Service 1 */}
                <div className='bg-zinc-800 p-6 rounded-xl border voder-zinc-700'>
                    <h2 className='text-2xl font-semibold mb-3'>Curated Book Selection</h2>
                    <p className='text-zinc-300'>
                        Explore a wide range of books across all genres. Our team handpicks top titles to help you discover your next great read.
                    </p>
                </div>

                {/* Service 2 */}
                <div className='bg-zinc-800 p-6 rounded border border-zinc-700'>
                    <h2 className='text-2xl font-semibold mb-3'>Fast & Easy Search</h2>
                    <p className='text-zinc-300'>
                        Quickly filter books by category, author, or keyword. Finding what you're looking for should always be smoooth and simple.
                    </p>
                </div>

                {/* Service 3 */}
                <div className='bg-zinc-800 p-6 rounded border border-zinc-700'>
                    <h2 className='text-2xl font-semibold mb-3'>Book Details Page</h2>
                    <p className='text-zinc-300'>
                        View full descriptions, ratings, and all important details in one place before making your choice.
                    </p>
                </div>

                                {/* Service 4 */}
                <div className='bg-zinc-800 p-6 rounded border border-zinc-700'>
                    <h2 className='text-2xl font-semibold mb-3'>Shopping Cart</h2>
                    <p className='text-zinc-300'>
                        Add books to your cart and review your selections. Once the the backend is built later this semester, checkout will be fully functional.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
