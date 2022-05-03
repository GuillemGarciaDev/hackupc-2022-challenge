import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Form from './components/Form';
import Footer from './components/Footer';
import AnimatedPage from '../commons/AnimatedPage';

const Home = () => {
  return (
    <div className='flex flex-col mx-6 my-7'>
      <Header/>
      <AnimatedPage>
        <Title/>
        <Form />
        <Footer />
      </AnimatedPage>
      
    </div>
  )
};

export default Home;
