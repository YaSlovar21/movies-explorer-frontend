import React from "react";

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="section-content">
                <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__content">
                    <p className="footer__column-copyright">&copy; 2021</p>
                    <nav>
                        <ul className="footer__column-links">
                            <li className="footer__list-item"><a href="https://yandex.ru/maps" target="_blank"  className="footer__link link-beauty">Яндекс.Практикум</a></li>
                            <li className="footer__list-item"><a href="https://yandex.ru/pogoda" target="_blank"  className="footer__link link-beauty">Github</a></li>
                            <li className="footer__list-item"><a href="https://rasp.yandex.ru" target="_blank"  className="footer__link link-beauty">Facebook</a></li>
                        </ul>
                    </nav> 
                </div>
            </div>   
        </footer>
    );
}

export default Footer;