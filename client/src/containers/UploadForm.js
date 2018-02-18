import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import sha1 from 'sha1';
import superagent from 'superagent';
import keys from '../config/keys';


class UploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectHome: false
    };

    this.uploadFile = this.uploadFile.bind(this);
    this.saveFile = this.saveFile.bind(this);

  }

  uploadFile(e) {
   const file = e.target.files[0];
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
       alert(err);
       return;
     }

     this.setState({ imageUrl: res.body.url });
     console.log('Upload Successful', JSON.stringify(res.body.url));
     console.log('State:', this.state);
   });
 }

 saveFile() {
    if (this.state.imageUrl) {
      const url = this.state.imageUrl;
      this.props.saveFileUrl(url);
    }
 }

  render() {
    return (
      <div className="mw6 mw7-ns center ph3 ph3-ns">
        <div className="ph3">
            <input type="file" onChange={this.uploadFile} />
          <Link
            className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fl"
            to="/location"

          >
            Back
          </Link>
          <Link className="f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 dib orange bg-white fr"
            to="/review"
            onClick={this.saveFile}
            >
            Next
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ page, pathHistory }) => ({ page, pathHistory });

const mapDispatchToProps = dispatch => ({
  saveFileUrl: url => dispatch(actions.saveFile(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
