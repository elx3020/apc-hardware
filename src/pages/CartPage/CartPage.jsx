import React from "react";
import { connect } from "react-redux";
import PageMarker from "../../components/layout/PageFiller/PageMarker";
export const CartPage = (props) => {
  return (
    <div>
      <PageMarker pageName="CartPage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
