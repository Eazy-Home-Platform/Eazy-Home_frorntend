"use client";
import React, { useState } from "react";
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import {Icon} from 'react-icons-kit'
import {eye} from "react-icons-kit/feather/eye"

import {eyeOff} from "react-icons-kit/feather/eyeOff"



const Form = () => {
  const [type,setType]=useState("password");
  const [icon,setIcon]=useState(eyeOff);
  const handleToggle=()=>{
    if(type==="password"){
      setType("text")
      setIcon(eye)
  }else{
    setType("password")
    setIcon(eyeOff)
  }}
  return (
    <div className="w-full flex flex-col h-full     p-4 ">
      <h2 className="font-normal text-[20px]  pl-5">Signup</h2>
      <p className="font-normal text-[16px] pl-5 text-[#112211] pt-2">
        Let’s get you all st up so you can access your personal account.{" "}
      </p>
      <form action="" className="p-4 ">
        <div className="flex pt-5 justify-center items-center w-full gap-3">
          <div className="flex  flex-col justify-center w-full">
            <label className="text-[#79747E]">First Name</label>
            <input
              type="text"
              className="border-[1px] p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
          </div>
          <div className="flex pt-5  flex-col justify-center w-full ">
            <label className="text-[#79747E]">Last Name</label>
            <input
              type="text"
              className="border-[1px] p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex pt-5 justify-center items-center w-full gap-3">
          <div className="flex flex-col justify-center w-full">
            <label className="text-[#79747E]">Email</label>
            <input
              type="email"
              className="border-[1px] p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label className="text-[#79747E]">Phone Number</label>
            <input
              type="text"
              className="border-[1px] p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex pt-5 flex-col justify-center">
          <div className="flex flex-col w-full">
            <label className="text-[#79747E]">Password</label>
            <div className="flex">
            <input
              type={type}
              className="border-[1px] w-full p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
            <i className="absolute right-24 pt-2" onClick={handleToggle}><Icon icon={icon} size={20}/></i>
           
            </div>
           
          </div>
          <div className="flex flex-col w-full pt-5">
            <label className="text-[#79747E]">Confirm Password</label>
            <div className="flex">
            <input
              type={type}
              className="border-[1px] p-2 w-full border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
            <i className="absolute right-24 pt-2" onClick={handleToggle}><Icon icon={icon} size={20}/></i>
            
            </div>
           
            
          </div>
        </div>
        <div className="pt-5 flex w-full">
          <input type="checkbox" />
          <p className="flex w-full pl-2">
            <span className="text-[] flex  ">
              I agree to all the <p className="pl-2 text-red-400">Terms </p> 
                 <p className="pl-2">and</p> 
              <p className="pl-2 text-red-400"> Privacy Policies</p>{" "}
            </span>
          </p>
        </div>
        <button type="submit" className=" mt-2 p-3 px-40 w-full bg-[#8DD3BB] text-black rounded-[4px] "> Create account</button>
        <p className="text-center pt-2">
          Already have an account ? <a className="text-red-400" href="">Login</a>
        </p>
        <div className="w-full flex justify-between items-center pt-3">
          <div className="h-[1px] bg-[#948e8e] w-[30%]"></div>
          <p className="text-gray-400 ">Or Sign Up with</p>
          <div className="h-[1px] bg-[#9d9595]  w-[30%]"></div>
        </div>
        <div className="pt-6">
          <div className="flex justify-between items-center w-full">
            <i className=" py-4 px-20 border-[2px] cursor-pointer border-green-100"><BsFacebook className="text-blue-600 h-6 w-6"/></i>
            <i className="py-4 px-20 border-[2px] cursor-pointer border-green-100"><FcGoogle className="h-6 w-6" /></i>

            <i className="py-4 px-20 border-[2px] cursor-pointer   border-green-100"><BsApple className="h-6 w-6"/></i>

          </div>
          <div></div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Form;
