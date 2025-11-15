import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import { useLaundry } from "../../hooks/useLaundry.js";
import { useDryer } from "../../hooks/useDryer.js";

import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState(new Date());
  const [modalBooking, setModalBooking] = useState(null);
  const [userId, setUserId] = useState(null);

  const { queue: laundryQueue, loading: laundryLoading } = useLaundry();
  const { queue: dryerQueue, loading: dryerLoading } = useDryer();

  // Получаем ID пользователя из localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        setUserId(JSON.parse(user).id);
      } catch {}
    }
  }, []);

  // --- КОРРЕКТНОЕ форматирование даты ---
  // yyyy-mm-dd БЕЗ таймзоны
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  // Формируем личные брони
  const bookings = useMemo(() => {
    if (!userId) return [];
    const result = [];

    Object.entries(laundryQueue).forEach(([machine, list]) => {
      list.forEach(b => {
        if (b.student_id === userId) {
          result.push({
            ...b,
            type: "Стирка",
            place: `Машинка №${machine}`
          });
        }
      });
    });

    Object.entries(dryerQueue).forEach(([machine, list]) => {
      list.forEach(b => {
        if (b.student_id === userId) {
          result.push({
            ...b,
            type: "Сушка",
            place: `Сушилка №${machine}`
          });
        }
      });
    });

    return result;
  }, [laundryQueue, dryerQueue, userId]);

  const handleDateClick = (date) => {
    const formatted = formatDate(date);
    const selected = bookings.filter((b) => b.date === formatted);
    setModalBooking(selected.length > 0 ? selected : null);
  };

  const tileContent = ({ date }) => {
    const formatted = formatDate(date);
    const hasBooking = bookings.some((b) => b.date === formatted);
    return hasBooking ? <span className="booking-dot" /> : null;
  };

  if (laundryLoading || dryerLoading) return <p>Загрузка...</p>;

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <div className="btn-wrapper">
            <Button text="Университет" className="mp-btn" onClick={() => navigate("/university")} />
            <Button text="Общежитие" className="mp-btn" onClick={() => navigate("/dormitory")} />
            <Button text="Внеучебная деятельность" className="mp-btn" onClick={() => navigate("/extraactivities")} />
          </div>

          <div className="calendar-container">
            <Calendar
              onChange={(date) => {
                setValue(date);
                handleDateClick(date);
              }}
              value={value}
              tileContent={tileContent}
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
                <button className="modal-close-btn" onClick={() => setModalBooking(null)}>
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