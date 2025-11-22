import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-zinc-900 text-white'>
        <h1 className='text-xl font-semibold'>BookStore</h1>

        <ul className='flex gap-6'> 
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
