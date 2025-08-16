import React from 'react'
import { useNavigate } from 'react-router-dom'
import FactoryMap from './FactoryMap';


const TopBar = () => {
   
  return (
   <div className="relative w-full bg-gray-800 text-white py-2 px-4 flex sm:justify-around justify-between items-center sm:text-sm text-xs font-medium">
      <p className="text-left sm:w-1/3 mb-1 sm:mb-0">Welcom to QA footwear</p>

      {/* Center text using absolute positioning */}
      <p className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 text-center sm:text-sm">
        Free Shipping Over ₹999
      </p>
      <a 
        href="https://www.google.com/maps/place/genpur,+Bajpatti,+Sitamarhi,+Bihar+843314"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-1/3 sm:text-right inline-block shadow transition"
      >
        Our Factory Location
      </a>
      
    </div>
   );
  };

export default TopBar;
