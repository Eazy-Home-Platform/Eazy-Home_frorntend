"use client";
import AuthButtons from "../(components)/AuthButtons"
import Logo from "../(components)/Logo"
import Navbar from "../(components)/Navbar"

const Landing = () => {
    return (
        <div className="p-2">
        <div className="bg-[url('/landing-image.jpeg')] w-full bg-fixed bg-cover rounded-md h-[98vh] box-border">
          <div className="container-gradient">
            <div className="mx-auto flex flex-row items-center  justify-around py-5">
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
    )
}

export default Landing