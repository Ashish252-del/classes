import React from 'react'; 
// components are always import in capital latter

import Navbar from './Componenets/navbar'; // this return navber html code 
import Footer from './Componenets/footer';
import Center from './Componenets/center';
import Home from './Componenets/home';
function App() {
  return (
    <>
      <Navbar />
       <Center />
       <Center />
      <Home/>
      <Footer/> 
      </>
  );
}

export default App;
