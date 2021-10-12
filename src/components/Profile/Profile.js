import React, { useContext } from "react";

import './Profile.css';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation  from "../../utils/useFormWithValidation";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Profile({ handleProfileUpdate, handleLogout, handleModalButtonClick, isLoggedIn }) {
    
    const currentUser = useContext(CurrentUserContext);
    const formWithValidation = useFormWithValidation();
    const { handleChange, errors, isValid } = formWithValidation;

    const { name = currentUser.name, email = currentUser.email } = formWithValidation.values;
    
    const isNotChanged = (name===currentUser.name && email===currentUser.email);

    function handleSubmit(evt) {
        evt.preventDefault();
        handleProfileUpdate(name, email);
        formWithValidation.resetForm();
    }
    return (
        <>
        <Header auth={isLoggedIn} promo={false} onModalButtonClick={handleModalButtonClick}/>
        <form className="profile__form" onSubmit={handleSubmit}>
            <h2 className="profile__heading">Привет, {currentUser.name}!</h2>
            <div className="profile__input-item">
                <label className="profile__label" for="name">Имя</label>
                <input 
                    className="profile__input" 
                    type="text" 
                    name="name" 
                    onChange={handleChange}
                    value={name}
                    minLength="2"
                    maxLength="30"
                />
            </div>
            <span className="profile__span-error">{errors.name}</span>
            <div className="profile__input-item">
                <label className="profile__label" for="email">Email</label>
                <input 
                    className="profile__input"
                    onChange={handleChange} 
                    type="email" 
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    value={email}
                    minLength="2"
                    maxLength="30"
                />
            </div>
            <span className="profile__span-error">{errors.email}</span>

            <button type="submit" className={`profile__edit-button ${(!isValid || isNotChanged) ? 'profile__edit-button_disabled' : ''}`} disabled={!isValid || isNotChanged}>Редактировать</button>
            <button type="button" className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</button>
        </form>
        <Footer />
        </>
    );
};

export default Profile;