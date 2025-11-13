import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function Welcome() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container colored">
        <img src="/footerlogo.svg" alt="Logo" />
        <div className="text-wrapper">
          <h1 className="welcome-desc-title">Альма поможет:</h1>
          <p className="welcome-desc">Заплатить за общежитие</p>
          <p className="welcome-desc">Следить за расписанием</p>
          <p className="welcome-desc">
            Вовремя получать уведомления от администрации
          </p>
          <p className="welcome-desc">Узнавать о мероприятиях</p>
          <p className="welcome-desc">Подать заявку на ремонт мебели</p>
          <p className="welcome-desc">Записаться на кружки</p>
          <p className="welcome-desc-last">а также многое другое!</p>
          <Button
            text="Добро пожаловать"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </main>
  );
}

export default Welcome;
