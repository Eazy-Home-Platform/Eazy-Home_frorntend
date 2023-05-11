import React from 'react'
import { FaEdit } from 'react-icons/fa'

const AccountInfoData = ({ value }: { value: string | number}) => {
    return (
        <div className='flex justify-between place-items-center'>
            <div>
                <label className='text-[12px] text-slate-500'>{value}</label>
                <h1 className='text-black font-semibold text-[18px]'>{value}</h1>
            </div>
            <div>
                <button className='bg-white border-btn_color text-black px-10 py-4 border-2 border-sm'>
                    <FaEdit />
                    <span>Change</span>
                </button>
            </div>
        </div>
    )
}

export default AccountInfoData