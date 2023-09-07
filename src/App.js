import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleModeDark = () => {
    console.log('toggleModeDark function called'); // Add this line
     
    if (mode === 'light') {
      setMode('dark');
      console.log('dark mode')
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } 
    else {
      setMode('light');
      console.log('light mode')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  const toggleModeGreen = () => {
    console.log('toggleModeGreen function called'); // Add this line
     
    if (mode === 'light') {
      setMode('green');
      console.log('green mode')
      document.body.style.backgroundColor = "green";
      showAlert("green mode is enabled", "success");
    } 
    else {
      setMode('light');
      console.log('light mode')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  
  return (
    <>
    <Router>
     { <Navbar title="TextTweaker" mode={mode} toggleModeDark={toggleModeDark} toggleModeGreen={toggleModeGreen} about="About"/>  /* toggleModeGreen={toggleModeGreen} */}
     <Alert alert={alert}/>
     <div className='container my-3'>
         <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Input your Text Below" mode={mode}></TextForm>}>
               {/* <TextForm showAlert={showAlert} heading="Input your Text Below" mode={mode}></TextForm> */}
            </Route>
            { <Route exact path="/about" element={<About mode={mode}></About>}>
            </Route> }
        </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
