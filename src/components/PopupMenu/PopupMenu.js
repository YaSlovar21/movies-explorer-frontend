import React from "react";

import './PopupMenu.css';

import routes from "../../config/routes";
import { Link } from "react-router-dom";

function PopupMenu(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__button-close" onClick={props.onClose}></button>
                <nav className="popup__menu">
                    <Link to={routes.LANDING} className="popup__navlink" onClick={props.onClose}>Главная</Link>
                    <Link to={routes.MOVIES} className="popup__navlink" onClick={props.onClose}>Фильмы</Link>
                    <Link to={routes.SAVED_MOVIES} className="popup__navlink" onClick={props.onClose}>Сохраненные фильмы</Link>
                </nav>
                <Link to={routes.PROFILE} className="auth" onClick={props.onClose}>Аккаунт</Link>
            </div>
        </div>
    );
};

export default PopupMenu;