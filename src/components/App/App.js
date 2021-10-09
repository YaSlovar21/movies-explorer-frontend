import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

// мои роуты в приложении
import routes from '../../config/routes';

import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import PopupMenu from '../PopupMenu/PopupMenu';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';

import './App.css';

// контекст пользователя
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// мое api
import { 
  login, 
  register, 
  checkToken, 
  logout, 
  setInfoUser,

  getSavedMovies, 
  addMovie, 
  deleteMovie, 
  getInfoUser
} from '../../utils/MainApi';

// beat-film api
import { getMovies } from '../../utils/MoviesApi';

import moviesFormat from '../../utils/moviesFormat';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import react from 'react';

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({}); //стейт с информацией о текущем пользователе
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

  const [isLoadingMovies, setIsLoadingMovies] = React.useState(false);
  const [movies, setMovies] = react.useState([]);
  const [savedMovies, setSavedMovies] = react.useState([]);

  function handleModalButtonClick() {
    setIsPopupMenuOpen(true);
  }

  function closePopupMenu() {
    setIsPopupMenuOpen(false);
  }

  function handleGetUserInfo() {
    getInfoUser()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleRegister(name, password, email) {
    register(name, password, email)
      .then((data) => {
        // setIsSuccessRegistration(true);
        // setIsInfoTooltipOpen(true);
        history.push(routes.SIGN_IN);
        console.log(data);
      })
      .catch((err) => {
        // setIsSuccessRegistration(false);
        // setIsInfoTooltipOpen(true);
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        
        history.push(routes.MOVIES);
        // setUserEmail(email);
        console.log(res);
      })
      .catch((err) => {
        // setIsSuccessRegistration(false);
        // setIsInfoTooltipOpen(true);
        console.log(err);
      });
  }

  function handleSignOut() {
    logout()
      .then(() => {
        history.push(routes.SIGN_IN);
        setIsLoggedIn(false);
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    checkToken()
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        // setUserEmail(res.email); //данным способом мы выводили адрес на экран
        history.push(routes.MOVIES);
      })
      .catch((err) => 
        console.log(err)
      );
  }, []); 

  React.useEffect(() => {
    handleGetMovies();
    handleGetSavedMovies();
    handleGetUserInfo();
  }, [isLoggedIn]);

  function handleGetMovies() {
    setIsLoadingMovies(true);
    getMovies()
      .then((movies) => {
        setMovies(moviesFormat(movies));
      })
      .catch((err)=> {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingMovies(false);
      })
  }

  function handleGetSavedMovies() {
    setIsLoadingMovies(true);
    getSavedMovies()
      .then((saved) => {
        setSavedMovies(saved);
        console.log(saved);
      })
      .catch((err)=> {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingMovies(false);
      })
  }

  function handleFollowMovie(movie) {
    addMovie(movie)
      .then((newItem) => {
        if (newItem) {
          setSavedMovies((saved) => [...saved, newItem]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleUnfollowMovie(id) {
    deleteMovie(id)
      .then(() => {
        setSavedMovies((savedMovies) => {
          return savedMovies.filter((m) => m._id !== id);
        });
      })
      .catch((err) => console.log(err));
  }
  
  function handleUpdateUser(name, email) {
    // обрабочик <EditProfilePopup.. onUpdateUser=... />   (Новые данные поднимаются из дочернего popupwithForm, где происходит сабмит)
    // setIsFetching(true);
    setInfoUser(name, email)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err))
      .finally(()=> {
        //setIsFetching(false);
      });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Switch>
            <Route exact path={routes.LANDING}>
              <Header auth={isLoggedIn} promo={true} onModalButtonClick={handleModalButtonClick}/>
              <Promo />
              <AboutProject />
              <Techs />
              <Student />
              <Portfolio />
              <Footer />
            </Route>
            <Route path={routes.MOVIES}>
              <Header auth={isLoggedIn} promo={false} onModalButtonClick={handleModalButtonClick}/>
              <ProtectedRoute 
                isLoggedIn={isLoggedIn}
                path={routes.MOVIES}
                component={Movies}
                cards={movies}
                isLoadingMovies={isLoadingMovies}
                handleSaveFilm={handleFollowMovie}
              />
              <Footer />
            </Route>
            <Route path={routes.SAVED_MOVIES}>
              <Header auth={isLoggedIn} promo={false} onModalButtonClick={handleModalButtonClick}/>
              <ProtectedRoute 
                isLoggedIn={isLoggedIn}
                path={routes.SAVED_MOVIES}
                component={SavedMovies}
                cards={savedMovies}
                handleUnSaveFilm={handleUnfollowMovie}
              />
              <Footer />
            </Route>
            <Route path={routes.PROFILE}>
              <Header auth={isLoggedIn} promo={false} onModalButtonClick={handleModalButtonClick}/>
              <ProtectedRoute 
                isLoggedIn={isLoggedIn}
                path={routes.PROFILE}
                component={Profile}
                handleUpdateUser={handleUpdateUser}
                handleLogout={handleSignOut}

              />
            </Route>
            <Route path={routes.SIGN_IN}>
              <Login handleLogin={handleLogin} />
            </Route>
            <Route path={routes.SIGN_UP}>
              <Register handleRegister={handleRegister} />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
          <PopupMenu isOpen={isPopupMenuOpen} onClose={closePopupMenu} />
        </div>
      </CurrentUserContext.Provider>
    </div>
    
  );
}

export default App;
