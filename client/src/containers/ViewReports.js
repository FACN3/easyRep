import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';
import AuthNavbar from '../components/AuthNavbar';

class ViewReports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: false
    };

    this.renderReports = this.renderReports.bind(this);
  }
  componentDidMount() {
    axios
      .get('/api/view_reports')
      .then(res => {
        console.log(res.data);
        this.props.viewReports(res.data);
        this.setState({ data: true });
      })
      .catch(err => {
        this.props.handlingError('Could not save report successfully');
        this.props.history.push('/error');
      });
  }

  renderReports(reports) {
    return reports.map((report, index) => {
      return (
        <li key={index} className="ba tc ma4 bg-white">
          <h2>{report.report_type}</h2>
          <h3>{report.location}</h3>
          <img
            className="tc"
            height="100"
            width="100"
            src={report.imageUrl}
            alt=""
          />
          <br />
          <span>{report.effects}</span>
        </li>
      );
    });
  }

  render() {
    if (!this.state.data) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className="w-100">
        <AuthNavbar />
        <div className=" listIteminViewReport center">
          <h1 className="tc">See all reports</h1>
          <div height="150" width="100">
            <ul className="tc">
              {this.props.reports && this.renderReports(this.props.reports)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reports }) => ({
  reports
});

const mapDispatchToProps = dispatch => ({
  handlingError: error => dispatch(actions.handlingError(error)),
  viewReports: report => dispatch(actions.viewReports(report))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewReports);
