import { useNavigate } from "react-router-dom";
import "./HeaderNav.css";

function HeaderNav({
  text,
  backTo = "/mainpage",
  iconSrc = "./arrowback.svg", // путь к иконке передается пропсом
  textColor = "#fff",
  iconColor = "#fff"
}) {
  const navigate = useNavigate();

  return (
    <div className="header-nav">
      <img
        src={iconSrc} // теперь можно передавать любой путь к изображению
        alt="back"
        className="back-arrow"
        onClick={() => navigate(backTo)}
        style={{ filter: iconColor === "#fff" ? "invert(0)" : "invert(1)" }} // поправил условие
      />
      <p className="nav-text" style={{ color: textColor }}>
        {text}
      </p>
    </div>
  );
}

export default HeaderNav;
