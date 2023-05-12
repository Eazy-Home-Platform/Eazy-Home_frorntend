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

export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col bg-white justify-between">
      <div className="p-2">
        <div className="bg-[url('/landing-image.jpeg')] w-full bg-fixed bg-cover rounded-md h-[98vh] box-border">
          <div className="container-gradient">
            <div className="mx-auto flex flex-row items-center justify-around py-5">
              <Logo />
              <Navbar />
              <AuthButtons />
            </div>
            <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
              <div className="font-bold text-4xl">Helping others</div>
              <div className="font-bold text-6xl">LIVE & TRAVEL</div>
              <div className="font-semibold text-2xl">Special offers to suite your plan</div>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <Listings />
      <Footer />
    </main>
>>>>>>> 27cf6fdadd67a75845be326cb64c020e06400776
    
  )
}
