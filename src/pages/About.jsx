import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-[450px] h-[450px] md:max-w-[350px]' src = {assets.footwear_hero}/>
        <div className='flex flex-col jusrtify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus in, voluptatem totam doloribus eaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur.!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinc Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing .</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission at qa footwear Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, facere.</p>

        </div>
       </div>
      <div className='text-xl py-4'>
        <Title text1={'why '} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row tex-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p>we meticulously select and vet each product to ensure it meets our stringent.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, atque!
          </p>
        </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience</b>
          <p>we meticulously select and vet each product to ensure it meets our stringent.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, atque!
          </p>
        </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptionall customer services</b>
            <p>we meticulously select and vet each product to ensure it meets our stringent.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, atque!
            </p>
         </div>
       </div>
       <NewsletterBox/>
     </div>
    
  )
}

export default About