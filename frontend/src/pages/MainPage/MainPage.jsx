import React from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Button from "../../components/Button/Button";

function MainPage() {
  const buttons = [
    { text: "Университет", onClick: () => console.log("Университет") },
    { text: "Общежитие", onClick: () => console.log("Общежитие") },
    { text: "Внеучебная деятельность", onClick: () => console.log("Внеучебная деятельность") },
  ];

  return (
    <>
      <Header />
      <MainContent title="Актуальные мероприятия" buttons={buttons}>
        {/* Прямоугольники с контентом */}
        <div className="main-content-rectangle">
          <img src="./content.png" alt="" />
          <p className="main-content-desc">
            Сегодня в Политехе проводится конкурс на самую красивую тыкву! Приносите свои тыковки...
          </p>
        </div>
        <div className="main-content-rectangle">
          <img src="./content.png" alt="" />
          <p className="main-content-desc">
            Ещё один пример мероприятия.
          </p>
        </div>
      </MainContent>
    </>
  );
}

export default MainPage;
