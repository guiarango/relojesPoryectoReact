import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Item.module.css";
import StockCounter from "./StockCounter";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Card className={`${classes.productItem} ${props.className}`}>
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

      <StockCounter />
      <Button className={classes.productAddCartButton}>
        Agregar al carrito
      </Button>
    </Card>
  );
}

export default Item;
