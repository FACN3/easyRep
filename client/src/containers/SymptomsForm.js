import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class SymptomsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }

    this.selectSymptoms = this.selectSymptoms.bind(this);
  }

  componentDidMount() {
    // const symptoms = this.props.symptoms.reduce((res, item) => {
    //   res[item] = false;
    //   return res;
    // }, {});
    //
    // this.setState({ symptoms: symptoms });
    this.props.symptoms.map(symptom => {
      this.setState({ [symptom]: false });
    });
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
    this.setState({ symptoms: {[symptom]: event.target.checked }})
  }

  render() {
    console.log(this.state);
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
        >
          Next
        </a>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ symptoms, category }) => ({ symptoms, category });

const mapDispatchToProps = dispatch => {
  chosenSymptoms: symptoms => dispatch(actions.chooseSymptoms(symptoms))
}

export default connect(mapStateToProps)(SymptomsForm);
