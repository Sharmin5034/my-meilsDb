import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SiteCart = ({watchTime}) => {
    const [time, setTime] =useState(watchTime)
    const [breakTime, setBreakTime] =useState(0)
    useEffect(()=>{
        const getWatchItem =localStorage.getItem('watchTime')
       setTime(getWatchItem)
       const getBreakItem =localStorage.getItem('breakTime')
     
    },[watchTime])
    const handleBreakTime =(bt)=>{
        localStorage.setItem("brackTime", bt)
    }
    const handleToast=()=>{
        toast("Wow so easy!")
    }
    return (
        <div>
          <h1>my cart</h1> 
          <div className='mt-5 text-center'>
            <p>total watch time</p>
            <input type="text" value={time} disabled />
          </div>
          <h5 className='mt-5'>add break time</h5>
          <button onClick={()=>handleBreakTime(15)} className='w-25 btn-circle btn btn-info bg-warning m-1'>15</button>
          <button className='w-25 btn-circle btn btn-info bg-danger'>20</button>
          <button className='w-25 btn-circle btn btn-info bg-success m-1'>25</button>
          <input type="text" value={0} disabled />
          <button onClick={handleToast} className='w-100 mt-5 btn btn-info'>complete</button>
        </div>
    );
};

export default SiteCart;