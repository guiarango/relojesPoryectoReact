import React, { useContext } from "react";
import { Link } from "react-router-dom";

//CONTEXT
import { cartContext } from "../../context/cartContext";

//STYLE
import classes from "./Cart.module.css";

//COMPONENT
import CartList from "./CartList";
import Button from "../UI/Button";

function Cart() {
  const miContext = useContext(cartContext);

  function clearCart() {
    miContext.clearCart();
  }

  return (
    <div className={classes.contenedor}>
      <h1 className={classes.title}>Carrito de compras</h1>

      {miContext.itemsInCart.length > 0 && <CartList />}
      {miContext.itemsInCart.length > 0 ? (
        <>
          <h2>
            Total compra:
            <span>{miContext.totalBuy}</span>
          </h2>
          <Link to="/cart/contacto">
            <Button>Continuar con la compra</Button>
          </Link>
          <Button onClick={clearCart}>Limpiar carrito</Button>
        </>
      ) : (
        <>
          <h2>No hay items en el carrito</h2>
          <Link to="/">
            <Button>Ir a comprar</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
