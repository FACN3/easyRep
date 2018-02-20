import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.sendUser = this.sendUser.bind(this);
  }
  sendUser(e) {
    // e.preventDefault();
    this.props.fetchUser();
  }
  render() {
    return (
      <header className=" viewReportButton pv3 pv3-ns ph4-m ph5-l">
        <nav className="f6 fw6 tc">
          <a className=" f4 link br3 ph3 white"
            href="/auth/current_user"
            >
            View Reports
          </a>
        </nav>
      </header>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser())
})

export default connect(null, mapDispatchToProps)(Navbar);
