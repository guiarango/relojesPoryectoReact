import React from "react";

//COMPONENTS
import Card from "../UI/Card";

//STYLE
import classes from "./CheckoutItem.module.css";

function CheckoutItem({ infoProducto }) {
  return (
    <Card className={classes.item}>
      <img
        className={classes.imagen}
        src={infoProducto.imagen}
        alt={infoProducto.nombre}
      />
      <p className={classes.texto}>{infoProducto.nombre}</p>
      <p>x{infoProducto.count}</p>
      <p>Precio: {infoProducto.precio}</p>
      <p>Total: {infoProducto.precio * infoProducto.count}</p>
    </Card>
  );
}

export default CheckoutItem;
