import React from "react";

// components

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationsComponent from "./RecomendationsComponent";
import NewsCarrousel from "../HomePageComponents/NewsCarrousel";
// other imports
import "./style.scss";
import promocionImg from "../../../images/promocion1.png";

function HeroHomePage(props) {
  const { data } = props;

  return (
    <div>
      <div className="hero-flex">
        <div className="hero-wrapper">
          <NewsCarrousel />
        </div>
        <div className="hero-wrapper">
          <RecomendationsComponent data={data} />
          <div>Informacion sobre el negocio</div>
        </div>
      </div>
    </div>
  );
}

export default HeroHomePage;
