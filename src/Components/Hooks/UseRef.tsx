// hooks/UseRefExample.tsx
import React, { useRef } from "react";

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // Access DOM element directly
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefExample;

/*
👉 useRef: Access DOM elements or store mutable values without re-render.
*/
