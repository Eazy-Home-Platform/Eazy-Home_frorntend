
import React from "react";
import Form from "../components/Form";

const Signup = () => {
  return (
    <div className="w-full  relative flex flex-col px-4 bg-[#EAEAEA]  justify-center  ">
      <h2 className="text-[#000000] font-bold">Logo</h2>
      <div className="flex justify-center font- w-full ">
        <div className=" relative flex justify-center items-center  w-full ">
          <div className="absolute w-full  h-[90vh]">
            <img src="./landing-image.jpeg" alt="" className="h-full w-full" />
          </div>
          <div className="w-full absolute h-[90vh] bg-black/50"></div>
          <div className="flex absolute flex-col justify-center items-center  w-full">
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


