import React, { useState } from "react";
import { Link } from "react-router-dom";

import routes from "../../config/routes";

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
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__heading">Регистрация</h2>
      <input
        className="form__input"
        onChange={handleEmailChange}
        type="email"
        placeholder="E-mail"
        required
      />
      <input 
        className="form__input"
        onChange={handlePassChange}
        type="password"
        placeholder="Password"
        required
      />
      <input 
        className="form__input"
        onChange={handlePassChange}
        type="password"
        placeholder="Password 2"
        required
      />
      <button 
        type="submit" 
        className="form__submit"
      >
        Зарегистрироваться    
      </button>
      <p className="form__p">Уже зарегистрированы? <Link className="form__link" to={routes.SIGN_IN}>Войти</Link></p>
    </form>
  );
};

export default Register;