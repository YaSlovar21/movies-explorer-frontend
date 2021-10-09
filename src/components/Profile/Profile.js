import React, { useContext } from "react";

import './Profile.css';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile() {
    
    const currentUser = useContext(CurrentUserContext);

    return (
        <form className="profile__form">
            <h2 className="profile__heading">Привет, {currentUser.name}</h2>
            <div className="profile__input-item">
                <label className="profile__label" for="name">Имя</label>
                <input 
                    className="profile__input" 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={currentUser.name} 
                />
            </div>
            <div className="profile__input-item">
                <label className="profile__label" for="email">Email</label>
                <input 
                    className="profile__input" 
                    type="email" 
                    name="email" 
                    id="email" 

                    value={currentUser.email} />
            </div>
            <button className="profile__edit-button">Редактировать</button>
            <button className="profile__logout">Выйти из аккаунта</button>
        </form>
    );
};

export default Profile;