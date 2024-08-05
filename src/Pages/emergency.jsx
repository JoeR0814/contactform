import React, { useState } from 'react';
import Delete from '../Components/Delete';
import Submit from '../Components/Submit';
import Image2 from '../assets/emergencyForm.webp';

function ReachOut() {
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
    console.log('Form data deleted');
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
      className='flex flex-col items-center justify-center min-h-screen rounded-3xl bg-cover pt-5 m-3'
      style={{
        backgroundImage: `url(${Image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex flex-col justify-center items-center  w-full rounded-3xl p-4 min-h-screen '>
        <div className=' w-full max-w-lg rounded-3xl flex flex-col p-3 bg-gray-300 m-4'>
          <h1 className='text-3xl flex justify-center pb-4 mb-6 md:text-2xl sm:text-xl m-4 '>
            Emergency Contact Form
          </h1>
          <p>
            Please fill in your information so we can update your chart
            accurately.
          </p>
          <form className='flex flex-col m-2'>
            <label className='mb-4'>
              Name:
              <input
                type='text'
                name='name'
                placeholder='Name:'
                value={formData.name}
                onChange={handleChange}
                className='border border-black-500 p-2 mt-2 w-full'
              />
            </label>
            <label className='mb-4'>
              LastName:
              <input
                type='text'
                name='lastName'
                placeholder='LastName:'
                value={formData.lastName}
                onChange={handleChange}
                className='border border-black-300 p-2 mt-2 w-full'
              />
            </label>
            <label className='mb-4'>
              Email:
              <input
                type='email'
                name='email'
                placeholder='Email:'
                value={formData.email}
                onChange={handleChange}
                className='border border-black-300 p-2 mt-2 w-full'
              />
            </label>
            <label className='mb-4'>
              Phone:
              <input
                type='tel'
                name='phone'
                placeholder='Phone:'
                value={formData.phone}
                onChange={handleChange}
                className='border border-black-300 p-2 mt-2 w-full'
              />
            </label>
            <p>
              Now, please enter the contact information of the person you want
              us to reach in case of an emergency below this line:
            </p>
            <label className='pt-5'>
              Enter Your Emergency Contact Name:
              <input
                placeholder='Emergency Contact Name:'
                name='emergency Name:'
                value={formData.emergencyName}
                onChange={handleChange}
                className='border border-black-300 p-2 mt-2 w-full'
              />
            </label>
            <label className='pt-5'>
              Enter Your Emergency Contact's phone Number:
              <input
                type='tel'
                name='emergency phone'
                placeholder='Emergency Contact Phone:'
                value={formData.emergencyName}
                onChange={handleChange}
                className='border border-black-300 p-2 mt-2 w-full'
              />
            </label>
            <label className='mb-4 pt-4 flex items-center'>
              <input
                type='checkbox'
                name='textConsent'
                checked={formData.textConsent}
                onChange={handleChange}
                className=' mr-2'
              />
              Check this box if you want us to text your emergency contact to
              let them know we will be reaching out to them in case of an
              emergency.
            </label>
            <label className='mb-4'>
              Place a message here to let us know about yourself or any updates
              you have on the information we currently have about you:
              <input
                name='message'
                placeholder='message:'
                value={formData.message}
                onChange={handleChange}
                className='border border-black-300 p-2 mt-2 w-full'
              />
            </label>
          </form>
        </div>
        <div className='flex justify-between m-4'>
          <Submit onClick={handleSubmit} />
          <Delete onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default ReachOut;

