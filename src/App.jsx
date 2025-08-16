import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Cart from './pages/Cart';
import SearchBar from './components/SearchBar';
import TopBar from './components/TopBar';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <TopBar/>
      <Navbar/>
      <hr className='text-gray-400'/>
      <div className="sm:hidden px-4 py-2 shadow-md bg-white top-[60px] z-40">
        <SearchBar className="w-full" />
      </div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/news' element={<News/>} />
        <Route path= '/product/:productId'element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App
