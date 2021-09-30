import React from "react";
import { Link, useHistory } from "react-router-dom";

import './PageNotFound.css';

function PageNotFound(props) {
    const history = useHistory();
    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__description">Страница не найдена</p>
            <button className="error__link" onClick={() => history.goBack()}>Назад</button>
        </div>
    );
};

export default PageNotFound;
