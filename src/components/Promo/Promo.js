import React from "react";

import './Promo.css';

function Promo(){
    return (
        <section className="hero">
            <div className="section-content hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">Учебный проект студента факультета Веб-разработки</h1>
                    <p className="hero__subtitle">Листайте ниже, чтобы узнать подробнее про этот проект и его создателя</p>
                    <a className="hero__morebutton link-beauty" href="#">Узнать больше</a>
                </div>
                <img className="hero__image" src="images/lead-polka-all.jpg" alt="Веб-разработка" />
            </div>
        </section>
    );
};

export default Promo;