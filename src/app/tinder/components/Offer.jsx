import React, {useState} from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BsCheckLg } from 'react-icons/bs';
import {HiMail} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import Card from './Card'
import {Link} from 'react-router-dom'

const axios = require('axios').default;

const API_MAIL_URL = "https://hackupc-infojobs.herokuapp.com/send-email"

const Offer = ({offers}) => {
  

  const allOffers = offers;


  const [nextIndex, setNextIndex] = useState(0)

  const [nextOffer, setNextOffer] = useState(allOffers[nextIndex])

  const [emailSaved, setEmailSaved] = useState([])

  const [email, setEmail] = useState(null)

  const [errorStatus, setErrorStatus] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const [processing, setProcessing] = useState(false)

  const navigate = useNavigate()

  const handleSwipeRight = () => {

    if (nextIndex + 1 < allOffers.length) {
      let tmp = emailSaved
      tmp.push({
        title: nextOffer.title,
        link: nextOffer.link
      })
      setEmailSaved(tmp)
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

  const handleSendMail = async () => {

    if (email != null && email.length > 0) {

      setProcessing(true)
      let response = await axios.post(API_MAIL_URL, {
        email, 
        offers: emailSaved
      })

      if (response.status === 200) {
        navigate('/success')
      }
      setProcessing(false)
    } 
    else {
      setErrorMessage("Write a valid email address")
      setErrorStatus(true)
      
    }
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
            <a href={nextOffer.link} target="_blank" rel="noreferrer">
              <AiOutlineLink className='text-yellow-400 text-xl' />
            </a>
          </div>
          <div className='flex flex-row justify-center items-center rounded-full h-14 w-14 border-2 border-solid border-gray-100'>
            <button onClick={handleSwipeRight}>
              <BsCheckLg className='text-green-400 text-xl' />
            </button>
          </div>
        </div>
      </div>

      <div className='mt-6 flex flex-row justify-center'>
        <Link to='/list'><p className='text-[#767676]'>See all</p></Link>
      </div>

      <div class="flex justify-center my-10">
        <div class="animate-bounce bg-white  p-2 w-10 h-10 ring-1 ring-slate-900/5  shadow-lg shadow-blue-200 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-[#167DB7]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full">
        <p className="text-2xl font-bold text-center my-20">You have saved <span className="text-[#167DB7]">{emailSaved.length}</span> offers!</p>
        <p className="text-md my-2">Add your email to get a message from every offer you saved</p>
        <input onChange={(e) => {setEmail(e.target.value); if (e.target.value.length > 0) setErrorStatus(false)}} placeholder="Your email" type="email" className="shadow-xl w-full h-10 px-2 my-4" />
        {errorStatus && (
            <div
              className='bg-red-100 border border-red-400 text-red-700 my-4 px-4 py-4 rounded'
              role='alert'
            >
              <strong class='font-bold'>{errorMessage}</strong>
            </div>
          )}
          
        <div className="text-center">
          {!processing? 
          <button onClick={handleSendMail} className="bg-[#112D4E] py-2 px-8 rounded-xl mb-20 mt-10">
            <div className="flex flex-row justify-center items-center">
              <HiMail className="text-white text-md"/>
              <p className="text-white font-bold ml-2">SEND MAIL</p>
            </div>
          </button> 
          : 
          <button className="bg-[#112D4E] py-2 px-8 rounded-xl mb-20 mt-10" disabled>
          <div className='flex flex-row justify-center items-center'>
              <svg
                class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  class='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  stroke-width='4'
                ></circle>
                <path
                  class='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              <p className='font-bold text-white text-base'>Sending...</p>
            </div>
        </button>
        }
          
        </div>
        
      </div>
      
        

    </>
  );
};

export default Offer;
