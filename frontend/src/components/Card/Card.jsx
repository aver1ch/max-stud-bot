import "./Card.css";

import StudentInfo from "../StudentInfo/StudentInfo";
import NavButtons from "../NavButtons/NavButtons";

function Card() {
  return (
    <div className="card">
      <h1 className="card-title">Информация об обучающемся</h1>
      <StudentInfo />
      <NavButtons />
    </div>
  );
}

export default Card;
