import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='ml-20 mr-20'>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-10'/>
            <p className='w-full md:w-1/2 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In praesentium sit ducimus eaque porro atque, vel animi, magnam illum eos quasi? Neque vero veritatis error tempore eaque quam quisquam officiis. Assumenda, labore laborum doloribus dolores vel similique officiis hic est quaerat consequatur omnis, a libero facere expedita. Sint, beatae incidunt?</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='tex-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-8299068802</li>
                <li>contact@footwear.com</li>
            </ul>
        </div>
    </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ footwear.com - All Right Reserved.</p>
        </div>

    </div>
    
  )
}

export default Footer