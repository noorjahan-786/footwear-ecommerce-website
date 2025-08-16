import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='relative z-10'>
       <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[400px] md:h-[600px] lg:h-[750px]"
      >
        <SwiperSlide>
          <Link to="/men">
            <img src={assets.men_hero} className="w-full h-full object-cover cursor-pointer" alt="Men's Footwear" />
          </Link>
          <div className='absolute inset-0 flex items-center justify-center' >
            <div className='text-center text-white p-6'>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
               Step into Style
              </h1>
              <p className="text-white text-lg sm:text-xl mt-2">
              Explore our exclusive men's footwear collection.
              </p>
              <Link to="/men" className="mt-4 inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
                Shop Men
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/women">
            <img src={assets.women_hero} className="w-full h-full object-cover cursor-pointer" alt="Women's Footwear" />
          </Link>
          <div className='absolute inset-0 flex items-center justify-center' >
            <div className='text-center text-white p-6'>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                Elegance for Every Step
              </h1>
              <p className="text-white text-lg sm:text-xl mt-2">
                Discover the comfort & charm of women’s footwear.
              </p>
              <Link to="/women" className="mt-4 inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
               Shop Women
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/kid">
            <img src={assets.kid_hero} className="w-full h-full object-cover cursor-pointer" alt="Full Collection" />
          </Link>
          <div className='absolute inset-0 flex items-center justify-center' >
            <div className='text-center text-white p-6'>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                Fun, Color & Comfort
              </h1>
              <p className="text-white text-lg sm:text-xl mt-2">
                Perfect steps for little feet – explore our kids collection.
              </p>
              <Link to="/women" className="mt-4 inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
               Shop Kids
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero