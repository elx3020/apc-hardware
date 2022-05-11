import React from "react";

import Container from "react-bootstrap/Container";

import "./style.scss";

function TextComponent(props) {
  const { title, text } = props;
  return (
    <Container>
      <div className="text-wrapper">
        <div className="header-c">
          <h1>{title}</h1>
        </div>
        <div className="body-text">
          <p>{text}</p>
        </div>
      </div>
    </Container>
  );
}

export default TextComponent;
