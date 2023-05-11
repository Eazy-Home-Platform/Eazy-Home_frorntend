import { IUserImpl } from '@/app/(utils)/custom.data'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import AccountInfoData from './account-info-data'

const AccountInfo = () => {
    const displayInfo = () => {
        const keys = Object.keys(IUserImpl);
        const infoData = keys.map((key) => <AccountInfoData key={key} label={key} value={IUserImpl[key]} />);
        return infoData;
    }

    return (
        <div className='bg-white text-black w-full'>
            <div className='flex justify-between place-items-center py-4'>
                <h1 className='text-xl font-semibold'>Account</h1>
            </div>
            <div className='bg-white rounded-sm shadow-sm shadow-slate-100'>
                {displayInfo()}
            </div>
        </div>
    )
}

export default AccountInfo