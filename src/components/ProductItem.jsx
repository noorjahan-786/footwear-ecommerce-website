import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";


const ProductItem = ({id,image,selectedColor,name,price,originalPrice,discount}) => {
  const {currency} = useContext(ShopContext);
     
  return (
    <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}/>
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <div className='text-sm font-medium'  > 
        <span className='text-gray-600 text-sm '>{discount}</span>
        <span className='text-gray-500 line-through ml-2 '>{currency}{originalPrice}</span>
        <span className='ml-1'>{currency}{price}</span>
      </div>

      <div className='flex items-center gap-1 mt-1'>
        <IoStarSharp className='text-yellow-500 text-3xl w-3 5'/>
        <IoStarSharp className='text-yellow-500 text-3xl w-3 5'/>
        <IoStarSharp className='text-yellow-500 text-3xl w-3 5'/>
        <IoStarSharp className='text-yellow-200 text-3xl w-3 5'/>
        <span className='ml-2'>4.2<span className='text-gray-500'>(82 review)</span></span>
      </div>
    </Link>
  )
}
export default ProductItem