import React, { useState } from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import MovieSearch from "../../utils/MovieSearch";
import moviesFormat from '../../utils/moviesFormat';

import { getMovies } from '../../utils/MoviesApi';

import {useLocalStorageList} from '../../utils/useLocalState'


function Movies({handleModalButtonClick, isLoggedIn, handleSaveFilm, checkIsSavedFilm, handleUnSaveFilm}) {
    
    const [isLoading, setIsLoading] = React.useState(false);
    
    const [request, setRequest] = React.useState(''); // кэшируем реквест из сабмита формы
    const [searched, setSearched] = React.useState([]);
    const [isShortChecked, setIsShortChecked] = React.useState();
    //const [count, setCount] = useState(initialState);
    const [result, setResult] = useState(null);


    function onSearch(req) {
        if (!localStorage.getItem('movies')) {
            setIsLoading(true);
            getMovies()
                .then((movies) => {
                    const moviesFormatted = moviesFormat(movies);
                    localStorage.setItem("movies", JSON.stringify(moviesFormatted));
                    return moviesFormatted;
                })
                .catch((err)=> {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                    const cards = JSON.parse(localStorage.getItem("movies"));  
                    setSearched(MovieSearch(cards, req, 0));
                })
        } else {
            const cards = JSON.parse(localStorage.getItem("movies")); 
            const searchedCards = MovieSearch(cards, req, 0);
            setSearched(searchedCards); 
        }
        setRequest(req);
    }
    
    function toggleShort() {
        setIsShortChecked((prev) => !prev);
    }

    React.useEffect(()=> {
        const cards = isShortChecked ? searched.filter((item) => item.duration < 41 ) : searched;
        setResult(cards);
    }, [searched, isShortChecked]);


    return (
        <>
            <Header auth={isLoggedIn} promo={false} onModalButtonClick={handleModalButtonClick}/>
            <SearchForm 
                handleSearch={onSearch} 
                onToggle={toggleShort} 
                // начальные значения
            />
            <Cards 
                cards={result} 
                handleSaveFilm={handleSaveFilm} 
                checkIsSavedFilm={checkIsSavedFilm}
                handleUnSaveFilm={handleUnSaveFilm}
                page='mainsearch'
                isLoadingCards={isLoading}
            />
            <Footer />
            
        </>
    ); 
}

export default Movies;