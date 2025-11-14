import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import "./Login.css";
import { loginRequest } from "../../api/auth.js";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [code, setCode] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  
    const data = {
      login: username,
      password: password,
      role: role,
      codePassword: role === "employee" ? code : null,
    };
  
    try {
      const user = await loginRequest(data);
  
      if (user) {
        console.log("Пользователь вошёл:", user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/mainpage");
      } else {
        alert("Неверный логин или пароль");
      }
    } catch (err) {
      console.error("Ошибка при логине:", err);
      alert("Произошла ошибка при подключении к серверу");
    }
  }

  return (
    <main>
      <div className="container colored">
        <form className="input-wrapper" onSubmit={handleSubmit}>
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
          <div className="radio-wrapper">
            <label className="radio-item">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />
              Я студент
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="role"
                value="employee"
                checked={role === "employee"}
                onChange={() => setRole("employee")}
              />
              Я сотрудник
            </label>
          </div>
          {role === "employee" && (
            <Form
              label="Код-пароль"
              id="code"
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Введите код-пароль"
            />
          )}
          <Button text="Войти" type="submit" />
        </form>
      </div>
    </main>
  );
}

export default Login;
