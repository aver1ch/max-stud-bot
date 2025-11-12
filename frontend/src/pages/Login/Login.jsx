import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [code, setCode] = useState("");

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

          <Button text="Войти" onClick={() => navigate("/mainpage")} />
        </div>
      </div>
    </main>
  );
}

export default Login;
