import React from 'react';
import proud from '../icons/proud.gif';

const ThankYou = () => {
  return (
    <div className="mw7 center ma">
      <h1 className="tc white ph3 pt4-ns pt3">Thank you for taking care of your community!</h1>
      <h4 className="ma white pt2 ph4 f4 ph5-ns tj">
        Sending a report means that you are taking actions to resolve problems
        that affect you and others. We know that it's not always easy to show such a strong initiative!
      </h4>
      <h4 className="ma white pt2 tc f4">
          So because of that...</h4>
      <div className="mw5 mw6-ns pv3 center">
          <img src={proud} alt="Congratulations!" />
      </div>
      <p className="tc white i">- The EasyRep Team -</p>
    </div>
  );
};

export default ThankYou;
