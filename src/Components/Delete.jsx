import React from 'react';

export default function Delete({ onClick, label = 'Delete' }) {
  return (
    <div className='flex justify-center items-center'>
      <button
        type='button'
        onClick={onClick}
        className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2'
      >
        {label}
      </button>
    </div>
  );
}

