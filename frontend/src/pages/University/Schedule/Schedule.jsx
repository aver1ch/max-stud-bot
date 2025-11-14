import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./Schedule.css";

function Schedule() {
  return (
    <div className="app-container">
      <Header />

      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Расписание"
            backTo="/university"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <h2 className="schedule-date">01.01 – 08.01</h2>
          <div className="schedule-block">
            <p className="schedule-day">Понедельник</p>

            <div className="schedule-item">
              <p className="time">10:00–12:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>

            <div className="schedule-item">
              <p className="time">12:00–14:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>

            <div className="schedule-item">
              <p className="time">14:00–16:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>
          </div>

          <div className="schedule-block">
            <p className="schedule-day">Понедельник</p>

            <div className="schedule-item">
              <p className="time">10:00–12:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>

            <div className="schedule-item">
              <p className="time">12:00–14:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>

            <div className="schedule-item">
              <p className="time">14:00–16:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>
          </div>

          <div className="schedule-block">
            <p className="schedule-day">Понедельник</p>

            <div className="schedule-item">
              <p className="time">10:00–12:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>

            <div className="schedule-item">
              <p className="time">12:00–14:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>

            <div className="schedule-item">
              <p className="time">14:00–16:00</p>
              <p className="lesson">Математика</p>
              <p className="teacher">Сидоров Николай Петрович</p>
            </div>
          </div>
        </MainContent>
      </div>

      <Footer />
    </div>
  );
}

export default Schedule;
