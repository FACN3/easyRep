import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-orange w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked tc">
        <a className="f6 link dim br3 ph3 pv2 mb2 dib orange bg-white" href="/" title="Home">
          View Reports
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
