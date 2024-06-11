import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextEditor from './component/TextEditor';
import Accordion from './component/Accordion';
import AlertPopup from './component/AlertPopup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './component/Services';
import Home from './component/Home';
import Others from './component/Others';
import Carousel from './component/Carousel';

function App() {
  let [mode, setMode] = useState('light');
  let [btnChange, setBtnChange] = useState('dark');

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');  
      setBtnChange('light');
      showPopup('Dark Mode Enabled', 'Success');
    } 
    else {
      setMode('light');
      setBtnChange('dark');
      showPopup('Light Mode Enabled', 'Success');
    }
  };

  // Body Theme Change
  if (mode === 'light') {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
  } 
  else {
    document.body.style.background = '#212529';
    document.body.style.color = 'white';
  }


  // Alert Popup for Theme Change
  let [myAlert, setAlert] = useState(null);

  let showPopup = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  

  return (
    <>
      
      <BrowserRouter>
        <Navbar replace="Home" byDefault={mode} myBtn={toggleMode} myBtnn={btnChange} />
        <AlertPopup alert={myAlert} />

        <Routes>

          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Carousel' element={<Carousel/>}></Route>
          <Route path='/Accordion' element={<Accordion myBtnn={btnChange}/>}></Route>
          <Route path='/TextEditor' element={<TextEditor/>}></Route>
          <Route path='/Others' element={<Others/>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
