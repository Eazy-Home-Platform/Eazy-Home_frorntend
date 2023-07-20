import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"
const listingOptions = [
    {
        id: "1",
        region: "Nyamirambo, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home1.jpeg",
        price: "400",
    },
    {
        id: "2",
        region: "Kicukiro, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home2.jpeg",
        price: "400",
    },
    {
        id: "3",
        region: "Nyabihu, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home3.jpeg",
        price: "400",
    },
    {
        id: "4",
        region: "Nyabihu, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home4.jpeg",
        price: "400",
    },
    {
        id: "5",
        region: "Nyabihu, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home5.jpeg",
        price: "400",
    },
    {
        id: "6",
        region: "Nyabihu, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home6.jpeg",
        price: "400",
    },
    {
        id: "7",
        region: "Nyabihu, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home7.jpeg",
        price: "400",
    },
    {
        id: "8",
        region: "Nyabihu, Rwanda",
        view: "Viewed 34,356 times last week",
        nights: "6 nights",
        date: "Jun 4-10",
        imageSrc: "/home8.jpeg",
        price: "400",
    }
]
const Listings = () => {
    return (
        <>
            <div className="text-black pt-24 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-20">
                {listingOptions.map((listing) => (
                    <div key={listing.id} className="col-span-1 cursor-pointer group">
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
                                    src={listing.imageSrc}
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
                                {listing.region}
                            </div>
                            <div className="font-light text-neutral-900">
                                {listing.view}
                            </div>
                            <div className="font-light text-neutral-900">
                                {listing.nights} - {listing.date}
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <div className="font-semibold text-xl">
                                    ${listing.price}
                                </div>
                                <div className="font-semibold">/ night</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Listings