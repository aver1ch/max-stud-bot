import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import "./University.css";

function University() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Университет"
            backTo="/mainpage"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <Button text="Расписание" onClick={() => navigate("/schedule")} className="university-btn"/>
          <Button text="Оплата обучения" className="university-btn nact"/>
          <Button text="Зачетная книжка" onClick={() => navigate("/gradebook")} className="university-btn" />
          <Button text="Дирекция" onClick={() => navigate("/directorate")} className="university-btn"/>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default University;
