import React from 'react';
import bannerImg from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto justify-items-center items-center gap-2 px-2 py-5">
      <div className="md:col-span-6 lg:col-span-7 text-center  md:text-left ">
        <h1 className="text-5xl font-bold lg:max-w-[70%]">
          Build Your Ideal <br />{' '}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-bold">
            Development Stack
          </span>
        </h1>

        <p className='py-5 lg:max-w-[70%] '>
          Explore frontend, backend, database, and tooling options,  compare them
          side by side, and put together the stack that fits your  next project.
        </p>
        
        <div className='sm-justify-center  md:flex gap-2 lg:max-w-[70%]'>
            <button className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white font-medium py-2 px-6 rounded-xl">
          Explore Technologies
        </button>
        <button className="font-medium py-2 px-6 border-1 rounded-xl">Learn More</button>
        </div>
      </div>
      
      {/* //banner left image */}

      <div className="md:col-span-6 lg:col-span-5  ">
        <img className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
