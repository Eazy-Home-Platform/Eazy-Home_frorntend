import React from 'react'
import Logo from './Logo'
import { linksArr } from '../(utils)/custom.data'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
const Header = () => {
    return (
        <div className='bg-main h-14 z-10 w-full text-black px-4 lg:px-20 flex justify-between place-items-center'>
            <Logo />
            <div className='flex gap-10 text-semibold'>
                {linksArr.map((link)=>(
                        <Link key={link.index} href={link.linking_url} className='text-[12px] font-medium border-transparent origin-center border-b-2 duration-300 hover:border-green-500 text-black'>{link.name}</Link>
                ))}
            </div>
            <div>
                <FaUser className='h-8 w-8 text-[12px] rounded-full bg-[#189AB4]'/>
            </div>
        </div>
    )
}

export default Header