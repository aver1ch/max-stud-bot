import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-circles">
        <div className="circle small-circle">
          <img src="./message.svg" className="message" alt="msg" />
        </div>
        <div className="circle medium-circle" onClick={scrollToTop}>
          <img src="./newlogo3.svg" alt="logo" />
        </div>
        <div className="circle small-circle">
          <img src="./settings.svg" alt="settings" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
