import React from 'react';
import { Route, Switch } from 'react-router-dom';

// мои роуты в приложении
import routes from '../../config/routes';

import Header from '../Header/Header';

import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import PopupMenu from '../PopupMenu/PopupMenu';


// добавить роут '/saved-movies' и '/profile'

import './App.css';

function App() {

  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

  function handleModalButtonClick() {
    setIsPopupMenuOpen(true);
  }

  function closePopupMenu() {
    setIsPopupMenuOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path={routes.LANDING}>
            <Header auth={false} promo={true} onModalButtonClick={handleModalButtonClick}/>
            <Promo />
            <AboutProject />
            <Techs />
            <Student />
            <Portfolio />
            <Footer />
          </Route>
          <Route path={routes.MOVIES}>
            <Header auth={true} promo={false} onModalButtonClick={handleModalButtonClick}/>
            <Movies />
            <Footer />
          </Route>
          <Route path={routes.SIGN_IN}>
            <Login />
          </Route>
          <Route path={routes.SIGN_UP}>
            <Register />
          </Route>
        </Switch>
        <PopupMenu isOpen={isPopupMenuOpen} onClose={closePopupMenu} />
      </div>
    </div>
  );
}

export default App;
