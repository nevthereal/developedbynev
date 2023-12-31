import React from "react";

const NavBar = () => {
  return (
    <nav className='p-4 bg-white border-2 border-b-nevBlue border-x-nevBlue rounded-b-2xl text-black flex justify-between shadow-xl'>
      <a
        className='text-nevBlue text-3xl font-semibold font-[Fredoka] my-auto'
        href='/'
      >
        DbN
      </a>
      <div className='flex gap-2 my-auto font-bold text-lg'>
        <a href='/work'>Work</a>
        <a href='/pricing'>Pricing</a>
        <a href='/contact'>Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
