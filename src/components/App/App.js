import React from 'react';
import { Route, Switch } from 'react-router-dom';

// мои роуты в приложении
import routes from '../../config/routes';

import Header from '../Header/Header';

import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';


// добавить роут '/saved-movies' и '/profile'

import './App.css';
function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path={routes.LANDING}>
            <Header auth={true} />
            <Promo />
            <Movies />
            <Footer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
