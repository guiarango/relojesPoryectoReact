import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

//COMPONENTS
import Card from "../UI/Card";
import StockCounter from "../Product/StockCounter";

//STYLE
import classes from "./CartItem.module.css";

//CONTEXT
import { cartContext } from "../../context/cartContext";

function CartItem(props) {
  const miContext = useContext(cartContext);

  function sumOneItem() {
    miContext.sumOneToItem(props.producto.id);
  }

  function susOneItem() {
    miContext.susOneToItem(props.producto.id);
  }

  function removeItem() {
    miContext.removeItemInCart(props.producto.id);
  }

  return (
    <Card className={classes.item}>
      <Link to={`/detail/${props.producto.id}`}>
        <img
          className={classes.image}
          src={props.producto.imagen}
          alt={props.producto.nombre}
        />
      </Link>

      <div className={classes.infoContenedor}>
        <h5>{props.producto.nombre}</h5>
        <p>{props.producto.categoria}</p>
      </div>

      <div className={classes.infoContenedor}>
        <p>{`Precio: $${props.producto.precio}`}</p>
        <p>{props.producto.descuento}</p>
      </div>

      <div className={classes.infoContenedor}>
        Cantidad
        <StockCounter
          sumOneItem={sumOneItem}
          susOneItem={susOneItem}
          counter={props.producto.count}
        />
      </div>

      <div className={`${classes.inactive} ${classes.infoContenedor}`}>
        {`Total: $${props.producto.count * props.producto.precio}`}
      </div>

      <BsTrash className={classes.cartIcon} onClick={removeItem}></BsTrash>
    </Card>
  );
}

export default CartItem;
