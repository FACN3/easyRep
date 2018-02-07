import React from "react";

const Landing = () => {
  return (
    <div>
      <header className="tc pv4 pv5-ns">
        <h1 className="white pt5 fw3 f1">EasyRep</h1>
        <h2 className="white pa1 fw1 f2">
          Feel safe while making a difference
        </h2>
      </header>
      <div className="tc">
        <a href="/" className="f2 link dim br3 ph5 pv3 mb2 dib white bg-orange">
          REPORT
        </a>
      </div>
      <div className="tc pv4">
        <h3 className="white f4 fw3">
          Taking action is fast, anonymous and EASY!
        </h3>
      </div>
      <div className="tc">
        <a href="#" className="link f3">
          About Us
        </a>
      </div>
    </div>
  );
};

export default Landing;
