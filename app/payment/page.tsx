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
                    <Image src="/fav3.jpeg" width={350} height={700} alt="properties" className="rounded-lg"  />
                </div>
                <div className="justify-self-start p-10 lg:w-[60%] w-full gap-5 flex flex-col">
                    <div className="md:text-lg text-xl font-bold">Your book details</div>
                    <div className="flex flex-row  sm:gap-3 md:gap-6 gap-3 w-[70%]  justify-around p-3 shadow-md">
                        <TextField id="outlined-basic" label="Check in" variant="outlined" />
                        <TextField id="outlined-basic" label="Check out" variant="outlined" />
                    </div>
                    <div className="md:text-lg text-xl font-bold">Chose how to pay</div>
                    <div className="flex flex-col border border-[#ACACAC] sm:w-[80%] w-full rounded-lg">
                        <div className="flex sm:flex-row flex-col p-4 justify-between border  bg-[#DDFFFB80] gap-4">
                            <div className="flex flex-col  gap-3">
                                <div className="text-lg font-bold">Pay in full</div>
                                <div className="text-xs font-light text-[#5E5E5E]">Pay the new total now and you're all set.</div>
                            </div>
                            <div className="flex flex-row sm:justify-between justify-start items-center">
                                <div className="text-xl font-bold">$1000.12</div>
                                <Checkbox {...label} />
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col p-4 justify-between gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="text-lg font-bold">Pay part now, part later</div>
                                <div className="text-xs font-light text-[#5E5E5E]">Pay $500.06 now, and the rest ($500.06) will be automatically charged to the same payment method on Apr 19, 2023. No extra fee</div>
                            </div>
                            <div className="flex flex-row sm:justify-between justify-start items-center">
                                <div className="text-xl font-bold">$500.06</div>
                                <Checkbox {...label} />
                            </div>
                        </div>
                    </div>
                    <div className="text-lg font-bold">Pay with</div>
                    <FormControl sx={{
                        width: "80%"
                    }}>
                        <InputLabel id="demo-simple-select-label">Pay with</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Paypal</MenuItem>
                            <MenuItem value={20}>Mobile money</MenuItem>
                            <MenuItem value={30}>Stripe</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="text-xl sm:text-3xl font-bold">Add a payment method</div>
                    <div className="text-sm font-light text-[#5E5E5E]">Let's get you all setup so you can access your personal account.</div>
                    <TextField
                        sx={{
                            width: "80%"
                        }}
                        id="outlined-helperText"
                        label="Card number"
                        defaultValue="4321 4321 4321 4321"
                        helperText=""
                    />
                    <div className="flex flex-row gap-3 justify-between w-[80%]">
                        <TextField
                            sx={{
                             
                            }}
                            id="outlined-helperText"
                            label="Exp. date"
                            defaultValue="02/27"
                            helperText=""
                        />
                        <TextField
                            sx={{
                            }}
                            id="outlined-helperText"
                            label="CVC"
                            defaultValue="123"
                            helperText=""
                        />
                    </div>
                    <TextField
                        sx={{
                            width: "80%"
                        }}
                        id="outlined-helperText"
                        label="Name on Card"
                        defaultValue="Edmond Gakuba"
                        helperText=""
                    />
                    <FormControl sx={{ width: "80%"}}>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>United States</MenuItem>
                            <MenuItem value={20}>Canada</MenuItem>
                            <MenuItem value={30}>Rwanda</MenuItem>
                            <MenuItem value={30}>Russia</MenuItem>
                            <MenuItem value={30}>China</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="flex flex-row justify-start items-center">
                        <Checkbox {...label} />
                        <div className="text-xs sm:text-sm font-semibold w-[80%]">Securely save my information for 1-click checkout</div>
                    </div>
                    <button className="bg-[#8DD3BB] w-[80%] font-medium rounded-md p-3">Add payment method</button>
                    <div className="text-xs  text-center text-[#5E5E5E] w-[80%]">By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Payment