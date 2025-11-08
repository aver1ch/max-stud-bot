import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./NavButtons.css";

function NavButtons() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Button>Студенческий клуб</Button>

      <Button onClick={() => navigate("/login")}>Общежитие</Button>

      <Button>Расписание</Button>
    </nav>
  );
}

export default NavButtons;
