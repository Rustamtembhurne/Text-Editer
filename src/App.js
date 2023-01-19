// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App(props) {
  const [mode, setMode] = useState('light');   // your mode is enable or not...

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.backgroundColor = '#b7e6e6';
      // add image...
 
    }
  }



  return (
    <>
      <Navbar title='TextUtills' mode={mode} toggleMode={toggleMode} />


      <div className="container my-5 " >


        <TextForm heading="Convert Case Online Text Editor" mode={mode} />

      </div>

    </>
  );
}

export default App;
