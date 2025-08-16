import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';
import { FaFilter } from "react-icons/fa";
import { HiSortDescending } from "react-icons/hi";

const Collection = () => {
  const {products,search, showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const[category,setCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant')
  // const [subcategory,setSubcategory] =useState([])
  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !==e.target.value))
      
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const applyFilter = () =>{
    let productsCopy = products.slice();

    if (showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length >0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy)
  }
  
  const sortProduct = ()=>{
    let fpCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;

        default:
          applyFilter();
          break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,setCategory, search, showSearch]);
  // also can add (,subCategory)
  useEffect(()=>{
    sortProduct();
    
  }, [sortType])



  return (
    <div className='flex flex-col sm:ml-0 ml-5 sm:flex-row gap-15 sm:gap-10 pt-10 sm:border-t'>
      {/* filter options */}
      <div className={` ml-10 sm:min-w-60  ${showFilter ? '' :'hidden'} sm:block`}>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS</p>
        {/* category Filter */}
        <div className='border border-gray-300 pl-5 py-3 mt-6 '>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className=' flex flex-col gap-2 text-sm font light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type='checkbox' value={'men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type='checkbox' value={'women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type='checkbox' value={'kid'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex-1 mr-10'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
           <Title text1={'ALL '} text2={'COLLECTION'}/>
           {/* product sort */}
           <select  onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 py-1'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">sort by: High to LOw</option>
           </select>
        </div>
        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} originalPrice={item.originalPrice} discount={item.discount} image={item.image}/>
            ))
          }
        </div>
      </div>
      <div className='flex bg-white text-black h-9 w-full mb-0 sticky sm:hidden justify-around'>
        <div className='flex'>
          <HiSortDescending />
          <span>SORT</span>
        </div>
        <div className='flex'>
          <FaFilter />
          <p>FILTER</p>
        </div>


      </div>
          
    </div>
  )
}

export default Collection