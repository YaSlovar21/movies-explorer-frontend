import React , {useCallback } from 'react';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
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
import Preloader from '../Preloader/Preloader';

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({}); //стейт с информацией о текущем пользователе
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const [isLoadingMovies, setIsLoadingMovies] = React.useState(false);
  const [movies, setMovies] = react.useState([]);
  const [savedMovies, setSavedMovies] = react.useState([]);

  const [isTokenCheking, setIsTokenCheking] = React.useState(true);


  function handleModalButtonClick() {
    setIsPopupMenuOpen(true);
  }

  function closePopupMenu() {
    setIsPopupMenuOpen(false);
  }

  function handleGetUserInfo() {
    if (!localStorage.getItem('currentUser')) {
      getInfoUser()
        .then((userData) => {
          setCurrentUser(userData);
          localStorage.setItem('currentUser',JSON.stringify(userData))
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    }
  }

  function handleRegister(name, password, email) {
    register(name, password, email)
      .then((data) => {
        // setIsSuccessRegistration(true);
        // setIsInfoTooltipOpen(true);
        //history.push(routes.SIGN_IN);
        console.log(data);
        handleLogin(email, password);
        //history.push(routes.MOVIES);
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
        console.log(err);
        //setIsLoggedIn(false);
      });
  }

  function handleSignOut() {
    logout()
      .then(() => {
        history.push(routes.SIGN_IN);
        setIsLoggedIn(false);
        setCurrentUser({});
        setMovies([]);
        setSavedMovies([]);
        localStorage.clear();
        history.push('/');
      })
      .catch(err => console.log(err));
  }

/*
  const handleTokenCheck = useCallback(()=> { 
    //setIsTokenCheking(true);
    checkToken()
    .then((res) => {
      console.log(res);
      setIsLoggedIn(true);
      //localStorage.setItem('isLoggedIn', true);
      // setUserEmail(res.email); //данным способом мы выводили адрес на экран
      // history.push(routes.MOVIES);
    })
    .catch((err) => {
      console.log('Ошибка проверки', err);
      setIsLoggedIn(false);
      //localStorage.setItem('isLoggedIn', false);
    }
    )
    .finally(()=> {
      //setIsTokenCheking(false);
      console.log(isLoggedIn)
    })
  }, [])
*/
  React.useEffect(() => {
    
    checkToken()
    .then((res) => {
      console.log(res);
      setIsLoggedIn(true);
      //history.push(routes.PROFILE);
      setIsTokenCheking(false);
    })
    .catch((err) => {
      console.log('Ошибка проверки', err);
    })
    .finally(()=> {
      setIsTokenCheking(false);
    })
  }, [])

  React.useEffect(() => {
    if (isLoggedIn) {
      if (!localStorage.getItem('currentUser')) {
        getInfoUser()
          .then((userData) => {
            setCurrentUser(userData);
            localStorage.setItem('currentUser',JSON.stringify(userData))
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
      }

      if (!localStorage.getItem('savedMovies')) {
        getSavedMovies()
        .then((saved) => {
            setSavedMovies(saved);
            localStorage.setItem("savedMovies", JSON.stringify(saved));
          console.log(saved);
        })
        .catch((err)=> {
          console.log(err);
        })
        } else {
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
      }
    }
    // handleGetMovies();
    //handleGetSavedMovies();
    //handleGetUserInfo();

  }, [isLoggedIn]);

  
 
  function handleGetMovies() {
    setIsLoadingMovies(true);
    getMovies()
      .then((movies) => {
        // setMovies(moviesFormat(movies));
        const moviesFormatted = moviesFormat(movies);
        localStorage.setItem("movies", JSON.stringify(moviesFormatted));
        console.log(moviesFormatted);
        return moviesFormatted;  
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
        if (!localStorage.getItem('savedMovies')) {
          setSavedMovies(saved);
          localStorage.setItem("savedMovies", JSON.stringify(saved));
        } else {
          setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
        }
        
        //localStorage.setItem("savedMovies", JSON.stringify(saved));
        console.log(saved);
      })
      .catch((err)=> {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingMovies(false);
      })
  }

  function checkIsSavedFilm(movie) {
    return savedMovies.some((savedFilm) => savedFilm.movieId === movie.movieId)
  }

  function getSavedVersionToDelete(movie) {
    return savedMovies.find((savedFilm) => savedFilm.movieId === movie.movieId)
  }

  function handleFollowMovie(movie) {
    console.log(movie);
    addMovie(movie)
      .then((newItem) => {
        if (newItem) {
          setSavedMovies((saved) => [...saved, newItem]);
        }
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, newItem]));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function handleUnfollowMovie(film) {
    const id = !film._id ? getSavedVersionToDelete(film)._id : film._id;
    console.log(getSavedVersionToDelete(film));
    deleteMovie(id)
      .then(() => {
        setSavedMovies((savedMovies) => {
          return savedMovies.filter((m) => m._id !== id);
        })
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies.filter((m) => m._id !== id)));
      })
      .catch((err) => console.log(err));
  }
  
  function handleUpdateUser(name, email) {
    setInfoUser(name, email)
      .then((userData) => {
        setCurrentUser(userData);
        setIsSuccess(true);
        setIsInfoPopupOpen(true);
        localStorage.setItem('currentUser', JSON.stringify({"name": name, "email": email}));
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
        setIsInfoPopupOpen(true);
      })
      .finally(()=> {
        
      });
  }

  function closeInfoPopup(){
    setIsInfoPopupOpen(false);
  }
  

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          
          {isTokenCheking ? <Preloader /> : <Switch>
            <Route exact path={routes.LANDING}>
              <Header auth={isLoggedIn} promo={true} onModalButtonClick={handleModalButtonClick}/>
              <Promo />
              <AboutProject />
              <Techs />
              <Student />
              <Portfolio />
              <Footer />
            </Route>
            
              <ProtectedRoute 
                isLoggedIn={isLoggedIn}
                path={routes.MOVIES}
                component={Movies}

                isLoadingMovies={isLoadingMovies}
                handleSaveFilm={handleFollowMovie}

                checkIsSavedFilm={checkIsSavedFilm}
                handleUnSaveFilm={handleUnfollowMovie}

                handleModalButtonClick={handleModalButtonClick}
                handleGetMovies={handleGetMovies}
              />

            <ProtectedRoute 
                isLoggedIn={isLoggedIn}
                path={routes.SAVED_MOVIES}
                component={SavedMovies}
                cards={savedMovies}
                handleUnSaveFilm={handleUnfollowMovie}
                handleModalButtonClick={handleModalButtonClick}
              />
              
              <ProtectedRoute 
                isLoggedIn={isLoggedIn}
                path={routes.PROFILE}
                component={Profile}
                handleProfileUpdate={handleUpdateUser}
                handleLogout={handleSignOut}
                handleModalButtonClick={handleModalButtonClick}
              />

            <Route path={routes.SIGN_IN}>
              <Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path={routes.SIGN_UP}>
              <Register handleRegister={handleRegister} />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
          } 
          <PopupMenu isOpen={isPopupMenuOpen} onClose={closePopupMenu} />
          <InfoTooltip
            success={isSuccess}
            isOpen={isInfoPopupOpen}
            onClose={closeInfoPopup}
            successText="Успешно!"
            errorText="Что-то пошло не так! Попробуйте ещё раз."
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
    
  )
}


export default App;
