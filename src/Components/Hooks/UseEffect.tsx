import React, { useEffect, useState } from "react";

const UseEffectExample: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default UseEffectExample;

