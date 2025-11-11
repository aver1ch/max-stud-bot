import { useNavigate } from "react-router-dom";
import "../../App.css";
//import "./SelectVar.css"
import Button from "../../components/Button/Button";

function SelectVar() {
  const navigate = useNavigate();
  return (
<main>
  <div className="container colored select-buttons">
    <Button
      text="Войти как студент"
      onClick={() => navigate("/login")}
    />
    <Button 
      text="Войти как сотрудник"
      onClick={() => navigate("/login")}
    />
    <Button
      text="Зарегистрироваться"
      onClick={() => navigate("/register")}
    />
  </div>
</main>

  );
}

export default SelectVar;
