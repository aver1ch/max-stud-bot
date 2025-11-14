import { useState, useEffect } from "react";
import "./Account.css";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <p>Загрузка данных...</p>;
  }

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
          <p className="account-info">{user.fullName}</p>
          <p className="account-info">{user.dateOfBirth}</p>
          <p className="account-info">ID: {user.id}</p>
          <p className="account-info">{user.university}</p>
          <p className="account-info">{user.faculty}</p>
          <p className="account-info warnings">Выговоры: {user.reprimands}</p>

          <div className="account-rectangle">
            <p className="contact-title">Контактные данные</p>

            <label className="contact-label">Электронная почта:</label>
            <div className="input-wrapper">
              <input
                type="email"
                className="contact-input"
                value={user.login || ""}
                readOnly
              />
              <img
                src="./accounteditpen.svg"
                alt="edit"
                className="input-icon"
              />
            </div>

            <label className="contact-label">Номер телефона:</label>
            <div className="input-wrapper">
              <input
                type="tel"
                className="contact-input"
                value={user.numberOfPhone || ""}
                readOnly
              />
              <img
                src="./accounteditpen.svg"
                alt="edit"
                className="input-icon"
              />
            </div>
          </div>

          <div className="dormitory-block">
            <div className="dormitory-row">
              <p className="dormitory-label">Общежитие №{user.dormId}</p>
              <span className="status-badge paid">
                {user.paymentStatusDorm ? "Оплачено" : "Не оплачено"}
              </span>
            </div>
            <p className="dormitory-room">Комната №{user.roomNumber || " -"}</p>

            <div className="dormitory-row">
              <p className="dormitory-label">Парковка</p>
              <span className={`status-badge ${user.paymentStatusDorm ? "paid" : "notpaid"}`}>
                {user.paymentStatusDorm ? "Оплачено" : "Не оплачено"}
              </span>
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
