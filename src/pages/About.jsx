import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen px-6 py-16 bg-white text-gray-900'>
        <div className='max-w-4xl mx-auto'>

            <h1 className='text-4xl font-bold mb-6 text-yellow-700 text-center'>
                About Us
            </h1>

            <p className='test-lg leading-relaxed text-gray-700 mb-6'>
                Welcome to <span className="font-semibold text-yellow-700">BookStore</span>, 
                your space to discover new stories, learn new ideas, and explore books across every genre.
                Our goal is simple: make it easy for readers to find books they'll enjoy and return 
                to reading as a daily habit.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Whether you're into fiction, technology, personal development, or academic references, 
                we've curated a selection that's designed to help you grow, relax, and stay inspired. 
                We believe books can shape lives — and that everyone should have access to the right book 
                at the right time.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-700 mt-10 mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            To support readers of all ages by offering a simple and enjoyable browsing experience, 
            connecting them with books that matter, and encouraging continuous learning.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-700 mt-10 mb-4">Why We Exist</h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>To help readers find valuable books easily.</li>
                <li>To provide a clean and organized way to explore genres.</li>
                <li>To make reading accessible and enjoyable every day.</li>
            </ul>
            
        </div>
    </div>
  );
};

export default About;
