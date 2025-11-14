import { useState } from "react";
import HeaderNav from "../../../../components/HeaderNav/HeaderNav";
import Header from "../../../../components/Header/Header";
import MainContent from "../../../../components/MainContent/MainContent";
import Footer from "../../../../components/Footer/Footer";
import Button from "../../../../components/Button/Button";
import "./Washing.css";

function Washing() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [machine, setMachine] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const [machineQueue, setMachineQueue] = useState({
    1: [
      { name: "Иванов Иван", date: "2025-11-12", time: "10:00" },
      { name: "Петров Петр", date: "2025-11-12", time: "12:00" },
    ],
    2: [
      { name: "Андреева Мария", date: "2025-11-12", time: "09:00" },
      { name: "Смирнов Кирилл", date: "2025-11-13", time: "11:30" },
    ],
    3: [
      { name: "Егорова Ксения", date: "2025-11-12", time: "08:00" },
    ],
  });

  const handleBooking = () => {
    if (!machine) return;

    const queue = machineQueue[machine] || [];
    const isConflict = queue.some(
      (entry) => entry.date === date && entry.time === time
    );

    if (isConflict) {
      setError("На это время уже есть запись. Выберите другое время.");
      setConfirmed(false);
      return;
    }

    setMachineQueue((prev) => ({
      ...prev,
      [machine]: [
        ...(prev[machine] || []),
        { name: "Вы", date, time },
      ],
    }));

    setConfirmed(true);
    setError("");
  };

  const selectedQueue =
    machine && date
      ? (machineQueue[machine] || [])
          .filter((entry) => entry.date === date)
          .sort((a, b) => {
            const [aH, aM] = a.time.split(":").map(Number);
            const [bH, bM] = b.time.split(":").map(Number);
            return aH * 60 + aM - (bH * 60 + bM);
          })
      : [];

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Стирка"
            backTo="/laundry"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <div className="washing-container">
            <h2 className="washing-title">Выбор даты:</h2>
            <input
              type="date"
              className="washing-input"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setConfirmed(false);
                setError("");
              }}
            />
            {date && (
              <>
                <h2 className="washing-title">Выбор времени:</h2>
                <input
                  type="time"
                  className="washing-input"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    setConfirmed(false);
                    setError("");
                  }}
                />
              </>
            )}
            {date && time && (
              <>
                <h2 className="washing-title">Номер машинки:</h2>
                <input
                  type="number"
                  className="washing-input"
                  placeholder="Введите номер машинки"
                  value={machine}
                  onChange={(e) => {
                    setMachine(e.target.value);
                    setConfirmed(false);
                    setError("");
                  }}
                />
              </>
            )}
            {date && time && machine && (
              <Button text="Забронировать" onClick={handleBooking} />
            )}

            {confirmed && (
              <p className="washing-confirmation">
                ✅ Машинка №{machine} успешно забронирована на {date} в {time}.
              </p>
            )}

            {error && (
              <p className="washing-error">
                ⚠️ {error}
              </p>
            )}

            {machine && date && (
              <div className="queue-container">
                <h3 className="queue-title">
                  Очередь на машинку №{machine}:
                </h3>
                {selectedQueue.length > 0 ? (
                  <ul className="queue-list">
                    {selectedQueue.map((entry, index) => (
                      <li key={index} className="queue-item">
                        <p className="queue-name">{entry.name}</p>
                        <p className="queue-details">{entry.time}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="queue-empty">Очереди нет</p>
                )}
              </div>
            )}
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Washing;
