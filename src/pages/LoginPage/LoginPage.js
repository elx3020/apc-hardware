import React from "react";
import { connect } from "react-redux";
import PageMarker from "../../components/layout/PageFiller/PageMarker";
export const LoginPage = (props) => {
  return (
    <div>
      <PageMarker pageName="LoginPage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
