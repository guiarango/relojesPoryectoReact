import React from "react";
import { BsCartFill } from "react-icons/bs";
import classes from "./CartWidget.module.css";

function CartWidget() {
  return (
    <div className={classes.cartWidgetContainer}>
      <div className={classes.numberOfItems}>1</div>
      <BsCartFill className={classes.cartIcon} />
    </div>
  );
}

export default CartWidget;
