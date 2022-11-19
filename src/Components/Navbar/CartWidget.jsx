import React, { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

//COMPONENTS
import classes from "./CartWidget.module.css";

//CONTEXT
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const miContext = useContext(cartContext);

  const conteo = miContext.numberOfItems;

  const cartWidget = (
    <Link to="/cart" className={classes.cartWidgetContainer}>
      <div className={classes.numberOfItems}>{conteo}</div>
      <BsCartFill className={classes.cartIcon} />
    </Link>
  );

  return <>{conteo > 0 && cartWidget}</>;
}

export default CartWidget;
