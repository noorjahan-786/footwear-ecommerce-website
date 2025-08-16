import React, { useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const navigate = useNavigate();
    const [related, setRelated] = useState([]);
    useEffect(()=>{
      if (products.length > 0){
        let productsCopy = products.slice();

        productsCopy = productsCopy.filter((item)=>category===item.category);
        productsCopy = productsCopy.filter((item)=>subCategory===item.subCategory);
        setRelated(productsCopy.slice(0,5));
      }
   },[products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED '} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index)=>(
          <div key ={item._id} onClick={()=>navigate(`/product/${item._id}`)} className='cursor-pointer'> 
            <ProductItem  key={index} id={item._id} name={item.name} image={item.image} price={item.price} originalPrice={item.originalPrice} discount={item.discount} />

          </div>
          
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts