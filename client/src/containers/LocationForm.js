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
    this.state = {
      selectedOption: '',
      redirect: false,
      redirectHome: false,
      redirectBack: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBack = this.updateBack.bind(this);
  }

  componentDidMount() {
    const properPath = ['home', 'categories', 'symptoms'];
    const prevPath = this.props.pathHistory;

    const isExact = [prevPath].filter(idx => {
      return prevPath[idx] !== properPath[idx];
    });

    if (
      isExact.length !== 0 ||
      this.props.page !== 3 ||
      prevPath.length !== 3
    ) {
      this.setState({ redirectHome: true });
    } else if (this.props.chosenSymptoms.length === 0) {
      this.updateBack();
      this.setState({ redirectBack: true });
    }
  }

  updateBack() {
    const newHistory = this.props.pathHistory;
    newHistory.pop();
    this.props.addToHistory(newHistory);
    this.props.countPages(this.props.page, 'back');
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.chooseLocation(this.state.selectedOption.value);

    this.props.countPages(this.props.page, 'next');

    const newHistory = this.props.pathHistory;
    newHistory.push('location');
    this.props.addToHistory(newHistory);

    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/upload" />;
    } else if (this.state.redirectHome) {
      return <Redirect to="/" />;
    } else if (this.state.redirectBack) {
      alert(
        'You must choose at least 1 inconvenience that best describe your problem.'
      );
      return <Redirect to="/symptoms" />;
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
          <div className="mw7 center pa4 flex items-center justify-center">
            <Link
              to="/symptoms"
              className="f4 link dim br-pill bg-green washed-green no-underline b--orange ba grow pv2 ph3 dib mr4"
              onClick={this.updateBack}
            >
              Back
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

const mapStateToProps = ({ page, pathHistory, chosenSymptoms }) => ({
  page,
  pathHistory,
  chosenSymptoms,
});

const mapDispatchToProps = dispatch => ({
  chooseLocation: location => dispatch(actions.chooseLocation(location)),
  countPages: (page, direction) =>
    dispatch(actions.validateRoute(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
