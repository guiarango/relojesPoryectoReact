import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Item.module.css";
import StockCounter from "./StockCounter";

function Item(props) {
  return (
    <Card className={classes.productItem}>
      <img
        className={classes.productImage}
        src={props.imagen}
        alt={props.nombre}
      />
      <h2 className={classes.productTitle}>{props.nombre}</h2>
      <div>
        <p className={classes.productPrice}>{props.precio}</p>
        <p className={classes.productDiscount}>{props.descuento}</p>
      </div>

      <StockCounter initialQuantity={props.initialQuantity} />
      <Button className={classes.productAddCartButton}>
        Agregar al carrito
      </Button>
    </Card>
  );
}

export default Item;
