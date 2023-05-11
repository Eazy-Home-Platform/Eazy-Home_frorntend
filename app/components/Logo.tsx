import Image from "next/image";
const Logo = () => {
    return (
        <div>
            <Image src="/logo.png" width={60} height={40} alt="LOGO" />
        </div>
    )
}
export default Logo