"use client";
import React from "react";
import Footer from "../(components)/Footer"
import Header from "../(components)/header"
import Image from "next/image";
import { Checkbox, TextField } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Payment = () => {
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header />
            <div className="w-full flex flex-row justify-between">
                <div className="justify-self-start ml-10 my-10">
                    <Image src="/fav3.jpeg" width={350} height={700} alt="properties" className="rounded-lg" />
                </div>
                <div className="justify-self-start p-10 w-[60%] gap-5 flex flex-col">
                    <div className="text-lg font-bold">Your book details</div>
                    <div className="flex flex-row w-[70%]  justify-around p-3 shadow-md">
                        <TextField id="outlined-basic" label="Check in" variant="outlined" />
                        <TextField id="outlined-basic" label="Check out" variant="outlined" />
                    </div>
                    <div className="text-lg font-bold">Chose how to pay</div>
                    <div className="flex flex-col border border-[#ACACAC] w-[80%] rounded-lg">
                        <div className="flex p-4 justify-between border  bg-[#DDFFFB80] gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="text-lg font-bold">Pay in full</div>
                                <div className="text-xs font-light text-[#5E5E5E]">Pay the new total now and you're all set.</div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="text-xl font-bold">$1000.12</div>
                                <Checkbox {...label} />
                            </div>
                        </div>
                        <div className="flex p-4 justify-between  gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="text-lg font-bold">Pay part now, part later</div>
                                <div className="text-xs font-light text-[#5E5E5E]">Pay $500.06 now, and the rest ($500.06) will be automatically charged to the same payment method on Apr 19, 2023. No extra fee</div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="text-xl font-bold">$500.06</div>
                                <Checkbox {...label} />
                            </div>
                        </div>
                    </div>
                    <div className="text-lg font-bold">Pay with</div>
                </div>
            </div>
        </div>
    )
}

export default Payment