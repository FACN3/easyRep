import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      history: []
    };
  }

  startReport() {
    const history = this.state.history.push('home');
    this.setState({ history});
    this.props.addToHistory(this.state.history);
    this.props.startRoute(this.state.page, 'next');
  }

  render() {
      return (
        <div className="landingBackground">
          <Navbar />
          <header className="tc pv4">
            <h1 className="f1">EasyRep</h1>
            <h2 className="f3">
              Report a hazard without giving any personal details
            </h2>
          </header>
          <div className=" tc">
            <Link
              className="reportButton f2 link dim br3 ph5 pv3 mb2 dib"
            to="/categories"
            onClick={() => this.startReport()}
          >
            REPORT
          </Link>
        </div>
        <div className="takingAvtionDev tc pt4">
          <h3 className=" f4 ">
            Taking action is fast<br /> anonymous and EASY!
          </h3>
        </div>
        <div className="tc pv5">
          <a href="/" className="aboutUsLink">
            About Us
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startRoute: (page, direction) =>
    dispatch(actions.pageCounter(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history))
});

export default connect(null, mapDispatchToProps)(Landing);
