import React from "react";
import Form from "../(components)/Form";
import Logo from "../(components)/Logo";

const Signup = () => {
  return (
    <div className="relative flex flex-col px-8 bg-white min-h-screen justify-center  ">
      <div className="text-[#000000] absolute top-2 z-10 bg-white font-bold">
        <Logo/>
      </div>
      <div className="flex justify-center gap-10 w-full ">
        <div className="relative flex justify-center items-center  w-full ">
          <div className="absolute w-full rounded-lg h-[86vh]">
            <img src="./landing-image.jpeg" alt="" className="h-full rounded-lg w-full" />
          </div>
          <div className="w-full absolute rounded-lg h-[86vh] bg-black/50"></div>
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
      </div>
    </div>
  );
};

export default Signup;


