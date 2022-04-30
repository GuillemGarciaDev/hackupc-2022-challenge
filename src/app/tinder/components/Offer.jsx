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
import Card from './Card'
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
      
      
      <Card currentOffer={nextOffer} />

      
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
