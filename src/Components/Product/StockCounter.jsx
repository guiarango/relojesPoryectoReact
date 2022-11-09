import React, { useState } from "react";

import classes from "./StockCounter.module.css";

function StockCounter(props) {
  const [counter, setCounter] = useState(1);

  function increaseOne() {
    if (counter + 1 > 10) return;
    setCounter(counter + 1);
  }

  function decreaseOne() {
    if (counter - 1 < 1) return;
    setCounter(counter - 1);
  }

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={decreaseOne}>
        -
      </button>
      <p className={classes.counter}>{counter}</p>
      <button className={classes.button} onClick={increaseOne}>
        +
      </button>
    </div>
  );
}

export default StockCounter;
