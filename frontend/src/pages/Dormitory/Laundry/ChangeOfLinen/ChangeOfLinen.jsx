import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../../../components/HeaderNav/HeaderNav";
import Header from "../../../../components/Header/Header";
import MainContent from "../../../../components/MainContent/MainContent";
import Footer from "../../../../components/Footer/Footer";
import Button from "../../../../components/Button/Button";
import "./ChangeOfLinen.css";

function ChangeOfLinen() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showBox, setShowBox] = useState(false);

  const items = [
    "Наволочка",
    "Пододеяльник",
    "Простыня",
    "Одеяло",
    "Подушка",
    "Покрывало",
    "Полотенце",
  ];

  const handleSelect = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleChoose = () => {
    setShowBox(true);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Обмен постельного белья"
            backTo="/laundry"
            textColor="#000000ff"
            iconColor="#000000ff"
          />

          <h2 className="linen-title">Я хочу обменять:</h2>

          <div className="linen-options">
            {items.map((item) => (
              <label key={item} className="linen-option">
                <input
                  type="checkbox"
                  className="linen-checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleSelect(item)}
                />
                <span className="custom-circle"></span>
                <span className="linen-label-text">{item}</span>
              </label>
            ))}
          </div>

          <Button text="Выбрать" onClick={handleChoose} />

          {showBox && (
            <div className="linen-box">
              <h3 className="linen-box-title">Вы выбрали:</h3>
              <ul className="linen-list">
                {selectedItems.length > 0 ? (
                  selectedItems.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li>Ничего не выбрано</li>
                )}
              </ul>
              <button className="linen-exchange-btn">Обменять</button>
            </div>
          )}
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default ChangeOfLinen;
