import React from 'react'
import Header from '../commons/Header'
import Message from './components/Message'
import Footer from '../home/components/Footer'
import AnimatedPage from '../commons/AnimatedPage'

const Success = () => {

    return (
        <div className='mx-6 my-7'>
            <Header />
            <AnimatedPage>
                <Message />
                <Footer />
            </AnimatedPage>
        </div>
    )
}

export default Success