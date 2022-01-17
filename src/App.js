import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     Type: type
  //   })
  // }

  const toggleMode=()=>
  {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      // showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Checkout TextUtils here';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      // showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    // <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={<TextForm title="Enter your text" mode={mode}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
    </Routes>
    </div>
    </BrowserRouter>
     );
    }
    
 

export default App;
