import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Главная"
            backTo="/"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <Button
            text="Университет"
            className="mp-btn"
            onClick={() => navigate("/university")}
          />
          <Button text="Общежитие" className="mp-btn" onClick={() => navigate("/dormitory")}/>
          <Button text="Внеучебная деятельность" className="mp-btn" />

          <h2 className="main-content-title">Актуальные мероприятия</h2>
          <div className="main-content-rectangle">
            <img src="./promoimage.png" alt="promo1" className="promoimage" />
            <p className="main-content-desc">
              Сегодня в Политехе проводится конкурс на самую красивую тыкву!
              Приносите свои тыковки...
            </p>
          </div>
          <div className="main-content-rectangle">
            <img src="./content.png" alt="" />
            <p className="main-content-desc">Ещё один пример мероприятия.</p>
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
