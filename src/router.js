import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage.jsx';

function RouterConfig({ history }) {
  // console.log(111111111,history)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to='/index/button' />} />
        <Route path="/index" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
