import { useState } from "react";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./MainInfo.css";

function MainInfo() {
  const [selectedFloor, setSelectedFloor] = useState(1); // первый этаж по умолчанию

  const floorData = {
    1: [
      [
        "Вахта",
        "Кабинет коменданта",
        "Паспортный стол",
        "Прачечная",
        "Учебная комната",
      ],
      ["Женский душ", "Мужской душ", "Кухня", "Туалет", "Пожарная лестница"],
    ],
    2: [
      ["Комнаты 203-216", "Комнаты 220-223", "Комнаты 226-228"],
      ["Женский туалет", "Мужской туалет", "Умывальная комната", "Кухня"],
    ],
    3: [
      ["Комнаты 303-316", "Комнаты 325-333"],
      ["Умывальная комната", "Женский туалет", "Мужской туалет", "Кухня"],
    ],
    4: [
      ["Комнаты 403-416", "Комнаты 425-433"],
      ["Умывальная комната", "Женский туалет", "Мужской туалет", "Кухня"],
    ],
    5: [
      ["Комнаты 503-516", "Комнаты 525-533"],
      ["Умывальная комната", "Женский туалет", "Мужской туалет", "Кухня"],
    ],
  };

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
            <div className="floor-select-wrapper">
              <select
                className="floor-select"
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(Number(e.target.value))}
              >
                <option value={1}>1 этаж</option>
                <option value={2}>2 этаж</option>
                <option value={3}>3 этаж</option>
                <option value={4}>4 этаж</option>
                <option value={5}>5 этаж</option>
              </select>
            </div>

            {/* Сетка этажей */}
            <div className="floor-grid">
              {floorData[selectedFloor].map((column, colIndex) => (
                <div
                  key={`floor${selectedFloor}-${colIndex}`}
                  className="floor-column"
                >
                  {column.map((text, i) => (
                    <p key={i} className="floor-text">
                      {text}
                    </p>
                  ))}
                </div>
              ))}
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
