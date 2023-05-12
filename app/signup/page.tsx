<<<<<<< HEAD
import React from "react";
import Form from "../components/Form";

const Signup = () => {
  return (
    <div className="w-full h-full relative flex flex-col p-8 bg-[#EAEAEA]  justify-center  ">
      <h2 className="text-[#000000] font-bold">Logo</h2>
      <div className="flex justify-center font- w-full ">
        <div className=" relative flex justify-center items-center        h-screen w-full ">
          <div className="absolute w-full h-full">
            <img src="./landing-image.jpeg" alt="" className="h-full w-full" />
          </div>
          <div className="w-full h-full absolute bg-black/50"></div>
          <div className="flex absolute flex-col justify-center items-center h-full  w-full">
            <h2 className="w-[213px] text-[40px] h-[44px] font-bold text-[#ffffff]">
              Welcome
            </h2>
            <div className="font-normal align-center text-[#ffffff] h-[87px] w-[405px] pt-5">
              In Publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate.
            </div>
          </div>
        </div>
        <div className="w-full text-black">
          <Form />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
=======
import React from "react"
const Signup = () => {
    return (
        <div className="text-black">Sign up</div>
    )
}
export default Signup 
>>>>>>> 27cf6fdadd67a75845be326cb64c020e06400776
