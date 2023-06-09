"use client";
import Image from "next/image";
import * as React from "react";
import { MdLocationOn } from "react-icons/md";
import { RiCupFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import StarContainer from "@/app/(components)/StarContainer";
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
        id: "2",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav2.jpeg",
    },
    {
        id: "3",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/fav3.jpeg",
    },
    {
        id: "4",
        images: "9 images",
        name: "Eresin Hotels Sultanahmet - Boutique Class",
        location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
        stars: "5 Stars Hotel",
        aminities: "20+ Aminities",
        rate: "Very Good",
        reviews: "371 Reviews",
        amount: "240",
        imageSrc: "/home5.jpeg",
    },
]



const Houses = () => {
    return (
        <>

            {WishListOptions.map((wishlist) => (
                <div key={wishlist.id} className="flex flex-row w-[98%]  mb-5 h-[45vh] bg-white rounded-md">
                    <div className="w-[40%] relative overflow-hidden">
                        <Image fill src={wishlist.imageSrc} alt="favourites" className="object-cover rounded-l-md w-full object-full" />
                        <div className="absolute top-3 right-3">
                            <div className="">
                                <p>{wishlist.images}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 gap-3 relative w-full">
                        <p className="text-xl font-bold w-[50%]">{wishlist.name}</p>
                        <div className="flex flex-row">
                            <MdLocationOn size={16} />
                            <p className="text-xs font-thin">{wishlist.location}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <StarContainer />
                            <p className="text-xs font-light">5 Stars Hotel</p>
                            <div className="flex flex-row gap-2">
                                <RiCupFill />
                                <p className="text-xs font-light">
                                    {wishlist.aminities}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="border-solid border p-2 rounded-md border-teal-400 text-xs">4.2</div>
                            <p className="text-xs font-semibold p-2">{wishlist.rate}</p>
                            <p className="text-xs font-light p-2">{wishlist.reviews}</p>
                        </div>
                        <div className="flex w-[100%] border border-gray-300"></div>
                        <div className="flex flex-row gap-10">
                            <div className="border-solid border p-3 rounded-md border-teal-400 text-xs">
                                <AiFillHeart size={20} />
                            </div>
                            <button className="bg-[#8DD3BB] w-[90%] font-semibold rounded-md">View Place</button>
                        </div>
                        <div className="absolute top-0 right-0">
                            <div className="p-8">
                                <p className="text-xs text-neutral-500 font-normal">Starting from</p>
                                <p className="text-orange-500 font-semibold text-2xl">${wishlist.amount} / <span className="text-md">night</span></p>
                                <p className="text-xs text-neutral-500 font-normal">excl. tax</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Houses;