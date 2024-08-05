import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex justify-center pb-4 m-2 '>
      <ul className='flex space-x-4 flex-row pt-4 p-4 border-black border rounded-3xl bg-gray-300'>
        <li className='flex flex-col'>
          <Link
            to='/'
            className='text-blue-500 hover:text-blue-700 flex flex-col'
          >
            Home
          </Link>
        </li>
        <li>
          <Link to='/ContactForm' className='text-blue-500 hover:text-blue-700'>
            Contact Form
          </Link>
        </li>
        <li>
          <Link to='/emergency' className='text-blue-500 hover:text-blue-700'>
            Emergency-Contact-Form
          </Link>
        </li>
        <li>
          <Link
            to='/ReachOut'
            className='text-blue-500 hover:text-blue-700'
          ></Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

