import React from 'react'
import { FaEdit } from 'react-icons/fa'

const AccountInfoData = ({ value ,label}: { label: any,value: any}) => {
    return (
        <div className='flex justify-between py-2 place-items-center'>
            <div>
                <label className='text-[12px] text-slate-500'>{label}</label>
                <h1 className='text-black text-[16px]'>{value}</h1>
            </div>
            <div>
                <button className='bg-white border-btn_color text-black px-10 text-[12px] hover:bg-btn_color duration-300 flex justify-center gap-6 py-3 border-2 rounded-sm'>
                    <FaEdit/>
                    <span className='text-[12px]'>Change</span>
                </button>
            </div>
        </div>
    )
}

export default AccountInfoData