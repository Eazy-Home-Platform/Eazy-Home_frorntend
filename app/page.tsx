import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import AuthButtons from './components/AuthButtons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex max-h-[100vh] flex-col items-center justify-between p-2">
      <div className=" w-full bg-fixed bg-cover rounded-md h-[98vh] box-border"
        style={
          {
            background: "url('/landing-image.jpeg'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
            backdropFilter: "blur(3.5px)"
          }
        }
      >
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
      Hello
    </main>
  )
}
