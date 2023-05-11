import Link from "next/link"
const AuthButtons = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-5">
            <Link href="/login" className="font-semibold">Login</Link>
            <Link href="/signup" className="p-3 rounded bg-white text-black font-semibold">Sign Up</Link>
        </div>
    )
}
export default AuthButtons