import React from "react";

import './Profile.css';

function Profile() {
    return (
        <form class="profile__form">
            <h2 class="profile__heading">Привет, Виталий!</h2>
            <div class="profile__input-item">
                <label class="profile__label" for="name">Имя</label>
                <input class="profile__input" type="text" name="name" id="name" readonly="" value="Виталий" />
            </div>
            <div class="profile__input-item">
                <label class="profile__label" for="email">Email</label>
                <input class="profile__input" type="email" name="email" id="email" readonly="" value="pochta@yandex.ru" />
            </div>
            <button class="profile__edit-button">Редактировать</button>
            <button class="profile__logout">Выйти из аккаунта</button>
        </form>
    );
};

export default Profile;