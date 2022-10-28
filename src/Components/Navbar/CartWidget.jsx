import React from "react";
import { BsCartFill } from "react-icons/bs";
import classes from "./CartWidget.module.css";

function CartWidget() {
  return (
    <div className={classes.cartWidgetContainer}>
      <BsCartFill className={classes.cartIcon} />
    </div>
  );
}

export default CartWidget;
