import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          // Reset timer when it reaches 0
          setMinutes(5);
          setSeconds(0);
        } else {
          // Decrement minutes and set seconds to 59
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        // Just decrement seconds
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  // Format the time as MM:SS
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="text-3xl font-bold">{formattedTime}</div>
  );
}
