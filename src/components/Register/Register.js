import React, { useState } from "react";
import { Link } from "react-router-dom";

import routes from "../../config/routes";
import logo from '../../images/header-logo.svg';


import Form from "../Form/Form";

import useFormWithValidation  from "../../utils/useFormWithValidation";


function Register({handleRegister}) {

  const formWithValidation = useFormWithValidation();
  const { handleChange, errors, isValid } = formWithValidation;

  const { name, email, password } = formWithValidation.values;
  function handleSubmit(evt) {
        evt.preventDefault();
        console.log(JSON.stringify({name, password, email}));
        handleRegister(name, password, email);
        formWithValidation.resetForm();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Link className="form__logo" to={routes.LANDING}><img src={logo} /></Link>
      <h2 className="form__heading">Добро пожаловать!</h2>
      <label className="form__label">Имя</label>
      <input
        name="name"
        className="form__input"
        onChange={handleChange}
        type="text"
        placeholder="Как Вас зовут?"
        minLength="2"
        required
      />
      <span className="form__span-error">{errors.name}</span>
      <label className="form__label">E-mail</label>
      <input 
        name="email"
        className="form__input"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        onChange={handleChange}
        type="email"
        placeholder="Введите адрес почты"
        required
      />
      <span className="form__span-error">{errors.email}</span>
      <label className="form__label">Пароль</label>
      <input 
        name="password"
        className="form__input form__input_password"
        onChange={handleChange}
        type="password"
        placeholder="Введите пароль"
        minLength="8"
        required
      />
      <span className="form__span-error">{errors.password}</span>
      <button 
        type="submit"
        disabled={!isValid}
        className={`form__submit ${!isValid ? 'form__submit_disabled' : ''}`}
      >
        Зарегистрироваться    
      </button>
      <p className="form__p">Уже зарегистрированы? <Link className="form__link" to={routes.SIGN_IN}>Войти</Link></p>
    </Form>
  );
};

export default Register;