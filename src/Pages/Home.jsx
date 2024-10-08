import React from 'react';
import Image3 from '../assets/contactHomePage.jpg';

function Home() {
  return (
    <div
      className='flex flex-col   min-h-screen rounded-3xl bg-cover pt-5 p-4 m-3 pl-4'
      style={{
        backgroundImage: `url(${Image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='text-center flex flex-row selection justify- pb-4'>
        <h1 className='border border-white-600 w-1/2 mx-auto  m-5 pl-8 pb-1 text-white'>
          Welcome to the Contact Form Site.
        </h1>
      </div>
    </div>
  );
}

export default Home;

