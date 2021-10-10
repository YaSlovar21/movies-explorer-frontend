import React from "react";
import { Link } from "react-router-dom";

import './Login.css';

import logo from '../../images/header-logo.svg';
import routes from "../../config/routes";

import useFormWithValidation from "../../utils/useFormWithValidation";

function Login({ handleLogin }) {

  const formWithValidation = useFormWithValidation();
  const { handleChange, errors, isValid } = formWithValidation;

  const { email, password } = formWithValidation.values;
  function handleSubmit(evt) {
        evt.preventDefault();
        handleLogin(email, password);
        formWithValidation.resetForm();
        
  }

    return (
        <form className="form" onSubmit={handleSubmit}>
          <Link className="form__logo" to={routes.LANDING}><img src={logo} /></Link>
          <h2 className="form__heading">Рады видеть!</h2>
          
          <input
            name="email"
            className="form__input"
            onChange={handleChange}
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Ваш e-mail"
            required
          />
          <span className="form__span-error">{errors.email}</span>
          <input 
            name="password"
            className="form__input"
            onChange={handleChange}
            type="password"
            placeholder="Введите пароль"
            required
          />
          <span className="form__span-error">{errors.password}</span>
          <button 
            type="submit" 
            disabled={!isValid}
            className={`form__submit ${!isValid ? 'form__submit_disabled' : ''}`}
          >
            Войти    
          </button>
          
        </form>
      );
};

export default Login;