// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
import About from './components/About.js';


function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);

    }, 1500)
  }

  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showalert("dark mode is enabled", "success");
      document.title = "React App Dark mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showalert("light mode is enabled", "success");
      document.title = "React App Light mode"
    }
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container mt-3'>
        <Textform showalert={showalert} heading="Enter The Text To Analyze" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
