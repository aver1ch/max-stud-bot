import "./Account.css";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hnav">
        <HeaderNav
          iconSrc="./arrowback.svg"
          text="Профиль"
          backTo="/mainpage"
          textColor="#ffffffff"
        />
      </div>
      <MainContent>
        <div className="account-wrapper">
          <img
            src="./profilephoto.png"
            alt="profilephoto"
            className="profile-photo"
          />
          <p className="account-info">Иванов Иван Иванович</p>
          <p className="account-info">01.01.2001</p>
          <p className="account-info">ID: 123456789</p>
          <p className="account-info">ФГАОУ ВО “СПБПУ им. Петра Великого”</p>
          <p className="account-info">
            Институт птичьих перьев и змеиной чешуи
          </p>
          <p className="account-info warnings">Выговоры: 0</p>

          <div className="account-rectangle">
            <p className="contact-title">Контактные данные:</p>

            <label className="contact-label">Электронная почта:</label>
            <div className="input-wrapper">
              <input type="email" className="contact-input" />
              <img
                src="./accounteditpen.svg"
                alt="edit"
                className="input-icon"
              />
            </div>

            <label className="contact-label">Номер телефона:</label>
            <div className="input-wrapper">
              <input type="tel" className="contact-input" />
              <img
                src="./accounteditpen.svg"
                alt="edit"
                className="input-icon"
              />
            </div>
          </div>

          <div className="dormitory-block">
            <div className="dormitory-row">
              <p className="dormitory-label">Общежитие №1</p>
              <span className="status-badge paid">Оплачено</span>
            </div>
            <p className="dormitory-room">Комната №666</p>

            <div className="dormitory-row">
              <p className="dormitory-label">Парковка</p>
              <span className="status-badge notfound">Не найдено</span>
            </div>

            <div className="access-blocks">
              <div className="access-item-wrapper">
                <div className="access-item">Пропуск</div>
                <div className="qr-wrapper">
                  <img src="./qr.png" alt="QR" className="qr-image" />
                  <div className="qr-overlay">Открыть QR</div>
                </div>
              </div>
              <div className="access-item-wrapper">
                <div className="access-item">LeaderID</div>
                <div className="qr-wrapper">
                  <img src="./qr.png" alt="QR" className="qr-image" />
                  <div className="qr-overlay">Открыть QR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default Account;
