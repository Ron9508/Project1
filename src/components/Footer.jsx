import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-zinc-400 py-6 mt-6'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4'>

            {/* Left */}
            <p className='text-sm'>
                © {new Date().getFullYear()} Bookstore. All rights reserved.
            </p>

            {/* Right */}
            <p className='text-sm'>
                Build with React and Tailwind CSS
            </p>

        </div>
    </footer>
  )
}

export default Footer;
