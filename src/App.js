import "./App.css";
import { React, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = (amount) => {
    setCount(count + amount);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="increment" onClick={increment.bind(null, 1)}>
        Increment count
      </button>
      <button className="decrement" onClick={increment.bind(null, -1)}>
        Decrement count
      </button>
    </div>
  );
};

export default App;
