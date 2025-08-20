
import React, { useState } from "react";

const UseStateExample: React.FC = () => {
  
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseStateExample;

