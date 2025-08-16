import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
const {products} = useContext(ShopContext)
const[latestProducts,setLatestProducts] = useState([]);
useEffect(()=>{
  setLatestProducts(products.slice(0,10));
},[products])

  return (
    <div className='m-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Explore '} text2={'New Arrivals'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ea veritatis autem facere exercitationem sequi tempore, sapiente corrupti ab odio incidunt necessitatibus
        </p>
      </div>
      {/* rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         {
          latestProducts.map((item,index) =>(
            <ProductItem key={index} id = {item._id} image={item.image} name={item.name} price={item.price} originalPrice={item.originalPrice} discount={item.discount}/>
          ) )
         }
      </div>
    </div>
  )
}

export default LatestCollection