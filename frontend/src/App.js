import React from 'react'; 
// components are always import in capital latter

import Navbar from './Componenets/navbar'; // this return navber html code 
import Footer from './Componenets/footer';
import Center from './Componenets/center';
import Home from './Componenets/home';
import Count from './Componenets/counter';
import CondComp from './Componenets/CondComp';
import ArrayMapping from './Componenets/ArrayMapping';
import Form from './Componenets/Form';
import Practiceuseeffect from './Componenets/useeffect-practice';

function App() {
  return (
    <>
      <Navbar />
       <Center />
       <Center />
      <Home />
      <Count />
      <hr />
      <h1 style={{color:"gray"}}>You are learning ternary operator in jsx</h1>
      <CondComp />
      <hr />
      <h1 style={{color:"gray"}}>You are learning ArrayMapping </h1>
      <ArrayMapping />
      <hr />
      <h1 style={{color:"gray"}}>You are learning Form </h1>
      <Form />
      <hr />
      <h1 style={{color:"gray"}}>You are UseEffect </h1>
      
      <Practiceuseeffect/>
      <Footer/> 
      </>
  );
}

export default App;
