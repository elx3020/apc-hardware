import React from "react";
import ProductTemplate from "../../components/products/ProductTemplate";
import { useHistory } from "react-router-dom";
function AddProductPage() {
  const history = useHistory();

  function finishUpload() {
    history.goBack();
  }

  return <ProductTemplate mode="create" redirect={finishUpload} />;
}

export default AddProductPage;
