import React from "react";

import './Cards.css';

import Film from "../Film/Film";

function Cards({ cards }) {
    return (
        <section class="cards section-content section-content_films">
            <ul class="films">
                {cards.map((film) => (
                    <Film image={film.image} name={film.nameRU} />
                ))}
            </ul>
            <button class="cards__more-button link-beauty">Показать еще</button>
        </section>
    );
};

export default Cards;