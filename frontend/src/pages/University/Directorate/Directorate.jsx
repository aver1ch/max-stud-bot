import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import "./Directorate.css";

function Directorate() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Дирекция"
            backTo="/university"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <div className="directorate-box primary-box">
            <div className="directorate-content">
              <div className="directorate-photo"></div>
              <div className="directorate-text white-text">
                <p className="d-name">Петров Петр</p>
                <p className="d-name">Петрович</p>
                <p className="d-section-title">Занимаемые должности:</p>
                <p className="d-info">директор института</p>
                <p className="d-info">профессор</p>
                <p className="d-section-title">Ученые степени:</p>
                <p className="d-info">доктор магических наук</p>
                <p className="d-section-title">Ученое звание:</p>
                <p className="d-info">доцент</p>
              </div>
            </div>
            <div className="directorate-btn-wrapper">
              <Button text="Связаться" />
            </div>
          </div>
          <div className="directorate-box secondary-box">
            <div className="directorate-content">
              <div className="directorate-photo"></div>
              <div className="directorate-text white-text">
                <p className="d-name">Иванов Иван</p>
                <p className="d-name">Иванович</p>
                <p className="d-section-title">Занимаемые должности:</p>
                <p className="d-info">заместитель директора</p>
                <p className="d-section-title">Ученые степени:</p>
                <p className="d-info">кандидат наук</p>
                <p className="d-section-title">Ученое звание:</p>
                <p className="d-info">доцент</p>
              </div>
            </div>
            <div className="directorate-btn-wrapper">
              <Button text="Связаться" />
            </div>
          </div>
          <div className="directorate-box secondary-box">
            <div className="directorate-content">
              <div className="directorate-photo"></div>

              <div className="directorate-text white-text">
                <p className="d-name">Сидоров Сидор</p>
                <p className="d-name">Сидорович</p>
                <p className="d-section-title">Занимаемые должности:</p>
                <p className="d-info">старший преподаватель</p>
                <p className="d-section-title">Ученые степени:</p>
                <p className="d-info">магистр наук</p>
                <p className="d-section-title">Ученое звание:</p>
                <p className="d-info">преподаватель</p>
              </div>
            </div>
            <div className="directorate-btn-wrapper">
              <Button text="Подробнее" />
            </div>
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Directorate;
