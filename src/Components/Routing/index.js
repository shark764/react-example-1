import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../auth0/Login';
import Profile from '../../auth0/Profile';
import Calc from '../../Calc';
import APIInteractions from '../../Containers/APIInteractions';
import Contentful from '../../Containers/Contentful';
import DialPad from '../../Containers/DialPad';
import Examples from '../../Containers/Examples';
import JSX from '../../Containers/JSX';
import ReactQueryExample from '../../Containers/ReactQueryExample';
import ReduxExample from '../../Containers/ReduxExample';
import ReduxToolkitExample from '../../Containers/ReduxToolkitExample';
import Styled from '../../Containers/Styled';
import Users from '../../Containers/Styled/Users';
import PrivateRoute from './PrivateRoute';

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Calc />
      </Route>
      <Route path="/samples">
        <Examples />
      </Route>
      <Route path="/jsx">
        <JSX />
      </Route>
      <Route path="/dial">
        <DialPad />
      </Route>
      <PrivateRoute path="/api">
        <APIInteractions />
      </PrivateRoute>
      <Route path="/styled">
        <Styled />
      </Route>
      <PrivateRoute path="/api-styled">
        <Users />
      </PrivateRoute>
      <PrivateRoute path="/redux">
        <ReduxExample />
      </PrivateRoute>
      <PrivateRoute path="/toolkit">
        <ReduxToolkitExample />
      </PrivateRoute>
      <PrivateRoute path="/rquery">
        <ReactQueryExample />
      </PrivateRoute>
      <PrivateRoute path="/contentful">
        <Contentful />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routing;
