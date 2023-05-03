import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"

const Listings = () => {
    return (
        <>
        <div className="text-black pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            <div className="col-span-1 cursor-pointer group">
                <div className="flex flex-col gap-2 w-full">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                        <Image
                            fill
                            className="
                            object-cover 
                            h-full 
                            w-full 
                            group-hover:scale-110 
                            transition
                            "
                            src="/landing-image.jpeg"
                            alt="Listing"
                        />
                        <div className="absolute top-3 right-3">
                            <div className="relative hover:opacity-80 transition cursor-pointer">
                                <AiOutlineHeart
                                    size={28}
                                    className="
                                    fill-white
                                    absolute
                                    -top-[2px]
                                    -right-[2px]
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="font-semibold text-lg">
                        Nyamirambo, Rwanda
                    </div>
                    <div className="font-light text-neutral-500">
                        6 nights - Jun 4-10
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <div className="font-semibold">
                            $200
                        </div>
                        <div className="font-light">night</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Listings