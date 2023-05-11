import React from 'react'
import { FaArrowAltCircleDown, FaArrowDown, FaBed, FaPlane } from 'react-icons/fa'

const TicketBookings = () => {
    return (
        <div className='bg-white text-black w-full'>
            <div className='flex justify-between place-items-center my-4 px-10'>
                <h1 className='text-xl font-medium'>Bookings</h1>
                <span className='text-slate-500 text-[12px] flex gap-6 place-items-center'>Upcoming
                    <FaArrowDown className='text-[12px]' />
                </span>
            </div>
            <div className='bg-white px-10 shadow-md shadow-slate-100 w-full y-4 flex justify-between'>
                <div className='border-b-4 my-0 flex justify-center place-items-start flex-col py-2 w-full px-10 border-green-200'>
                    <h1 className='text-[14px] flex place-items-center gap-4'><FaPlane /> Flights</h1>
                </div>
                <div className='border-l-2 my-4 py-2 min-w-[40vw] px-4 border-slate-200'>
                    <h1 className='text-[14px] flex place-items-center gap-4'><FaBed /> Stays</h1>
                </div>
            </div>
        </div>
    )
}

export default TicketBookings