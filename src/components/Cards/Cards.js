import React from "react";

import './Cards.css';

import Film from "../Film/Film";

function Cards({ cards , page, handleSaveFilm, handleUnSaveFilm }) {
    return (
        <section class="cards section-content section-content_films">
            <ul class="films">
                {cards.map((film) => (
                    <Film film={film} page={page} handleSaveFilm={handleSaveFilm} handleUnSaveFilm={handleUnSaveFilm} />
                ))}
            </ul>
            <button class="cards__more-button link-beauty">Показать еще</button>
        </section>
    );
};

export default Cards;