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
import Child from './Componenets/PropsMaterialUi';
import Parent from './Componenets/useContex/parent';
import FormSubmit from './Componenets/submitform';
import Submitreactform from './Componenets/submitform2'
import Submitreactform3 from './Componenets/submitform3';
function App() {
  const parent = () => {
    alert("This alert is from parent App.js > prop concept")
  }
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
      
      <Practiceuseeffect />
      <hr />
      <h1 style={{ color: "gray" }}>You are Learning Props and material-ui </h1>
    {/* here we are using name to send the data hence we should use name in child to acess the data */}
       <Child name ={ parent} />
      <hr />
      <h1 style={{ color: "gray" }}>You are Learning useContex </h1>
      <Parent />
      <hr />
      <h1 style={{ color: "gray" }}>You are Learning formSubmit </h1>
      <FormSubmit />
       <hr />
      <h1 style={{ color: "gray" }}>You are Learning reactformSubmit </h1>
      <Submitreactform />
       <hr />
      <h1 style={{ color: "gray" }}>You are Learning reactformSubmit using spread operator </h1>
      <Submitreactform3/>
      <Footer/> 
      </>
  );
}

export default App;
