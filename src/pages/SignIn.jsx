import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
// import {ReactComponent as Facebook} from '../assets/facebook.svg'
import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';

const SignIn = () => {
  return (
    <div className='pt-4'>
      <div className='grid grid-cols-2 mb-6'>
        <IoIosArrowBack />
        <h3 className='font-semibold'>Sign In</h3>
      </div>
      <div className='mb-10'>
      <h1 className='text-3xl font-bold mb-3'>Welcome to <span className='text-green-500'>Foodly</span></h1>
      <p className='w-[70%] text-[1.1rem] text-gray-500'>Enter your Email address to sign in. Enjoy your food 😉</p>

      </div>
      <form action='get'>
        <div>
          <label htmlFor='#email' className='uppercase text-sm text-gray-500'>Email address</label>
          <input type='email' name='email' className='block w-full border-b-2'/>
        </div>
        <div>
          <label htmlFor='#email' className='uppercase text-sm text-gray-500'>Password</label>
          <input type='password' name='password' className='block w-full border-b-2'/>
        </div>
        <p className='m-5 text-center text-sm'>Forget Password?</p>
        <button className='bg-green-500 rounded-lg text-white uppercase text-bold w-full py-3 font-semibold tracking-wide m-4'>
          Sign In
        </button>
        <p className='text-[0.8rem] px-7 tracking-wide'>
          Don't have an account?{' '}
          <span className='text-green-600 font-bold'>Create new account</span>
        </p>
        <p className='text-center m-8'>Or</p>
        <div className='space-y-4'>
          <button className='bg-blue-900 rounded-lg text-white uppercase  w-full py-3  tracking-wide fc px-4 '>
            <img src={Facebook} alt='' className='mr-6' />
            <p>Connnect with FAcebook</p>
          </button>
          <button className='bg-blue-500 rounded-lg text-white uppercase  w-full py-3  tracking-wide fc px-4 '>
            <img src={Google} alt='' className='mr-6' />
            <p>Connnect with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
