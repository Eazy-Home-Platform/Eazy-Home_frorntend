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
        <div className='text-black w-full'>
            <div className='flex justify-between py-8 place-items-center px-10'>
                <h1 className='text-xl font-medium'>Profile</h1>
            </div>
            <div className='bg-white px-10 rounded-sm shadow-md py-4 shadow-slate-200'>
                {displayInfo()}
            </div>
        </div>
    )
}

export default AccountInfo