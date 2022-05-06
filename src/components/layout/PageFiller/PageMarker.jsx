import React from "react";

function PageMarker(props) {
  const { pageName } = props;

  const style = {
    width: "100%",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px",
  };
  return (
    <div style={style}>
      <h1>{pageName}</h1>
    </div>
  );
}

export default PageMarker;
