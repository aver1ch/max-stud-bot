import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import "./Events.css";

function Events() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Мероприятия"
            backTo="/extraactivities"
            textColor="#000000ff"
            iconColor="#000000ff"
          />

          <div className="event-card">
            <img src="./bigimg.png" alt="event" className="event-image" />
            <h3 className="event-title">Всемирный День Тенниса</h3>
            <p className="event-location">
              г. Санкт-Петербург, Спорткомплекс “Политехник”, ул. Политехническая, д. 27, главный вход
            </p>
            <Button text="Узнать больше..." className="event-btn" />
          </div>
          <div className="event-card">
            <img src="./bigimg.png" alt="event" className="event-image" />
            <h3 className="event-title">Всемирный День Тенниса</h3>
            <p className="event-location">
              г. Санкт-Петербург, Спорткомплекс “Политехник”, ул. Политехническая, д. 27, главный вход
            </p>
            <Button text="Узнать больше..." className="event-btn" />
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
