import React from "react";
import { useParams } from "react-router-dom";

//STYLES
import classes from "./Thankyou.module.css";

function Thankyou() {
  const idOrder = useParams().idOrder;
  return (
    <div className={classes.contenedorGracias}>
      <h1>Gracias por tu compra</h1>
      <h3>
        El id de tu compra es: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default Thankyou;
