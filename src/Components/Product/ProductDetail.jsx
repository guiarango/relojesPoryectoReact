import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//STYLES
import classes from "./ProductDetail.module.css";

//CONTEXT
import { cartContext } from "../../context/cartContext";

//SERVICE
import { returnSingleItem } from "../../Services/returnProducts";
import StockCounter from "./StockCounter";
import Button from "../UI/Button";
import Card from "../UI/Card";

function ProductDetail(props) {
  const params = useParams();
  const productId = params.id;
  const miContext = useContext(cartContext);
  const [product, setProduct] = useState("");
  let [counter, setCounter] = useState(1);

  useEffect(() => {
    setProduct(returnSingleItem(productId));
  }, [productId]);

  function sumOneItem() {
    let counterValue = counter + 1;
    if (counterValue <= 10) setCounter(counterValue);
  }

  function susOneItem() {
    let counterValue = counter - 1;
    if (!counterValue < 1) setCounter(counterValue);
  }

  function onClickAddToCart() {
    let producto = { ...product };
    producto.count = counter;
    miContext.addItemToCart(producto);
  }
  return (
    <Card className={classes.container}>
      <img
        className={classes.imagen}
        src={product.imagen}
        alt={product.nombre}
      />
      <div className={classes.datosProducto}>
        <h2 className={classes.nombreProducto}>{product.nombre}</h2>
        <h3 className={classes.categoria}>{product.categoria}</h3>
        <div className={classes.containerPrecios}>
          <p className={classes.precio}>{product.precio}</p>
          <p className={classes.descuento}>{product.descuento}</p>
        </div>
        <StockCounter
          sumOneItem={susOneItem}
          susOneItem={sumOneItem}
          counter={counter}
        />
        <Button
          className={classes.productAddCartButton}
          onClick={onClickAddToCart}
        >
          Agregar al carrito
        </Button>
      </div>
    </Card>
  );
}

export default ProductDetail;
