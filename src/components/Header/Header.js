import React from "react";
import logo from '../../images/header-logo.svg';
import { Link, useRouteMatch, useLocation } from "react-router-dom";

import routes from "../../config/routes";

import './Header.css';

import Account from "../Account/Account";

function Header({auth, promo, onModalButtonClick}) {
    const { pathname } = useLocation();
    return (
    <header className={promo? "header" : "header header_dark"}>
        <div className="section-content header__content">
            <a className="header__logo" href="#">
                <img src={logo} className="logo" alt="Путешествия по России" />
            </a>
            <nav className="header__nav">
                {auth && (
                    <ul className="header__menu header__menu_private">
                        <li className="header__menu-item">
                            <Link to={routes.MOVIES} className="header__link header__link_private">Фильмы</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to={routes.SAVED_MOVIES} className="header__link header__link_private">Сохраненные фильмы</Link>
                        </li>
                    </ul>
                )}
                <ul className="header__menu">
                {!auth ? (
                    <>
                    <li className="header__menu-item"><Link to={routes.SIGN_UP} className="header__link">Регистрация</Link></li>
                    <li className="header__menu-item"><Link to={routes.SIGN_IN} className="header__link header__link_enter">Войти</Link></li>
                    </>
                )   
                :   ( 
                    <li className="header__menu-item header__link_private"><Account accountPath="/profile" /></li>
                )}
                </ul>
            </nav>
            {auth && (
            <button className="header__modal-button" onClick={onModalButtonClick}></button>
            )}
        </div>
    </header>
    );
};

export default Header;