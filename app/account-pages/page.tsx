"use client"
import React, { useState } from 'react'
import Header from '../(components)/header'
import pic from '../(assets)/model.jpeg'
import Image from 'next/image'
import { FaCloudUploadAlt, FaPencilAlt } from 'react-icons/fa'
import AccountInfo from './(features)/account-info'
import TicketBookings from './(features)/bookings'
const Profile = () => {
  const [showModalInfo, setShowModal] = useState<string>('account')
  return (
    <div className='bg-[#FAFBFC] text-black min-h-screen pb-14'>
      <Header />
      <main className='lg:px-20'>
        <div className='bg-white border-slate-100 border-2 relative my-6 flex justify-center flex-col place-items-center py-6 rounded-sm w-full '>
          <div className='border-red-400 relative border-2 rounded-full h-24 w-24'>
            <Image className='h-full w-full object-cover rounded-full' src={pic}
              alt=''
              width={600}
              height={600} />
            <div className='absolute bottom-0 left-0 h-8 w-8 flex justify-center bg-red-400 rounded-full place-items-center'>
              <FaPencilAlt className='text-[12px] text-black' />
            </div>
          </div>
          <div className='text-black py-4 text-center'>
            <h1 className='text-[18px]'>John Doe</h1>
            <p className='text-slate-500'>john.doe@gmail.com</p>
          </div>
          <div>
            <button className='bg-btn_color absolute hover:bg-green-400 group duration-500 right-10 top-10 text-black py-4 flex justify-center gap-6 place-items-center rounded-md shadow-sm px-4'>
              <FaCloudUploadAlt />
              <span className='text-[12px] group-hover:font-bold'>Upload new cover</span>
            </button>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-white shadow-md rounded-md shadow-slate-100 w-full y-4 flex justify-between'>
            <div className={`${showModalInfo === 'account' ? ' border-green-500 w-full border-b-4 my-0 flex rounded-sm justify-center place-items-center flex-col py-2 px-4' : 'text-center border-r-2 my-4 py-2 min-w-[30vw] px-4 border-slate-200'}`} onClick={() => setShowModal('account')}>
              <h1 className='text-[14px]'>Account</h1>
            </div>
            <div className={`${showModalInfo === 'tickets/books' ? ' border-green-500 w-full border-b-4 my-0 flex rounded-sm justify-center place-items-center flex-col py-2 px-4' : 'text-center border-r-2 my-4 py-2 min-w-[30vw] px-4 border-slate-200'}`} onClick={() => setShowModal('tickets/books')}>
              <h1 className='text-[14px]'>Tickets/Bookings</h1>
            </div>
            <div className={`border-l-2 my-4 py-2 min-w-[30vw] px-4 border-slate-200`}>
              <h1 className='text-[14px]'>Payment methods</h1>
            </div>
          </div>
          {showModalInfo === 'account' &&
            <AccountInfo />
          }{showModalInfo === 'tickets/books' &&
            <TicketBookings />
          }
        </div>
      </main>
    </div>
  )
}

export default Profile