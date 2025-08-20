import React, { useState, useEffect } from "react";

const useWindowWidth = (): number => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const CustomHookExample: React.FC = () => {
  const width = useWindowWidth();

  return (
    <div>
      <h2>Custom Hook Example</h2>
      <p>Window width: {width}px</p>
    </div>
  );
};

export default CustomHookExample;
