import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ReportNew from "./containers/ReportNew";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/categories" component={ReportNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
