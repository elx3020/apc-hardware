import React from "react";
import { connect } from "react-redux";
import PageMarker from "../../components/layout/PageFiller/PageMarker";
export const SignUpPage = (props) => {
  return (
    <div>
      <PageMarker pageName="SignUpPage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
