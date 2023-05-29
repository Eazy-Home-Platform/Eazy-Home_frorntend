"use client";
import Image from 'next/image'
<<<<<<< HEAD
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
=======
import { Inter } from 'next/font/google'
import Logo from './(components)/Logo'
import Navbar from './(components)/Navbar'
import AuthButtons from './(components)/AuthButtons'
import Category from './(components)/Category'
import Listings from './(components)/Listings'
import Footer from './(components)/Footer'
import Landing  from './Landing/landing'

export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col bg-white justify-between">
      <Landing />
      <Category />
      <Listings />
      <Footer />
    </main>
>>>>>>> 27cf6fdadd67a75845be326cb64c020e06400776
    
  )
}
