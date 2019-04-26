import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    <Switch>
        <Route path="/" exact component={LabMap} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/admin" exact component={requireAuth(Admin)} />
        <Route path="/admin/lab/add" exact component={requireAuth(LabAdd)} />
        <Route path="/admin/lab/:id" exact component={requireAuth(LabProfile)} />
    </Switch>
  </React.Fragment>
);

export default App;
