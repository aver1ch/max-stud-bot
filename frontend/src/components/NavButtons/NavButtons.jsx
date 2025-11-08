import Button from "../Button/Button";
import './NavButtons.css'

function NavButtons() {

  return (
    <nav className="nav">
      <Button>Студенческий клуб</Button>

      <Button>
        Общежитие
      </Button>

      <Button>Расписание</Button>
    </nav>
  );
}

export default NavButtons;