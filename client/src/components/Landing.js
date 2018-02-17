import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landingBackground">
      <header className="tc pv4">
        <h1 className="f1">EasyRep</h1>
        <h2 className="f3">
          Report a hazard without giving any personal details
          {/* Feel safe while making a difference. <br /> */}
        </h2>
      </header>
      <div className=" tc">
        <Link
          className="reportButton f2 link dim br3 ph5 pv3 mb2 dib"
          to="/categories"
        >
          REPORT
        </Link>
      </div>
      <div className="takingAvtionDev tc pt4">
        <h3 className=" f4 ">
          Taking action is fast<br /> anonymous and EASY!
        </h3>
      </div>
      <div className="tc pv5">
        <a href="/" className="aboutUsLink">
          About Us
        </a>
      </div>
    </div>
  );
};

export default Landing;
