import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './layouts/main';
import Edit from './layouts/edit';

function App() {
  return (
      <div>
        <Switch>
          <Route path='/edit' component={Edit} />
          <Route path='/' exact component={Main} />
          <Redirect to='/' />
        </Switch>
      </div>
  );
}

export default App;
