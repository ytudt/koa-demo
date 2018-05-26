/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import Login from '../pages/login'
import Main from '../pages/main'

function App(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}


// const onEnter = (nextState, replace) => {
// };

const routes = (
  <Router history={browserHistory}>
    <Route path="/login" component={App}>
      <IndexRoute component={Login}/>
    </Route>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);

export default routes;