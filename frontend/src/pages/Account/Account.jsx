import "./Account.css";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  return (
    <>
      <div className="account-container">
        <img
          src="./arrowback.svg"
          alt="back"
          className="back-arrow"
          onClick={() => navigate("/mainpage")}
        />
        <p>Мои данные</p>
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
          <div className="mini-blocks">
            <div className="mini-item">
              <div className="mini-rectangle">
                <img
                  src="./calendar.svg"
                  className="mini-icon"
                  alt="calendar"
                />
              </div>
              <p className="mini-label">Календарь</p>
            </div>

            <div className="mini-item">
              <div className="mini-rectangle">
                <img src="./paperclip.svg" className="mini-icon" alt="docs" />
              </div>
              <p className="mini-label">Документы</p>
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default Account;
