import Image from 'next/image'
import React from 'react'
import { ITicket, TicketsArr } from '@/app/(utils)/custom.data'
import flight_ticket_company from '/(assets)/flight_company.png'
const TicketsDataInfo = () => {
    return (
        <div className='flex flex-col gap-4'>
            {TicketsArr.map((ticket: ITicket) => (
                <div key={ticket.id} className='bg-white flex justify-between flex-row rounded-md shadow-md shadow-slate-100 w-full py-4 px-8'>
                    <div className='flex flex-row gap-6'>
                        <div className='h-16 w-16 rounded-sm'>
                            <Image className='h-full w-full object-contain' src={`${ticket.flight_company ? ticket.flight_company : '/(assets)/flight_company.png'}`} alt='' width={500} height={500} />
                        </div>
                        <div className='flex flex-row gap-4 px-6 place-items-center border-slate-200 border-r-2'>
                            <div className='flex flex-col'>
                                <label className='text-[18px] text-black font-bold'>{ticket.departure}</label>
                                <span className='text-[14px]'>{ticket.departure_time}</span>
                            </div>
                            <div>
                                <p className='text-black text-[18px] font-bold'>-</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[18px] text-black font-bold'>{ticket.arrival}</label>
                                <span className='text-[14px]'>{ticket.arrival_time}</span>
                            </div>
                        </div>
                        <div className='pl-20 max-w-[20vw]'>
                            <div className='flex font-semibod  flex-row gap-6'>
                                <div className='flex flex-col'>
                                    <label className='text-[#00000064] font-bold text-[10px]'>Date</label>
                                    <span className='text-black'>12-11-2022</span>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#00000064] font-bold text-[10px]'>Gate</label>
                                    <span className='text-black'>A12</span>
                                </div>
                            </div>
                            <div className='flex flex-row gap-6'>
                                <div className='flex flex-col'>
                                    <label className='text-[#00000064] font-bold text-[10px]'>Flight time</label>
                                    <span className='text-black'>Newyork</span>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#00000064] font-bold text-[10px]'>Seat</label>
                                    <span className='text-black'>123</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-btn_color py-4 text-white font-medium text-[12px] px-10 rounded-md'>Download ticket</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TicketsDataInfo