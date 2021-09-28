import React from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';

import CARDS from './constants';

function Movies() {
    return (
        <>
            <SearchForm />
            <Cards cards={CARDS} />
        </>
    );
}

export default Movies;