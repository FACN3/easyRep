import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);

    this.state = { errorMessage: 'Loading' };
    this.updateError = this.updateError.bind(this);
  }

  componentDidMount() {
    this.updateError();
  }
  updateError() {
    setTimeout(() => {
      if (this.props.errorMessage && this.state.errorMessage === 'Loading') {
        this.setState({ errorMessage: this.props.errorMessage });
      }
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.errorMessage.toString()}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

export default connect(mapStateToProps)(ErrorMessage);
