import React from "react";

//COMPONENTS
import CheckoutItem from "./CheckoutItem";

//STYLE
import classes from "./CheckoutItemsList.module.css";

function CheckoutItemsList(props) {
  const productos = props.productos;
  return (
    <div className={classes.list}>
      {productos.map((producto) => {
        return <CheckoutItem key={producto.id} infoProducto={producto} />;
      })}
    </div>
  );
}

export default CheckoutItemsList;
