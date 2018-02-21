import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import sha1 from 'sha1';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';
import keys from '../config/keys';
import Navbar from '../components/Navbar';

class UploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectHome: false,
    };

    this.uploadFile = this.uploadFile.bind(this);
    this.updateBack = this.updateBack.bind(this);
    this.updateNext = this.updateNext.bind(this);
  }

  componentDidMount() {
    const properPath = ['home', 'categories', 'symptoms', 'location'];
    const prevPath = this.props.pathHistory;

    const isExact = [prevPath].filter(idx => {
      return prevPath[idx] !== properPath[idx];
    });

    if (isExact.length !== 0 || this.props.page !== 4 || prevPath.length !== 4) {
      this.setState({ redirectHome: true });
    }
  }

  uploadFile(files) {
    const file = files[0];
    const cloudName = keys.CLOUD_NAME;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const timestamp = Date.now() / 1000;
    const upload_preset = keys.IMAGE_UPLOAD_PRESET;
    const api_secret = keys.IMAGE_API_SECRET;
    const api_key = keys.IMAGE_API_KEY;
    const paramStr = `timestamp=${timestamp}&upload_preset=${upload_preset}${api_secret}`;
    const signature = sha1(paramStr);
    const params = {
      api_key,
      timestamp,
      upload_preset,
      signature,
    };

    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', file);

    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, res) => {
      if (err) {
        this.props.handlingError('Could not upload image succesfully');
        this.props.history.push('/error');
        return;
      }
      this.setState({ imageUrl: res.body.url });

    });
  }

  updateBack() {
    const newHistory = this.props.pathHistory;
    newHistory.pop();
    this.props.addToHistory(newHistory);
    this.props.countPages(this.props.page, 'back');
  }

  updateNext() {
    if (this.state.imageUrl) {
      const url = this.state.imageUrl;
      this.props.saveFileUrl(url);
    }

    this.props.countPages(this.props.page, 'next');

    const newHistory = this.props.pathHistory;
    newHistory.push('upload');
    this.props.addToHistory(newHistory);
  }

  render() {
    return (
      <div className="w-100">
        <Navbar />
      <div className="mw6 mw7-ns center ph3 ph3-ns">
        <div className="ph3">
          <Dropzone onDrop={this.uploadFile}>
            <img
              className="tc"
              height="200"
              width="300"
              src={this.state.imageUrl}
              alt="Upload Image"
            />
          </Dropzone>
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
    </div>
    );
  }
}

const mapStateToProps = ({ page, pathHistory }) => ({ page, pathHistory });

const mapDispatchToProps = dispatch => ({
  handlingError: error => dispatch(actions.handlingError(error)),
  saveFileUrl: url => dispatch(actions.saveFile(url)),
  countPages: (page, direction) => dispatch(actions.pageCounter(page, direction)),
  addToHistory: history => dispatch(actions.recordHistory(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
