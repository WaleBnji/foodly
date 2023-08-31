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
        <h3 className='font-semibold'>Welcome</h3>
      </div>
      <div className='mb-10'>
      <h1 className='text-3xl font-semibold mb-3'>Create Account</h1>
      <p className='w-[90%]  text-gray-500'>Enter your Name, Email address and password to sign up. <span className='text-green-500'>Already have an account?</span></p>

      </div>
      <form action='get' className=''>
        <div>
          <label htmlFor='#name' id='name' className='uppercase text-sm text-gray-500'>Full Name</label>
          <input type='text' name='name' id='name' className='block w-full border-b-2'/>
        </div>
        <div>
          <label htmlFor='#email' className='uppercase text-sm text-gray-500'>Email address</label>
          <input type='email' name='email' className='block w-full border-b-2'/>
        </div>
        <div>
          <label htmlFor='#email' className='uppercase text-sm text-gray-500'>Password</label>
          <input type='password' name='password' className='block w-full border-b-2'/>
        </div>
        <p className='m-5 text-center text-sm'>Forget Password?</p>
        <button className='bg-green-500 rounded-lg text-white uppercase text-bold w-full py-3 font-semibold tracking-wide my-'>
          Sign Up
        </button>
        <p className=' px-7 tracking-wide text-center text-gray-500'>
        By Signing up, you agree to our Terms and Conditons & Privacy Policy
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
