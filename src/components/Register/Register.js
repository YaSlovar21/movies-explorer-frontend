import React, { useState } from "react";
import { Link } from "react-router-dom";

import routes from "../../config/routes";
import logo from '../../images/header-logo.svg';


import Form from "../Form/Form";

function Register(props) {
  //props.handleRegister - обработчик с APP
  //управляемые поля
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }
  function handlePassChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegister(password, email);
  }

  return (
    <Form>
      <Link className="form__logo" to={routes.LANDING}><img src={logo} /></Link>
      <h2 className="form__heading">Добро пожаловать!</h2>
      <label className="form__label">Имя</label>
      <input
        className="form__input"
        onChange={handleEmailChange}
        type="text"
        placeholder="Как Вас зовут?"
        required
      />
      <label className="form__label">E-mail</label>
      <input 
        className="form__input"
        onChange={handlePassChange}
        type="e-mail"
        placeholder="Введите адрес почты"
        required
      />
      <label className="form__label">Пароль</label>
      <input 
        className="form__input form__input_password"
        onChange={handlePassChange}
        type="password"
        placeholder="Введите пароль"
        required
      />
      <button 
        type="submit" 
        className="form__submit"
      >
        Зарегистрироваться    
      </button>
      <p className="form__p">Уже зарегистрированы? <Link className="form__link" to={routes.SIGN_IN}>Войти</Link></p>
    </Form>
  );
};

export default Register;