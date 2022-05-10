import React from "react";
import { connect } from "react-redux";

import PageMarker from "../../components/layout/PageFiller/PageMarker";

export const TicketPage = (props) => {
  return (
    <div>
      <PageMarker pageName="TicketPage" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TicketPage);
