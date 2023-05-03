import { TbBeach } from "react-icons/tb";
import { AiTwotoneHome } from "react-icons/ai";
import CategoryBox from "./CategoryBox";
import { BiFilter, BiHomeCircle } from "react-icons/bi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Category = () => {
    return (
        <div className="pt-4 flex flex-row ml-20 overflow-x-hidden text-black mb-10">
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <AiTwotoneHome size={32} />
              <div className="font-medium text-md">
                    Mansion
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <BiHomeCircle size={32} />
              <div className="font-medium text-md">
                    Guest Houses
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <BiHomeCircle size={32} />
              <div className="font-medium text-md">
                    Luxe
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <TbBeach size={32} />
              <div className="font-medium text-md">
                    Tiny Houses
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <AiTwotoneHome size={32} />
              <div className="font-medium text-md">
                    Luxe
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <AiTwotoneHome size={32} />
              <div className="font-medium text-md">
                    Mansion
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <TbBeach size={32} />
              <div className="font-medium text-md">
                    Guest House
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center gap-3 p-3 border-b-2 hover:text-neutral-900 text-neutral-700 transition cursor-pointer">
              <BiHomeCircle size={32} />
              <div className="font-medium text-md">
                    Luxe
                </div>
            </div>
            <div className="flex flex-row items-center  justify-center p-3">
              <IoArrowForwardCircleOutline size={36}  /> 
            </div>
            <div className="flex flex-row items-center justify-around rounded-lg bg-white w-[130px]">
              <BiFilter size={24} /> Filter
            </div>
        </div>
    )
}

export default Category