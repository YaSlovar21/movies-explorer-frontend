import React from "react";

import studentPhoto from '../../images/student.png'

import './Student.css';

import SectionTitle from "../SectionTitle/SectionTitle";

function Student() {
    return (
        <section className="student">
        <div className="section-content">
            <h2 className="section-title">Студент</h2>
            <div className="student__content">
                <div className="student__text">
                    <h3 className="student__name">Виталий</h3>
                    <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="student__pitch">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="student__links">
                        <li>
                            <a className="student__link link-beauty" href="#">Facebook</a>
                        </li>
                        <li>
                            <a className="student__link link-beauty" href="#">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="student__photo" src={studentPhoto} alt="Веб-разработка" />
            </div>
        </div>
    </section>
    );
};

export default Student;