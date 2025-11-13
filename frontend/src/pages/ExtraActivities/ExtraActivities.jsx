import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./ExtraActivities.css";

function ExtraActivities() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Внеучебная деятельность"
            backTo="/mainpage"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <Button text="Мероприятия" onClick={() => navigate("/events")} />
          <Button text="Секции" onClick={() => navigate("/sections")} />
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default ExtraActivities;
