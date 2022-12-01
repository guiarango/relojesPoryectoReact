import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Card from "../UI/Card";
import Button from "../UI/Button";
import StockCounter from "./StockCounter";

//CONTEXT
import { cartContext } from "../../context/cartContext";

//STYLE
import classes from "./Item.module.css";

function Item(props) {
  let [counter, setCounter] = useState(1);
  let [counterActive, setCounterActive] = useState(true);
  const miContext = useContext(cartContext);

  function sumOneItem() {
    let counterValue = counter + 1;
    if (counterValue <= 10) setCounter(counterValue);
  }

  function susOneItem() {
    let counterValue = counter - 1;
    if (!counterValue < 1) setCounter(counterValue);
  }

  function onClickAddToCart() {
    let producto = { ...props };
    producto.count = counter;
    miContext.addItemToCart(producto);
    setCounterActive(false);
  }

  return (
    <Card className={classes.productItem}>
      <Link to={`/detail/${props.id}`}>
        <img
          className={classes.productImage}
          src={props.imagen}
          alt={props.nombre}
        />
      </Link>

      <h2 className={classes.productTitle}>{props.nombre}</h2>
      <h2 className={classes.productCategory}>{props.categoria}</h2>
      <div>
        <p className={classes.productPrice}>{props.precio}</p>
        <p className={classes.productDiscount}>{props.descuento}</p>
      </div>
      {}
      {counterActive ? (
        <StockCounter
          sumOneItem={sumOneItem}
          susOneItem={susOneItem}
          counter={counter}
        />
      ) : (
        <Link to="/cart">
          <Button className={classes.productGoToCart}>Ir al carrito</Button>
        </Link>
      )}
      {counterActive && (
        <Button
          className={classes.productAddCartButton}
          onClick={onClickAddToCart}
        >
          Agregar al carrito
        </Button>
      )}
    </Card>
  );
}

export default Item;
