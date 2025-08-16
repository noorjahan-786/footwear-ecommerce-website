import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSellers = () => {
    const {products} = useContext(ShopContext);
    const [bestseller,setBestSeller] = useState([]);
        useEffect(()=>{
            const bestProduct = products.filter((item)=>(item.bestseller));
            setBestSeller(bestProduct.slice(0,5))
        },[])
    
  return (
    <div className='m-10'>
       <div className='text-center text-3xl py-8'>
          <Title text1={'Best '} text2={'Sellers'}/>
          <p className='w-3/4 m-auto text-xs sm:text-base text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit.m blanditiis  id numquam eligendi nemo consequatur. Perferendis corporis.</p>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {
            bestseller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} originalPrice={item.originalPrice} discount={item.discount} />
            ))
        }
       </div>
    </div>
  )
}

export default BestSellers