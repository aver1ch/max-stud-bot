import React from "react";
import "./MainContent.css";

function MainContent({ children }) {
  return (
    <div className="main-content">
      <div className="main-center-container">
        {children}
      </div>
    </div>
  );
}

export default MainContent;
