"use client";
import React, { useMemo } from "react";
import Header from "../(components)/header";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import Footer from "../(components)/Footer";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapListing from "../(components)/MapListing";

const Listing = () => {
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header />
            <div className="flex flex-col p-10 gap-10">
                <div className="flex flex-row w-full justify-between items-center p-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">CVK Park Bosphorus Hotel Istanbul</h1>
                        <div className="flex flex-row">
                            <MdLocationOn size={16} />
                            <p className="text-sm font-thin">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                        </div>
                        <div className="flex flex-row ">
                            <div className="border-solid border p-2 rounded-md border-teal-400 text-xs">4.2</div>
                            <p className="text-xs font-semibold p-2">Very good</p>
                            <p className="text-xs font-light p-2">371 reviews</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-[20%] items-end">
                        <p className="text-orange-500 justify-self-end font-semibold text-2xl">$240/<span className="text-base">night</span></p>
                        <div className="flex flex-row gap-4">
                            <div className="border-solid border p-3 rounded-md border-teal-400 text-xs">
                                <AiFillHeart size={20} />
                            </div>
                            <button className="bg-[#8DD3BB] w-[80%] p-3 font-semibold rounded-md">Book place</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col justify-center items-center rounded-md mx-auto gap-1">
                    <div className="row-span-2">
                        <Image src="/fav1.jpeg" width={500} height={600} alt="Image 1" />
                    </div>
                    <div className="">
                        <Image src="/fav2.jpeg" width={250} height={300} alt="Image 1" />
                    </div>
                    <div>
                        <Image src="/home4.jpeg" width={250} height={300} alt="Image 1" />
                    </div>
                    <div>
                        <Image src="/home1.jpeg" width={250} height={300} alt="Image 1" />
                    </div>
                    <div>
                        <Image src="/home6.jpeg" width={250} height={300} alt="Image 1" />
                    </div>
                    
                </div>
                <div className="border border-[#ACACAC] w-full opacity-40  mx-auto"></div>
                <div className="flex flex-col gap-2 w-[95%] px-10 justify-center">
                    <p className="text-xl font-bold">Overview</p>
                    <p className="text-xs font-thin">Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 pidable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.</p>
                </div>
                <div className="border border-[#ACACAC] w-full opacity-40  mx-auto"></div>
                <div className="flex flex-col gap-4 px-10">
                    <p className="text-xl font-bold">Available Rooms</p>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row justify-between w-[30%] items-center">
                            <Image src="/home6.jpeg" width={40} height={50} alt="Image 1" className="rounded-sm" />
                            <p className="text-[13px] font-light">Superior room - 1 double bed or 2 twin beds</p>
                        </div>
                        <div className="flex flex-row justify-evenly w-[30%] items-center">
                            <p className="font-semibold text-base">$240/<span className="text-sm">night</span></p>
                            <button className="bg-[#8DD3BB] w-[40%] p-3 font-semibold rounded-md">Book now</button>
                        </div>
                    </div>
                    <div className="border border-[#ACACAC] w-full opacity-40  mx-auto"></div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row justify-between w-[30%] items-center">
                            <Image src="/home6.jpeg" width={40} height={50} alt="Image 1" className="rounded-sm" />
                            <p className="text-[13px] font-light">Superior room - 1 double bed or 2 twin beds</p>
                        </div>
                        <div className="flex flex-row justify-evenly w-[30%] items-center">
                            <p className="font-semibold text-base">$240/<span className="text-sm">night</span></p>
                            <button className="bg-[#8DD3BB] w-[40%] p-3 font-semibold rounded-md">Book now</button>
                        </div>
                    </div>
                    <div className="border border-[#ACACAC] w-full opacity-40  mx-auto"></div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row justify-between w-[30%] items-center">
                            <Image src="/home6.jpeg" width={40} height={50} alt="Image 1" className="rounded-sm" />
                            <p className="text-[13px] font-light">Superior room - 1 double bed or 2 twin beds</p>
                        </div>
                        <div className="flex flex-row justify-evenly w-[30%] items-center">
                            <p className="font-semibold text-base">$240/<span className="text-sm">night</span></p>
                            <button className="bg-[#8DD3BB] w-[40%] p-3 font-semibold rounded-md">Book now</button>
                        </div>
                    </div>
                    <div className="border border-[#ACACAC] w-full opacity-40 mb-10 mx-auto"></div>
                    <div className="flex flex-row justify-between w-full">
                        <p className="text-xl font-bold">Location/Map</p>
                        <button className="bg-[#8DD3BB] w-[20%] p-3 font-normal rounded-md">View on google maps</button>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <MapListing />
                    <div className="flex flex-row gap-1">
                        <MdLocationOn size={16} />
                        <p className="text-sm font-thin">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                    </div>
                </div>

                <div className="border border-[#ACACAC] w-full opacity-40 mb-4 mx-auto"></div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">Amenities</p>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Listing