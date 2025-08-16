import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaUser,FaShoppingCart, FaBars } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
const Navbar = ({className=''}) => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  

  const{setShowSearch,getCartCount} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium px-4 bg-white sm:px-[5vw] md:px-[7vw] lg:px-[9vw] sticky top-0 z-50 shadow'>
      <Link to ='/'><img src={assets.logo} className='w-10' alt="" /> </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/">
          <p>HOME</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden '></hr>
        </NavLink>
        <NavLink to="/collection">
          <p>COLLECTION</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to="/about">
          <p>ABOUT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to="/contact">
          <p>CONTACT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink> 
        <NavLink to="/news">
          <p>NEWS</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden '></hr>
        </NavLink> 
      </ul>
      <div className='flex items-center gap-6 text-gray-800'>
         {/* Desktop & Tablet SearchBar inside navbar */}
        <div className="hidden sm:flex items-center gap-6 text-gray-800">
          <SearchBar className="w-64" />  {/* wider input for non-mobile */}
         {/* other icons like user, cart, bars */}
        </div>
        
         
        <div className='group relative'>
          <Link to='/login'><FaUser className='w-6 cursor-pointer'/></Link>
          <div className='group-hover:block absolute dropdown-menu hidden right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p  className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>

          </div>
        </div>
        <Link to='/cart' className='relative'>
          <FaShoppingCart className='w-5 min-w-5'/>
          <p className='absolute right-[-5px] bottom-[-5px] w-3.5 text-center leading-3.5 bg-red-500 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <FaBars onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden '/>
      </div>
      {/* sidebar menue for small screen */}
      <div className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <IoIosArrowBack className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div> 
    </div>
  )
}

export default Navbar