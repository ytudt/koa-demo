/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import Login from '../pages/login'
import Main from '../pages/main'

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Login}/>
    </Route>
    <Route path="/login">
      <IndexRoute component={Main}/>
    </Route>
    <Redirect from="*" to="/login" />
  </Router>
);

export default routes;