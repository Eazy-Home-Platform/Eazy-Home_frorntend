import VisaCardSvg from '@/app/(icons)'
import { IPaymentCard, paymentCards } from '@/app/(utils)/custom.data'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const PaymentDetailInfo = () => {
    const [PaymentCardArr, setPaymentCardArr] = useState<IPaymentCard[]>(paymentCards)
    return (
        <div className='flex flex-row gap-4'>
            {PaymentCardArr && PaymentCardArr.map((card: IPaymentCard) => (
                <div key={card.card_id} className='bg-btn_color text-black font-semibold min-w-[10vw] rounded-md p-6'>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-bold text-[10px]'>**** **** **** ****</span>
                            <p className='text-[20px]'>4321</p>
                        </div>
                        <div>
                            <FaTrash className='text-[14px]' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='font-bold text-[10px]'>Valid Thru</span>
                            <p className='text-[20px]'>02/27</p>
                        </div>
                        <div>
                            <VisaCardSvg />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PaymentDetailInfo    