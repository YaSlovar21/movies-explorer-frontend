import React from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";

function SavedMovies({cards, isLoadingMovies, handleUnSaveFilm}) {
    return (
        <>
            <SearchForm />
            {isLoadingMovies ? <Preloader /> : <Cards cards={cards} page='saved' handleUnSaveFilm={handleUnSaveFilm} />}
        </>
    );
}

export default SavedMovies;