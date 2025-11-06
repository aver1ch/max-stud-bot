import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-wrap">
      <h1 className="login-title">Вход</h1>

      <input type="text" placeholder="Логин" className="login-input" />

      <input type="password" placeholder="Пароль" className="login-input" />

      <button className="login-btn">Войти</button>
      <button className="login-btn" onClick={() => navigate("/")}>
        Назад
      </button>
    </div>
  );
}

export default Login;
