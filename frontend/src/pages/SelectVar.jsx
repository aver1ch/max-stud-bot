import { useNavigate } from "react-router-dom";
import "../App.css";

function SelectVar() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        {/* <h1 className="welcome-title">Добро пожаловать</h1> */}
        <button className="welcome-btn" onClick={() => navigate("/login")}>
          Войти как студент
        </button>
        <button className="welcome-btn">Войти как сотрудник</button>
        <button className="welcome-btn" onClick={() => navigate("/register")}>
          Зарегистрироваться
        </button>
      </div>
    </main>
  );
}

export default SelectVar;
