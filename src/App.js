
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({msg:message,type:type})
    setTimeout(()=>{setalert(null)},3000)

  }
  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("light mode enabled",'success')
      setInterval(()=>{
        document.title='text utils is amazing mode'
      },2000)
      setInterval(()=>
      {
        document.title="install textutils now"
      },1500)

    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='#3c0404'
      showalert("dark mode enabled",'success')
     document.title="TextUtils- dark mode"
    }
  }
  return (
    <>
    {/* <Router> */}
  <Navbar title="textutils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container my-3" >
  {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="enter the text to analyse" mode={mode} showalert={showalert}></TextForm>}> */}
    <TextForm heading="enter the text to analyse" mode={mode} showalert={showalert}/>
           
          {/* </Route>
        </Routes> 
     
  {/* <About/>*/}
   {/* </Router> */}
   </div>

  </>
    
   
  );
}
export default App;
