import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectHome: false
    };

    this.updateBack = this.updateBack.bind(this);
    this.updateNext = this.updateNext.bind(this);
  }

  componentDidMount() {
    const properPath = ['home', 'categories', 'symptoms', 'location'];
    const prevPath = this.props.pathHistory;

    const isExact = [prevPath].filter(idx => {
      return prevPath[idx] !== properPath[idx];
    });

    if (
      isExact.length !== 0 ||
      this.props.page !== 4 ||
      prevPath.length !== 4
    ) {
      this.setState({ redirectHome: true });
    }
  }

  updateBack() {
    const newHistory = this.props.pathHistory;
    newHistory.pop();
    this.props.addToHistory(newHistory);
    this.props.countPages(this.props.page, 'back');
  }

  updateNext() {
    this.props.countPages(this.props.page, 'next');

    const newHistory = this.props.pathHistory;
    newHistory.push('upload');
    this.props.addToHistory(newHistory);
  }

  render() {
    return (
      <div className="mw6 mw7-ns center ph3 ph3-ns">
        <div className="ph3">
          <h2 className="white custom-font f3 tc">Upload Media Page</h2>
          <h3 className="white custom-font f5 tc">Under Construction</h3>
          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fl"
            to="/location"
            onClick={this.updateBack}
          >
            Back
          </Link>
          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fr"
            to="/review"
            onClick={this.updateNext}
          >
            Next
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ page, pathHistory }) => ({ page, pathHistory });

const mapDispatchToProps = dispatch => ({
  countPages: (page, direction) =>
    dispatch(actions.validateRoute(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
