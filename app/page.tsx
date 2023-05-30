import Image from 'next/image'
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
    <main className="flex overflow-hidden flex-col bg-white justify-between">
      <Landing />
      <Category />
      <Listings />
      <Footer />
    </main>
    
  )
}
