import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "tachyons/css/tachyons.css";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" component={Landing} />
      </div>
    </BrowserRouter>
  );
};

export default App;
