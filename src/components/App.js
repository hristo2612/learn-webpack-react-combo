import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default hot(module)(App);