import React, { useContext, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

//COMPONENTS
import Button from "../UI/Button";

//CONTEXT
import { cartContext } from "../../context/cartContext";

//SERVICES
import { createOrder } from "../../Services/firestore";

//STYLE
import classes from "./FormularioContacto.module.css";

function FormularioContacto(props) {
  const miContext = useContext(cartContext);
  const navigate = useNavigate();

  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");

  async function handleCheckout(event) {
    event.preventDefault();

    const order = {
      buyer: {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
      },
      items: miContext.itemsInCart,
      total: miContext.totalBuy,
      date: new Date(),
    };

    const orderId = await createOrder(order);
    miContext.clearCart();

    navigate(`/thankyou/${orderId}`);
  }

  return (
    <>
      {miContext.itemsInCart.length <= 0 ? (
        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <h2>No hay items en el carrito</h2>
          <Link to="/">
            <Button>Ir a comprar</Button>
          </Link>
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: "center", marginTop: "30px" }}>
            Datos del contacto
          </h2>
          <form className={classes.formulario} onSubmit={handleCheckout}>
            <p>
              Nombre:
              <input
                className={classes.input}
                type="text"
                ref={name}
                required
              />
            </p>
            <p>
              Email:
              <input
                className={classes.input}
                type="email"
                ref={email}
                required
              />
            </p>
            <p>
              Phone:
              <input
                className={classes.input}
                type="number"
                ref={phone}
                required
              />
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                value="Finalizar compra"
                style={{
                  textAlign: "center",
                  backgroundColor: "darkslategray",
                  color: "white",
                  padding: "10px",
                }}
              />
            </p>
          </form>

          <h2
            style={{
              textAlign: "center",
            }}
          >
            Compra total: {miContext.totalBuy}
          </h2>
        </>
      )}
    </>
  );
}

export default FormularioContacto;
