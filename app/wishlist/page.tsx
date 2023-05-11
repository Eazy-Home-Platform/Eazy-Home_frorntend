"use client";
import React from "react";
import Image from "next/image";
import Header from "../(components)/header";
import { MdLocationOn } from "react-icons/md";
import { RiCupFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import StarContainer from "../(components)/StarContainer";
const WishList = () => {
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header />
            <div className="p-10 flex flex-col gap-5">
                <div className="text-lg font-bold">Favourites</div>
                <div className="flex flex-row w-[98%] h-[40vh] bg-white rounded-md">
                    <div className="w-[35%] relative overflow-hidden">
                        <Image fill src="/fav1.jpeg" alt="favourites" className="object-cover rounded-l-md w-full object-full" />
                    </div>
                    <div className="flex flex-col p-5 gap-3 relative w-full">
                        <div className="text-xl font-bold">CVK Park Bosphorus Hotel Istanbul</div>
                        <div className="flex flex-row">
                            <MdLocationOn size={16} />
                            <div className="text-xs font-thin">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <StarContainer />
                            <div className="text-xs font-light">5 Stars Hotel</div>
                            <div className="flex flex-row gap-2">
                                <RiCupFill />
                                <div className="text-xs font-light">
                                    20+ Aminities
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="border-solid border p-2 rounded-md border-teal-400 text-xs">4.2</div>
                            <div className="text-xs font-semibold p-2">Very Good</div>
                            <div className="text-xs font-light p-2">371 Reviews</div>
                        </div>
                        <div className="flex w-[800px] border border-gray-300"></div>
                        <div className="flex flex-row gap-10">
                            <div className="border-solid border p-3 rounded-md border-teal-400 text-xs">
                                <AiFillHeart size={20} />
                            </div>
                            <button className="bg-[#8DD3BB] w-[700px] font-semibold rounded-md">View Place</button>
                        </div>
                        <div className="absolute top-0 right-0">
                            <div className="p-8 text-xs font-light">Starting from</div>
                            <div className="text-orange">$240/night</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList