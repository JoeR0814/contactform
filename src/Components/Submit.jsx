import React from 'react';

export default function Submit({ onClick, label = 'Submit', className = '' }) {
  return (
    <div className='flex justify-center items-center'>
      <button
        type='submit'
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 ${className}`}
      >
        {label}
      </button>
    </div>
  );
}

