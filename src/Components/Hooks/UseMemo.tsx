import React, { useMemo, useState } from "react";

const expensiveCalc = (num: number): number => {
  console.log("Calculating...");
  return num * 2;
};

const UseMemoExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(5);

  const result = useMemo(() => expensiveCalc(input), [input]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Result: {result}</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>
  );
};

export default UseMemoExample;

