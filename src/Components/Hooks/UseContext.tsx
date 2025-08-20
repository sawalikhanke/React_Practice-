// hooks/UseContextExample.tsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext<string>("light");

const Child: React.FC = () => {
  const theme = useContext(ThemeContext); // Access context value
  return <p>Theme is: {theme}</p>;
};

const UseContextExample: React.FC = () => {
  return (
    <ThemeContext.Provider value="dark">
      <h2>useContext Example</h2>
      <Child />
    </ThemeContext.Provider>
  );
};

export default UseContextExample;

/*
👉 useContext: Provides global state without prop drilling.
*/
