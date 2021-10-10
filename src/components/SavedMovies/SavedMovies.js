import React from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";

import MovieSearch from "../../utils/MovieSearch";

function SavedMovies({cards, isLoadingMovies, handleUnSaveFilm}) {

    const [searched, setSearched] = React.useState(cards);

    function onSearch(request, isShortChecked) {
        console.log(isShortChecked);
        setSearched(MovieSearch(cards, request, isShortChecked));
    }

    function setInitArray() {
        setSearched(cards);
    }

    return (
        <>
            <SearchForm handleSearch={onSearch} />
            {isLoadingMovies 
                ? <Preloader /> 
                : <Cards cards={searched} page='saved' handleUnSaveFilm={handleUnSaveFilm} />
            }
        </>
    );
}

export default SavedMovies;