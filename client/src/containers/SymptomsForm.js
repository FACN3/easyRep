import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';

class SymptomsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      symptoms: {}
    }

    this.selectSymptoms = this.selectSymptoms.bind(this);
    this.sendSymptoms = this.sendSymptoms.bind(this);
  }

  componentDidMount() {
    const symptoms = this.props.symptoms.reduce((res, item) => {
      res[item] = false;
      return res;
    }, {});

    this.setState({ symptoms: symptoms });
  }

  renderSymptoms(category) {
    return this.props.symptoms.map(symptom => {
      return (
        <div key={symptom}>
      <input type="checkbox"
        name="symptom"
        value={symptom}
        onChange={this.selectSymptoms} />
      <span className="white f4 pl2">{symptom}</span>
    </div>
  );
    });
  }

  selectSymptoms(event) {
    const symptom = event.target.value;
    this.setState({ symptoms: {...this.state.symptoms, [symptom]: event.target.checked }})
  }

  sendSymptoms(e) {
    e.preventDefault();
    this.props.chooseSymptoms(this.state.symptoms);
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/location" />;
    }

    return (
      <div className="mw7 center ph3 ph3-ns">
        <form className="tc pa2">
          {this.renderSymptoms(this.props.category)}
        </form>
        <div>
        <a
          className="f6 fw3 link dim br3 ph3 pv2 mb2 dib orange bg-white fl"
        >
          Back
        </a>
        <a
          className="f6 fw3 link dim br3 ph3 pv2 mb2 dib orange bg-white fr"
          onClick={this.sendSymptoms}
        >
          Next
        </a>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ symptoms, category }) => ({ symptoms, category });

const mapDispatchToProps = dispatch => ({
  chooseSymptoms: symptoms => dispatch(actions.chooseSymptoms(symptoms))
});

export default connect(mapStateToProps, mapDispatchToProps)(SymptomsForm);
