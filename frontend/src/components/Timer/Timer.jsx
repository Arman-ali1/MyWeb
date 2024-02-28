import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

function Timer() {
  const submitionTime = "February 27, 2024 17:39:00";
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("0");
  const [timerSeconds, setTimerSeconds] = useState("0");
  const [countdownDate, setCountdownDate] = useState(
    new Date().getTime() + 301000
  );

  const navigate = useNavigate();

  let interval = useRef();

  // const startTime='February 27, 2024 15:26:00'
  const startTimer = () => {
    // const countdownDate=new Date((${submitionTime})).getTime()
    

    // const UserStatus={
    //   lgn:"Log Out"
    // }
    //   navigate('/UserData',{ state: { UserStatus } });

    console.log(countdownDate);
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        // setTimerDays(days)
        // setTimerHours(hours)
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        if(seconds===0 && minutes===0 ){
          navigate('/contest/result');
        }
        // countdownDate=countdownDate+1000
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className="   text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
    
      <h1 className=" ">{timerMinutes<10?"0"+timerMinutes:timerMinutes}:{timerSeconds<10?"0"+timerSeconds:timerSeconds} min Left</h1>
   
      {/* <button onClick={submit} className='bg-red-500 text-white p-2 rounded-xl'>Stop</button> */}
    </div>
  );
}

export default Timer;
  {/* <h1>{timerDays}</h1>: */}
      {/* <h1>{timerHours}</h1>: */}