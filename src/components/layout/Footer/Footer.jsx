import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "auto",
        bottom: 0,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr",
        gridColumnGap: "0px",
        gridRowGap: "0px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/privacy-policy">Privacidad y Condiciones</Link>
        <Link to="/delivery-policy">Politicas de Envio</Link>
        <Link to="/warranty-policy">Politicas de Garantia</Link>
      </div>

      {/* newsletter form */}

      <div>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <input type="submit" />
        </form>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <a href="#">Facebook</a>
        <a href="#">Mercado Libre</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
}

export default Footer;
