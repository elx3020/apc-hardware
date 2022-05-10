import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

import "./style.scss";

import productImage from "../../../images/logo192.png";
function RecomendationsComponent() {
  let history = useHistory();

  function handleClick() {
    history.push("/products/testProduct");
  }

  const recomendationArr = [1, 2, 3, 4];

  const recomendationCards = recomendationArr.map((item, index) => {
    return (
      <Card className="card-rec" key={index}>
        <Card.Img variant="top" src={productImage} />
        <Card.Link onClick={handleClick}>
          Some quick example text to build on the card title and make up the
          bulk.
        </Card.Link>
      </Card>
    );
  });

  return (
    <div>
      <h2>Lo mas buscado..</h2>
      <CardGroup>{recomendationCards}</CardGroup>
    </div>
  );
}

export default RecomendationsComponent;
