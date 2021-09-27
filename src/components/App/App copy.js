import React from 'react';
import { Route, Switch } from 'react-router-dom';

// мои роуты в приложении
import routes from '../../config/routes';

// добавить роут '/saved-movies' и '/profile'

import './App.css';
function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path={routes.LANDING}>
            <Main />
            <Footer />
          </Route>
          <Route path={routes.MOVIES}>
            <Movies />
            <Footer />
          </Route>
          <Route path={routes.SIGN_IN}>
            <Login />
          </Route>
          <Route path={routes.SIGN_UP}>
            <Register />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
