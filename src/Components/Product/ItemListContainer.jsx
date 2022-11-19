import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//COMPONENTS
import Item from "./Item";
import LoaderPulse from "../Loaders/LoaderPulse";

//STYLES
import classes from "./ItemListContainer.module.css";

//SERVICES
import { returnItemsByCategory } from "../../Services/returnProducts";

function ItemListContainer(props) {
  const params = useParams();
  const idCategory = params.id;
  const [arrayProductos, setArrayProductos] = useState([]);

  useEffect(() => {
    setArrayProductos([]);
    setTimeout(() => {
      setArrayProductos(returnItemsByCategory(idCategory));
    }, 1000);
  }, [idCategory]);

  return (
    <div className={classes.container}>
      {arrayProductos.length <= 0 ? (
        <LoaderPulse />
      ) : (
        arrayProductos.map((producto) => {
          return (
            <Item
              className={classes.item}
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              descuento={producto.descuento}
              imagen={producto.imagen}
              initialQuantity={producto.initialQuantity}
              categoria={producto.categoria}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemListContainer;
