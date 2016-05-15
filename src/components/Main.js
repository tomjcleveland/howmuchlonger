import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Home from './home';
import Base from './base';
import Countdown from './countdown';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={Base}>
      <IndexRoute component={Home} />
      <Route path=":gender/:birthday" component={Countdown} />
    </Route>
  </Router>
), document.getElementById("app")
);