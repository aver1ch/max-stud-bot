import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <div className="container colored">
        <div className="input-wrapper">
          <Form
            label="Логин"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите логин"
          />
          <Form
            label="Пароль"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
          <Button text="Войти" />
        </div>
      </div>
    </main>
  );
}

export default Login;
