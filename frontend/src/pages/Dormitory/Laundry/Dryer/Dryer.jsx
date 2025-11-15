import { useState } from "react";
import HeaderNav from "../../../../components/HeaderNav/HeaderNav";
import Header from "../../../../components/Header/Header";
import MainContent from "../../../../components/MainContent/MainContent";
import Footer from "../../../../components/Footer/Footer";
import Button from "../../../../components/Button/Button";
import { useDryer } from "../../../../hooks/useDryer";
import "./Dryer.css";

function getCurrentStudentId() {
  const user = localStorage.getItem("user");
  if (!user) return null;
  try {
    return JSON.parse(user).id;
  } catch {
    return null;
  }
}

function Dryer() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [machine, setMachine] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const { queue, loading, addBookingAPI } = useDryer();

  const handleBooking = async () => {
    if (!machine || !date || !time) return;

    const machineQueue = queue[machine] || [];
    const conflict = machineQueue.some(b => b.date === date && b.time === time);
    if (conflict) {
      setError("На это время уже есть запись.");
      setConfirmed(false);
      return;
    }

    try {
      const studentId = getCurrentStudentId();
      if (!studentId) {
        setError("Не удалось определить пользователя");
        return;
      }
      
      await addBookingAPI({
        student_id: studentId,
        start_time: `${date} ${time}:00`,
        end_time: `${date} ${time}:00`,
        machine: Number(machine),
      });
      setConfirmed(true);
      setError("");
    } catch {
      setError("Ошибка при бронировании.");
      setConfirmed(false);
    }
  };

  const selectedQueue = machine && date
    ? (queue[machine] || []).filter(b => b.date === date).sort((a,b) => {
        const [aH,aM] = a.time.split(":").map(Number);
        const [bH,bM] = b.time.split(":").map(Number);
        return aH*60 + aM - (bH*60 + bM);
      })
    : [];

  if (loading) return <p>Загрузка...</p>;

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
            <input type="date" className="dryer-input" value={date} onChange={e => { setDate(e.target.value); setConfirmed(false); setError(""); }} />
            {date && <>
              <h2 className="dryer-title">Выбор времени:</h2>
              <input type="time" className="dryer-input" value={time} onChange={e => { setTime(e.target.value); setConfirmed(false); setError(""); }} />
            </>}
            {date && time && <>
              <h2 className="dryer-title">Номер сушильной машинки:</h2>
              <input type="number" min="1" className="dryer-input" placeholder="Введите номер сушильной машинки" value={machine} onChange={e => { setMachine(e.target.value); setConfirmed(false); setError(""); }} />
            </>}
            {date && time && machine && <Button text="Забронировать" onClick={handleBooking} />}
            {confirmed && <p className="dryer-confirmation">✅ Сушильная машинка №{machine} успешно забронирована на {date} в {time}.</p>}
            {error && <p className="dryer-error">⚠️ {error}</p>}
            {machine && date && <div className="queue-container">
              <h3 className="queue-title">Очередь на сушильную машинку №{machine}:</h3>
              {selectedQueue.length > 0 ? <ul className="queue-list">
                {selectedQueue.map((entry, index) => <li key={index} className="queue-item">
                  <p className="queue-name">{entry.name}</p>
                  <p className="queue-details">{entry.time}</p>
                </li>)}
              </ul> : <p className="queue-empty">Очереди нет</p>}
            </div>}
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Dryer;
