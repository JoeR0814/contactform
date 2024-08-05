import React, { useState } from 'react';
import Submit from '../Components/Submit';
import DeleteButton from '../Components/Delete';
import Image1 from '../assets/blueBackground.jpeg';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const handleDelete = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen rounded-3xl pt-4 m-4'
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex justify-center items-center min-h-screen p-4 m-4 pt-5'>
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
                value={formData.lastName}
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
            <label className='mb-4 flex items-center'>
              <input
                type='checkbox'
                name='textConsent'
                className='mr-2'
                checked={formData.textConsent}
                onChange={handleChange}
              />
              Check this box if you want us to text you information
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
    </div>
  );
}

export default ContactForm;

