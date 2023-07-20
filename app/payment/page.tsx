"use client";
import * as React from "react";
import Footer from "../(components)/Footer"
import Header from "../(components)/header"
import Image from "next/image";
import { Checkbox, FormControl, InputLabel, SelectChangeEvent, TextField } from "@mui/material";
import { Select, MenuItem, InputAdornment, Card, Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Payment = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };
    return (
        <div className="bg-[#FAFBFC] text-black min-h-screen">
            <Header />
            <div className="w-full flex lg:flex-row  flex-col justify-between">
                <div className="justify-self-start  ml-10 my-10">
                    <Image src="/fav3.jpeg" width={350} height={700} alt="properties" className="rounded-lg md:w-[80%]"  />
                </div>
                <div className="justify-self-start p-10 lg:w-[60%] w-full gap-5 flex flex-col">
                    <div className="md:text-lg text-xl font-bold">Your book details</div>
                    <div className="flex flex-row  sm:gap-3 md:gap-6 gap-3 w-[70%]  justify-around p-3 shadow-md">
                        <TextField id="outlined-basic" label="Check in" variant="outlined" />
                        <TextField id="outlined-basic" label="Check out" variant="outlined" />
                    </div>
                    <div className="text-lg font-bold">Chose how to play</div>
                    <div className="w-[90%] flex shadow-md">

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Payment
