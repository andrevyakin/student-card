import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Card from './layouts/card';
import Edit from './layouts/edit';

function App() {
  return (
      <div>
        <Switch>
          <Route path='/edit' component={Edit} />
          <Route path='/' exact component={Card} />
          <Redirect to='/' />
        </Switch>
      </div>
  );
}

export default App;
