import React from "react";

import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
        <div className="section-content">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link link-beauty" href="#" target="_blank">Статичный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link link-beauty" href="#" target="_blank">Адаптивный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link link-beauty" href="#" target="_blank">Одностраничное приложение</a>
                </li>
            </ul>
        </div>
        </section>
    );
};

export default Portfolio;