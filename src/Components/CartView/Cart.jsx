import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//CONTEXT
import { cartContext } from "../../context/cartContext";

//STYLE
import classes from "./Cart.module.css";

//COMPONENT
import CartList from "./CartList";
import Button from "../UI/Button";
import { createOrder } from "../../Services/firestore";

function Cart() {
  const miContext = useContext(cartContext);
  const navigate = useNavigate();

  function clearCart() {
    miContext.clearCart();
  }

  async function handleCheckout(event) {
    const order = {
      buyer: {
        name: "Guillermo",
        email: "guillermo@gmail.com",
        phone: "123456789",
      },
      items: miContext.itemsInCart,
      total: miContext.totalBuy,
      date: new Date(),
    };

    const orderId = await createOrder(order);
    miContext.clearCart();

    navigate(`/thankyou/${orderId}`);
  }

  return (
    <div className={classes.contenedor}>
      <h1 className={classes.title}>Carrito de compras</h1>

      {miContext.itemsInCart.length > 0 && <CartList />}
      {miContext.itemsInCart.length > 0 ? (
        <>
          <h2>
            Total compra:
            <span>
              {miContext.totalBuy}
              {/* {miContext.totalBuy.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} */}
            </span>
          </h2>
          <Button onClick={handleCheckout}>Finalizar compra</Button>
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
