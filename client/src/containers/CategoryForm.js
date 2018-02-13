import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import * as actions from "../actions";

class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory(event) {
    event.preventDefault();
    const categorySelected = event.target.category.value;
    this.props.changeCategory(categorySelected);
    this.props.changeSymptoms(categorySelected);
    this.setState({ redirect: true });
  }

  renderList() {
    return this.props.categories.map(category => {
      return (
        <li key={category.name}>
          <div className="fl w-50 w-50-ns pa2">
            <form onSubmit={this.selectCategory}>
              <label className="f4 white">{category.name}</label>
              <br />
              <input type="hidden" name="category" value={category.name} />
              <button
                className="hover-bg-orange bg-white pv2 h4 w4 br4"
                type="submit"
              >
                <img
                  alt={category.alt}
                  className="h3 w3 tc"
                  src={category.icon}
                />
              </button>
            </form>
          </div>
        </li>
      );
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/symptoms" />
    }

    return (
      <div className="mw7 center ph3-ns">
        <div className="cf ph2-ns">
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(actions.chooseCategory(category)),
  changeSymptoms: category => dispatch(actions.renderSymptoms(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
