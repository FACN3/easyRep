import React, { Component } from "react";
import { reduxForm } from "redux-form";
import CategoryForm from "./CategoryForm";

class ReportForm extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    return <CategoryForm />;
  }
}

export default reduxForm({
  form: "reportForm",
  destroyOnUnmount: false
})(ReportForm);
