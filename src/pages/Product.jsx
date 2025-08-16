import React, { useEffect, useState, useContext } from 'react' 
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { IoStarSharp } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const{productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size, setSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('')

  const fetchProductData = async () => {
    products.map((item)=>{  
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        console.log(item)
        return null
      }
    })
  }


  useEffect(()=>{
    fetchProductData();
    window.scrollTo({
    top: 0,
    behavior: 'smooth' // smooth scroll animation
    })
  }, [productId,products])

  return  productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data  */}
      <div className='flex gap-6 sm:gap-12 flex-col sm:flex-row max-w-5xl'>
        {/* product images */}
        <div className='flex flex-col-reverse gap-4 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className=''>
            <img className='' src={image}/>
          </div>
        </div>
         
        {/*---------------- product info-------------- */}
        <div className='ml-5 sm:ml-0 flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <IoStarSharp className='text-yellow-500 text-3xl w-3 5'/>
            <IoStarSharp className='text-yellow-500 text-3xl w-3 5'/>
            <IoStarSharp className='text-yellow-500 text-3xl w-3 5'/>
            <IoStarSharp className='text-yellow-200 text-3xl w-3 5'/>
            <span className='ml-2'>4.2<span className='text-gray-500'>(82 review)</span></span>
          </div>
          <div className='flex gap-2 items-center mt-5'>
            <span className=' text-gray-600 font-medium'>{productData.discount}</span>
            <span className='ml-2 line-through text-gray-400'>{currency}{productData.originalPrice}</span>
            <span className='ml-1 font-semibold'>{currency}{productData.price}</span>
          </div>
          
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Offers */}
          <div className="mt-3 text-sm text-gray-700 space-y-1">
            <p>🎟️ Save extra with coupon</p>
            <p>% Bank Offer</p>
            <p>% Cashback</p>
            <p>○ Partner Offer</p>
          </div>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-300': ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium">Color</p>
            <div className="flex gap-2 mt-2">
              {productData.selectedColor.map((color,index) => (
                <div key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}>
                  </div>
             ))}
            </div>
          </div>
           {/* Delivery */}
          <p className="text-sm mt-4 text-gray-700">📍 Check delivery <span className="text-green-600">FREE delivery</span></p>

          {/* Action Buttons */}
          <div className="mt-5 flex gap-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded text-sm font-semibold">Buy Now</button>
            <button onClick={()=>addToCart(productData._id,size)} className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded text-sm font-semibold">Add to Cart</button>
          </div>
          {/* Specifications */}
          <div className="mt-6">
            <h2 className="font-semibold">Specifications</h2>
            <div className="grid grid-cols-2 text-sm text-gray-600 mt-2">
              <p><b>Occasion:</b> Casual</p>
              <p><b>Strap Material:</b> Synthetic</p>
              <p><b>Sole Material:</b> EVA</p>
              <p><b>Pattern:</b> Textured</p>
            </div>
          </div>
          {/* Description */}
          <div className="mt-6">
            <h2 className="font-semibold">Description</h2>
            <p className="text-sm text-gray-600 mt-1">Stylish and comfortable flip-flops for men for everyday use. Made from high-quality materials to ensure durability.</p>
          </div>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ):<div className='OPcity-0' ></div>
}

export default Product