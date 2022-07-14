import React from "react";

import ProductTemplate from "../../components/products/ProductTemplate";

import { useParams, useHistory } from "react-router-dom";

function EditProductPage() {
  const params = useParams();

  const history = useHistory();

  function returnToAdmin() {
    history.goBack();
  }

  return (
    <div>
      <ProductTemplate
        mode="update"
        productId={params.productId}
        redirect={returnToAdmin}
      />
    </div>
  );
}

export default EditProductPage;
