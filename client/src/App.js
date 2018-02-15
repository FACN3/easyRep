import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import CategoryForm from './containers/CategoryForm';
import SymptomsForm from './containers/SymptomsForm';
import LocationForm from './containers/LocationForm';
import UploadForm from './containers/UploadForm';
import ReviewForm from './containers/ReviewForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/categories" component={CategoryForm} />
        <Route exact path="/location" component={LocationForm} />
        <Route exact path="/symptoms" component={SymptomsForm} />
        <Route exact path="/upload" component={UploadForm} />
        <Route exact path="/review" component={ReviewForm} />
      </div>
    </BrowserRouter>
  );
};

export default App;
