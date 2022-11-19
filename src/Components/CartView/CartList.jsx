import React, { useContext } from "react";

//CONTEXT
import { cartContext } from "../../context/cartContext";
import CartItem from "./CartItem";

//COMPONENTS

//STYLE
import classes from "./CartList.module.css";

function CartList() {
  const miContext = useContext(cartContext);

  return (
    <div className={classes.list}>
      {miContext.itemsInCart.map((item) => (
        <CartItem key={item.id} producto={item} />
      ))}
    </div>
  );
}

export default CartList;
