import React from "react";

import ProductTemplate from "../../components/products/ProductTemplate";

import {useParams} from "react-router-dom"

function EditProductPage() {

  const params = useParams();


  return (
    <div>
      <ProductTemplate mode="update" productId={params.productId} />
    </div>
  );
}

export default EditProductPage;
