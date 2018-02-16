import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import proud from '../icons/proud.gif';

class ThankYou extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectHome: false
    };
  }

  componentDidMount() {
    const properPath = ['home', 'categories', 'symptoms', 'location', 'upload', 'review'];
    const prevPath = this.props.pathHistory;

    const isExact = [prevPath].filter(idx => {
      return prevPath[idx] !== properPath[idx];
    });

    if (
      isExact.length !== 0 ||
      this.props.page !== 6 ||
      prevPath.length !== 6
    ) {
      this.setState({ redirectHome: true });
    }
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />
    }
    return (
      <div className="mw7 center ma">
        <h1 className="tc white ph3 pt4-ns pt3">
          Thank you for taking care of your community!
        </h1>
        <h4 className="ma white pt2 ph4 f4 ph5-ns tj">
          Sending a report means that you are taking actions to resolve problems
          that affect you and others. We know that it's not always easy to show
          such a strong initiative!
        </h4>
        <h4 className="ma white pt2 tc f4">So because of that...</h4>
        <div className="mw5 mw6-ns pv3 center">
          <img src={proud} alt="Congratulations!" />
        </div>
        <p className="tc white i">- The EasyRep Team -</p>
        <div className="tc pt3">
          <a
            className="ttu tracked f3-ns f6 dib dim fw7-ns fw5 link br3 ph6 pv3-ns pv2 mb4 orange bg-white"
            href="/"
            title="Home">
            Home
          </a>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ page, pathHistory }) => ({ page, pathHistory });

const mapDispatchToProps = dispatch => ({
  countPages: (page, direction) =>
    dispatch(actions.validateRoute(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
