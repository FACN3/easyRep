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
      return <Redirect to="/" />;
    }
    return (
      <div className="ph3 pv4">
        <form
          onSubmit={this.handleSubmit}
          className="bg-orange mw7 center pa4 br2-ns ba b--black-10"
        >
          <label className="f3 white">Location</label>
          <div className="cf">
            <Select
              className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
              placeholder="Choose your city/town"
              id="city"
              required
              name="city"
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={locationdata}
            />
          </div>
          <div class="mw7 center pa4 flex items-center justify-center">
            <Link to="/symptoms">
              <a className="f4 link dim br-pill bg-green washed-green no-underline b--orange ba grow pv2 ph3 dib mr4">
                Back
              </a>
            </Link>
            <button
              className="f4 link dim br-pill bg-green washed-green no-underline b--orange ba grow pv2 ph3 dib ml4"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  chooseLocation: location => dispatch(actions.chooseLocation(location)),
});

export default connect(null, mapDispatchToProps)(LocationForm);
