import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;
  const parts = user.fullName.split(" ");

  return (
    <header>
      <div className="header-container">
        <Link to="/account" className="header-profile">
          <span>
            <img
              src="./profilelogo.svg"
              alt="logo"
              className="header-profile-logo"
            />
          </span>
          {parts[1]}
        </Link>
        <img src="./notify2.svg" alt="notify" className="header-notify" />
      </div>
    </header>
  );
}

export default Header;
