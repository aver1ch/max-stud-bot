import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="!#" className="header-profile">
          <span>
            <img
              src="./profilelogo.svg"
              alt="logo"
              className="header-profile-logo"
            />
          </span>
          Владимир
        </a>
        <img src="./notify.svg" alt="notify" className="header-notify" />
      </div>
    </header>
  );
}

export default Header;
