import React from "react";

const Form = () => {
  return (
    <div className="w-full flex flex-col  p-4 ">
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
            <input
              type="password"
              className="border-[1px] p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
            <i></i>
          </div>
          <div className="flex flex-col w-full pt-5">
            <label className="text-[#79747E]">Confirm Password</label>
            <input
              type="password"
              className="border-[1px] p-2 border-solid border-[#79747E] rounded-sm bg-transparent"
              placeholder=""
            />
            <i></i>
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
      </form>
    </div>
  );
};

export default Form;
