import React from "react";

import './AboutProject.css';

import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
    return (
        <section className="about">
            <div className="section-content">
                <SectionTitle title="О проекте" />
                <ul className="about__details">
                    <li className="about__details-item">
                        <h3 className="about__heading">Дипломный проект включал 5 этапов</h3>
                        <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности, финальные доработки.</p>
                    </li>
                    <li className="about__details-item">
                        <h3 className="about__heading">На выполнение диплома ушло 5 недель</h3>
                        <p className="about__description">У каждого этапа был мягкий и жесткий дэдлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div className="timeline">
                    <p className="timeline__item timeline__item_green">1 неделя</p>
                    <p className="timeline__item timeline__item_darked">4 недели</p>
                    <p className="timeline__item">Back-end</p>
                    <p className="timeline__item">Front-end</p>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;