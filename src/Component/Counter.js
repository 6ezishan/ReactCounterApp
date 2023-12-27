import React, { useState } from "react";
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <div className="btns-container">
        <button onClick={increment} className="btn-styles">
          +
        </button>
        <button onClick={decrement} className="btn-styles">
          -
        </button>
        <button onClick={reset} className="btn-styles">
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
