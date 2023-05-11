"use client";
import Image from 'next/image'
import HomePage from './components/HomePage'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import SignupPage from './components/authPages/SignupPage';
export default function Home() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    {/* <Route path='' element={<HomePage/>}/> */}
    {/* <Route path='/' element={<SignupPage/>}/> */}
    
  </Routes>
  </BrowserRouter>
</div>
    
  )
}
