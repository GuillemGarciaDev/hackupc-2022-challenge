import React from 'react';
import { MdPlace } from 'react-icons/md';
import { AiFillFileText } from 'react-icons/ai';
import { FaMoneyBill } from 'react-icons/fa';
import { GiSandsOfTime, GiGraduateCap } from 'react-icons/gi';
import {motion} from 'framer-motion'

const Card = ({currentOffer}) => {

    return (
        
        
        <motion.div
            initial={{opacity:0}}
            animate={{ opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className='mx-6 mt-5 h-96 rounded-lg bg-gradient-to-br from-[#DBE2EF] to-white flex flex-col border-blue-200 border-solid border-2 z-10 absolute inset-0 flex  z-20'>
            <div className='flex flex-row justify-between items-center mx-6 mt-4'>
                <div className='h-12 w-12'>
                <img
                    className='w-full h-full rounded-lg'
                    src={currentOffer.author.logoUrl}
                    alt=''
                />
                </div>
                <div className='flex flex-col'>
                <p className='font-semibold leading-tight text-base w-44'>
                    {currentOffer.title}
                </p>
                <div className='flex flex-row mt-2'>
                    <MdPlace className='text-[#767676]' />{' '}
                    <span className='text-sm text-[#767676] font-light'>
                    {currentOffer.city}
                    </span>
                </div>
                </div>
            </div>
            <div className='bg-[#767676] border-solid h-px mx-5 mt-4'></div>
            <div className='flex flex-col mx-4 mt-2'>
                <div className='flex flex-row justify-between'>
                <div className='flex flex-row w-1/2'>
                    <AiFillFileText className='text-[#767676] text-xl mr-1' />{' '}
                    <span className='text-xs text-[#767676] font-light w-full'>
                    {currentOffer.contractType.value}
                    </span>
                </div>
                <div className='flex flex-row w-1/2'>
                    <FaMoneyBill className='text-[#767676] text-xl mr-1' />{' '}
                    <span className='text-xs text-[#767676] font-light w-full'>
                    {currentOffer.salaryDescription}
                    </span>
                </div>
                </div>
                <div className='flex flex-row justify-between mt-2'>
                <div className='flex flex-row w-1/2'>
                    <GiSandsOfTime className='text-[#767676] text-xl mr-1' />{' '}
                    <span className='text-xs text-[#767676] font-light w-full'>
                    {currentOffer.experienceMin.value}
                    </span>
                </div>
                <div className='flex flex-row w-1/2'>
                    <GiGraduateCap className='text-[#767676] text-xl mr-1' />{' '}
                    <span className='text-xs text-[#767676] font-light w-full'>
                    {currentOffer.study.value}
                    </span>
                </div>
                </div>
            </div>
            <div className='m-5 overflow-scroll'>
                <p className='text-justify leading-tight font-light text-[#767676]'>
                {currentOffer.requirementMin}
                </p>
            </div>
            </div>
        </motion.div>
    )
} 

export default Card