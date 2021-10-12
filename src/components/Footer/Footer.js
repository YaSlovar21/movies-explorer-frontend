import React from "react";

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="section-content">
                <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__content">
                    <p className="footer__column-copyright">&copy; 2021</p>
                        <ul className="footer__column-links">
                            <li className="footer__list-item"><a href="https://practicum.yandex.ru" target="_blank"  className="footer__link link-beauty">Яндекс.Практикум</a></li>
                            <li className="footer__list-item"><a href="https://github.com/yaslovar21" target="_blank"  className="footer__link link-beauty">Github</a></li>
                            <li className="footer__list-item"><a href="https://facebook.com/" target="_blank"  className="footer__link link-beauty">Facebook</a></li>
                        </ul>
                </div>
            </div>   
        </footer>
    );
}

export default Footer;