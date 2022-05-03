import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOffersData } from '../../../store/app';
import { useNavigate } from 'react-router-dom';

const axios = require('axios').default;
const placeholder =
  'I’m a software developer who knows about React, Node.js, Express and MongoDB based in Barcelona and wants to work remotely';
const API_URL = 'https://hackupc-infojobs.herokuapp.com/offers';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [description, setDescription] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorStatus, setErrorStatus] = useState(false);
  

  const handleSubmit = async () => {
    if (description !== null && description.length > 0) {
      let wordCount = description.split(' ').length;

      if (wordCount > 50) {
        setErrorMessage('You reached the maximum number of words');
        setErrorStatus(true);
        return;
      }

      setProcessing(true);

      axios.get(API_URL + '?input=' + description).then((response) => {
        dispatch(setOffersData(response.data));
        setProcessing(false);
        navigate('/tinder');
      });
    } else {
      setErrorMessage('Fill the form with your awesome skills');
      setErrorStatus(true);
    }
  };

  return (
    <div className='container mx-auto'>
      <p className='text-xl font-bold my-3'>
        Tell us about <span className='text-[#167DB7]'>you</span>
      </p>
      <div className='w-100 h-40 p-2 border-solid border-2 border-[#167DB7] rounded-xl'>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder={placeholder}
          className='w-full h-full resize-none outline-0'
        ></textarea>
      </div>
      {errorStatus && (
        <div
          className='bg-red-100 border border-red-400 text-red-700 my-4 px-4 py-3 rounded'
          role='alert'
        >
          <strong class='font-bold'>{errorMessage}</strong>
        </div>
      )}
      <div className='flex flex-row items-center justify-center my-12'>
        {!processing ? (
          <button
            onClick={handleSubmit}
            className='bg-[#167DB7] py-2 px-8 rounded-xl'
          >
            <p className='font-bold text-white text-base'>GO</p>
          </button>
        ) : (
          <button
            type='button'
            class='bg-[#167DB7] py-2 px-8 rounded-xl'
            disabled
          >
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
              <p className='font-bold text-white text-base'>Processing...</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
