import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const Index = () => {
  const [inc, setInc] = React.useState(0);
  const onClick = () => setInc(inc + 1);
  const renderCallback = (id, name, actualDuration) => {
    console.log(actualDuration);
    localStorage.setItem("timeTaken", actualDuration);
  };
  return (
    <div id="main">
      <React.Profiler id="Optimization" onRender={renderCallback}>
        <App />
        <button id="render" onClick={onClick}>
          Re-render
        </button>
      </React.Profiler>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
