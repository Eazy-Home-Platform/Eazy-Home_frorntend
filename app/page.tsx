"use client";
import Image from 'next/image'
import HomePage from './components/HomePage'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

export default function Home() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
</div>
    
  )
}
