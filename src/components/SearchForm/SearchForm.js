import React, { useState } from "react";

import './SearchForm.css';

function SearchForm({ handleSearch, onToggle }) {
   
    const [request, setRequest] = React.useState('');
    const [isEmpty, setIsEmpty] = React.useState('');

    const [isShortChecked, setIsShortChecked] = useState(false);

    function handleClick(evt){
        evt.target.classList.toggle('form-search__filterbutton_active');
        setIsShortChecked(!isShortChecked);
        onToggle();
    }

    function handleSearchFocused(evt) {
        evt.target.closest('.form-search__line').classList.toggle('form-search__line_active');
    }

    function handleRequestChange(evt) {
        setRequest(evt.target.value);
     }

    function handleSubmit(evt) {
        evt.preventDefault();
        
        if (request === '') {
            setIsEmpty('Введите запрос для поиска фильмов...')
            handleSearch(request);
        } else {
            setIsEmpty('');
            console.log(request);
            handleSearch(request);
        }
    }

    return (
        <section className="search section-content">
                <form className="form-search" onSubmit={handleSubmit}>
                    <div className="form-search__line">
                        <input 
                            className="form-search__input" 
                            placeholder="Фильм" 
                            onFocus={handleSearchFocused} 
                            onBlur={handleSearchFocused}  
                            name="request"
                            value={request}
                            onChange={handleRequestChange}
                        />
                        <button className="form-search__button" type="submit">Поиск</button>
                    </div>
                    <span class="form-search__hint">{isEmpty}</span>
                    <div className="form-search__filter">
                        <input className="form-search__checkbox" id="filter" checked={isShortChecked} type="checkbox"/>
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