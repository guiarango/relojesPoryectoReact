import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//STYLES
import classes from "./ProductDetail.module.css";

//SERVICE
import { returnSingleItem } from "../../Services/returnProducts";
import StockCounter from "./StockCounter";
import Button from "../UI/Button";
import Card from "../UI/Card";

function ProductDetail(props) {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState("");

  useEffect(() => {
    setProduct(returnSingleItem(productId));
  }, [productId]);

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
        <StockCounter />
        <Button className={classes.productAddCartButton}>
          Agregar al carrito
        </Button>
      </div>
    </Card>
  );
}

export default ProductDetail;
