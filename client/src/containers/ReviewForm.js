import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectHome: false
    };

    this.updateBack = this.updateBack.bind(this);
    this.updateNext = this.updateNext.bind(this);
    this.listSymptoms = this.listSymptoms.bind(this);
  }

  componentDidMount() {
    const properPath = ['home', 'categories', 'symptoms', 'location', 'upload'];
    const prevPath = this.props.pathHistory;

    const isExact = [prevPath].filter(idx => {
      return prevPath[idx] !== properPath[idx];
    });

    if (
      isExact.length !== 0 ||
      this.props.page !== 5 ||
      prevPath.length !== 5
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
    newHistory.push('review');
    this.props.addToHistory(newHistory);
  }

  listSymptoms(symptomList) {
    return symptomList.map((singleSymptom, index) => {
      return <li key={index}>{singleSymptom} </li>;
    });
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="mw6 mw7-ns center ph3 ph3-ns">
        <div className="ph3">
          <div>
            <p> Dear Mr. John Doe,</p>
            <p>
              I would like to report {this.props.category} hazard in{' '}
              {this.props.location}.
              <p>The inconveniences I am experiencing are: </p>
              <ul className="symptomList">
                {this.listSymptoms(this.props.chosenSymptoms)}
              </ul>Joined to this email is a picture of the problem. Please take
              care of this issue right away.
              <p> Best regards,</p>
              <p> A concerned citizen</p>
            </p>
          </div>

          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fl"
            to="/upload"
            onClick={this.updateBack}
          >
            Back
          </Link>
          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fr"
            to="/thankyou"
            onClick={this.updateNext}
          >
            SUBMIT
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  page,
  pathHistory,
  category,
  chosenSymptoms,
  symptoms,
  location
}) => ({
  page,
  pathHistory,
  category,
  symptoms,
  location,
  chosenSymptoms
});

const mapDispatchToProps = dispatch => ({
  chooseSymptoms: symptoms => dispatch(actions.chooseSymptoms(symptoms)),
  chooseLocation: location => dispatch(actions.chooseLocation(location)),
  changeCategory: category => dispatch(actions.chooseCategory(category)),
  changeSymptoms: category => dispatch(actions.renderSymptoms(category)),
  countPages: (page, direction) =>
    dispatch(actions.pageCounter(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
