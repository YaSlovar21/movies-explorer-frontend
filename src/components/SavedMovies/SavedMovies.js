import React from "react";

import Cards from "../Cards/Cards";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";

import MovieSearch from "../../utils/MovieSearch";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function SavedMovies({cards, isLoadingMovies, handleUnSaveFilm, handleModalButtonClick, isLoggedIn}) {
    
    React.useEffect(()=> {
        setSearched(cards);
    }, [cards]);

    const [searched, setSearched] = React.useState(cards);
    const [isShortChecked, setIsShortChecked] = React.useState(false);

    function toggleShort() {
        setIsShortChecked((prev) => !prev);
    }

    function onSearch(request) {
        setSearched(MovieSearch(cards, request, 0));
    }

    const result = isShortChecked ? searched.filter((item) => item.duration < 41 ) : searched;
    
    return (
        <>
            <Header auth={isLoggedIn} promo={false} onModalButtonClick={handleModalButtonClick}/>
            <SearchForm handleSearch={onSearch} onToggle={toggleShort}/>
            {isLoadingMovies 
                ? <Preloader /> 
                : <Cards cards={result} page='saved' handleUnSaveFilm={handleUnSaveFilm} />
            }
            <Footer />
        </>
    );
}

export default SavedMovies;