import React from "react";
import PageMarker from "../../components/layout/PageFiller/PageMarker";

import Container from "react-bootstrap/Container";

import TextComponent from "../../components/PageSection/SectionText/TextComponent";

const textDelivery = `El envío del producto solicitado se realizará en el término de 24 horas a partir de recibirse la confirmación de pago por parte del cliente, a este tiempo se sumará el que le tome al transportista entregarlo en la dirección establecida por el cliente en su pedido.
APC Hardware es responsable del estado de la mercadería hasta el momento que esta sea entregada al transportista, el cliente es responsable de revisar que el producto que le sea entregado se encuentre en perfectas condiciones físicas y de acuerdo al pedido realizado. Al recibir su pedido deberá verificar que los sellos de seguridad se encuentren intactos, en caso de encontrar alguna anomalía deberá rechazar la entrega y comunicar del particular a APC Hardware.
Los costos de envío fuera de las ciudades de Quito y Guayaquil, serán asumidos por el cliente y de acuerdo al tarifario del transportista.`;

function DeliveryPolicyPage() {
  return (
    <div>
      <TextComponent title="Politicas de Envio" text={textDelivery} />
    </div>
  );
}

export default DeliveryPolicyPage;
