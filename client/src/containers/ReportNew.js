import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ReportForm from "./ReportForm";

class ReportNew extends Component {
  render() {
    return (
      <div>
        <ReportForm />
      </div>
    );
  }
}

export default reduxForm({
  form: "reportForm"
})(ReportNew);
