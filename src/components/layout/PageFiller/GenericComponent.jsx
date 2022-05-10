import React from "react";

function GenericComponent(props) {
  const { typeOfComponent, width, height, backgroundColor } = props;

  const style = {
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    margin: "3% 0",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px",
  };
  return (
    <div style={style}>
      <h4>{typeOfComponent}</h4>
    </div>
  );
}

export default GenericComponent;
