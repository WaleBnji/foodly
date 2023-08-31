import React from 'react';
import { GrClose } from 'react-icons/gr';
import { CiLocationArrow1 } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';

const FindRestaurant = () => {
  return (
    <div>
      <GrClose className=''/>
      <h1 className='text-center font-semibold text-[1.5rem] mt-4'>Find restaurants near you</h1>
      <p className='text-gray-500 text-center m-[0.9rem]'>
        Please enter your location or allow access to your location to find
        restaurants near you.
      </p>
      <div className=' text-green-500 border border-green-500 rounded-lg  text-bold w-full py-3 font-semibold tracking-wide fcc mt-4 mb-6'>
        <span className='mr-4 text-green-500'>
          <CiLocationArrow1 />
        </span>
        Use Current Location
      </div>
      <div className=' text-gray-500 border bg-gray-100 rounded-lg  text-semibold w-full py-3 font-semibold tracking-wide fc'>
        <span className='mr-4 ml-4'>
          <CiLocationOn />
        </span>
        Enter a new address
      </div>
    </div>
  );
};

export default FindRestaurant;
