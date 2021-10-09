function moviesFormat(movies) {
    return movies.map((item) => {
        // console.log(item)
        const movie = {
            "country": item.country,
            "director": item.director,
            "duration": item.duration,
            "year": item.year,
            "description": item.description,
            "image": `https://api.nomoreparties.co${item.image.url}`,
            "trailer": item.trailerLink,
            "thumbnail": `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
            "movieId": item.id,
            "nameRU": item.nameRU,
            "nameEN": item.nameEN
        }
        return movie;
    })
}

export default moviesFormat;