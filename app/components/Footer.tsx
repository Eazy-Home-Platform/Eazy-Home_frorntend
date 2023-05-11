import Link from 'next/link';
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="w-[100%] h-[45vh] bg-[#DDFFFB] p-10 flex flex-row mt-20 text-black">
            <div className="flex flex-col w-[30%] justify-center">
                <div className="justify-self-start">
                    <Image src="/logo.png" width={100} height={30} alt="Logoo" />
                </div>
                <div className="font-light text-neutral-500 text-sm">We provide information about properties such as houses, villas and apartments to help people find their dream home in an easy way.</div>
                <div className="flex flex-row gap-5 mt-5">
                    <FaFacebookF size={24} />
                    <BsTwitter size={24} />
                    <AiFillInstagram size={24} />
                </div>
            </div>
            <div className="flex flex-row gap-10 justify-center w-[70%]">
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-md">Property</div>
                    <Link href="/" className="text-neutral-500 text-sm">House</Link>
                    <Link href="/" className="text-neutral-500 text-sm">Apartment</Link>
                    <Link href="/" className="text-neutral-500 text-sm">Villa</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-md">Contact</div>
                    <div className="text-neutral-500 text-sm">RWANDA, Kigali</div>
                    <div className="text-neutral-500 text-sm">+(250)790077242</div>
                    <div className="text-neutral-500 text-sm">info@eazy Homesr.com</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-md">Article</div>
                    <div className="text-neutral-500 text-sm">New Article</div>
                    <div className="text-neutral-500 text-sm">Popular Article</div>
                    <div className="text-neutral-500 text-sm">Most Read</div>
                    <div className="text-neutral-500 text-sm">Tips & Tricks</div>
                </div>
                
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-md">Pricing</div>
                    <div className="text-neutral-500">Alpha</div>
                    <div className="text-neutral-500">Beta</div>
                    <div className="text-neutral-500">Omega</div>    
                </div>
            </div>
        </div>
    )
}

export default Footer