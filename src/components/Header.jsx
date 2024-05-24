import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl max-auto p-3'>
    <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap ml-20'>
            <span className='text-orange-600'>Home</span>
            <span className='text-yellow-500'>Bee</span>
        </h1>
        </Link>
        <form className='flex bg-slate-100 p-3 rounded-lg items-center'>
            <input type='text' placeholder='Search...' className='bg-transparent' />
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
        <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
          </Link>
          <Link to='/Sign-in' >
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Sign in</li>
          </Link>
        </ul>
        </div>
    </header>
  )
}
