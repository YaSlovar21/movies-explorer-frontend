import React from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';

import CARDS from './constants';

function SavedMovies() {
    return (
        <>
            <SearchForm />
            <Cards cards={CARDS} page='saved' />
        </>
    );
}

export default SavedMovies;