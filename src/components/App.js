import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import LabMap from './LabMap';

const App = () => (
  <React.Fragment>
    <Header />
    <Route path="/" exact component={LabMap} />
  </React.Fragment>
);

export default App;
