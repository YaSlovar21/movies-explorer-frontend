import React from 'react';

import './Film.css';

function Film(props) {
    return (
        <li className="film">
            <div className="film__header">
                <h2 className="film__name">{props.name}</h2>
                <p className="film__duration">27 минут</p>
            </div>
            <img className="film__poster" src={props.image} />
            <div className="film__footer">
                <button className="film__save-button link-beauty"></button>
            </div>
        </li>
    );
}

export default Film;