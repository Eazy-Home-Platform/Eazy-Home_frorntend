import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-10 text-sm">
            <div className="flex flex-row gap-2">
                <AiFillHome size={20} color="white" />
                <Link href="/" className="font-bold">Home </Link>
            </div>
            <div className="flex flex-row gap-2">
                <AiFillInfoCircle size={20} color="white" />
                <Link href="about" className="font-bold">About Us</Link>
            </div>
            <div className="flex flex-row gap-2">
                <BsFillTelephoneFill size={20} color="white" />
                <Link href="contact" className="font-bold">Contact Us</Link>
            </div>
        </div>
    )
}
export default Navbar