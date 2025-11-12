import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../../../components/HeaderNav/HeaderNav";
import Header from "../../../../components/Header/Header";
import MainContent from "../../../../components/MainContent/MainContent";
import Footer from "../../../../components/Footer/Footer";
import Button from "../../../../components/Button/Button";
import "./Dryer.css";

function Dryer() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [machine, setMachine] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleBooking = () => {
    setConfirmed(true);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Сушка"
            backTo="/laundry"
            textColor="#000000ff"
            iconColor="#000000ff"
          />

          <div className="dryer-container">
            <h2 className="dryer-title">Выбор даты:</h2>
            <input
              type="date"
              className="dryer-input"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setConfirmed(false);
              }}
            />

            {date && (
              <>
                <h2 className="dryer-title">Выбор времени:</h2>
                <input
                  type="time"
                  className="dryer-input"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    setConfirmed(false);
                  }}
                />
              </>
            )}

            {date && time && (
              <>
                <h2 className="dryer-title">Номер сушильной машинки:</h2>
                <input
                  type="number"
                  min="1"
                  className="dryer-input"
                  placeholder="Введите номер сушильной машинки"
                  value={machine}
                  onChange={(e) => {
                    setMachine(e.target.value);
                    setConfirmed(false);
                  }}
                />
              </>
            )}

            {date && time && machine && (
              <Button text="Забронировать" onClick={handleBooking} />
            )}

            {confirmed && (
              <p className="dryer-confirmation">
                ✅ Сушильная машинка №{machine} успешно забронирована на {date} в {time}.
              </p>
            )}
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Dryer;
