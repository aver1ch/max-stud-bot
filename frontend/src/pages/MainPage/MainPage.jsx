import { useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MainPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState(new Date());
  const [bookings, setBookings] = useState([
    { date: "2025-11-15", type: "Стирка", time: "10:00", place: "Машинка №1" },
    { date: "2025-11-15", type: "Сушка", time: "12:00", place: "Машинка №2" },
    {
      date: "2025-11-18",
      type: "Учебная комната",
      time: "14:00",
      place: "Комната 205",
    },
  ]);

  const [modalBooking, setModalBooking] = useState(null);

  const handleDateClick = (date) => {
    const formatted = date.toISOString().split("T")[0];
    const bookingList = bookings.filter((b) => b.date === formatted);
    setModalBooking(bookingList.length > 0 ? bookingList : null);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <div className="btn-wrapper">
            <Button
              text="Университет"
              className="mp-btn"
              onClick={() => navigate("/university")}
            />
            <Button
              text="Общежитие"
              className="mp-btn"
              onClick={() => navigate("/dormitory")}
            />
            <Button
              text="Внеучебная деятельность"
              className="mp-btn"
              onClick={() => navigate("/extraactivities")}
            />
          </div>
          <div className="calendar-container">
            <Calendar
              onChange={(date) => {
                setValue(date);
                handleDateClick(date);
              }}
              value={value}
              tileContent={({ date }) => {
                const formatted = date.toISOString().split("T")[0];
                const booking = bookings.find((b) => b.date === formatted);
                return booking ? (
                  <p className="booking-dot" title={booking.type}>
                    ●
                  </p>
                ) : null;
              }}
            />
          </div>

          {modalBooking && (
            <div className="booking-modal">
              <div className="booking-modal-content">
                {modalBooking.map((b, index) => (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <h3>{b.type}</h3>
                    <p>Дата: {b.date}</p>
                    <p>Время: {b.time}</p>
                    <p>Место: {b.place}</p>
                  </div>
                ))}
                <button
                  className="modal-close-btn"
                  onClick={() => setModalBooking(null)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}

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
