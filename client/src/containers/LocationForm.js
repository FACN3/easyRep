import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as actions from '../actions';
import { locationdata } from '../location_data';

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '', redirect: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.chooseLocation(this.state.selectedOption.value);
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/upload" />;
    }
    return (
      <div className="ph3 pv4 tc">
        <form onSubmit={this.handleSubmit} className="mw7 center pa4 br2-ns">
          <label className="f3">Choose your location</label>
          <div className="cf">
            <Select
              className="input-reset pa3 br2-ns br--left-ns tc"
              placeholder="Choose your city/town"
              id="city"
              required
              name="city"
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={locationdata}
            />
          </div>
          <div className="ph3 pv4">
            <Link
              className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fl ba"
              to="/symptoms"
            >
              Back
            </Link>
            <Link
              className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fr ba"
              to="/thankyou"
            >
              Next
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  chooseLocation: location => dispatch(actions.chooseLocation(location))
});

export default connect(null, mapDispatchToProps)(LocationForm);
