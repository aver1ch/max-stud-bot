import { useNavigate } from "react-router-dom";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import "./StudyRoom.css";

function StudyRoom() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Общежитие"
            backTo="/mainpage"
            textColor="#274253"
            iconColor="#000000ff"
          />
          <img src="./bigimg.png" alt="main dorm" className="dorm-big-img" />
          <div className="dorm-small-img-row">
            <img src="./smallimg.png" className="dorm-small-img" />
            <img src="./smallimg.png" className="dorm-small-img" />
            <img src="./smallimg.png" className="dorm-small-img" />
            <img src="./smallimg.png" className="dorm-small-img" />
            <img src="./smallimg.png" className="dorm-small-img" />
          </div>
          <p className="dorm-desc">
            <strong>Учебная комната</strong> — это место, где можно собраться с друзьями,
            собраться с друзьями или собраться с друзьями!
          </p>
          <div className="dorm-booking-box">
            <p className="booking-info-text">
              Если ты хочешь, чтобы никто не мешал тебе собираться с друзьями,
              можешь забронировать комнату ниже:
            </p>
            <div className="booking-fields">
              <label className="booking-label">Дата:</label>
              <input type="date" className="booking-input" />

              <label className="booking-label">Время:</label>
              <input type="time" className="booking-input" />

              <div className="booking-btn-wrapper">
                <Button text="Забронировать" />
              </div>
            </div>
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default StudyRoom;
