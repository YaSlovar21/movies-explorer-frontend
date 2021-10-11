import React from "react";

import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";
import SearchForm from '../SearchForm/SearchForm';

import MovieSearch from "../../utils/MovieSearch";
import MovieFilter from "../../utils/MovieFilter";
import moviesFormat from '../../utils/moviesFormat';

import { getMovies } from '../../utils/MoviesApi';
//import CARDS from './constants';

function Movies({handleGetMovies, isLoadingMovies, handleSaveFilm, checkIsSavedFilm, handleUnSaveFilm}) {

    const [searched, setSearched] = React.useState([]);

    const [request, setRequest] = React.useState(''); // кэшируем реквест из сабмита формы

    const [isLoading, setIsLoading] = React.useState(false);
    const [isShortChecked, setIsShortChecked] = React.useState(false);

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
            setSearched(MovieSearch(cards, req, 0)); 
        }
        setRequest(req);
    }
    
    function toggleShort() {
        setIsShortChecked((prev) => !prev);
    }

    const result = isShortChecked ? searched.filter((item) => item.duration < 41 ) : searched;

    return (
        <>
            <SearchForm handleSearch={onSearch} onToggle={toggleShort} />
            <Cards 
                cards={result} 
                handleSaveFilm={handleSaveFilm} 
                checkIsSavedFilm={checkIsSavedFilm}
                handleUnSaveFilm={handleUnSaveFilm}
                page='mainsearch'
                isLoadingCards={isLoading}
            />
            
        </>
    ); 
}

export default Movies;