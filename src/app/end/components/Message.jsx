import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Message = () => {

    return (
        <div className="flex flex-col justify-center items-center my-20">
            <BsCheckCircleFill className="text-green-400 text-6xl my-4"/>
            <p className="text-2xl my-4 text-center">Check your mail inbox to find a <span className="text-green-300">secret!</span></p>
            <button className="bg-[#112D4E] px-8 py-2 rounded-xl my-4" >
                <Link to='/'>
                    <div className="flex flex-row justify-center items-center">
                        <AiFillHome className="text-white mr-2"/>
                        <p className="font-bold text-white ml-2">HOME</p>
                    </div>
                </Link>
            </button>
        </div>
    )
}

export default Message