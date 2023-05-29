import { ITicket, TicketsArr } from '@/app/(utils)/custom.data'
import Image from 'next/image'
import React from 'react'
import flight_ticket_company from '../../(assets)/flight_company.png'
const TicketsDataInfo = () => {
    return (
        <div className='flex flex-col gap-4'>
            {TicketsArr.map((ticket: ITicket) => (
                <div key={ticket.id} className='bg-white flex justify-between flex-row rounded-md shadow-md w-full py-4 px-4'>
                    <div className='h-12 w-12 rounded-xl'>
                        <Image className='h-full w-full object-cover rounded-xl' src={`${ticket.flight_company ? ticket.flight_company : flight_ticket_company}`} alt='' width={500} height={500} />
                    </div>
                    <div className='flex flex-row gap-4 place-items-center border-slate-400 border-r-2'>
                        <div>
                            <label className='text-[12px] text-slate-500 font-bold'>{ticket.departure}</label>
                            <span className='font-semibold text-[14px]'>{ticket.departure_time}</span>
                        </div>
                        <div>
                            <p className='text-black text-[18px] font-bold'>-</p>
                        </div>
                        <div>
                            <label className='text-[12px] text-slate-500 font-bold'>{ticket.arrival}</label>
                            <span className='font-semibold text-[14px]'>{ticket.arrival_time}</span>
                        </div>
                    </div>
                    <div className='bg-indigo-500 grid grid-cols-1 max-w-[20vw]'>
                        <div>
                            `
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TicketsDataInfo