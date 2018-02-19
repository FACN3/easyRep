import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * from actions from '../actions';


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <header className=" viewReportButton pv3 pv3-ns ph4-m ph5-l">
        <nav className="f6 fw6 tc">
          <Link className=" f4 link br3 ph3 white"
            to="/login"
            >
            View Reports
          </Link>
        </nav>
      </header>
    );
  }
};

mapDispatchToProps = dispatch => ({
  sendLogin: user =>
})
export default Navbar;
