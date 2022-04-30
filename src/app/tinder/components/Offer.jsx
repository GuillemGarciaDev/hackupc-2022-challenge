import React, {useState} from 'react';
import Data from '../response.json';
import { MdPlace } from 'react-icons/md';
import { AiFillFileText } from 'react-icons/ai';
import { FaMoneyBill } from 'react-icons/fa';
import { GiSandsOfTime, GiGraduateCap } from 'react-icons/gi';
import { AiOutlineLink } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BsCheckLg } from 'react-icons/bs';
import {motion } from 'framer-motion'

const Offer = ({offers}) => {
  

  const allOffers = offers;


  const [nextIndex, setNextIndex] = useState(0)

  const [nextOffer, setNextOffer] = useState(allOffers[nextIndex])

  const handleSwipeRight = () => {

    if (nextIndex + 1 < allOffers.length) {
      setNextIndex(nextIndex + 1)
      setNextOffer(allOffers[nextIndex])
    }

  }

  const handleSwipeLeft = () => {

    if (nextIndex + 1 < allOffers.length) {
      setNextIndex(nextIndex + 1)
      setNextOffer(allOffers[nextIndex])
    }
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <>
      
      <motion.div
      >
        <div className='mx-6 mt-5 h-96 rounded-lg bg-gradient-to-br from-[#DBE2EF] to-white flex flex-col border-blue-200 border-solid border-2 '>
          <div className='flex flex-row justify-between items-center mx-6 mt-4'>
            <div className='h-12 w-12'>
              <img
                className='w-full h-full rounded-lg'
                src={nextOffer.author.logoUrl}
                alt=''
              />
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold leading-tight text-base w-44'>
                {nextOffer.title}
              </p>
              <div className='flex flex-row mt-2'>
                <MdPlace className='text-[#767676]' />{' '}
                <span className='text-sm text-[#767676] font-light'>
                  {nextOffer.city}
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
                  {nextOffer.contractType.value}
                </span>
              </div>
              <div className='flex flex-row w-1/2'>
                <FaMoneyBill className='text-[#767676] text-xl mr-1' />{' '}
                <span className='text-xs text-[#767676] font-light w-full'>
                  {nextOffer.salaryDescription}
                </span>
              </div>
            </div>
            <div className='flex flex-row justify-between mt-2'>
              <div className='flex flex-row w-1/2'>
                <GiSandsOfTime className='text-[#767676] text-xl mr-1' />{' '}
                <span className='text-xs text-[#767676] font-light w-full'>
                  {nextOffer.experienceMin.value}
                </span>
              </div>
              <div className='flex flex-row w-1/2'>
                <GiGraduateCap className='text-[#767676] text-xl mr-1' />{' '}
                <span className='text-xs text-[#767676] font-light w-full'>
                  {nextOffer.study.value}
                </span>
              </div>
            </div>
          </div>
          <div className='m-5 overflow-scroll'>
            <p className='text-justify leading-tight font-light text-[#767676]'>
              {nextOffer.requirementMin}
            </p>
          </div>
        </div>
        </motion.div>
        {/* Next Offer */}

      

      
      
      {/* Buttons */}
      
      <div className='flex justify-center items-center mx-12 mt-5'>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-row justify-center items-center rounded-full h-14 w-14 border-2 border-solid border-gray-100'>
            <button onClick={handleSwipeLeft}>
              <ImCross className='text-red-400 text-xl' />
            </button>
          </div>
          <div className='flex flex-row justify-center items-center rounded-full h-14 w-14 border-2 border-solid border-gray-100'>
            <button>
              <AiOutlineLink className='text-yellow-400 text-xl' />
            </button>
          </div>
          <div className='flex flex-row justify-center items-center rounded-full h-14 w-14 border-2 border-solid border-gray-100'>
            <button onClick={handleSwipeRight}>
              <BsCheckLg className='text-green-400 text-xl' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
