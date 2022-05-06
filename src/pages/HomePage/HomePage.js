import React from "react";
import { connect } from "react-redux";

// components

import PageMarker from "../../components/layout/PageFiller/PageMarker";

export const HomePage = (props) => {
  return (
    <div>
      <PageMarker pageName="HomePage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
