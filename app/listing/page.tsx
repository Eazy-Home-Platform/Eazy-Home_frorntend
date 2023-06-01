import * as React from "react";
import Header from "../(components)/header";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";

const Listing = () => {
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header />
            <div className="flex flex-col p-10">
                <div className="flex flex-row w-full justify-between items-center mb-10">
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
                <div className="w-full grid grid-rows-2 grid-flow-col gap-1">
                    <div className="row-span-2 w-full">
                        <Image src="/fav1.jpeg" width={500} height={600} alt="Image 1" />
                    </div>
                    <div>
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
            </div>
        </div>
    )
}

export default Listing