import React, { useState } from "react";

const Button = ({ value }) => {
  const [result, setResult] = useState(0);
  return (
    <div>
      <button onClick={() => setResult((prev) => prev + value)}>
        MFE 1 Button
      </button>
      <span>{result}</span>
    </div>
  );
};

export default Button;
