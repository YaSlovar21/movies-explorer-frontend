import React from 'react';

import './Film.css';

import { durationFormat } from '../../utils/durationFormat'

function Film(props) {

    function handleSaveClick(evt) {
        evt.target.classList.toggle('film__save-button_active');
        props.handleSaveFilm(props.film);
    }
    function handleUnSaveClick(evt) {
        props.handleUnSaveFilm(props.film._id);
    }
    const saveButtonClassName = `film__save-button ${props.page==='saved' ? 'film__save-button_saved' : ''}`;
    const duration = durationFormat(props.film.duration);
    return (
        <li className="film">
            <div className="film__header">
                <h2 className="film__name">{props.film.nameRU}</h2>
                <p className="film__duration">{duration}</p>
            </div>
            <img className="film__poster" src={props.film.image} alt={props.film.name} />
            <div className="film__footer">
                {props.page==='saved' 
                    ? <button className={saveButtonClassName} onClick={handleUnSaveClick}></button>
                    : <button className={saveButtonClassName} onClick={handleSaveClick}></button>
                }
            </div>
        </li>
    );
}

export default Film;