
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Contact from './components/Header/Contact/Contact';
import Home from './components/Home/Home';
import SiteCart from './components/SiteCart/SiteCart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] =useState([])
  const handleWatchTime =(time)=>{
   const preveiousWatchTime =JSON.parse(localStorage.getItem("watchTime"))
   if(preveiousWatchTime){
    const sum = preveiousWatchTime + time;
    localStorage.setItem('watchTime',sum)
    setWatchTime(sum)
   }
   else{
    localStorage.setItem('watchTime', time)
    setWatchTime(time)
   }
  }
  return (
    <div className="App">
      <div>
  <Header></Header>
      </div>
      <div className='main row'>
        <div className='home-container col-md-8 card'>
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className='sideCart col-md-4 card'>
          <SiteCart watchTime={watchTime}></SiteCart>
        </div>
      </div>
      <div>
        <Contact></Contact>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  )
}

export default App
