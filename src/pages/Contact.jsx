import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.footwear_hero}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Factry</p>
          <p className='text-gray-500'> genpur chawk, Bajpatti,sitamarhi, bihar,843314</p>
          <p>mobile:+91- 8201993591 <br/>
          Email:admin@qafootwear.com</p>
          <p className='font-semibold text-xl text-gray-600'>Career at Forever</p>
          <p className='text-gray-500'> Learn more about teams and work </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore for Works</button>
        </div>
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default Contact