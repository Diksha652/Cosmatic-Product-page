import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import Category from './Pages/CategoryPage';
import Footer from './Component/Footer/Footer';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import ProductInfo from './Pages/ProductInfo';
import SearchProduct from './Pages/SearchProduct';
import Order from './Component/Order/Order';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div style={{textAlign:"center", backgroundColor:'rgb(250, 0, 120)', fontSize:"24px" ,color:"black"}}>Buy Any 5 Products at ₹1199 only! Use Code : BUY5 | Get 30% Cashback on every order | Click to Shop--</div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:type' element={<Category/>}/>
        <Route path='/product/:id' element={<ProductInfo/>}/>
        <Route path='/search' element={<SearchProduct/>}/>
        <Route path='/order/:id' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  )
}

export default App
