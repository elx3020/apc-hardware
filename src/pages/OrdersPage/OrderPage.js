import React from "react";
import { connect } from "react-redux";
import PageMarker from "../../components/layout/PageFiller/PageMarker";
export const OrderPage = (props) => {
  return (
    <div>
      <PageMarker pageName="OrderPage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
