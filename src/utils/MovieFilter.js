function MovieFilter(movies, isShortChecked) {
    const result = movies.filter((movie)=> {
        if (isShortChecked && movie.duration <= 40) {
            return true;
        }
        return false;
    });
    return result;
}

export default MovieFilter;