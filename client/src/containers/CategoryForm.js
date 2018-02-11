import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryForm extends Component {
  renderList() {
    return this.props.categories.map(category => {
      return (
        <li key={category.name}>
          <div className="fl w-50 w-50-ns pa2 ">
            <button className="hover-bg-orange bg-white pv4 h4 w4 br4">
              <label className="f4 black">{category.name}</label>
              <br />
              <img
                alt={category.alt}
                className="h3 w3 tc"
                src={category.icon}
              />
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="mw7 center ph3-ns">
        <div className="cf ph2-ns">
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(CategoryForm);
