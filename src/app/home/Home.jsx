import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Form from './components/Form';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col mx-6 my-7'>
      <Header/>
      <Title/>
      <Form />
      <Footer />
    </div>
  )
};

export default Home;
