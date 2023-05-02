import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-20">
            <div className="flex flex-row gap-2">
                <AiFillHome size={24} color="black" />
                <div className="font-bold">Home</div>
            </div>
            <div className="flex flex-row gap-2">
                <AiFillInfoCircle size={24} color="black" />
                <div className="font-bold">About Us</div>
            </div>
            <div className="flex flex-row gap-2">
                <BsFillTelephoneFill size={24} color="black" />
                <div className="font-bold">Contact Us</div>
            </div>
        </div>
    )
}
export default Navbar