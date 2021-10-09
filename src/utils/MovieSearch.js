function MovieSearch(movies, req, isShortChecked) {
    const result = movies.filter((movie)=> {
        if (isShortChecked && movie.duration > 60) {
            return false;
        }
        if (movie.nameRU.toLowerCase().match(req.toLowerCase())) {
            return true;
        }
        if (movie.description.toLowerCase().match(req.toLowerCase())) {
            return true;
        }
        if (movie.nameEN.toLowerCase().match(req.toLowerCase())) {
            return true;
        }
        return false;
    });
    return result;
}

export default MovieSearch;