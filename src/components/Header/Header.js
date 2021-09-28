import React from "react";
import logo from '../../images/header-logo.svg';
import { Link, useRouteMatch, useLocation } from "react-router-dom";

import './Header.css';

import Account from "../Account/Account";

function Header({auth}) {
    auth = true;
    const { pathname } = useLocation();
    return (
    <header class="header">
        <div class="section-content header__content">
            <a class="header__logo" href="#">
                <img src={logo} class="logo" alt="Путешествия по России" />
            </a>
            <nav class="header__nav">
                {auth && (
                    <ul class="header__menu header__menu_private">
                        <li class="header__menu-item">
                            <a class="header__link header__link_private" href="#">Фильмы</a>
                        </li>
                        <li class="header__menu-item">
                            <a class="header__link header__link_private" href="#">Сохраненные фильмы</a>
                        </li>
                    </ul>
                )}
                <ul class="header__menu">
                {!auth ? (
                    <>
                    <li class="header__menu-item"><a class="header__link" href="#">Регистрация</a></li>
                    <li class="header__menu-item"><a class="header__link header__link_enter" href="#">Войти</a></li>
                    </>
                )   
                :   ( 
                    <Account accountPath="/profile" />
                )}
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;