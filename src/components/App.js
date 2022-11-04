import React, { Profiler } from "react";
import { useState } from "react";
import "../styles/App.css";

function expensiveOperation(num) {
  console.log("expensiveOperation called");
  let i = 0;
  const result = Array(num).fill(0);
  while (i < 1000000000) {
    result[i % num] += i;
    i++;
  }
  return result;
}

const App = () => {
  const [inc, setInc] = useState(0);
  const onClick = () => setInc((i) => i + 1);
  const renderCallback = (id, phase, actualDuration) => {
    console.log(actualDuration);
    localStorage.setItem("timeTaken", actualDuration);
  };
  return (
    <div id="main">
      <Profiler id="Optimization" onRender={renderCallback}>
        <OptimizeTheOperation onClick={onClick} />
      </Profiler>
    </div>
  );
};

const OptimizeTheOperation = ({ onClick }) => {
  const [number, setNumber] = useState(1);
  const array = expensiveOperation(number);
  const submitHandler = (event) => {
    
  };

  return (
    <div>
      Enter the number:
      <form onSubmit={submitHandler}>
        <input id="num" defaultValue={number} />
        <button id="submit" type="submit">
          Click me uwu
        </button>
      </form>
      <br />
      Result of expensive operation:
      <ul id="result">
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <button id="render" onClick={onClick}>
        Re-render
      </button>
    </div>
  );
};

export default App;
