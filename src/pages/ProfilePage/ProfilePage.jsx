import React from "react";
import { connect } from "react-redux";

import PageMarker from "../../components/layout/PageFiller/PageMarker";

export const ProfilePage = (props) => {
  return (
    <div>
      <PageMarker pageName="ProfilePage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
