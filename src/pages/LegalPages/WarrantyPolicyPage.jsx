import React from "react";
import PageMarker from "../../components/layout/PageFiller/PageMarker";

import TextComponent from "../../components/PageSection/SectionText/TextComponent";

function WarrantyPolicyPage() {
  const warrantyText = `Una vez que la mercadería sea entregada por Tecnomega Store no se acepta ningún tipo de devolución, en caso que el producto presente alguna falla atribuible a defectos de fabricación se procederá de acuerdo a las políticas establecidas por el fabricante del producto, según el caso la garantía será cubierta por Tecnomega Store o por el fabricante y en los términos establecidos por la marca a nivel internacional.`;

  return (
    <div>
      <TextComponent title="Politicas de Envio" text={warrantyText} />
    </div>
  );
}

export default WarrantyPolicyPage;
