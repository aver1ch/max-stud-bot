import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-circles">
        <div className="circle small-circle">
          <img src="./settings.svg" alt="settings" />
        </div>

        <div className="circle medium-circle">
          <img src="./logo.svg" alt="logo" />
        </div>

        <div className="circle small-circle">
          <img src="./settings.svg" alt="settings" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
