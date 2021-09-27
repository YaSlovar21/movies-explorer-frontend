import React from 'react';
import { Route, Switch } from 'react-router-dom';

// мои роуты в приложении
import routes from '../../config/routes';

import Footer from '../Footer/Footer';

// добавить роут '/saved-movies' и '/profile'

import './App.css';
function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path={routes.LANDING}>
            <Footer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
