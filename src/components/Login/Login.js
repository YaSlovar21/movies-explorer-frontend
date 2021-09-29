import React from "react";

import './Login.css';

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
          <h2 className="form__heading">Вход</h2>
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