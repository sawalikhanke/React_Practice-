import React, { useCallback, useState } from "react";

const Child: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Child</button>;
};

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    alert("Child button clicked!");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child onClick={memoizedClick} />
    </div>
  );
};

export default UseCallbackExample;

