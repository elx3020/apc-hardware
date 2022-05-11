import React from "react";
import PageMarker from "../../components/layout/PageFiller/PageMarker";

import TextComponent from "../../components/PageSection/SectionText/TextComponent";

function PrivacyPage() {
  const policyText = `Esta política de privacidad establece cómo APC Hardware usa y protege cualquier información que usted proporciona a APC Hardware cuando se utiliza este sitio web. APC Hardware se compromete a garantizar que su privacidad está protegida. Si le pedimos que nos proporcione cierta información por la cual usted puede ser identificado al usar este sitio web, entonces usted puede estar seguro de que sólo se utilizará de acuerdo con esta declaración de privacidad. APC Hardware puede cambiar esta política de vez en cuando al actualizar esta página . Usted debe visitar esta página de vez en cuando para asegurarse de que está satisfecho con los cambios.
  Lo que recogemos
  
  Podemos recopilar la siguiente información:
  
  Nombre
  Información, incluyendo dirección de correo electrónico de contacto
  Información demográfica como código postal, preferencias e intereses
  Otra información pertinente para encuestas a clientes y/o ofertas
  La lista exhaustiva de las cookies que recopilamos ver la lista de cookies que recopilamos sección
  
  ¿Qué hacemos con la información que recopilamos?
  
  Necesitamos esta información para entender sus necesidades y ofrecerle un mejor servicio, y en particular por las siguientes razones:
  
  Mantenimiento de registros internos
  Podemos utilizar la información para mejorar nuestros productos y servicios
  Podemos enviar correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información que pensamos que puede resultar interesante utilizar la dirección de correo electrónico que usted ha proporcionado
  De vez en cuando, también podemos utilizar su información para comunicarnos con usted para fines de investigación de mercado. Podemos comunicarnos con usted por correo electrónico, teléfono , fax o correo. Podemos utilizar la información para personalizar el sitio web de acuerdo a sus intereses`;

  return (
    <div>
      <TextComponent title="Politicas de Privacidad" text={policyText} />
    </div>
  );
}

export default PrivacyPage;
