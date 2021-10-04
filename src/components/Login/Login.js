import React from "react";
import { Link } from "react-router-dom";

import './Login.css';

import logo from '../../images/header-logo.svg';
import routes from "../../config/routes";

function Login(props) {
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
        // props.handleLogin(email, password);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
          <Link className="form__logo" to={routes.LANDING}><img src={logo} /></Link>
          <h2 className="form__heading">Рады видеть!</h2>
          
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
          <button 
            type="submit" 
            className="form__submit"
          >
            Войти    
          </button>
          
        </form>
      );
};

export default Login;