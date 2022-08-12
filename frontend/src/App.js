import React from 'react'; 
// components are always import in capital latter
import Navbar from './Componenets/navbar'; // this return navber html code 
import Footer from './Componenets/footer';
import Center from './Componenets/center';
function App() {
  return (
    <>
      
      <h1> Hey this is Ashish rom parent component</h1>
      <Navbar />
      <Center />
      <Footer/>
      </>
  );
}

export default App;
