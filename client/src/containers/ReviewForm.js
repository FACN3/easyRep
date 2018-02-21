import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';
import Navbar from '../components/Navbar';
import { locationdata } from '../location_data';

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectHome: false
    };

    this.updateBack = this.updateBack.bind(this);
    this.updateNext = this.updateNext.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.listSymptoms = this.listSymptoms.bind(this);
    this.renderEmail = this.renderEmail.bind(this);
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

  sendEmail() {
    const { category, location, chosenSymptoms, imageUrl } = this.props;
    const effects = chosenSymptoms.join(',');
    const report = { location, report_type: category, effects, imageUrl };

    const emailText = `Dear ${this.renderEmail()}, I would like to report ${
      category
    } hazard in ${location}.
        The inconveniences I am experiencing are: ${chosenSymptoms}.
        Attached is a picture of the problem. Please take care of this issue right away.
        Best regards,
        A concerned citizen`;

    const email = { email: emailText };

    axios
      .post('/api/create_report', report)
      .then(res => {
        this.props.createReport(report);
      })
      .catch(err => {
        this.props.handlingError('Could not save report successfully');
        this.props.history.push('/error');
      });

    axios
      .post('/api/send_email', email)
      .then(res => {
        this.props.emailSending(res.data);
        this.props.history.push('/thankyou');
      })
      .catch(err => {
        this.props.handlingError('Could not send email successfully');
        this.props.history.push('/error');
      });

    this.updateNext();
  }

  renderEmail() {
    const locationObject = locationdata.filter(
      data => data.value === this.props.location
    );
    return locationObject[0].name;
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="w-100">
        <Navbar />
        <div className="mw6 mw7-ns center ph3 ph3-ns">
          <div className="ph3">
            <div>
              <p> Dear {this.renderEmail()}</p>
              <div>
                I would like to report {this.props.category} hazard in{' '}
                {this.props.location}.
                <p>The inconveniences I am experiencing are: </p>
                <ul className="symptomList">
                  {this.listSymptoms(this.props.chosenSymptoms)}
                </ul>Attached is a picture of the problem. Please take care of
                this issue right away.
                <p> Best regards,</p>
                <p> A concerned citizen</p>
              </div>
            </div>

            <Link
              className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fl"
              to="/upload"
              onClick={this.updateBack}
            >
              Back
            </Link>
            <button
              className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fr"
              onClick={this.sendEmail}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  page,
  imageUrl,
  pathHistory,
  category,
  chosenSymptoms,
  symptoms,
  location
}) => ({
  page,
  imageUrl,
  pathHistory,
  category,
  symptoms,
  location,
  chosenSymptoms
});

const mapDispatchToProps = dispatch => ({
  emailSending: email => dispatch(actions.emailSending(email)),
  createReport: report => dispatch(actions.createReport(report)),
  handlingError: error => dispatch(actions.handlingError(error)),
  countPages: (page, direction) =>
    dispatch(actions.pageCounter(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
