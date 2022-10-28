import React, { useState } from "react";

import classes from "./StockCounter.module.css";

function StockCounter(props) {
  let initialQuantity = props.initialQuantity;

  //Validar que el valor por props sea mayor a 0 y menor o igual a 10
  if (initialQuantity <= 0 || initialQuantity > 10) initialQuantity = 1;

  const [counter, setCounter] = useState(initialQuantity);

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
