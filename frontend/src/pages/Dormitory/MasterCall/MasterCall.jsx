// MasterCall.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import "./MasterCall.css";

function MasterCall() {
  const navigate = useNavigate();

  const issuesList = [
    "Дверь",
    "Шкаф",
    "Кровать",
    "Тумба",
    "Холодильник",
    "Люстра",
    "Батарея",
    "Окно",
    "Другое",
  ];

  const [selectedIssues, setSelectedIssues] = useState([]);
  const [otherText, setOtherText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const toggleIssue = (issue) => {
    if (issue === "Другое") {
      setSelectedIssues(["Другое"]);
      setOtherText("");
      return;
    }

    // если нажали обычный пункт, а "Другое" выбрано → убираем "Другое"
    if (selectedIssues.includes("Другое")) {
      setSelectedIssues([issue]);
      return;
    }

    // обычный toggle
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter((i) => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  const handleCallMaster = () => {
    let issuesToSend;

    if (selectedIssues.includes("Другое")) {
      issuesToSend = [otherText || "Не указано"];
    } else {
      issuesToSend = selectedIssues;
    }

    const data = {
      issues: issuesToSend,
      date: date || "Не выбрано",
      time: time || "Не выбрано",
      room: roomNumber || "Не указана",
    };

    console.clear();
    console.log("===== ЗАЯВКА НА ВЫЗОВ МАСТЕРА =====");
    console.log("Проблемы:", data.issues);
    console.log("Дата:", data.date);
    console.log("Время:", data.time);
    console.log("Комната:", data.room);
    console.log("===== END =====");

    alert("Мастер вызван!");
  };
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Общежитие"
            backTo="/mainpage"
            textColor="#000000ff"
            iconColor="#000000ff"
          />
          <h2 className="mastercall-title">Что сломалось?</h2>
          <div className="issues-container">
            {issuesList.map((issue) => (
              <button
                key={issue}
                className={`issue-btn ${
                  selectedIssues.includes(issue) ? "selected" : ""
                }`}
                onClick={() => toggleIssue(issue)}
              >
                {issue}
              </button>
            ))}
          </div>
          {selectedIssues.includes("Другое") && (
            <input
              type="text"
              placeholder="Опишите что сломалось"
              className="other-input"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
            />
          )}
          {selectedIssues.length > 0 && (
            <div className="datetime-container">
              <label className="input-label">Дата:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label className="input-label">Время:</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          )}
          {selectedIssues.length > 0 && (
            <div className="datetime-container">
              <label className="input-label">Номер комнаты:</label>
              <input
                type="number"
                placeholder="Номер комнаты"
                className="room-input"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </div>
          )}
          {selectedIssues.length > 0 && (
            <div className="call-btn-wrapper">
              <Button text="Вызвать мастера" onClick={handleCallMaster} />
            </div>
          )}
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default MasterCall;
