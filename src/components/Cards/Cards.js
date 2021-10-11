import React, { useEffect, useState } from "react";

import './Cards.css';

import Film from "../Film/Film";
import Preloader from "../Preloader/Preloader";

import useWindowResize from '../../utils/useWindowSize';

function Cards({ cards , page, handleSaveFilm, handleUnSaveFilm, checkIsSavedFilm, handleInitCards, isLoadingCards }) {

    const windowWidth = useWindowResize();
    const [initCardsCount, setInitCardsCount] = useState(12);
    const [moreCardsCount, setMoreCardsCount] = useState(3);

    useEffect(()=>{
        if (windowWidth>=1280) {
            setInitCardsCount(12);
            setMoreCardsCount(3);
        }
        if (windowWidth<1280 && windowWidth>=622) {
            setInitCardsCount(8);
            setMoreCardsCount(2);
        }
        if (windowWidth<=622) {
            setInitCardsCount(5);
            setMoreCardsCount(2);
        }
    },[windowWidth])

    function detectType(film) {
        if (page==='mainsearch') {
            if (checkIsSavedFilm(film)){
                return 'saved';
            } else return 'mainsearch'
        } else return 'saved'
    }

    if (isLoadingCards) {
        return (<Preloader />);
    } else {
        if ((!cards || cards.length===0)) {
            return (<div className="cards__notfound">Ничего не найдено...</div>);
        }
    }
    const countToRender = initCardsCount;
    return (
        <section class="cards section-content section-content_films">
            <ul class="films">
                {cards.slice(0, countToRender).map((film) => (
                    <Film key={film.id} film={film} detectType={detectType} handleSaveFilm={handleSaveFilm} handleUnSaveFilm={handleUnSaveFilm} checkIsSavedFilm={checkIsSavedFilm} />
                ))}
            </ul>
            {cards.length > countToRender 
            ?   <button class="cards__more-button link-beauty" onClick={()=> {setInitCardsCount((prev) => prev+ moreCardsCount)}}>Показать еще</button>
            : ''}
        </section>
    );
};

export default Cards;