import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import "./Dormitory.css";

function Dormitory() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Общежитие"
            backTo="/mainpage"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <Button text="Общая информация" className="dormitory-btn" onClick={() => navigate("/maininfo")}/>
          <Button text="Прачечная" className="dormitory-btn"/>
          <Button text="Учебная комната" className="dormitory-btn"/>
          <Button text="Оплата общежития" className="dormitory-btn"/>
          <Button text="Оплата парковки" className="dormitory-btn"/>
          <Button text="Вызов мастера" className="dormitory-btn"/>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Dormitory;
