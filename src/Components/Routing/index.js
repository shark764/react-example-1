import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Route path="/api">
        <APIInteractions />
      </Route>
      <Route path="/styled">
        <Styled />
      </Route>
      <Route path="/api-styled">
        <Users />
      </Route>
      <Route path="/redux">
        <ReduxExample />
      </Route>
      <Route path="/toolkit">
        <ReduxToolkitExample />
      </Route>
      <Route path="/rquery">
        <ReactQueryExample />
      </Route>
      <Route path="/contentful">
        <Contentful />
      </Route>
    </Switch>
  );
}

export default Routing;
