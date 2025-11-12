import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./Sections.css";

function Sections() {
  const sections = [
    "Театр",
    "DJ",
    "Танцы",
    "Музыка",
    "Фото",
    "Видео",
    "Дизайн",
    "Другое",
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="main-content-wrapper">
        <MainContent>
          <HeaderNav
            text="Секции"
            backTo="/extraactivities"
            textColor="#000000ff"
            iconColor="#000000ff"
          />

          <div className="sections-grid">
            {sections.map((section, index) => (
              <div key={index} className="section-square">
                <p className="section-text">{section}</p>
              </div>
            ))}
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default Sections;
