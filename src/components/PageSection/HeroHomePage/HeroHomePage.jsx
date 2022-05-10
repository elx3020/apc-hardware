import React from "react";

// components

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationsComponent from "./RecomendationsComponent";

// other imports
import "./style.scss";
import productImage from "../../../images/logo192.png";

function HeroHomePage() {
  return (
    <div>
      <div className="hero-flex">
        <div className="hero-wrapper">
          <img src="/sd" alt="promociones" />
        </div>
        <div className="hero-wrapper">
          <RecomendationsComponent />
          <div>Informacion sobre el negocio</div>
        </div>
      </div>
    </div>
  );
}

export default HeroHomePage;
