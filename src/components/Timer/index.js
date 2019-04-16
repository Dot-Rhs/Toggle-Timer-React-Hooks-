import React, { useState, useEffect } from "react";

const Timer = props => {
  const [time, setTime] = useState(0);

  const tick = () => {
    setTime(time => time + 1);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    let timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      {time} <br />
      <button onClick={() => reset()}> RESET YEA?</button>{" "}
    </div>
  );
};

export default Timer;
