import React from 'react';

const AuthNavbar = () => {
    return (
      <header className=" viewReportButton pv3 pv3-ns ph4-m ph5-l">
        <nav className="f6 fw6 tc">
          <a className=" f4 link br3 ph3 white mr2"
            href="/auth/logout"
            >
            Logout
          </a>
          <a className=" f4 link br3 ph3 white ml2"
            href="/"
            >
           Home
          </a>
        </nav>
      </header>
    );
};

export default AuthNavbar;
