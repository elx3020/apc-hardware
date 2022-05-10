import React from "react";

import GenericComponent from "../../layout/PageFiller/GenericComponent";

function HomeCalculatorComponent() {
  return (
    <div>
      <GenericComponent
        typeOfComponent="Calculator"
        width="100%"
        height="35vh"
        backgroundColor="white"
      />
    </div>
  );
}

export default HomeCalculatorComponent;
