import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-wrap">
      <h1 className="login-title">Вход</h1>

      <input
        type="text"
        placeholder="Логин"
        className="login-input"
      />

      <input
        type="password"
        placeholder="Пароль"
        className="login-input"
      />

      <button className="login-btn">Войти</button>
    </div>
  );
}

export default Login;