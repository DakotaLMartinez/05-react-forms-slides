import React, { useState, useEffect, useCallback } from 'react';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';

function Timer({ startingMinutesOnClock }) {
  const [timeRemaining, setTimeRemaining] = useState(startingMinutesOnClock ? startingMinutesOnClock * 60 : 420);
  const [timerInterval, setTimerInterval] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining => timeRemaining - 1)
    }, 1000);
    setTimerInterval(interval);
    setTimerRunning(true);
  }

  const stopTimer = useCallback(() => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setTimerRunning(false);
  },[timerInterval,setTimerInterval, setTimerRunning]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      stopTimer()
    }
  }, [timeRemaining, stopTimer])

  const formatTime = (seconds) => {
    const numMinutes = String(Math.floor(seconds / 60)).padStart(2,'0');
    const numSeconds = String(seconds % 60).padStart(2,'0');
    return `${numMinutes}:${numSeconds}`
  }

  const toggleTimer = () => {
    if (timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  const subtractMinute = () => {
    setTimeRemaining(seconds => seconds - 60)
  }
  const addMinute = () => {
    setTimeRemaining(seconds => seconds + 60)
  }

  /*
  style={{background: 'none', marginLeft: '0.5em'}}
*/
  const iconStyles = {
    height: '1em',
    cursor: 'pointer'
  }
  

  return (
    <div style={{alignItems: 'center', display: 'flex', gap: '0.25em'}}>
      <AiFillMinusSquare style={iconStyles} onClick={subtractMinute} />
      {formatTime(timeRemaining)}
      <AiFillPlusSquare style={iconStyles} onClick={addMinute}/>
      <button
        style={{
          backgroundColor: 'green',
          border: 'none',
          padding: '0.5em 1em',
          marginLeft: '0.5em',
          cursor: 'pointer'
        }}
        onClick={toggleTimer}
      >{timerRunning ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default Timer