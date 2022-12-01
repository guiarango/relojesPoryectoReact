import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

//COMPONENTS
import Item from "./Item";
import LoaderPulse from "../Loaders/LoaderPulse";

//STYLES
import classes from "./ItemListContainer.module.css";

//SERVICES
import { returnItemsByCategory } from "../../Services/firestore";

function ItemListContainer(props) {
  const params = useParams();
  const idCategory = params.id;
  const [arrayProductos, setArrayProductos] = useState([]);

  const callProductsService = useCallback(async () => {
    const result = await returnItemsByCategory(idCategory);
    setArrayProductos(result);
  }, [idCategory]);

  useEffect(() => {
    callProductsService();
  }, [callProductsService]);

  return (
    <div className={classes.container}>
      {arrayProductos.length <= 0 ? (
        <LoaderPulse />
      ) : (
        arrayProductos.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              descuento={producto.descuento}
              imagen={producto.imagen}
              categoria={producto.categoria}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemListContainer;
