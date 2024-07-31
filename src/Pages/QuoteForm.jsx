import React from 'react';
import Submit from '../Components/Submit';
import DeleteButton from '../Components/Delete';

function QuoteForm() {
  return (
    <div className='flex justify-center items-center h-screen p-4'>
      <div className='border border-gray-300 p-6 rounded-lg w-full max-w-lg'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Quote Form</h1>
        <form className='flex flex-col'>
          <label className='mb-4'>
            Name:
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='border border-gray-300 p-2 mt-1 w-full'
            />
          </label>
          <label className='mb-4'>
            Last Name:
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              className='border border-gray-300 p-2 mt-1 w-full'
            />
          </label>
          <label className='mb-4'>
            Email:
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='border border-gray-300 p-2 mt-1 w-full'
            />
          </label>
          <label className='mb-4'>
            Phone Number:
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              className='border border-gray-300 p-2 mt-1 w-full'
            />
          </label>
          <label className='mb-4'>
            Message:
            <textarea
              name='message'
              placeholder='Message'
              className='border border-gray-300 p-2 mt-1 w-full h-24'
            ></textarea>
          </label>
          <Submit />
          <DeleteButton />
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;

