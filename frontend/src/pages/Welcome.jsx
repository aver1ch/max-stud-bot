import "../App.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container colored">
        <img src="/logo.svg" alt="Logo" />
        <div className="text-wrapper">
          <h1 className="welcome-desc-title">Альма поможет:</h1>
          <p className="welcome-desc">Заплатить за общежитие</p>
          <p className="welcome-desc">Следить за расписанием</p>
          <p className="welcome-desc">Вовремя получать уведомления</p>
          <p className="welcome-desc">от администрации</p>
          <p className="welcome-desc">Узнавать о мероприятиях</p>
          <p className="welcome-desc">Подать заявку на ремонт мебели</p>
          <p className="welcome-desc"> Записаться на кружки</p>
          <button className="welcome-btn-enter" onClick={() => navigate("/selectvar")}>Добро пожаловать</button>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
