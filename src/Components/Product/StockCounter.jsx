import React from "react";

import classes from "./StockCounter.module.css";

function StockCounter(props) {
  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={props.susOneItem}>
        -
      </button>
      <p className={classes.counter}>{props.counter}</p>
      <button className={classes.button} onClick={props.sumOneItem}>
        +
      </button>
    </div>
  );
}

export default StockCounter;
