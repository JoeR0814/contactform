import React, { useState } from 'react';
import Submit from '../Components/Submit';
import DeleteButton from '../Components/Delete';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log('Form data deleted');
    setFormData({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <div className='border border-gray-300 p-6 rounded-lg w-full max-w-lg bg-white'>
        <h1 className='text-3xl font-bold mb-6 text-center md:text-2xl sm:text-xl'>
          Contact's Form
        </h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label className='mb-4'>
            Name:
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='border border-gray-300 p-2 mt-1 w-full'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className='mb-4'>
            Last Name:
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              className='border border-gray-300 p-2 mt-1 w-full'
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
          <label className='mb-4'>
            Email:
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='border border-gray-300 p-2 mt-1 w-full'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className='mb-4'>
            Phone Number:
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              className='border border-gray-300 p-2 mt-1 w-full'
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className='mb-4'>
            Message:
            <textarea
              name='message'
              placeholder='Message'
              className='border border-gray-300 p-2 mt-1 w-full h-24'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <div className='flex justify-between mt-4'>
            <Submit onClick={handleSubmit} />
            <DeleteButton onClick={handleDelete} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

