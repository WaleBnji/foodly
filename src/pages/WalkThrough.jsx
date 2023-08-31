import React from 'react'
import Illustration01 from '../assets/Illustrations.svg'

const WalkThrough = () => {
  return (
    <div className='pt-14 px-5  '>
        <img src={Illustration01} alt="" />
        <div className='mt-7 text-center space-y-4 mb-16'>
        <h1 className='font-bold text-2xl' >All your favourites</h1>
        <p className='text-gray-500'>Order from the best local restuarants with easy, on-demand delivery.</p>

        </div>
        <div className='text-center mb-20'>hhh</div>
        <button className='bg-green-500 rounded-lg text-white uppercase text-bold w-full py-3 font-semibold tracking-wide '>Get Started</button>

      
    </div>
  )
}

export default WalkThrough
 