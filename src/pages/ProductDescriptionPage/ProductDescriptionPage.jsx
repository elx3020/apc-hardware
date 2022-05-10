import React from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom/cjs/react-router-dom";

//  components
import PageMarker from "../../components/layout/PageFiller/PageMarker";

export const ProductDescriptionPage = (props) => {
  const { productId } = useParams();

  return (
    <div>
      <PageMarker pageName={productId} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionPage);
