import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import './MainPage.css'

function MainPage() {
  return (
    <>
      <Header />
      <MainContent>
        <Button text="Университет" className="mp-btn"/>
        <Button text="Общежитие" className="mp-btn"/>
        <Button text="Внеучебная деятельность" className="mp-btn"/>

        <h2 className="main-content-title">Актуальные мероприятия</h2>
        <div className="main-content-rectangle">
          <img src="./content.png" alt="" />
          <p className="main-content-desc">
            Сегодня в Политехе проводится конкурс на самую красивую тыкву! Приносите свои тыковки...
          </p>
        </div>
        <div className="main-content-rectangle">
          <img src="./content.png" alt="" />
          <p className="main-content-desc">
            Ещё один пример мероприятия.
          </p>
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default MainPage;
