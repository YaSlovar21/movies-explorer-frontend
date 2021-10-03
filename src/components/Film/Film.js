import React from 'react';

import './Film.css';

function Film(props) {

    function handleSaveClick(evt) {
        evt.target.classList.toggle('film__save-button_active');
    }

    const saveButtonClassName = `film__save-button ${props.page==='saved' ? 'film__save-button_saved' : ''}`;

    return (
        <li className="film">
            <div className="film__header">
                <h2 className="film__name">{props.name}</h2>
                <p className="film__duration">27 минут</p>
            </div>
            <img className="film__poster" src={props.image} alt={props.name} />
            <div className="film__footer">
                <button className={saveButtonClassName} onClick={handleSaveClick}></button>
            </div>
        </li>
    );
}

export default Film;