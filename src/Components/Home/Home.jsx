import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import ItemCarousel from "../Product/ItemCarousel";

//STYLE
import classes from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={classes.contenedorCategorias}>
        <h2 className={classes.titulosCategorias}>CATEGORÍAS</h2>
        <div className={classes.contenedorImagenes}>
          <div className={classes.contenedorImagen}>
            <Link to="/category/1">
              <img
                className={classes.imagen}
                alt="categoria hombre"
                src="https://http2.mlstatic.com/D_NQ_NP_708321-MCO44278409357_122020-V.webp"
              />
              <h2 className={classes.texto}>Hombre</h2>
            </Link>
          </div>
          <div className={classes.contenedorImagen}>
            <Link to="/category/2">
              <img
                className={classes.imagen}
                alt="categoria mujer"
                src="https://http2.mlstatic.com/D_NQ_NP_602177-MCO48270190977_112021-V.webp"
              />
              <h2 className={classes.texto}>Mujer</h2>
            </Link>
          </div>
          <div className={classes.contenedorImagen}>
            <Link to="/category/3">
              <img
                className={classes.imagen}
                alt="categoria niño"
                src="https://http2.mlstatic.com/D_NQ_NP_607429-MLA47514448251_092021-V.webp"
              />
              <h2 className={classes.texto}>Niño</h2>
            </Link>
          </div>
          <div className={classes.contenedorImagen}>
            <Link to="/category/4">
              <img
                className={classes.imagen}
                alt="categoria niña"
                src="https://http2.mlstatic.com/D_NQ_NP_939136-MCO47118247004_082021-V.webp"
              />
              <h2 className={classes.texto}>Niña</h2>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <ItemCarousel titleCarousel="TE RECOMENDAMOS" />
    </>
  );
}

export default Home;
