import React from "react";
import "./MainContent.css";

function MainContent({ title, buttons = [], children }) {
  return (
    <div className="main-content">
      <div className="buttons-row">
        {/* Кнопки, если переданы */}
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`global-btn main-content-btn`}
            onClick={btn.onClick}
          >
            {btn.text}
          </button>
        ))}

        {/* Заголовок, если передан */}
        {title && <h2 className="main-content-title">{title}</h2>}

        {/* Любой дополнительный контент через children */}
        {children}
      </div>
    </div>
  );
}

export default MainContent;
