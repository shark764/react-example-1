import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calc from '../../Calc';
import DialPad from '../../Containers/DialPad';
import Examples from '../../Containers/Examples';
import JSX from '../../Containers/JSX';
import Menu from './Menu';

function Routing() {
  return (
    <Router>
      <Menu />

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
      </Switch>
    </Router>
  );
}

export default Routing;
