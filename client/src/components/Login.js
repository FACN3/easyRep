import React from 'react';

const Login = () => {
    return (
      <div className="mw7 center">
        <h3 className="tc pv5">Please Login to be able to browse through the list of reports.</h3>

        <div className="tc pt3">
          <a className="dib f6 fw6 ttu tracked link dim br3 ph3 pv2 mb2 orange bg-white ba"
            href="/auth/facebook"
            >
            Login With Facebook
          </a>
        </div>
        <div className="tc pt3">
          <a
            className="ttu tracked f6 dib dim fw6 link br3 ph3 pv2 mb4 orange bg-white ba"
            href="/"
            title="Home">
            Home
          </a>
        </div>
      </div>
    );
}

export default Login;
