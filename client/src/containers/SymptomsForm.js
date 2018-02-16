import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../actions';

class SymptomsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symptoms: {},
      redirectHome: false,
    };

    this.selectSymptoms = this.selectSymptoms.bind(this);
    this.sendSymptoms = this.sendSymptoms.bind(this);
    this.updateBack = this.updateBack.bind(this);
  }

  componentDidMount() {
    const symptoms = this.props.symptoms.reduce((res, item) => {
      res[item] = false;
      return res;
    }, {});

    this.setState({ symptoms });

    const properPath = ['home', 'categories'];
    const prevPath = this.props.pathHistory;

    const isExact = [prevPath].filter(idx => {
      return prevPath[idx] !== properPath[idx];
    });

    if (
      isExact.length !== 0 ||
      this.props.page !== 2 ||
      prevPath.length !== 2
    ) {
      this.setState({ redirectHome: true });
    }
  }

  renderSymptoms(category) {
    return this.props.symptoms.map(symptom => {
      return (
        <div key={symptom} className="pv1-ns pv2">
          <input
            type="checkbox"
            className="ml6-ns pl2-ns"
            name="symptom"
            value={symptom}
            onChange={this.selectSymptoms}
          />

          <span className="custom-font white f4 ml3-ns pl2 tj">{symptom}</span>
        </div>
      );
    });
  }

  updateBack() {
    const newHistory = this.props.pathHistory;
    newHistory.pop();
    this.props.addToHistory(newHistory);
    this.props.countPages(this.props.page, 'back');
  }

  selectSymptoms(event) {
    const symptom = event.target.value;
    this.setState({
      symptoms: { ...this.state.symptoms, [symptom]: event.target.checked },
    });
  }

  sendSymptoms() {
    this.props.countPages(this.props.page, 'next');

    const newHistory = this.props.pathHistory;
    newHistory.push('symptoms');
    this.props.addToHistory(newHistory);

    this.props.chooseSymptoms(this.state.symptoms);
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="mw6 mw7-ns center ph3 ph3-ns">
        <form className="pv3 pv4-ns ml4 pl4-ns">
          {this.renderSymptoms(this.props.category)}
        </form>
        <div className="ph3">
          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fl"
            onClick={this.updateBack}
            to="/categories"
          >
            Back
          </Link>
          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fr"
            onClick={this.sendSymptoms}
            to="/location"
          >
            Next
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ symptoms, category, pathHistory, page }) => ({
  symptoms,
  category,
  pathHistory,
  page,
});

const mapDispatchToProps = dispatch => ({
  chooseSymptoms: symptoms => dispatch(actions.chooseSymptoms(symptoms)),
  countPages: (page, direction) =>
    dispatch(actions.pageCounter(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomsForm);
