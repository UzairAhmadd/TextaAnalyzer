// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Textform from './components/Textform.js';
import React, { useState } from 'react';


function App() {
  // const product = [
  //   {
  //     price:99999,
  //     name:"Iphone XR",
  //     quantity:0,
  //   },
  //   {
  //     price:9999,
  //     name:"Vivo V20",
  //     quantity:0,
  //   }
  // ]
  const [mode, setMode] = useState("light");
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
 <>
 <Navbar mode={mode} togglemode={togglemode}/>
 <div className='container mt-3'>
 <Textform heading="Enter The Text To Analyze" mode={mode}/>
 </div>
 </>
  );
}

export default App;
