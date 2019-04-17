import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import LabMap from './LabMap';
import Signin from './Auth/Signin';
import Signout from './Auth/Signout';
import Admin from './Admin';
import requireAuth from './requireAuth';

const App = () => (
  <React.Fragment>
    <Header />
    <Route path="/" exact component={LabMap} />
    <Route path="/signin" exact component={Signin} />
    <Route path="/signout" exact component={Signout} />
    <Route path="/admin" exact component={requireAuth(Admin)} />
  </React.Fragment>
);

export default App;
