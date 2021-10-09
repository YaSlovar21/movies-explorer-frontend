import React from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";

import MovieSearch from "../../utils/MovieSearch";

function SavedMovies({cards, isLoadingMovies, handleUnSaveFilm}) {

    const [searched, setSearched] = React.useState([]);

    function onSearch(request, isShortChecked) {
        console.log(isShortChecked);
        setSearched(MovieSearch(cards, request, isShortChecked));
    }

    return (
        <>
            <SearchForm handleSearch={onSearch} />
            {isLoadingMovies 
                ? <Preloader /> 
                : <Cards cards={searched.length===0 ? cards : searched} page='saved' handleUnSaveFilm={handleUnSaveFilm} />
            }
        </>
    );
}

export default SavedMovies;