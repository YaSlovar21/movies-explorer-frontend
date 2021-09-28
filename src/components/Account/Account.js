import React from "react";
import { Link } from "react-router-dom";

import './Account.css';

function Account({ accountPath }) {
    return (
        <li class="header__menu-item">
            <Link to={accountPath} class="header__link auth">Аккаунт</Link>
        </li>
    );
};

export default Account;