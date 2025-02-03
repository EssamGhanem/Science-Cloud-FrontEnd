'use client'
import { useState, useEffect} from 'react';


export default function useTimer(initialTimeInSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds *60);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft <= 1) {
          clearInterval(interval);
          setIsTimeUp(true);
          return 0;
        }
        return timeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return {timeLeft , isTimeUp ,setTimeLeft  };

}
