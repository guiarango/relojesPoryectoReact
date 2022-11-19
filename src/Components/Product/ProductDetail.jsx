import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

//STYLES
import classes from "./ProductDetail.module.css";

//CONTEXT
import { cartContext } from "../../context/cartContext";

//SERVICE
import { returnSingleItem } from "../../Services/returnProducts";

//COMPONENT
import LoaderRing from "../Loaders/LoaderRing";
import StockCounter from "./StockCounter";
import Button from "../UI/Button";
import Card from "../UI/Card";

function ProductDetail(props) {
  const params = useParams();
  const productId = params.id;
  const miContext = useContext(cartContext);
  const [product, setProduct] = useState("");
  let [counterActive, setCounterActive] = useState(true);
  let [counter, setCounter] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setProduct("");
      setProduct(returnSingleItem(productId));
    }, 1000);
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
    setCounterActive(false);
  }

  const productComponent = (
    <>
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
      </div>
    </>
  );
  return (
    <Card className={classes.container}>
      {product === "" ? <LoaderRing /> : productComponent}
    </Card>
  );
}

export default ProductDetail;
