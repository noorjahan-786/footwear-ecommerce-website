import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const SearchBar = ({className=''}) => {
    const {search,setSearch,showSearch,setShowSearch } = useContext(ShopContext);
    

    useEffect(() => {
    
        setShowSearch(true); 
    
    }, [setShowSearch]);
      
    return (
        <div className=' bg-gray-50 text-center'>
            <div className={`inline-flex items-center  justify-center border border-gray-400 px-5 py-2 rounded-full w-[430px] sm:w-[430px] ${className}`}>
               <input value ={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit tex-sm' type='text' placeholder='search...'/>
               <FaSearch className='w-4 h-5 ' />
            </div>
        </div>
    ) 
}

export default SearchBar