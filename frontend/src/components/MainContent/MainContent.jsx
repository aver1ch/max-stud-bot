import React from "react";
import Button from "../../components/Button/Button";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <div className="buttons-row">
        <Button text="Университет" />
        <Button text="Общежитие" />
        <Button text="Внеучебная деятельность" />
        <h2>Актуальные мероприятия</h2>
      </div>
    </div>
  );
}

export default MainContent;
