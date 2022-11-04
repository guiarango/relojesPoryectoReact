import React from "react";

import classes from "./ItemListContainer.module.css";

function ItemListContainer({ greetings }) {
  return <div className={classes.saludo}>{greetings}</div>;
}

export default ItemListContainer;
