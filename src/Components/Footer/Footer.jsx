import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

//STYLES
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={`${classes.opciones} ${classes.links}`}>
        <ul>
          <li className={classes.opcion}>
            <Link to={"/category/1"}>Hombre</Link>
          </li>
          <li className={classes.opcion}>
            <Link to={"/category/2"}>Mujer</Link>
          </li>
          <li className={classes.opcion}>
            <Link to={"/category/3"}>Niño</Link>
          </li>
          <li className={classes.opcion}>
            <Link to={"/category/4"}>Niña</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Nuestras redes sociales</h2>
        <div className={classes.redesSociales}>
          <BsFacebook className={classes.facebookIcon} />
          <BsInstagram className={classes.instagramIcon} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
