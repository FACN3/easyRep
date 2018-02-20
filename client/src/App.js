import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import CategoryForm from './containers/CategoryForm';
import SymptomsForm from './containers/SymptomsForm';
import LocationForm from './containers/LocationForm';
import UploadForm from './containers/UploadForm';
import ReviewForm from './containers/ReviewForm';
import ThankYou from './components/ThankYou';
import Login from './components/Login';
import ViewReports from './components/ViewReports';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/login" component={Login} />
        <Route path="/viewreports" component={ViewReports} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/categories" component={CategoryForm} />
        <Route exact path="/location" component={LocationForm} />
        <Route exact path="/symptoms" component={SymptomsForm} />
        <Route exact path="/upload" component={UploadForm} />
        <Route exact path="/review" component={ReviewForm} />
        <Route exact path="/thankyou" component={ThankYou} />
      </div>
    </BrowserRouter>
  );
};

export default App;
