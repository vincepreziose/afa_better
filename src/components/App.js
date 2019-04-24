import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import LabMap from './LabMap';
import Signin from './Auth/Signin';
import Signout from './Auth/Signout';
import Admin from './Admin';
import LabProfile from './Admin/LabProfile';
import LabAdd from './Admin/LabAdd';
import requireAuth from './requireAuth';

const App = () => (
  <React.Fragment>
    <Header />
    <Route path="/" exact component={LabMap} />
    <Route path="/signin" exact component={Signin} />
    <Route path="/signout" exact component={Signout} />
    <Route path="/admin" exact component={requireAuth(Admin)} />
    <Route path="/admin/lab/:id" exact component={requireAuth(LabProfile)} />
    <Route path="/admin/lab/add" exact component={requireAuth(LabAdd)} />
  </React.Fragment>
);

export default App;
