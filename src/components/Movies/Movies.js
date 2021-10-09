import React from "react";

import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";
import SearchForm from '../SearchForm/SearchForm';

//import CARDS from './constants';

function Movies({cards, isLoadingMovies, handleSaveFilm}) {
    return (
        <>
            <SearchForm />
            {isLoadingMovies ? <Preloader /> : <Cards cards={cards} handleSaveFilm={handleSaveFilm} />}
        </>
    ); 
}

export default Movies;