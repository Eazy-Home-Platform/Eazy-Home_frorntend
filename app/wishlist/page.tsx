"use client";
import React from "react";
import Image from "next/image";
import Header from "../(components)/header";
import { MdLocationOn } from "react-icons/md";
import { RiCupFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import StarContainer from "../(components)/StarContainer";

const WishListOptions = [
    {
        id: "1",
        images: "9 images",
        name: "CVK Park Bosphorus Hotel Istanbul",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav1.jpeg",
    },
    {
        id: "1",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav1.jpeg",
    },
    {
        id: "1",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav1.jpeg",
    },
]

const WishList = () => {
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header />
            <div className="p-10 flex flex-col gap-5">
                <div className="text-lg font-bold">Favourites</div>
                <div className="flex flex-row w-[98%] h-[40vh] bg-white rounded-md">
                    <div className="w-[35%] relative overflow-hidden">
                        <Image fill src="/fav1.jpeg" alt="favourites" className="object-cover rounded-l-md w-full object-full" />
                        <div className="absolute top-3 right-3">
                            <div className="">
                                <p>9 Images</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 gap-3 relative w-full">
                        <p className="text-xl font-bold">CVK Park Bosphorus Hotel Istanbul</p>
                        <div className="flex flex-row">
                            <MdLocationOn size={16} />
                            <p className="text-xs font-thin">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <StarContainer />
                            <p className="text-xs font-light">5 Stars Hotel</p>
                            <div className="flex flex-row gap-2">
                                <RiCupFill />
                                <p className="text-xs font-light">
                                    20+ Aminities
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="border-solid border p-2 rounded-md border-teal-400 text-xs">4.2</div>
                            <p className="text-xs font-semibold p-2">Very Good</p>
                            <p className="text-xs font-light p-2">371 Reviews</p>
                        </div>
                        <div className="flex w-[800px] border border-gray-300"></div>
                        <div className="flex flex-row gap-10">
                            <div className="border-solid border p-3 rounded-md border-teal-400 text-xs">
                                <AiFillHeart size={20} />
                            </div>
                            <button className="bg-[#8DD3BB] w-[700px] font-semibold rounded-md">View Place</button>
                        </div>
                        <div className="absolute top-0 right-0">
                            <div className="p-8">
                                <p className="text-xs text-neutral-500 font-normal">Starting from</p>
                                <p className="text-orange-500 font-semibold text-2xl">$240 / <span className="text-md">night</span></p>
                                <p className="text-xs text-neutral-500 font-normal">excl. tax</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList