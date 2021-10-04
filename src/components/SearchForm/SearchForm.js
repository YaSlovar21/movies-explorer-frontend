import React from "react";

import './SearchForm.css';

function SearchForm() {
    function handleClick(evt){
        evt.target.classList.toggle('form-search__filterbutton_active');
    }

    return (
        <section className="search section-content">
                <form className="form-search">
                    <div className="form-search__line">
                        <input className="form-search__input" placeholder="Фильм" />
                        <button className="form-search__button">Поиск</button>
                    </div>
                    <div className="form-search__filter">
                        <input className="form-search__checkbox" id="filter" type="checkbox" required />
                        <button className="form-search__filterbutton" type="button" onClick={handleClick}>
                            <div className="form-search__tumblr"></div>
                        </button>
                        <label className="form-search__label" for="filter">Короткометражки</label>
                    </div>
                </form>
        </section>
    );
}

export default SearchForm;