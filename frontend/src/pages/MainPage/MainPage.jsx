import React from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

function MainPage() {
  const buttons = [
    { text: "Университет" },
    { text: "Общежитие" },
    { text: "Внеучебная деятельность" },
  ];

  return (
    <>
      <Header />
      <MainContent title="Актуальные мероприятия" buttons={buttons}>
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
      <Footer />
    </>
  );
}

export default MainPage;
