import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./MainInfo.css";

function MainInfo() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Общая информация"
            backTo="/dormitory"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <div className="info-center">
            <h2 className="dorm-title">1 общежитие</h2>
            <img src="./domscheme.png" alt="scheme" className="dorm-scheme" />
            <div className="floor-header">
              <h3 className="floor-title">1 этаж</h3>
              <img src="./dropsp.svg" alt="drop" className="floor-icon" />
            </div>
            <div className="floor-grid">
              <div className="floor-column">
                <p className="floor-text">Вахта</p>
                <p className="floor-text">Кабинет коменданта</p>
                <p className="floor-text">Паспортный стол</p>
                <p className="floor-text">Прачечная</p>
                <p className="floor-text">Учебная комната</p>
              </div>
              <div className="floor-column">
                <p className="floor-text">Женский душ</p>
                <p className="floor-text">Мужской душ</p>
                <p className="floor-text">Кухня</p>
                <p className="floor-text">Туалет</p>
                <p className="floor-text">Пожарная лестница</p>
              </div>
            </div>
            <h3 className="eat-title">Где покушать?</h3>
            <div className="eat-block">
              <p className="eat-text">Солнечный день</p>
              <p className="eat-text">Лесной пр-т 65к1, вход со двора</p>
              <p className="eat-text">5 минут пешком</p>
            </div>
            <div className="eat-block">
              <p className="eat-text">Солнечный день</p>
              <p className="eat-text">Лесной пр-т 65к1, вход со двора</p>
              <p className="eat-text">5 минут пешком</p>
            </div>
            <div className="eat-block">
              <p className="eat-text">Солнечный день</p>
              <p className="eat-text">Лесной пр-т 65к1, вход со двора</p>
              <p className="eat-text">5 минут пешком</p>
            </div>
            <h2 className="section-title">Транспорт</h2>

            <div className="transport-grid">
              {[
                { number: "181", icon: "./bus.svg" },
                { number: "2", icon: "./bus.svg" },
                { number: "50", icon: "./bus.svg" },
                { number: "15", icon: "./bus.svg" },
                { number: "45", icon: "./bus.svg" },
                { number: "42", icon: "./bus.svg" },
                { number: "7", icon: "./bus.svg" },
                { number: "12", icon: "./bus.svg" },
                { number: "22", icon: "./bus.svg" },
              ].map((item, index) => (
                <div key={index} className="transport-card">
                  <img src={item.icon} alt="bus" className="transport-icon" />
                  <span className="transport-number">{item.number}</span>
                </div>
              ))}
            </div>
          </div>
        </MainContent>
      </div>

      <Footer />
    </div>
  );
}

export default MainInfo;
