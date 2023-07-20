"use client";
import React from "react";
import Header from "../(components)/header"
import Image from "next/image";
import {TextField} from "@mui/material";

const Payment = () => {
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header/>
            <div className="w-full flex flex-row">
                <div className="w-[40%]">
                    <Image src="/fav3.jpeg"
                        width={250}
                        height={600}
                        alt="properties"
                        className="rounded-lg"/>
                </div>
                <div className="w-[70%]">
                    <div className="text-lg font-bold">Your book details</div>
                    <div className="flex flex-row w-[90%] justify-around p-5 shadow-md">
                        <TextField id="outlined-basic" label="Check in" variant="outlined"/>
                        <TextField id="outlined-basic" label="Check out" variant="outlined"/>
                    </div>
                    <div className="text-lg font-bold">Chose how to play</div>
                    <div className="w-[90%] flex shadow-md"></div>

                </div>
            </div>
        </div>
    )
}

export default Payment
