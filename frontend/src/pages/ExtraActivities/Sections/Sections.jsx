import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Header from "../../../components/Header/Header";
import MainContent from "../../../components/MainContent/MainContent";
import Footer from "../../../components/Footer/Footer";
import "./Sections.css";

function Sections() {
  const imagesLeft = ["music.png", "theatre.png", "media.png"];
  const imagesRight = ["dj.png", "vocal.png", "dance.png"];

  const sportLeft = ["football.png", "basketball.png", "badbi.png"];
  const sportRight = ["swim.png", "tennis.png", "kachalka.png"];

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

          <h1 className="sections-title">КРУЖКИ</h1>
          <div className="columns-wrapper">
            <div className="column">
              {imagesLeft.map((img, index) => (
                <img
                  key={index}
                  src={`./${img}`}
                  className="section-image"
                  alt={img}
                />
              ))}
            </div>

            <div className="column">
              {imagesRight.map((img, index) => (
                <img
                  key={index}
                  src={`./${img}`}
                  className="section-image"
                  alt={img}
                />
              ))}
            </div>
          </div>
          <h1 className="sections-title">СПОРТ</h1>
          <div className="columns-wrapper">
            <div className="column">
              {sportLeft.map((img, index) => (
                <img
                  key={index}
                  src={`./${img}`}
                  className="section-image"
                  alt={img}
                />
              ))}
            </div>

            <div className="column">
              {sportRight.map((img, index) => (
                <img
                  key={index}
                  src={`./${img}`}
                  className="section-image"
                  alt={img}
                />
              ))}
            </div>
          </div>
        </MainContent>
      </div>

      <Footer />
    </div>
  );
}

export default Sections;
