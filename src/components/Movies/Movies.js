import React from "react";

import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";
import SearchForm from '../SearchForm/SearchForm';

import MovieSearch from "../../utils/MovieSearch";
//import CARDS from './constants';

function Movies({cards, isLoadingMovies, handleSaveFilm, checkIsSavedFilm, handleUnSaveFilm}) {

    React.useEffect(()=> {
        setSearched(cards);
    },[cards])
    const [searched, setSearched] = React.useState([]);
    
    function onSearch(request, isShortChecked) {
        console.log(isShortChecked);
        setSearched(MovieSearch(cards, request, isShortChecked));
    }

    return (
        <>
            <SearchForm handleSearch={onSearch} />
            <Cards 
                cards={searched} 
                handleSaveFilm={handleSaveFilm} 
                checkIsSavedFilm={checkIsSavedFilm}
                handleUnSaveFilm={handleUnSaveFilm}
                page='mainsearch'
                isLoadingCards={isLoadingMovies}
            />
            
        </>
    ); 
}

export default Movies;