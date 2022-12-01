import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import LoaderPulse from "../Loaders/LoaderPulse";

//COMPONENTS
import CheckoutItemsList from "./CheckoutItemsList";
import Card from "../UI/Card";

//STYLES
import classes from "./Thankyou.module.css";

//SERVICES
import { returnSingleOrder } from "../../Services/firestore";
import { isEmpty } from "@firebase/util";

function Thankyou() {
  const [purchaseDetail, setPurchaseDetail] = useState({});
  const idOrder = useParams().idOrder;

  const returnOrder = useCallback(async () => {
    const order = await returnSingleOrder(idOrder);
    setPurchaseDetail(order);
  }, [idOrder]);

  useEffect(() => {
    returnOrder();
  }, [returnOrder]);

  return (
    <div className={classes.contenedorGracias}>
      <h1>Gracias por tu compra</h1>
      <h3>
        El id de tu compra es: <strong>{idOrder}</strong>
      </h3>

      {isEmpty(purchaseDetail) ? (
        <LoaderPulse />
      ) : (
        <>
          <Card className={classes.contenedorInfoComprador}>
            <h2>Datos del comprador</h2>
            <p>Nombre: {purchaseDetail.buyer.name}</p>
            <p>Email: {purchaseDetail.buyer.email}</p>
            <p>Celular: {purchaseDetail.buyer.phone}</p>
          </Card>
          <div className={classes.datosCompra}></div>
          <CheckoutItemsList productos={purchaseDetail.items} />
          <div className={classes.totalBuy}>
            Total compra: {purchaseDetail.total}
          </div>
        </>
      )}
    </div>
  );
}

export default Thankyou;
